import { NextResponse } from 'next/server';

export async function authMiddleware(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect('/blog/admin/login');
  }

  try {
    // Decodifica el token Base64
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    req.user = decoded;
    return NextResponse.next();
  } catch (error) {
    console.error('Token inválido:', error.message);
    return NextResponse.redirect('/blog/admin/login');
  }
}