import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

// GET - Fetch content
export async function GET() {
  try {
    const content = await redis.get('portfolio-content');
    
    if (!content) {
      return NextResponse.json(
        { message: 'Content not found. Please run migration script.' },
        { status: 404 }
      );
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch content', error: String(error) },
      { status: 500 }
    );
  }
}

// POST - Update content
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    await redis.set('portfolio-content', data);
    return NextResponse.json({ message: 'Content updated successfully', success: true });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { message: 'Failed to update content', error: String(error) },
      { status: 500 }
    );
  }
}
