// Web標準の Response を使うため、NextResponse のインポートを削除します

export const runtime = 'edge';

export async function GET() {
  // Web標準の Response.json() を使用
  return Response.json({
    message: 'Hello from Cloudflare Workers!',
    timestamp: new Date().toISOString(),
  });
}
