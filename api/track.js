export const config = { runtime: 'edge' };

export default async function handler(req) {
  const params = new URLSearchParams({
    'cn': 'read',           // ✅ Обязательный: событие
    'rn': Math.random(),    // ✅ Обязательный: анти-кэш
    'page-url': 'https://for-content-management.vercel.app/',
    'referrer': '',
    'title': 'UnityAid — управление волонтерами'
  });
  
  const url = `https://mc.yandex.ru/watch/106062866?${params}`;
  await fetch(url, { method: 'GET' });
  
  return new Response('OK', { status: 200 });
}
