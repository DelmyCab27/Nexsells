import { connectToDatabase } from '@/app/blog/utils/db';
import bcrypt from 'bcrypt';

export async function GET() {
  const db = await connectToDatabase();

  const hashedPassword = await bcrypt.hash('27082005', 10);

  const result = await db.collection('users').insertOne({
    email: 'delmycabpech@gmail.com',
    password: hashedPassword,
    role: 'admin',
    isActive: true,
  });

  return new Response(
    JSON.stringify({ success: true, userId: result.insertedId }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
