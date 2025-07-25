// /blog/api/admin/check-auth/route.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    
    // Intentar diferentes nombres de cookies
    let token = cookieStore.get('token')
    
    // Log todas las cookies disponibles para debug
    const allCookies = cookieStore.getAll();
    console.log(' All cookies:', allCookies.map(c => c.name));
    
    console.log(' Token found:', !!token);
    console.log(' Token value:', token?.value ? 'EXISTS' : 'MISSING');

    if (!token) {
      console.log(' No token found');
      return NextResponse.json({ isAuthenticated: false });
    }

    // Verificar el token JWT
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    console.log(' Token verified successfully');
    
    return NextResponse.json({ 
      isAuthenticated: true,
      user: decoded 
    });

  } catch (error) {
    console.error(' Error verificando token:', error.message);
    return NextResponse.json({ isAuthenticated: false });
  }
}