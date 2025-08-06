import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1E1E3C] text-white py-12 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#00ACFD]/10 to-[#D6DF2A]/10 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#FDDF00]/10 to-[#00ACFD]/10 rounded-full translate-x-20 translate-y-20 blur-xl"></div>
      
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Logo y descripción */}
          <div className="mb-10 lg:mb-0 lg:max-w-md">
            <div className="flex items-center mb-6">
              <img 
                src="/logo2.png" 
                alt="ALPHAPYME Logo" 
                className="h-12 mr-3 drop-shadow-lg"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Somos la solución para la administración de tu negocio que té 
              permitirá controlar las principales actividades que llevas a
              cabo y sistematizarlas para obtener mejores resultados.
            </p>
          </div>
          
          {/* Enlaces */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Columna Ayuda */}
            <div>
              <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-[#D6DF2A] text-[#D6DF2A]">
                Ayuda
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/solucion" className="flex items-center hover:text-[#00ACFD] transition-all duration-300 group">
                    <span className="w-2 h-2 bg-[#00ACFD] rounded-full mr-3 group-hover:bg-[#D6DF2A] group-hover:animate-pulse transition-colors duration-300"></span>
                    Soluciones
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="flex items-center hover:text-[#00ACFD] transition-all duration-300 group">
                    <span className="w-2 h-2 bg-[#00ACFD] rounded-full mr-3 group-hover:bg-[#D6DF2A] group-hover:animate-pulse transition-colors duration-300"></span>
                    Contactarnos
                  </a>
                </li>
                <li>
                  <a href="/servicio" className="flex items-center hover:text-[#00ACFD] transition-all duration-300 group">
                    <span className="w-2 h-2 bg-[#00ACFD] rounded-full mr-3 group-hover:bg-[#D6DF2A] group-hover:animate-pulse transition-colors duration-300"></span>
                    Planes y precios
                  </a>
                </li>
                <li>
                  <a href="https://alphapyme.com/politica.html" className="flex items-center hover:text-[#00ACFD] transition-all duration-300 group">
                    <span className="w-2 h-2 bg-[#00ACFD] rounded-full mr-3 group-hover:bg-[#D6DF2A] group-hover:animate-pulse transition-colors duration-300"></span>
                    Política de privacidad
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Columna Redes Sociales */}
            <div>
              <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-[#D6DF2A] text-[#D6DF2A]">
                Conéctate
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61573058079376" className="flex items-center hover:text-[#00ACFD] transition-all duration-300 group">
                      <svg className="w-5 h-5 mr-3 text-[#00ACFD] group-hover:text-[#D6DF2A] transition-colors duration-300" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/alphapyme/" className="flex items-center hover:text-[#00ACFD] transition-all duration-300 group">
                      <svg className="w-5 h-5 mr-3 text-[#00ACFD] group-hover:text-[#FDDF00] transition-colors duration-300" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Instagram</span>
                    </a>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.youtube.com/channel/UC4OVunKm2QwUfJ6_x2HRDow" className="flex items-center hover:text-[#00ACFD] transition-all duration-300 group">
                      <svg className="w-5 h-5 mr-3 text-[#00ACFD] group-hover:text-[#FF9500] transition-colors duration-300" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">YouTube</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright y derechos */}
        <div className="mt-16 pt-6 border-t-2 border-[#00ACFD]/30 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AlphaPyME. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}