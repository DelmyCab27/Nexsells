// /app/blog/api/admin/logout/route.js
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete('token'); // ✅ borra la cookie correctamente

  return Response.json({ success: true });
}
