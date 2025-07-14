// app/blog/admin/middleware.js
import { NextResponse } from 'next/server';
import { verifyToken } from '../utils/auth';

export async function authMiddleware(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect('/blog/admin/login');
  }

  try {
    const user = verifyToken(token);
    req.user = user;
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect('/blog/admin/login');
  }
}

export const config = {
  matcher: '/blog/admin/:path*',
};