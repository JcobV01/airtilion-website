import { NextResponse } from 'next/server';

export function middleware(req) {
  // Pobierz aktualną ścieżkę z URL-a
  const urlPath = req.nextUrl.pathname;

  // Ustaw nagłówek z aktualną ścieżką
  const response = NextResponse.next();
  response.headers.set('x-current-path', urlPath);

  return response;
}

// Konfiguracja middleware, aby działało na wszystkich stronach
export const config = {
  matcher: '/:path*',
};
