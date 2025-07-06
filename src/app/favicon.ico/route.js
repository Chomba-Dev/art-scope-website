import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const logoPath = path.join(process.cwd(), 'public/images/logo.jpg');
    const logoBuffer = await readFile(logoPath);
    
    return new NextResponse(logoBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    // Fallback to a simple favicon
    return new NextResponse(null, { status: 404 });
  }
}
