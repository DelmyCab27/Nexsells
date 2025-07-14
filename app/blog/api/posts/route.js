import { connectToDatabase } from '@/app/blog/utils/db'; // tu conexión personalizada

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
    const { title, content, image, status } = await request.json();

    if (!title || !content) {
      return new Response(
        JSON.stringify({ error: 'Título y contenido son requeridos.' }),
        { status: 400 }
      );
    }

    const db = await connectToDatabase();

    const post = {
      title,           // 📝 Texto plano
      content,         // ✅ Ya no es HTML, sino texto sin etiquetas
      image,           // 🖼️ Base64 aparte (data:image/png;base64,...)
      status,
      views: 0,
      reactions: [],
      createdAt: new Date(),
    };

    await db.collection('posts').insertOne(post);

    return new Response(JSON.stringify({ success: true }), { status: 201 });

  } catch (error) {
    console.error('Error al guardar el post:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500 }
    );
  }
}