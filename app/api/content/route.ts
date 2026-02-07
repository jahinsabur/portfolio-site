import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

export async function POST(req: Request) {
  const body = await req.json();

  await redis.set("portfolio-content", body);

  return NextResponse.json({ success: true });
}

export async function GET() {
  const data = await redis.get("portfolio-content");
  return NextResponse.json(data ?? {});
}
