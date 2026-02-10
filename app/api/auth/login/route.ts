import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    const admin = await redis.get('portfolio-admin') as any;

    if (!admin) {
      return NextResponse.json(
        { message: 'Admin data not found' },
        { status: 500 }
      );
    }

    if (username === admin.username && password === admin.password) {
      const response = NextResponse.json({ success: true });
      response.cookies.set('admin-auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });
      return response;
    }

    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Login failed' },
      { status: 500 }
    );
  }
}
