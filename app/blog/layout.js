import { cookies } from 'next/headers';
import { verifyToken } from '../../app/blog/utils/auth';
import BlogHeader from '../../app/blog/components/BlogHeader';

export default async function BlogLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  let isLoggedIn = false;

  if (token) {
    try {
      verifyToken(token); 
      isLoggedIn = true;
    } catch {
      isLoggedIn = false;
    }
  }

  return (
    <>
      <BlogHeader isLoggedIn={isLoggedIn} />
      <main className="container mx-auto px-6 py-8">{children}</main>
    </>
  );
}
