// /app/blog/admin/posts/page.jsx
'use client';

import AdminBlogView from './AdminBlogView'; // Ajusta si lo tienes en otro lugar

export default function PostsPage() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Gestión de Publicaciones</h1>
      <AdminBlogView />
    </div>
  );
}
