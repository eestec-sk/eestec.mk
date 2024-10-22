import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {

  const token = await getToken({ req, secret });

  // If logged in - shouldn't be able to access those pages
  if (token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/register', '/forgotten-password'],
};