import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'data', 'content.json');

// GET - Fetch content
export async function GET() {
  try {
    const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

// POST - Update content
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    fs.writeFileSync(contentPath, JSON.stringify(data, null, 2));
    return NextResponse.json({ message: 'Content updated successfully' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to update content' },
      { status: 500 }
    );
  }
}
