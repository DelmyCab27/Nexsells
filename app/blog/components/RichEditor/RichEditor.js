'use client';

import { useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react';
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css';
import 'highlight.js/styles/atom-one-dark.css'; // Opcional: para resaltado de sintaxis
// import 'katex/dist/katex.min.css'; // Opcional: para fórmulas matemáticas

// Cargar Quill dinámicamente solo en el cliente
const Quill = dynamic(() => import('quill'), { ssr: false });

const RichEditor = forwardRef((props, ref) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [content, setContent] = useState('');

  // Configuración del toolbar de Quill
  const toolbarOptions = [
    [{ font: [] }, { size: ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ header: 1 }, { header: 2 }, 'blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }, { align: [] }],
    ['link', 'image', 'video', 'formula'],
    ['clean'],
  ];

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return;

    // Cargar Quill y highlight.js dinámicamente
    Promise.all([
      import('quill'),
      import('highlight.js'),
      import('quill/modules/syntax'), // Importar el módulo syntax específicamente
    ]).then(([QuillModule, hljs, SyntaxModule]) => {
      const Quill = QuillModule.default; // Quill puede exportarse como módulo ES
      const Syntax = SyntaxModule.default; // Módulo syntax

      // Registrar el módulo syntax
      Quill.register('modules/syntax', Syntax, true);

      if (editorRef.current && !quillRef.current) {
        // Inicializar Quill
        quillRef.current = new Quill(editorRef.current, {
          modules: {
            toolbar: toolbarOptions,
            syntax: {
              highlight: (text) => hljs.default.highlightAuto(text).value, // Usar highlight.js
            },
            // Opcional: formula: true, // Descomentar si usas KaTeX
          },
          placeholder: 'Escribe tu contenido aquí...',
          theme: 'snow',
        });

        // Actualizar el estado cuando cambie el contenido
        quillRef.current.on('text-change', () => {
          setContent(quillRef.current.root.innerHTML);
        });
      }
    });

    // Limpieza al desmontar
    return () => {
      if (quillRef.current) {
        quillRef.current.off('text-change');
      }
    };
  }, []);

  // Exponer métodos al componente padre
  useImperativeHandle(ref, () => ({
    getText: () => {
      return quillRef.current ? quillRef.current.getText() : '';
    },
    getHTML: () => {
      return quillRef.current ? quillRef.current.root.innerHTML : '';
    },
    getContents: () => {
      return {
        html: quillRef.current ? quillRef.current.root.innerHTML : '',
        text: quillRef.current ? quillRef.current.getText() : '',
        delta: quillRef.current ? quillRef.current.getContents() : {},
      };
    },
    setText: (text) => {
      if (quillRef.current) {
        quillRef.current.setText(text);
      }
    },
    setHTML: (html) => {
      if (quillRef.current) {
        quillRef.current.root.innerHTML = html;
      }
    },
    setContents: (delta) => {
      if (quillRef.current) {
        quillRef.current.setContents(delta);
      }
    },
  }));

  return (
    <div className="border border-gray-300 rounded-md">
      <div ref={editorRef} className="min-h-[300px] max-h-[500px] overflow-y-auto" />
    </div>
  );
});

RichEditor.displayName = 'RichEditor';

export default RichEditor;