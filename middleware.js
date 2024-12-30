import { NextResponse } from 'next/server';

export function middleware(req) {
  // Pobierz aktualną ścieżkę z URL-a
  const urlPath = req.nextUrl.pathname;

  // Tworzymy odpowiedź Next.js
  const response = NextResponse.next();
  
  // Dodajemy nagłówek z aktualną ścieżką
  response.headers.set('x-current-path', urlPath);

  // Generowanie nonce dla CSP
  const array = new Uint8Array(16);
  globalThis.crypto.getRandomValues(array);  // Używamy globalThis dla Edge
  const nonce = Buffer.from(array).toString("base64");  // Konwertujemy na base64

  // Możesz używać tego w szablonach HTML, jeśli chcesz
  response.headers.set('x-nonce', nonce); 

  // Tworzymy Content-Security-Policy z odpowiednimi źródłami
  const csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' www.googletagmanager.com www.google-analytics.com code.iconify.com api.iconify.com api.simplesvg.com api.unisvg.com;
    style-src 'self' 'nonce-${nonce}' fonts.googleapis.com code.iconify.com api.iconify.com api.simplesvg.com api.unisvg.com;
    font-src 'self' fonts.gstatic.com data:;
    img-src 'self' airtilion.com code.iconify.com api.iconify.com api.simplesvg.com api.unisvg.com www.google-analytics.com data:;
    connect-src 'self' api.airtilion.com www.google-analytics.com;
    object-src 'none';
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
  `;

  // Usuwamy nadmiarowe białe znaki (zamiast .trim() zróbmy to za pomocą replace)
  const formattedCSP = csp.replace(/\s{2,}/g, " ").trim();

  // Ustawiamy nagłówek CSP w odpowiedzi
  response.headers.set('Content-Security-Policy', formattedCSP);

  return response;
}

// Konfiguracja middleware dla wszystkich stron
export const config = {
  matcher: '/:path*',
};
