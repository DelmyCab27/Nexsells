'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blog/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gestión de Publicaciones</h1>
        <Link
          href="/blog/admin/posts/create"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition duration-300"
        >
          Crear nuevo post
        </Link>
      </div>

      {loading ? (
        <p>Cargando publicaciones...</p>
      ) : posts.length === 0 ? (
        <p>No hay publicaciones registradas.</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left">Título</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Vistas</th>
              <th className="px-4 py-2">Reacciones</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id} className="border-b hover:bg-purple-50 dark:hover:bg-gray-700">
                <td className="px-4 py-2">{post.title}</td>
                <td className="px-4 py-2 text-center">{post.status}</td>
                <td className="px-4 py-2 text-center">{post.views || 0}</td>
                <td className="px-4 py-2 text-center">{post.reactions?.length || 0}</td>
                <td className="px-4 py-2 text-center space-x-2">
                  <Link
                    href={`/blog/admin/posts/${post._id}/edit`}
                    className="text-blue-600 hover:underline"
                  >
                    Editar
                  </Link>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => {
                      // función para eliminar post
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
