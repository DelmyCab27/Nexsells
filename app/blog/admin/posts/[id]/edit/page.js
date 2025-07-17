'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import RichEditor from '@/app/blog/components/RichEditor/RichEditor';

export default function EditPostPage() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('draft');
  const [imageBase64, setImageBase64] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const editorRef = useRef();

  // Cargar datos del post al montar el componente
  useEffect(() => {
    fetch(`/blog/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setStatus(data.status);
        setImageBase64(data.image || ''); // Cargar imagen si existe
        // Establecer el contenido en el editor
        if (editorRef.current) {
          editorRef.current.setHTML(data.content);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Error al cargar el post');
        setLoading(false);
      });
  }, [id]);

  // Manejar la carga de imágenes
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImageBase64(reader.result);
    reader.readAsDataURL(file);
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const editor = editorRef.current;
    if (!editor) {
      setError('Error: No se pudo acceder al editor');
      return;
    }

    // Obtener tanto el contenido HTML como el texto plano
    const htmlContent = editor.getHTML();
    const plainText = editor.getText();

    const res = await fetch(`/blog/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content: htmlContent, // Usar contenido HTML para mantener el formato
        plainText: plainText, // Opcional: enviar texto plano
        image: imageBase64,
        status,
      }),
    });

    if (res.ok) {
      router.push('/blog/admin/posts');
    } else {
      const data = await res.json();
      setError(data.error || 'Error al guardar cambios');
    }
  };

  if (loading) return <p className="text-center text-gray-600">Cargando...</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 space-y-10 bg-white border border-gray-200 rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-blue-700">📝 Editar Post</h1>

      {error && (
        <div className="bg-red-50 text-red-600 px-4 py-2 rounded-md border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-base font-semibold text-gray-700 mb-1">Título</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Escribe el título del post"
          />
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-1">Contenido</label>
          <RichEditor ref={editorRef} />
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-1">Imagen destacada</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md file:mr-4 file:px-4 file:py-2 file:border file:rounded-md file:bg-blue-600 file:text-white cursor-pointer"
          />
          {imageBase64 && (
            <img src={imageBase64} alt="Vista previa" className="mt-4 rounded-md shadow max-w-sm" />
          )}
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-1">Estado</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="draft">🗂️ Borrador</option>
            <option value="published">✅ Publicado</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition duration-300"
        >
          📨 Guardar Cambios
        </button>
      </form>
    </div>
  );
}