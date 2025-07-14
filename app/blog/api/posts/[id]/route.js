import { connectToDatabase } from '@/app/blog/utils/db';
import { ObjectId } from 'mongodb';

export async function GET(req, { params }) {
  try {
    const db = await connectToDatabase();
    const postId = params.id;

    if (!ObjectId.isValid(postId)) {
      return new Response(JSON.stringify({ error: 'ID inválido' }), { status: 400 });
    }

    const post = await db.collection('posts').findOne({ _id: new ObjectId(postId) });

    if (!post) {
      return new Response(JSON.stringify({ error: 'Post no encontrado' }), { status: 404 });
    }

    return new Response(JSON.stringify(post), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error al obtener el post:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(req, { params }) {
  try {
    const { title, content, status } = await req.json();

    if (!title || !content || !status) {
      return new Response(JSON.stringify({ error: 'Datos incompletos' }), { status: 400 });
    }

    const db = await connectToDatabase();

    await db.collection('posts').updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          title,
          content,
          status,
          updatedAt: new Date()
        }
      }
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error('Error al actualizar el post:', error);
    return new Response(JSON.stringify({ error: 'Error del servidor' }), { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  try {
    const db = await connectToDatabase();
    const postId = params.id;

    if (!ObjectId.isValid(postId)) {
      return new Response(JSON.stringify({ error: 'ID inválido' }), { status: 400 });
    }

    const result = await db.collection('posts').deleteOne({ _id: new ObjectId(postId) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: 'Post no encontrado' }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error('Error al eliminar el post:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
