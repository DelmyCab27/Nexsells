'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Importación dinámica del RichEditor sin SSR
const RichEditor = dynamic(() => import('../../../components/RichEditor/RichEditor'), {
  ssr: false,
  loading: () => (
    <div className="border border-gray-300 rounded-md">
      <div className="min-h-[300px] max-h-[500px] overflow-y-auto p-4 bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Cargando editor...</div>
      </div>
    </div>
  )
});

export default function CreatePostPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('draft');
  const [error, setError] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const editorRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImageBase64(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editor = editorRef.current;
    if (!editor) return;

    const contentHTML = editor.getHTML();
    const contentDelta = JSON.stringify(editor.getContents());
    const contentText = editor.getText();

    const res = await fetch('/blog/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content_html: contentHTML,
        content_delta: contentDelta,
        content_text: contentText,
        image: imageBase64,
        status,
      }),
    });

    if (res.ok) {
      router.push('/blog/admin/dashboard/');
    } else {
      const data = await res.json();
      setError(data.error || 'Error al crear el post.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-5 md:px-8 space-y-5 sm:space-y-7 md:space-y-9 bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md relative">
      {/* Botón para regresar - completamente responsivo */}
      <button
        onClick={() => router.back()}
        className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-4 md:right-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs sm:text-sm md:text-base py-1 px-2 sm:py-1.5 sm:px-3 md:py-2 md:px-4 rounded sm:rounded-md transition duration-200 flex items-center gap-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="hidden xs:inline">Regresar</span>
      </button>

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 leading-tight">📄 Nuevo Post</h1>

      {error && (
        <div className="bg-red-50 text-red-600 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded sm:rounded-md border border-red-200 text-xs sm:text-sm md:text-base">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
        <div>
          <label className="block text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-gray-700 mb-1">Título</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 md:px-4 md:py-3 border border-gray-300 rounded sm:rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-xs sm:text-sm md:text-base"
            placeholder="Escribe el título del post"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-gray-700 mb-1">Contenido</label>
          <RichEditor ref={editorRef} />
        </div>

        <div>
          <label className="block text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-gray-700 mb-1">Imagen destacada</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-xs sm:text-sm px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 border border-gray-300 rounded sm:rounded-md file:mr-2 sm:file:mr-3 md:file:mr-4 file:px-2 sm:file:px-3 md:file:px-4 file:py-1 sm:file:py-1.5 md:file:py-2 file:border-0 file:rounded-sm sm:file:rounded file:bg-blue-600 file:text-white file:text-xs sm:file:text-sm cursor-pointer"
          />
          {imageBase64 && (
            <img src={imageBase64} alt="Vista previa" className="mt-2 sm:mt-3 md:mt-4 rounded sm:rounded-md shadow max-w-[180px] xs:max-w-xs sm:max-w-sm" />
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-gray-700 mb-1">Estado</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 md:px-4 md:py-3 border border-gray-300 rounded sm:rounded-md focus:ring-2 focus:ring-blue-400 outline-none text-xs sm:text-sm md:text-base"
          >
            <option value="draft">🗂️ Borrador</option>
            <option value="published">✅ Publicado</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium sm:font-semibold py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded sm:rounded-md transition duration-300 text-xs sm:text-sm md:text-base"
        >
          📨 Publicar Post
        </button>
      </form>
    </div>
  );
}