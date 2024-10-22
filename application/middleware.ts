import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  console.log("Middleware is running for", req.nextUrl.pathname); // Add this log
  return NextResponse.next();
}
// export { default } from 'next-auth/middleware'

export const config = { matcher: [
    '/dashboard/:path*'
]}