import { NextResponse } from 'next/server';

export function middleware(req) {
  // Pobierz aktualną ścieżkę z URL-a
  const urlPath = req.nextUrl.pathname;

  // Ustaw nagłówek z aktualną ścieżką
  const response = NextResponse.next();
  response.headers.set('x-current-path', urlPath);

  //nagłówki dla CSP

  const nonce = crypto.randomBytes(16).toString("base64");
  req.headers.set("Content-Security-Policy", `
    default-src 'self';
    script-src 'self' 'unsafe-eval';
    style-src 'self' 'nonce-${nonce}';
    font-src 'self' fonts.gstatic.com;
    img-src 'self' data:;
    connect-src 'self';
    object-src 'none';
    base-uri 'self';
  `.replace(/\s{2,}/g, " ").trim());

  return response;
}

// Konfiguracja middleware, aby działało na wszystkich stronach
export const config = {
  matcher: '/:path*',
};
