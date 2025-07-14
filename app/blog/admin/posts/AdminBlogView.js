'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminBlogView() {
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

  const handleDelete = async (id) => {
    const confirmDelete = confirm('¿Estás segura de que deseas eliminar este post?');
    if (!confirmDelete) return;

    const res = await fetch(`/blog/api/posts/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setPosts((prev) => prev.filter((post) => post._id !== id));
    } else {
      alert('Error al eliminar el post.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-700">🗂️ Mis Publicaciones</h1>
        <Link
          href="/blog/admin/posts/create"
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-pink-700 transition duration-300"
        >
          ➕ Crear nuevo post
        </Link>
      </div>

      {loading ? (
        <div className="text-gray-600 text-center py-8">
          ⏳ Cargando publicaciones...
        </div>
      ) : posts.length === 0 ? (
        <div className="text-gray-500 text-center py-8">
          No hay publicaciones todavía.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-4 hover:shadow-lg transition duration-200"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {post.status === 'published' ? 'Publicado' : 'Borrador'}
                </span>
              </div>

              {post.image && (
                <img
                  src={post.image}
                  alt="Imagen destacada"
                  className="rounded-md max-h-48 object-cover w-full border border-gray-100"
                />
              )}

              <p className="text-gray-700 whitespace-pre-line text-sm">
                {post.content?.slice(0, 180)}{post.content?.length > 180 && '...'}
              </p>

              <div className="flex justify-between items-center pt-4">
                <Link
                  href={`/blog/admin/posts/${post._id}/edit`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  ✏️ Editar
                </Link>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
