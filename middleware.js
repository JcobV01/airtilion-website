import { NextResponse } from 'next/server';

export function middleware(req) {
  // Pobierz aktualną ścieżkę z URL-a
  const urlPath = req.nextUrl.pathname;

  // Ustaw nagłówek z aktualną ścieżką
  const response = NextResponse.next();
  response.headers.set('x-current-path', urlPath);

  const array = new Uint8Array(16);
  globalThis.crypto.getRandomValues(array);  // Używamy globalThis dla Edge
  const nonce = Buffer.from(array).toString("base64");  // Konwertujemy na base64

  response.headers.set('x-nonce', nonce); // Możesz używać tego w szablonach HTML

  // Ustawienie nagłówków CSP
  response.headers.set('Content-Security-Policy', `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' www.googletagmanager.com www.google-analytics.com code.iconify.com api.iconify.com api.simplesvg.com api.unisvg.com;
    style-src 'self' 'nonce-${nonce}' fonts.googleapis.com code.iconify.com api.iconify.com api.simplesvg.com api.unisvg.com;
    font-src 'self' fonts.gstatic.com data:;
    img-src 'self' airtilion.com code.iconify.com api.iconify.com api.simplesvg.com api.unisvg.com www.google-analytics.com data:;
    connect-src 'self' api.airtilion.com www.google-analytics.com;
  `);

  return response;
}

// Konfiguracja middleware, aby działało na wszystkich stronach
export const config = {
  matcher: '/:path*',
};
