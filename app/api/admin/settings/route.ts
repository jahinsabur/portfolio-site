import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

// GET - Fetch admin settings
export async function GET() {
  try {
    const data = await redis.get('portfolio-admin');
    if (!data) {
      return NextResponse.json(
        { message: 'Admin data not found' },
        { status: 404 }
      );
    }
    // Don't send password to frontend
    const { password, ...safeData } = data as any;
    return NextResponse.json(safeData);
  } catch (error) {
    console.error('Settings fetch error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

// POST - Update admin settings (name and username only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, username } = body;
    
    console.log('Received settings update:', { name, username });
    
    if (!name || !username) {
      return NextResponse.json(
        { message: 'Name and username are required' },
        { status: 400 }
      );
    }

    // Read current data
    const currentData = await redis.get('portfolio-admin') as any;
    if (!currentData) {
      return NextResponse.json(
        { message: 'Admin data not found' },
        { status: 404 }
      );
    }
    
    console.log('Current data:', currentData);
    
    // Update only name and username, keep password
    const updatedData = {
      ...currentData,
      name,
      username,
    };

    console.log('Writing updated data:', updatedData);
    await redis.set('portfolio-admin', updatedData);
    
    return NextResponse.json({ message: 'Settings updated successfully' });
  } catch (error) {
    console.error('Settings update error:', error);
    return NextResponse.json(
      { message: 'Failed to update settings', error: String(error) },
      { status: 500 }
    );
  }
}
