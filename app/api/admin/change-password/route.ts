import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

// POST - Change password
export async function POST(request: NextRequest) {
  try {
    const { currentPassword, newPassword } = await request.json();
    
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { message: 'Current and new password are required' },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters' },
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
    
    // Verify current password
    if (currentData.password !== currentPassword) {
      return NextResponse.json(
        { message: 'Current password is incorrect' },
        { status: 401 }
      );
    }

    // Update password
    const updatedData = {
      ...currentData,
      password: newPassword,
    };

    await redis.set('portfolio-admin', updatedData);
    
    return NextResponse.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Password change error:', error);
    return NextResponse.json(
      { message: 'Failed to change password' },
      { status: 500 }
    );
  }
}
