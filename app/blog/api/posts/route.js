
import { connectToDatabase } from '@/app/blog/utils/db';

export async function GET() {
  try {
    const db = await connectToDatabase();
    const posts = await db.collection('posts').find({}).toArray();

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error al obtener posts:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    const { title, content, plainText, image, status } = await request.json();

    // Validate required fields
    if (!title || !content) {
      return new Response(
        JSON.stringify({ error: 'Título y contenido son requeridos.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Optional: Validate Base64 image format
    if (image && !image.startsWith('data:image/')) {
      return new Response(
        JSON.stringify({ error: 'La imagen destacada debe ser un string Base64 válido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = await connectToDatabase();

    const post = {
      title,           // 📝 Post title
      content,         // 📜 HTML content with Base64 images and video iframes
      plainText,       // 📄 Plain text version (optional, for search/previews)
      image,           // 🖼️ Featured image (Base64)
      status,          // ✅ Draft or published
      views: 0,
      reactions: [],
      createdAt: new Date(),
    };

    const result = await db.collection('posts').insertOne(post);

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error al guardar el post:', error);
    return new Response(
      JSON.stringify({ error: `Error interno del servidor: ${error.message}` }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}