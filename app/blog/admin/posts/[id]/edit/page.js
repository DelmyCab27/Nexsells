'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import RichEditor from '@/app/blog/components/RichEditor/RichEditor';

export default function EditPostPage() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('draft');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/blog/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setStatus(data.status);
        setLoading(false);
      })
      .catch(() => {
        setError('Error al cargar el post');
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/blog/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, status }),
    });

    if (res.ok) {
      router.push('/blog/admin/posts');
    } else {
      setError('Error al guardar cambios');
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <h1 className="text-3xl font-bold">Editar Publicación</h1>
      {error && <p className="text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-medium">Título</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800"
          />
        </div>

        <div>
          <label className="font-medium">Contenido</label>
          <RichEditor content={content} setContent={setContent} />
        </div>

        <div>
          <label className="font-medium">Estado</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800"
          >
            <option value="draft">Borrador</option>
            <option value="published">Publicado</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}
