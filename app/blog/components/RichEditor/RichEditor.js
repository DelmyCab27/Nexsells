'use client';

import { useRef, useImperativeHandle, useEffect, forwardRef, useState } from 'react';
import Script from 'next/script';

const RichEditorSimple = forwardRef(function RichEditorSimple(props, forwardedRef) {
  const containerRef = useRef(null);
  const quillRef = useRef(null);
  const [status, setStatus] = useState({
    loaded: false,
    scriptsReady: false,
    error: null
  });

  // Inicializar Quill cuando los scripts estén listos
  useEffect(() => {
    if (!status.scriptsReady || !containerRef.current || quillRef.current) return;

    const initializeEditor = () => {
      try {
        const Quill = window.Quill;
        const hljs = window.hljs;

        // Configuración de la toolbar
        const toolbarOptions = [
          [{ 'header': [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['link', 'image'],
          ['clean']
        ];

        // Crear instancia de Quill
        quillRef.current = new Quill(containerRef.current, {
          theme: 'snow',
          modules: {
            toolbar: toolbarOptions,
            syntax: {
              highlight: (text) => hljs.highlightAuto(text).value
            }
          },
          placeholder: props.placeholder || 'Escribe aquí...',
          formats: ['header', 'bold', 'italic', 'underline', 'strike', 'list', 'link', 'image']
        });

        // Manejar cambios en el contenido
        quillRef.current.on('text-change', () => {
          if (props.onChange) {
            const html = quillRef.current.root.innerHTML;
            const text = quillRef.current.getText();
            props.onChange({ html, text });
          }
        });

        // Establecer contenido inicial si existe
        if (props.value) {
          quillRef.current.root.innerHTML = props.value;
        }

        setStatus(prev => ({ ...prev, loaded: true }));

      } catch (error) {
        console.error('Error initializing editor:', error);
        setStatus(prev => ({ ...prev, error: 'Error al cargar el editor' }));
      }
    };

    initializeEditor();

    return () => {
      if (quillRef.current) {
        quillRef.current.off('text-change');
        quillRef.current = null;
      }
    };
  }, [status.scriptsReady, props.value, props.placeholder, props.onChange]);

  // Exponer métodos al componente padre
  useImperativeHandle(forwardedRef, () => ({
    getHTML: () => quillRef.current?.root.innerHTML || '',
    getText: () => quillRef.current?.getText() || '',
    setHTML: (html) => {
      if (quillRef.current && html) {
        quillRef.current.root.innerHTML = html;
      }
    },
    focus: () => quillRef.current?.focus(),
    isEmpty: () => !quillRef.current?.getText().trim()
  }));

  // Estado de carga
  const renderLoadingState = () => (
    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
      {status.error ? (
        <div className="text-center text-red-500">
          <p>{status.error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-100 rounded hover:bg-red-200"
          >
            Recargar
          </button>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400 mx-auto"></div>
          <p className="mt-2">Cargando editor...</p>
        </div>
      )}
    </div>
  );

  return (
    <div className={`editor-container ${props.className || ''}`}>
      {/* Cargar scripts necesarios */}
      <Script
        src="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js"
        strategy="lazyOnload"
        onLoad={() => setStatus(prev => ({ ...prev, scriptsReady: true }))}
        onError={() => setStatus(prev => ({ ...prev, error: 'Error al cargar el editor' }))}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
        strategy="lazyOnload"
        onLoad={() => setStatus(prev => ({ ...prev, scriptsReady: true }))}
        onError={() => setStatus(prev => ({ ...prev, error: 'Error al cargar el editor' }))}
      />

      {/* Cargar estilos */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
      />

      {/* Mostrar estado de carga o editor */}
      {!status.loaded ? renderLoadingState() : (
        <div
          ref={containerRef}
          className="h-64 overflow-y-auto bg-white"
        />
      )}

      {/* Estilos personalizados */}
      <style jsx global>{`
        .editor-container {
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
          overflow: hidden;
        }
        .ql-container {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
        }
        .ql-editor {
          min-height: 100%;
          padding: 1rem;
        }
        .ql-toolbar {
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
        }
        .ql-snow .ql-stroke {
          stroke: #4a5568;
        }
        .ql-snow .ql-fill {
          fill: #4a5568;
        }
      `}</style>
    </div>
  );
});

RichEditorSimple.displayName = 'RichEditorSimple';

export default RichEditorSimple;

//-------------------------------------------------------//
'use client';

import { useRef, useImperativeHandle, useEffect, forwardRef, useState } from 'react';
import Script from 'next/script';

const RichEditorSimple = forwardRef(function RichEditorSimple(props, forwardedRef) {
  const containerRef = useRef(null);
  const quillRef = useRef(null);
  const [status, setStatus] = useState({
    loaded: false,
    scriptsReady: false,
    error: null
  });

  // Inicializar Quill cuando los scripts estén listos
  useEffect(() => {
    if (!status.scriptsReady || !containerRef.current || quillRef.current) return;

    const initializeEditor = () => {
      try {
        const Quill = window.Quill;
        const hljs = window.hljs;

        // Configuración de la toolbar
        const toolbarOptions = [
          [{ 'header': [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['link', 'image'],
          ['clean']
        ];

        // Crear instancia de Quill
        quillRef.current = new Quill(containerRef.current, {
          theme: 'snow',
          modules: {
            toolbar: toolbarOptions,
            syntax: {
              highlight: (text) => hljs.highlightAuto(text).value
            }
          },
          placeholder: props.placeholder || 'Escribe aquí...',
          formats: ['header', 'bold', 'italic', 'underline', 'strike', 'list', 'link', 'image']
        });

        // Manejar cambios en el contenido
        quillRef.current.on('text-change', () => {
          if (props.onChange) {
            const html = quillRef.current.root.innerHTML;
            const text = quillRef.current.getText();
            props.onChange({ html, text });
          }
        });

        // Establecer contenido inicial si existe
        if (props.value) {
          quillRef.current.root.innerHTML = props.value;
        }

        setStatus(prev => ({ ...prev, loaded: true }));

      } catch (error) {
        console.error('Error initializing editor:', error);
        setStatus(prev => ({ ...prev, error: 'Error al cargar el editor' }));
      }
    };

    initializeEditor();

    return () => {
      if (quillRef.current) {
        quillRef.current.off('text-change');
        quillRef.current = null;
      }
    };
  }, [status.scriptsReady, props.value, props.placeholder, props.onChange]);

  // Exponer métodos al componente padre
  useImperativeHandle(forwardedRef, () => ({
    getHTML: () => quillRef.current?.root.innerHTML || '',
    getText: () => quillRef.current?.getText() || '',
    setHTML: (html) => {
      if (quillRef.current && html) {
        quillRef.current.root.innerHTML = html;
      }
    },
    focus: () => quillRef.current?.focus(),
    isEmpty: () => !quillRef.current?.getText().trim()
  }));

  // Estado de carga
  const renderLoadingState = () => (
    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
      {status.error ? (
        <div className="text-center text-red-500">
          <p>{status.error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-100 rounded hover:bg-red-200"
          >
            Recargar
          </button>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400 mx-auto"></div>
          <p className="mt-2">Cargando editor...</p>
        </div>
      )}
    </div>
  );

  return (
    <div className={`editor-container ${props.className || ''}`}>
      {/* Cargar scripts necesarios */}
      <Script
        src="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js"
        strategy="lazyOnload"
        onLoad={() => setStatus(prev => ({ ...prev, scriptsReady: true }))}
        onError={() => setStatus(prev => ({ ...prev, error: 'Error al cargar el editor' }))}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
        strategy="lazyOnload"
        onLoad={() => setStatus(prev => ({ ...prev, scriptsReady: true }))}
        onError={() => setStatus(prev => ({ ...prev, error: 'Error al cargar el editor' }))}
      />

      {/* Cargar estilos */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
      />

      {/* Mostrar estado de carga o editor */}
      {!status.loaded ? renderLoadingState() : (
        <div
          ref={containerRef}
          className="h-64 overflow-y-auto bg-white"
        />
      )}

      {/* Estilos personalizados */}
      <style jsx global>{`
        .editor-container {
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
          overflow: hidden;
        }
        .ql-container {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
        }
        .ql-editor {
          min-height: 100%;
          padding: 1rem;
        }
        .ql-toolbar {
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
        }
        .ql-snow .ql-stroke {
          stroke: #4a5568;
        }
        .ql-snow .ql-fill {
          fill: #4a5568;
        }
      `}</style>
    </div>
  );
});

RichEditorSimple.displayName = 'RichEditorSimple';

export default RichEditorSimple; //