import { NextResponse } from 'next/server';

// Cloudflare Workers(Edge)で動作させるために必須の設定
export const runtime = 'edge';

export async function GET() {
  return NextResponse.json({
    message: 'Hello from Cloudflare Workers!',
    timestamp: new Date().toISOString(),
  });
}
