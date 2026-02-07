import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'data', 'content.json');

// Check if we're in production and have KV configured
const isProduction = process.env.NODE_ENV === 'production';
const hasKV = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;

// Lazy load KV/Redis only if available
let redis: any = null;
if (hasKV) {
  try {
    if (process.env.UPSTASH_REDIS_REST_URL) {
      const { Redis } = require('@upstash/redis');
      redis = Redis.fromEnv();
    } else if (process.env.KV_REST_API_URL) {
      const { kv } = require('@vercel/kv');
      redis = kv;
    }
  } catch (error) {
    console.error('Redis/KV not available:', error);
  }
}

// GET - Fetch content
export async function GET() {
  try {
    let content;

    if (isProduction && redis) {
      // Production with Redis/KV: Try to get from database
      content = await redis.get('portfolio-content');
      
      // If no data in Redis yet, try to read from file and migrate
      if (!content) {
        try {
          const fileContent = fs.readFileSync(contentPath, 'utf-8');
          content = JSON.parse(fileContent);
          // Save to Redis for future requests
          await redis.set('portfolio-content', content);
        } catch (fileError) {
          console.error('File read error:', fileError);
          // Return empty structure if no data found
          content = {
            hero: { name: "Your Name", title: "Electronics & Electrical Engineer", subtitle: "", description: "" },
            about: { summary: "", focusAreas: [], highlights: [] },
            projects: [],
            skills: {},
            experience: [],
            sensoreact: { description: "", features: [], websiteUrl: "" },
            contact: { email: "", location: "" },
            links: []
          };
        }
      }
    } else {
      // Development or no Redis: Use file system
      try {
        const fileContent = fs.readFileSync(contentPath, 'utf-8');
        content = JSON.parse(fileContent);
      } catch (fileError) {
        console.error('File read error:', fileError);
        return NextResponse.json(
          { message: 'Content file not found', error: String(fileError) },
          { status: 404 }
        );
      }
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

    if (isProduction && redis) {
      // Production: Save to Redis/KV
      await redis.set('portfolio-content', data);
    } else {
      // Development: Save to file system
      fs.writeFileSync(contentPath, JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ message: 'Content updated successfully', success: true });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { message: 'Failed to update content', error: String(error) },
      { status: 500 }
    );
  }
}
