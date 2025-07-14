import { cookies } from 'next/headers';
import { verifyToken } from '@/app/blog/utils/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies(); // ✅ espera correctamente
  const token = cookieStore.get('token')?.value;

  if (!token) redirect('/blog/login');

  try {
    verifyToken(token); // ✅ lanza error si el token es inválido
  } catch {
    redirect('/blog/login');
  }

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </>
  );
}
