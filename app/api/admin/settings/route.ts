import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const adminPath = path.join(process.cwd(), 'data', 'admin.json');

// GET - Fetch admin settings
export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));
    // Don't send password to frontend
    const { password, ...safeData } = data;
    return NextResponse.json(safeData);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

// POST - Update admin settings (name and username only)
export async function POST(request: NextRequest) {
  try {
    const { name, username } = await request.json();
    
    if (!name || !username) {
      return NextResponse.json(
        { message: 'Name and username are required' },
        { status: 400 }
      );
    }

    // Read current data
    const currentData = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));
    
    // Update only name and username, keep password
    const updatedData = {
      ...currentData,
      name,
      username,
    };

    fs.writeFileSync(adminPath, JSON.stringify(updatedData, null, 2));
    
    return NextResponse.json({ message: 'Settings updated successfully' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to update settings' },
      { status: 500 }
    );
  }
}
