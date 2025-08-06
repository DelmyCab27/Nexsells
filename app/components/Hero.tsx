'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const images = ['/celu1.jpeg', '/celu2.jpg', '/celu3.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambia imagen cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageError = (index) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="bg-[#1E1E3C] py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden font-nunito">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Contenido de texto */}
          <div className="lg:w-1/2 text-white mb-6 lg:mb-0 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight font-anton uppercase tracking-wider">
              Una App completa<br />
              <span className="text-yellow-400">para tus Ventas</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed font-nunito max-w-lg mx-auto lg:mx-0">
              Organiza y Controla tus ventas desde la App Móvil de AlphaPyME. Gestiona tus ventas,
              crea tu agenda de visitas, geolocaliza nuevos clientes y mucho más.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <a
                href="https://alphapyme.com/formulario/formulario_trials.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-blue-900 rounded-full hover:bg-yellow-300 font-bold text-base sm:text-lg shadow-lg transition-all duration-300 hover:scale-105 transform hover:shadow-xl font-anton uppercase"
              >
                Crear cuenta
              </a>
              <div className="text-white mt-4 sm:mt-0">
                <p className="text-base sm:text-lg font-bold text-yellow-400 font-nunito">¡Prueba gratis por 7 días!</p>
                <p className="text-lg sm:text-xl font-extrabold font-anton">¡¡Toma el control de tus ventas ya!!</p>
              </div>
            </div>
          </div>

          {/* Celular con imagen rotativa */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-64 sm:w-72 h-[500px] sm:h-[560px]">
              {/* Marco premium con bordes definidos */}
              <div className="absolute inset-0 bg-gray-900 rounded-[42px] p-1 shadow-2xl border border-gray-700/30">
                
                {/* Cuerpo principal con bordes perfectos */}
                <div className="relative h-full w-full bg-gray-800 rounded-[40px] overflow-hidden border-[3px] border-gray-700/50">
                  
                  {/* Notch profesional */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl z-20 flex justify-center items-center">
                    <div className="w-16 h-1.5 bg-gray-700 rounded-full"></div>
                  </div>

                  {/* Contenedor de imagen optimizado */}
                  <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                    {/* Área de pantalla real (evitando notch y botón) */}
                    <div className="absolute top-6 left-1 right-1 bottom-6 rounded-[5px] overflow-hidden bg-black">
                      {/* Imagen real con ajuste perfecto */}
                      {!imageError[currentImageIndex] && (
                        <img
                          key={currentImageIndex}
                          src={images[currentImageIndex]}
                          alt={`App Screenshot ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                          onError={() => handleImageError(currentImageIndex)}
                          style={{
                            objectFit: 'fill',
                            objectPosition: 'center'
                          }}
                        />
                      )}
                      
                      {/* Overlay sutil para mejor integración */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>
                    </div>
                    
                    {/* Fondo de respaldo solo si hay error */}
                    {imageError[currentImageIndex] && (
                      <div className="absolute top-6 left-1 right-1 bottom-6 rounded-[30px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center">
                        <div className="text-center text-white/50">
                          <div className="w-16 h-16 mx-auto mb-2 bg-white/10 rounded-lg flex items-center justify-center">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-xs">AlphaPyME App</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Botón inferior */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-gray-700/90 rounded-full shadow-sm"></div>
                  
                  {/* Botones laterales con mejor diseño */}
                  <div className="absolute -left-1 top-28 h-20 w-1.5 bg-gray-800 rounded-r-md border-r border-gray-700/50"></div>
                  <div className="absolute -right-1 top-24 h-24 w-1.5 bg-gray-800 rounded-l-md border-l border-gray-700/50">
                    <div className="absolute left-0 top-6 h-12 w-full bg-gray-700/50 rounded-l-md"></div>
                  </div>
                  
                  {/* Reflejo profesional en bordes */}
                  <div className="absolute inset-0 rounded-[20px] pointer-events-none border border-white/5 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos - Ajustados para no interferir con el contenido */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-[#00ACFD] rounded-full opacity-10 -translate-y-16 sm:-translate-y-24 translate-x-16 sm:translate-x-24"></div>
      <div className="absolute bottom-0 left-0 w-28 sm:w-36 h-28 sm:h-36 bg-[#00ACFD] rounded-full opacity-10 translate-y-12 sm:translate-y-16 -translate-x-12 sm:-translate-x-16"></div>
    </section>
  );
}