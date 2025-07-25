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
    <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-10 px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-10">
      {/* Header - Completamente responsivo */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700">
          🗂️ Mis Publicaciones
        </h1>
        <Link
          href="/blog/admin/posts/create"
          className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-pink-700 transition duration-300 text-center text-sm sm:text-base"
        >
          <span className="inline sm:hidden">➕ Crear post</span>
          <span className="hidden sm:inline">➕ Crear nuevo post</span>
        </Link>
      </div>

      {loading ? (
        <div className="text-gray-600 text-center py-8 text-sm sm:text-base">
          ⏳ Cargando publicaciones...
        </div>
      ) : posts.length === 0 ? (
        <div className="text-gray-500 text-center py-8 text-sm sm:text-base">
          No hay publicaciones todavía.
        </div>
      ) : (
        /* Grid responsivo mejorado */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6 space-y-3 sm:space-y-4 hover:shadow-lg transition duration-200 flex flex-col"
            >
              {/* Header del post */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0 sm:items-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2 flex-1 min-w-0">
                  {post.title}
                </h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                  post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {post.status === 'published' ? 'Publicado' : 'Borrador'}
                </span>
              </div>

              {/* Imagen responsiva */}
              {post.image && (
                <div className="w-full h-32 sm:h-40 lg:h-48 overflow-hidden rounded-md border border-gray-100">
                  <img
                    src={post.image}
                    alt="Imagen destacada"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Contenido con altura flexible */}
              <div className="flex-1">
                <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm line-clamp-3 sm:line-clamp-4">
                  {post.content?.slice(0, 150)}{post.content?.length > 150 && '...'}
                </p>
              </div>

              {/* Botones de acción - Siempre al final */}
              <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
                <Link
                  href={`/blog/admin/posts/${post._id}/edit`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base flex items-center gap-1"
                >
                  <span className="hidden sm:inline">✏️</span>
                  <span>Editar</span>
                </Link>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="text-red-600 hover:text-red-700 font-medium text-sm sm:text-base flex items-center gap-1"
                >
                  <span className="hidden sm:inline">🗑️</span>
                  <span>Eliminar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}