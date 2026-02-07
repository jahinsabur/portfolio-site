import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const auth = request.cookies.get('admin-auth');
  return NextResponse.json({ authenticated: auth?.value === 'true' });
}
