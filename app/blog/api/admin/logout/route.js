import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete('token'); // ✅ borra la cookie correctamente

  return Response.json({ success: true });
}
// Esta función maneja la solicitud POST para cerrar sesión
// Elimina la cookie 'token' del almacenamiento de cookies