// app/blog/page.jsx
import { redirect } from 'next/navigation';

export default function BlogHome() {
  // Redirige a la lista de posts
  redirect('/blog/posts');

  // Alternativamente, puedes renderizar algo antes de redirigir:
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Bienvenido al Blog</h1>
      <p>Redirigiendo...</p>
    </div>
  );
}