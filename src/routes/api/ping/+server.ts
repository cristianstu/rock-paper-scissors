export async function GET() {
  return new Response(JSON.stringify({ ping: 'pong' }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
