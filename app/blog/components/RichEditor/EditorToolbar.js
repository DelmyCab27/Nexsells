'use client'

import { useRef } from 'react'

export default function EditorToolbar({ editor }) {
  const fileInputRef = useRef(null)

  if (!editor) return null

  const handleImageUpload = (file) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64 = reader.result
      if (base64) {
        editor.chain().focus().setImage({ src: base64 }).run()
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* Encabezados H1–H4 */}
      {[1, 2, 3, 4].map((level) => (
        <button
          key={level}
          type="button"
          className={`px-2 py-1 rounded text-sm font-semibold ${
            editor.isActive('heading', { level }) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
        >
          H{level}
        </button>
      ))}

      {/* Negrita / Cursiva / Subrayado */}
      <button
        type="button"
        className={`px-2 py-1 rounded text-sm font-semibold ${
          editor.isActive('bold') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        B
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded text-sm font-semibold ${
          editor.isActive('italic') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        I
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded text-sm font-semibold ${
          editor.isActive('underline') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        U
      </button>

      {/* Listas */}
      <button
        type="button"
        className={`px-2 py-1 rounded text-sm font-semibold ${
          editor.isActive('bulletList') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        • Lista
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded text-sm font-semibold ${
          editor.isActive('orderedList') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        1. Lista
      </button>

      {/* Cita / Código */}
      <button
        type="button"
        className={`px-2 py-1 rounded text-sm font-semibold ${
          editor.isActive('blockquote') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        ❝ Cita
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded text-sm font-semibold ${
          editor.isActive('codeBlock') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        {'</>'}
      </button>

      {/* Imagen por URL */}
      <button
        type="button"
        className="px-2 py-1 rounded bg-gray-200 text-gray-800 text-sm font-semibold"
        onClick={() => {
          const src = prompt('📷 URL de imagen:')
          if (src) editor.chain().focus().setImage({ src }).run()
        }}
      >
        🖼️ Imagen URL
      </button>

      {/* Imagen desde tu PC */}
      <label
        className="px-2 py-1 rounded bg-gray-200 text-gray-800 text-sm font-semibold cursor-pointer"
        title="Subir imagen desde tu PC"
      >
        📁 Imagen local
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={(e) => {
            const file = e.target.files[0]
            if (file) handleImageUpload(file)
          }}
          className="hidden"
        />
      </label>

      {/* Enlace */}
      <button
        type="button"
        className={`px-2 py-1 rounded text-sm font-semibold ${
          editor.isActive('link') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => {
          const url = prompt('🔗 URL del enlace:')
          if (url) editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        }}
      >
        🔗 Link
      </button>

      {/* Deshacer / Rehacer */}
      <button
        type="button"
        className="px-2 py-1 rounded bg-gray-200 text-gray-800 text-sm font-semibold"
        onClick={() => editor.chain().focus().undo().run()}
      >
        ⬅️ Undo
      </button>

      <button
        type="button"
        className="px-2 py-1 rounded bg-gray-200 text-gray-800 text-sm font-semibold"
        onClick={() => editor.chain().focus().redo().run()}
      >
        ➡️ Redo
      </button>
    </div>
  )
}
