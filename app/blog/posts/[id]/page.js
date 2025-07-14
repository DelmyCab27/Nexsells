import { getPostById } from '@/app/blog/utils/db';
import ShareButton from './ShareButton';

export default async function PostPage({ params }) {
  const { id } = await params;
  console.log('ID recibido:', id);

  let post;
  try {
    const rawPost = await getPostById(id);
    console.log('Post encontrado:', rawPost);
    
    // Serialize the post data to plain objects
    post = {
      id: rawPost._id?.toString() || rawPost.id,
      title: rawPost.title,
      content: rawPost.content,
      image: rawPost.image,
      author: rawPost.author,
      tags: rawPost.tags || [],
      status: rawPost.status,
      views: rawPost.views,
      reactions: rawPost.reactions,
      createdAt: rawPost.createdAt ? new Date(rawPost.createdAt).toISOString() : null,
      updatedAt: rawPost.updatedAt ? new Date(rawPost.updatedAt).toISOString() : null
    };
  } catch (error) {
    console.error('Error al buscar el post:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-sm border p-8 max-w-md w-full text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-6">El contenido que buscas no está disponible en este momento.</p>
          <a 
            href="/blog/posts" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a artículos
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a 
              href="/blog/posts" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-medium">Todos los artículos</span>
            </a>
            
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              {post?.title || 'Sin título'}
            </h1>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200">
              {post?.author && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <p className="text-xs text-gray-500">Autor</p>
                  </div>
                </div>
              )}
              
              {post?.createdAt && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      }) : 'Fecha no disponible'}
                    </p>
                    <p className="text-xs text-gray-500">Publicado</p>
                  </div>
                </div>
              )}

              {/* Reading Time Estimate */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {post?.content ? Math.ceil(post.content.split(' ').length / 200) : 1} min
                  </p>
                  <p className="text-xs text-gray-500">Lectura</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            {post?.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {post?.image && (
            <div className="mb-12">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg shadow-sm"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <div 
              className="text-gray-700 leading-relaxed whitespace-pre-line"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              {post?.content || (
                <div className="text-center py-16">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">Contenido no disponible</p>
                </div>
              )}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm font-medium">Me gusta</span>
                </button>
                
                <ShareButton post={post} />
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}