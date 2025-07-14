'use client'

import { useImperativeHandle, forwardRef, useRef } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import extensions from './extensions'
import EditorToolbar from './EditorToolbar'

const RichEditor = forwardRef((_, ref) => {
  const editor = useEditor({
    extensions,
    content: '',
    autofocus: true,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'min-h-[300px] px-4 py-3 text-base text-gray-800 dark:text-gray-100 bg-white dark:bg-zinc-900 rounded-md outline-none transition-all',
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off'
      }
    }
  })

  useImperativeHandle(
    ref,
    () => ({
      getHTML: () => editor?.getHTML?.() || '',
      getText: () => editor?.getText?.() || '',
      insertImage: (src) => editor?.chain().focus().setImage({ src }).run()
    }),
    [editor]
  )

  if (!editor) {
    return (
      <div className="text-gray-500 italic py-10 text-center">
        🌀 Cargando editor...
      </div>
    )
  }

  return (
    <section className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 rounded-md shadow-sm">
      <div className="border-b bg-gray-50 dark:bg-zinc-800 px-3 py-2 rounded-t-md">
        <EditorToolbar editor={editor} />
      </div>
      <div className="px-3 py-3">
        <EditorContent editor={editor} />
      </div>
    </section>
  )
})

export default RichEditor
