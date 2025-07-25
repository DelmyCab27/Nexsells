// /app/blog/api/admin/login/route.js
import { connectToDatabase } from '@/app/blog/utils/db';
import { comparePasswords, generateToken } from '@/app/blog/utils/auth';

export async function POST(request) {
  let email, password;

  try {
    // Detectar el tipo de contenido
    const contentType = request.headers.get('content-type');
    
    if (contentType?.includes('application/json')) {
      // Si es JSON
      const body = await request.json();
      email = body.email;
      password = body.password;
    } else {
      // Si es FormData
      const formData = await request.formData();
      email = formData.get('email');
      password = formData.get('password');
    }

    // Debug - quita esto después de que funcione
    console.log('Datos recibidos:', { email: email ? 'presente' : 'falta', password: password ? 'presente' : 'falta' });

    if (!email || !password) {
      return Response.json({ error: 'Faltan campos' }, { status: 400 });
    }

    const db = await connectToDatabase();
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      console.log('Usuario no encontrado:', email);
      return Response.json({ error: 'Credenciales incorrectas' }, { status: 401 });
    }

    const passwordMatch = await comparePasswords(password, user.password);
    console.log('Password match:', passwordMatch);

    if (!passwordMatch) {
      return Response.json({ error: 'Credenciales incorrectas' }, { status: 401 });
    }

    const token = generateToken(user);

    console.log('Login exitoso, generando respuesta con token');
    
    // Para desarrollo local, quita Secure si no usas HTTPS
    const isProduction = process.env.NODE_ENV === 'production';
    const cookieOptions = `token=${token}; Path=/; HttpOnly; Max-Age=3600; SameSite=Strict${isProduction ? '; Secure' : ''}`;
    
    return new Response(
      JSON.stringify({ success: true, redirect: '/blog/admin/dashboard' }),
      {
        status: 200,
        headers: {
          'Set-Cookie': cookieOptions,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (err) {
    console.error('Error en login:', err);
    return Response.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}