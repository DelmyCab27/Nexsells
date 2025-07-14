import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/app/blog/utils/auth';
import AdminBlogView from '@/app/blog/admin/posts/AdminBlogView';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    redirect('/blog/login');
  }

  let user;
  try {
    user = verifyToken(token);
  } catch (err) {
    redirect('/blog/login');
  }

  return (
    <div className="max-w-7xl mx-auto py-8 space-y-6">
      {/* Encabezado del panel */}
      <div>
        <h1 className="text-3xl font-bold text-purple-700">Panel de Administración</h1>
        <p className="text-gray-600">Bienvenido, {user.email}</p>
      </div>

      {/* Vistas del dashboard */}
      <AdminBlogView />
    </div>
  );
}
