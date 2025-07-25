'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function BlogHeader({ isLoggedIn: initialLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedIn || false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  
  // Detectar si estamos en la página de login
  const isLoginPage = pathname?.includes('blog/login');

  // Verificar el estado de autenticación al cargar y cuando cambia la ruta
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        console.log('🔍 Verificando estado de autenticación...');
        const res = await fetch('/blog/api/admin/check-auth');
        console.log('📡 Response status:', res.status);
        
        if (res.ok) {
          const data = await res.json();
          console.log('📦 Auth data:', data);
          setIsLoggedIn(data.isAuthenticated);
        } else {
          console.log('❌ Response not OK');
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error verificando autenticación:', error);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, [pathname]); // Se ejecuta cuando cambia la ruta

  // También actualizar cuando cambie la prop externa
  useEffect(() => {
    if (initialLoggedIn !== undefined) {
      setIsLoggedIn(initialLoggedIn);
      setIsLoading(false);
    }
  }, [initialLoggedIn]);

  const handleLogout = async () => {
    try {
      const res = await fetch('/blog/api/admin/logout', { method: 'POST' });
      if (res.ok) {
        console.log('✅ Sesión cerrada y cookie eliminada');
        setIsLoggedIn(false);
        router.push('/blog?logout=success');
      } else {
        console.error('❌ Error al cerrar sesión');
      }
    } catch (error) {
      console.error('⚠️ Problema con el logout:', error);
    }
  };

  if (isLoading) {
    return (
      <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/blog" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
            AlphaBlog
          </Link>
          <div className="text-gray-500">Cargando...</div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/blog" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
          AlphaBlog
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition shadow hover:shadow-red-500/25"
                >
                  🔒 Cerrar Sesión
                </button>
              ) : (
                // Solo mostrar el botón de iniciar sesión si NO estamos en la página de login
                !isLoginPage && (
                  <Link
                    href="/blog/login"
                    className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition shadow hover:shadow-purple-500/25"
                  >
                    🔑 Iniciar Sesión
                  </Link>
                )
              )}
            </li>
          </ul>
        </nav>

        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú móvil"
            className="text-gray-700 dark:text-white p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <nav className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10 md:hidden">
          <ul className="space-y-2">
            <li>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                  className="block w-full text-center px-4 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
                >
                  🔒 Cerrar Sesión
                </button>
              ) : (
                // Solo mostrar el botón de iniciar sesión si NO estamos en la página de login
                !isLoginPage && (
                  <Link
                    href="/blog/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center px-4 py-3 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
                  >
                    🔑 Iniciar Sesión
                  </Link>
                )
              )}
            </li>
          </ul>
        </nav>
      )}

      {/* Efecto decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent pointer-events-none"></div>
    </header>
  );
}