// app/blog/components/PostCard.jsx
import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.content.substring(0, 150)}...</p>
      <Link href={`/blog/posts/${post._id}`} className="text-blue-500">Leer más</Link>
    </div>
  );
}