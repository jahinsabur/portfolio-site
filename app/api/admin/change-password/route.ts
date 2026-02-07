import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const adminPath = path.join(process.cwd(), 'data', 'admin.json');

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
    const currentData = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));
    
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

    fs.writeFileSync(adminPath, JSON.stringify(updatedData, null, 2));
    
    return NextResponse.json({ message: 'Password changed successfully' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to change password' },
      { status: 500 }
    );
  }
}
