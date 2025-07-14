// /app/blog/components/RichEditor/extensions.js

import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Typography from '@tiptap/extension-typography'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'

const extensions = [
  StarterKit.configure({
    heading: false // Desactivamos heading por defecto para usar el personalizado
  }),

  Heading.configure({
    levels: [1, 2, 3, 4] // Encabezados H1–H4
  }),

  Link.configure({
    openOnClick: false
  }),

  Image.configure({
    HTMLAttributes: {
      class: 'rounded-md my-4 max-w-full shadow-sm'
    }
  }),

  Underline,
  Highlight.configure({ multicolor: true }),
  Superscript,
  Subscript,
  Typography,
  TaskList,
  TaskItem.configure({ nested: true }),

  TextAlign.configure({
    types: ['heading', 'paragraph'], // Puedes alinear encabezados y párrafos
  })
]

export default extensions
