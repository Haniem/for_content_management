export const config = { runtime: 'edge' };

export default async function handler(req) {
  const url = 'https://mc.yandex.ru/watch/106062866?' + new URLSearchParams({
    'page_url': req.url,
    'clientInfo': req.headers.get('user-agent') || '',
    'browser-info': 'Vercel Edge'
  });
  
  await fetch(url);
  return new Response('OK', { status: 200 });
}
