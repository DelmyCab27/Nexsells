'use client';

import { useRef, useImperativeHandle, useEffect, forwardRef, useState } from 'react';

const RichEditorSimple = forwardRef(function RichEditorSimple(props, forwardedRef) {
  const containerRef = useRef(null);
  const quillRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current || quillRef.current) return;

    let quillInstance = null;
    let mounted = true;

    const loadQuill = async () => {
      try {
        // Importar dependencias básicas
        const [QuillModule, hljs] = await Promise.all([
          import('quill'),
          import('highlight.js'),
          import('quill/dist/quill.snow.css'),
          import('highlight.js/styles/atom-one-dark.css'),
        ]);

        if (!mounted) return;

        const Quill = QuillModule.default;

        // Configuración del editor sin KaTeX
        const toolbarOptions = [
          [{ font: [] }, { size: ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [] }, { background: [] }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ header: 1 }, { header: 2 }, 'blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }, { align: [] }],
          ['link', 'image', 'video'],
          ['clean'],
        ];

        quillInstance = new Quill(containerRef.current, {
          theme: 'snow',
          modules: {
            toolbar: toolbarOptions,
            syntax: {
              highlight: (text) => {
                try {
                  return hljs.default.highlightAuto(text).value;
                } catch (error) {
                  console.warn('Error en syntax highlighting:', error);
                  return text;
                }
              },
            },
            clipboard: {
              matchVisual: false,
            },
          },
          placeholder: props.placeholder || 'Escribe tu contenido aquí...',
          bounds: containerRef.current,
          formats: [
            'background', 'bold', 'color', 'font', 'code', 'italic', 'link',
            'size', 'strike', 'script', 'underline', 'blockquote', 'header',
            'indent', 'list', 'align', 'direction', 'code-block', 'image', 'video'
          ],
        });

        // Configurar eventos
        quillInstance.on('text-change', (delta, oldDelta, source) => {
          if (source === 'user') {
            const contents = quillInstance.getContents();
            const html = quillInstance.root.innerHTML;
            const text = quillInstance.getText();
            
            props.onChange?.({
              delta: contents,
              html,
              text,
              source
            });
          }
        });

        quillInstance.on('selection-change', (range, oldRange, source) => {
          props.onSelectionChange?.(range, oldRange, source);
        });

        // Aplicar estilos personalizados
        const editorElement = containerRef.current.querySelector('.ql-editor');
        if (editorElement) {
          Object.assign(editorElement.style, {
            maxWidth: '100%',
            overflowWrap: 'break-word',
            padding: '16px',
            minHeight: '300px',
            lineHeight: '1.6',
            fontSize: '16px',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          });
        }

        // Personalizar toolbar
        const toolbar = containerRef.current.querySelector('.ql-toolbar');
        if (toolbar) {
          toolbar.style.borderBottom = '1px solid #e5e7eb';
          toolbar.style.backgroundColor = '#f9fafb';
          toolbar.style.borderRadius = '8px 8px 0 0';
        }

        quillRef.current = quillInstance;
        setIsLoaded(true);
        setError(null);

        // Establecer contenido inicial si se proporciona
        if (props.initialContent) {
          if (typeof props.initialContent === 'string') {
            quillInstance.root.innerHTML = props.initialContent;
          } else {
            quillInstance.setContents(props.initialContent);
          }
        }

      } catch (err) {
        console.error('Error loading Quill:', err);
        setError('Error al cargar el editor. Por favor recarga la página.');
        setIsLoaded(false);
      }
    };

    loadQuill();

    return () => {
      mounted = false;
      if (quillInstance) {
        quillInstance.off('text-change');
        quillInstance.off('selection-change');
      }
      quillRef.current = null;
    };
  }, [isClient, props.onChange, props.onSelectionChange, props.placeholder, props.initialContent]);

  useImperativeHandle(forwardedRef, () => ({
    // Métodos básicos
    getText: () => quillRef.current?.getText() || '',
    getHTML: () => {
      const html = quillRef.current?.root?.innerHTML || '';
      return html.replace(/<p><br><\/p>$/g, '').trim();
    },
    getContents: () => ({
      html: quillRef.current?.root?.innerHTML || '',
      text: quillRef.current?.getText() || '',
      delta: quillRef.current?.getContents() || {},
    }),
    getDelta: () => quillRef.current?.getContents() || {},
    
    // Métodos de establecimiento de contenido
    setText: (text) => quillRef.current?.setText(text || ''),
    setHTML: (html) => {
      if (quillRef.current && html) {
        quillRef.current.root.innerHTML = html;
      }
    },
    setContents: (delta) => quillRef.current?.setContents(delta || ''),
    
    // Métodos de foco
    focus: () => quillRef.current?.focus(),
    blur: () => quillRef.current?.blur(),
    
    // Métodos de formateo
    format: (name, value) => quillRef.current?.format(name, value),
    formatText: (index, length, name, value) => 
      quillRef.current?.formatText(index, length, name, value),
    formatLine: (index, length, name, value) => 
      quillRef.current?.formatLine(index, length, name, value),
    
    // Métodos de selección
    getSelection: () => quillRef.current?.getSelection(),
    setSelection: (index, length) => quillRef.current?.setSelection(index, length),
    
    // Métodos de inserción
    insertText: (index, text, formats) => 
      quillRef.current?.insertText(index, text, formats),
    insertEmbed: (index, type, value) => 
      quillRef.current?.insertEmbed(index, type, value),
    
    // Métodos de utilidad
    getLength: () => quillRef.current?.getLength() || 0,
    getBounds: (index, length) => quillRef.current?.getBounds(index, length),
    
    // Acceso directo a la instancia
    getQuillInstance: () => quillRef.current,
    
    // Métodos de validación
    isEmpty: () => {
      const text = quillRef.current?.getText()?.trim() || '';
      return text.length === 0;
    },
    
    // Método para limpiar contenido
    clear: () => {
      quillRef.current?.setText('');
    }
  }));

  const renderLoadingState = () => (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
      <div className="min-h-[300px] max-h-[500px] overflow-y-auto p-6 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-gray-500 text-sm">
            {error ? (
              <div className="text-red-500 space-y-2">
                <div>⚠️ {error}</div>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200"
                >
                  Recargar página
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <span>Cargando editor...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (!isClient) {
    return renderLoadingState();
  }

  return (
    <div className={`border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm ${props.className || ''}`}>
      {(!isLoaded || error) && renderLoadingState()}
      
      <div
        ref={containerRef}
        className={`transition-all duration-300 ${
          !isLoaded || error 
            ? 'opacity-0 h-0 overflow-hidden' 
            : 'opacity-100 min-h-[300px] max-h-[500px] overflow-y-auto'
        }`}
      />
      
      {/* Estilos globales */}
      <style jsx global>{`
        .ql-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 16px;
          border: none !important;
        }
        
        .ql-editor {
          min-height: 300px;
          max-width: 100%;
          overflow-wrap: break-word;
          word-break: break-word;
          padding: 16px;
          line-height: 1.6;
        }
        
        .ql-editor.ql-blank::before {
          color: #9ca3af;
          font-style: normal;
          left: 16px;
          font-weight: normal;
        }
        
        .ql-toolbar {
          border: none !important;
          border-bottom: 1px solid #e5e7eb !important;
          background-color: #f9fafb;
          padding: 8px 16px;
        }
        
        .ql-toolbar .ql-formats {
          margin-right: 15px;
        }
        
        .ql-toolbar .ql-formats:last-child {
          margin-right: 0;
        }
        
        .ql-snow .ql-picker-label {
          color: #4b5563;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          padding: 2px 6px;
        }
        
        .ql-snow .ql-picker-label:hover {
          background-color: #f3f4f6;
        }
        
        .ql-snow .ql-stroke {
          stroke: #4b5563;
        }
        
        .ql-snow .ql-fill {
          fill: #4b5563;
        }
        
        .ql-snow .ql-tooltip {
          background-color: white;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .ql-snow .ql-editor pre.ql-syntax {
          background-color: #1e1e1e;
          color: #d4d4d4;
          border-radius: 6px;
          padding: 16px;
          margin: 16px 0;
          overflow-x: auto;
        }
        
        .ql-snow .ql-editor .ql-code-block-container {
          margin: 16px 0;
        }
        
        /* Mejorar la apariencia de las imágenes */
        .ql-editor img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }
        
        /* Estilos para enlaces */
        .ql-editor a {
          color: #3b82f6;
          text-decoration: underline;
        }
        
        .ql-editor a:hover {
          color: #1d4ed8;
        }
        
        /* Estilos para blockquotes */
        .ql-editor blockquote {
          border-left: 4px solid #e5e7eb;
          margin: 16px 0;
          padding-left: 16px;
          color: #6b7280;
          font-style: italic;
        }
        
        /* Estilos para listas */
        .ql-editor ul, .ql-editor ol {
          padding-left: 24px;
        }
        
        .ql-editor li {
          margin: 4px 0;
        }
      `}</style>
    </div>
  );
});

RichEditorSimple.displayName = 'RichEditorSimple';

export default RichEditorSimple;