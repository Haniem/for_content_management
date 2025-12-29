export const config = { runtime: 'edge' };

export default async function handler(req) {
  const params = new URLSearchParams({
    cn: 'read',                    // Тип события
    rn: Math.random() * 1000000,   // Уникальный номер
    'page-url': req.headers.get('referer') || 'https://for-content-management.vercel.app/',
    'browser-info': req.headers.get('user-agent') || '',
    'screen-width': '1920',
    'screen-height': '1080'
  });
  
  const url = `https://mc.yandex.ru/watch/106062866?${params}`;
  const response = await fetch(url, { 
    method: 'GET',
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
  });
  
  return new Response('OK: ' + response.status, { status: 200 });
}
