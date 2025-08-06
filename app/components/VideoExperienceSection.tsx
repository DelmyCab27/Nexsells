'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function VideoExperienceSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const iframeRef = useRef(null);
  const router = useRouter();

  const features = [
    {
      title: 'Información de tus clientes',
      description: 'Lista de clientes visitados, Check-In / Check-Out de la visita, cantidad de productos vendidos, costo de cada uno y métodos de pago.',
      icon: '👥',
      bgColor: 'bg-[#00ACFD]',
      borderColor: 'border-[#00ACFD]',
    },
    {
      title: 'Productividad diaria',
      description: 'Realiza tus reportes personalizados, crea tus KPI\'s de la información de cada uno de tus vendedores o genera un reporte de las ventas de cada una de tus sucursales.',
      icon: '📊',
      bgColor: 'bg-[#FDDF00]',
      borderColor: 'border-[#FDDF00]',
    },
  ];

  const videoId = '4YY9xboKgIA';

  const getEmbedUrl = () => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1&modestbranding=1&rel=0&enablejsapi=1`;
  };

  const handlePlayClick = () => {
    setIsVideoLoading(true);
    setTimeout(() => {
      setShowVideo(true);
      setIsVideoLoading(false);
    }, 500);
  };

  const handleResetVideo = () => {
    setShowVideo(false);
    setIsVideoLoading(false);
  };

  const handleDiscoverMore = () => {
    router.push('/sobre-la-app');
  };

  return (
    <section className="min-h-[70vh] bg-white py-12 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#D6DF2A]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#FF9500]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-[#00ACFD]/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Sección del video */}
          <div className="relative group">
            <div className="relative p-2 bg-[#FDDF00] rounded-3xl shadow-2xl">
              <div className="bg-white p-4 rounded-3xl">
                <div className="relative aspect-video bg-[#1E1E3C] rounded-2xl overflow-hidden shadow-inner">
                  {isVideoLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#1E1E3C] rounded-2xl z-20">
                      <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#D6DF2A] border-t-transparent mb-4"></div>
                        <p className="text-white font-medium">Cargando experiencia...</p>
                      </div>
                    </div>
                  )}

                  {showVideo ? (
                    <div className="relative w-full h-full">
                      <iframe
                        ref={iframeRef}
                        className="w-full h-full rounded-2xl"
                        src={getEmbedUrl()}
                        title="Demo de la plataforma"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        frameBorder="0"
                      />
                      <button
                        onClick={handleResetVideo}
                        className="absolute top-4 right-4 w-10 h-10 bg-[#1E1E3C]/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#1E1E3C]/90 transition-all duration-300 z-30"
                        aria-label="Cerrar video"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1E1E3C] rounded-2xl group-hover:bg-[#1E1E3C]/95 transition-all duration-500">
                      <div className="absolute inset-0 opacity-50">
                        <div className="absolute top-4 left-4 w-2 h-2 bg-[#D6DF2A]/40 rounded-full animate-pulse"></div>
                        <div className="absolute top-8 right-8 w-1 h-1 bg-[#FF9500]/50 rounded-full animate-ping"></div>
                        <div className="absolute bottom-6 left-6 w-3 h-3 bg-[#00ACFD]/30 rounded-full animate-pulse delay-500"></div>
                      </div>

                      <div className="relative z-10">
                        <button
                          onClick={handlePlayClick}
                          className="group/play w-24 h-24 bg-[#1E1E3C]/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-[#1E1E3C]/30 transition-all duration-300 hover:scale-110 shadow-2xl border-2 border-[#D6DF2A]/40 hover:border-[#D6DF2A]/70"
                          aria-label="Reproducir video demostrativo"
                        >
                          <svg
                            className="w-10 h-10 text-[#D6DF2A] ml-1 group-hover/play:scale-110 transition-transform duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sección de características */}
          <div className="space-y-7">
            <div>
              <span className="inline-block mb-4 bg-[#D6DF2A] text-[#1E1E3C] px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                ✨ Nueva Experiencia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E3C] mb-4 leading-tight">
                Siente la nueva experiencia para{' '}
                <span className="text-[#FDDF00]">
                  realizar tus ventas
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[#1E1E3C]/80">
                Sigue cada una de tus ventas en tiempo real por medio de nuestra plataforma Web.
              </p>
            </div>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className={`relative bg-white rounded-xl p-5 border-l-4 ${feature.borderColor} hover:border-l-8 transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                    
                    <div className="flex items-start space-x-4 relative z-10">
                      <div className={`flex-shrink-0 w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:shadow-lg transition-all duration-300`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#1E1E3C] mb-2 group-hover:text-[#00ACFD] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-[#1E1E3C]/80">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={handleDiscoverMore}
                className="group bg-[#FDDF00] px-10 py-3 rounded-xl font-bold text-lg text-[#1E1E3C] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg relative overflow-hidden hover:bg-[#FDDF00]"
              >
                <span className="relative flex items-center space-x-2 z-10">
                  <span>Descubre más</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}