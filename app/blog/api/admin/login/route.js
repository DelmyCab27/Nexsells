// /app/blog/api/admin/login/route.js
import { connectToDatabase } from '@/app/blog/utils/db';
import { comparePasswords, generateToken } from '@/app/blog/utils/auth';

export async function POST(request) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    return Response.json({ error: 'Faltan campos' }, { status: 400 });
  }

  try {
    const db = await connectToDatabase();
    const user = await db.collection('users').findOne({ email });

    if (!user || !(await comparePasswords(password, user.password))) {
      return Response.json({ error: 'Credenciales incorrectas' }, { status: 401 });
    }

    const token = generateToken(user);

    return new Response(
      JSON.stringify({ success: true, redirect: '/blog/admin/dashboard' }),
      {
        status: 200,
        headers: {
          'Set-Cookie': `token=${token}; Path=/; HttpOnly; Max-Age=3600; Secure; SameSite=Strict`,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (err) {
    console.error('Error en login:', err);
    return Response.json({ error: 'Servidor roto' }, { status: 500 });
  }
}
