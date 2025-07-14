// app/blog/posts/[id]/page.js
import { getPostById } from '@/app/blog/utils/db';

export default async function PostPage({ params }) {
  const { id } = await params;

  // Decodifica el ID si viene en Base64
  let decodedId;
  try {
    decodedId = Buffer.from(id, 'base64').toString('utf-8');
  } catch (e) {
    decodedId = id; // Usa el ID normal si no es Base64
  }

  let post;
  try {
    post = await getPostById(decodedId);
  } catch (error) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-red-600">Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title || 'Sin título'}</h1>

      {/* Imagen */}
      {post.image ? (
        <img
          src={post.image}
          alt={post.title || 'Imagen del artículo'}
          className="w-full max-h-96 object-cover rounded-lg shadow-md mb-6"
        />
      ) : (
        <p className="text-gray-500 mb-6">No hay imagen disponible</p>
      )}

      {/* Contenido */}
      <div className="prose dark:prose-invert max-w-none whitespace-pre-line">
        {post.content || 'Contenido no disponible.'}
      </div>
    </div>
  );
}