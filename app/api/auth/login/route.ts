import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const adminPath = path.join(process.cwd(), 'data', 'admin.json');

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    const admin = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));

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
    return NextResponse.json(
      { message: 'Login failed' },
      { status: 500 }
    );
  }
}
