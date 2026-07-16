export async function GET() {
  // Web標準の Response.json() を使用
  return Response.json({
    message: 'Hello from Cloudflare Workers!',
    timestamp: new Date().toISOString(),
  });
}
