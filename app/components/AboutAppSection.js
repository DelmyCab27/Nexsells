"use client";

import { useState } from "react";

export default function AboutAppSection() {
  const [activeTab, setActiveTab] = useState("sales");

  const featureTabs = [
    { id: "sales", label: "🛍️ Ventas", color: "bg-[#FF9500]" },
    { id: "orders", label: "📋 Pedidos", color: "bg-[#00ACFD]" },
    { id: "quotes", label: "💼 Cotizaciones", color: "bg-[#D6DF2A]" },
    { id: "returns", label: "🔄 Devoluciones", color: "bg-[#1E1E3C]" },
    { id: "exchanges", label: "🔄 Cambios", color: "bg-[#FDDF00]" },
    { id: "surveys", label: "📊 Encuestas", color: "bg-[#1E1E3C]" }
  ];

  const featureContent = {
    sales: {
      title: "Ventas",
      description: "Las ventas con tus clientes ahora es más sencillo, escoge los productos de tu catálogo y elige un método de pago, al final imprime el ticket.",
      icon: "🛍️",
      color: "bg-[#FF9500]",
      textColor: "text-white"
    },
    orders: {
      title: "Pedidos",
      description: "No esperes a que el cliente le falte tu producto, durante la visita podrás levantar un pedido y elegir una fecha de entrega.",
      icon: "📋",
      color: "bg-[#00ACFD]",
      textColor: "text-white"
    },
    quotes: {
      title: "Cotizaciones",
      description: "Ahora podrás realizar cotizaciones ilimitadas y decidir cuál sería la lista de precios que tendría cada uno de tu cliente.",
      icon: "💼",
      color: "bg-[#D6DF2A]",
      textColor: "text-[#1E1E3C]"
    },
    returns: {
      title: "Devoluciones",
      description: "Si tu cliente desea hacer una devolución, hazlo de manera fácil y sencilla, solo especifica el estado del producto.",
      icon: "🔄",
      color: "bg-[#1E1E3C]",
      textColor: "text-white"
    },
    exchanges: {
      title: "Cambios",
      description: "Solicita un cambio total de los productos que el cliente no requiera, solo captura y elige la fecha de cambio.",
      icon: "🔄",
      color: "bg-[#FDDF00]",
      textColor: "text-[#1E1E3C]"
    },
    surveys: {
      title: "Encuestas",
      description: "Personaliza tus encuestas para saber la opinión de tus clientes en relación con tus servicios o tus nuevos productos.",
      icon: "📊",
      color: "bg-[#1E1E3C]",
      textColor: "text-white"
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 relative overflow-hidden">
      {/* Elementos decorativos de fondo - Ultra responsivos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 sm:h-24 md:h-32 lg:h-48 bg-gradient-to-b from-[#1E1E3C]/5 to-transparent"></div>
        <div className="absolute top-4 sm:top-8 md:top-12 lg:top-20 right-2 sm:right-4 md:right-6 lg:right-10 w-16 sm:w-24 md:w-32 lg:w-48 xl:w-72 h-16 sm:h-24 md:h-32 lg:h-48 xl:h-72 rounded-full bg-[#D6DF2A]/8 blur-xl sm:blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-20 left-2 sm:left-4 md:left-6 lg:left-10 w-20 sm:w-32 md:w-40 lg:w-60 xl:w-80 h-20 sm:h-32 md:h-40 lg:h-60 xl:h-80 rounded-full bg-[#FF9500]/6 blur-xl sm:blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 sm:w-36 md:w-48 lg:w-72 xl:w-96 h-24 sm:h-36 md:h-48 lg:h-72 xl:h-96 rounded-full bg-[#00ACFD]/8 blur-xl sm:blur-2xl lg:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
        {/* Header Section - Ultra responsivo */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <div className="inline-flex items-center mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-[#1E1E3C] to-[#1E1E3C]/90 rounded-full shadow-lg backdrop-blur-sm">
            <div className="w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-[#D6DF2A] rounded-full mr-2 sm:mr-2.5 md:mr-3 animate-pulse"></div>
            <span className="text-white font-bold text-xs sm:text-xs md:text-sm lg:text-base uppercase tracking-wide sm:tracking-wider md:tracking-widest">
              ¿Por qué elegir nexsells?
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-[#1E1E3C] mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight px-2 sm:px-4">
            POTENCIA TU
            <span className="block bg-gradient-to-r from-[#FF9500] to-[#D6DF2A] bg-clip-text text-transparent">
              NEGOCIO
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium px-2 sm:px-4">
            La solución integral para automatizar y escalar tu empresa con
            <span className="text-[#FF9500] font-semibold"> eficiencia máxima</span>
          </p>
        </div>

        {/* Características principales - Cards ultra responsivas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          {/* Card 1 - Fácil de usar */}
          <div className="group relative sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D6DF2A] to-[#FDDF00] rounded-xl sm:rounded-2xl lg:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-r from-[#D6DF2A] to-[#FDDF00] rounded-lg sm:rounded-xl md:rounded-2xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-[#1E1E3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1E1E3C] mb-2 sm:mb-3 md:mb-4 tracking-tight">FÁCIL DE USAR</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                Interfaz intuitiva con botones organizados para encontrar todo rápidamente y sin complicaciones.
              </p>
            </div>
          </div>

          {/* Card 2 - Diseño Asombroso */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9500] to-[#FF9500]/80 rounded-xl sm:rounded-2xl lg:rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-r from-[#FF9500] to-[#FF9500]/80 rounded-lg sm:rounded-xl md:rounded-2xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1E1E3C] mb-2 sm:mb-3 md:mb-4 tracking-tight">DISEÑO PREMIUM</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                Interfaz moderna y elegante que agrupa todos tus procesos en una vista organizada y profesional.
              </p>
            </div>
          </div>

          {/* Card 3 - Personalizable */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ACFD] to-[#00ACFD]/80 rounded-xl sm:rounded-2xl lg:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-r from-[#00ACFD] to-[#00ACFD]/80 rounded-lg sm:rounded-xl md:rounded-2xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1E1E3C] mb-2 sm:mb-3 md:mb-4 tracking-tight">PERSONALIZABLE</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                Crea perfiles únicos y asigna permisos específicos para cada miembro de tu equipo de ventas.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de características interactiva ultra responsiva */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-white/20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1E1E3C] mb-3 sm:mb-4 tracking-tight">
              CARACTERÍSTICAS
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#FF9500] to-[#D6DF2A] mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto font-medium px-2">
              Herramientas profesionales para gestionar tu negocio desde cualquier dispositivo
            </p>
          </div>

          <div className="flex flex-col 2xl:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Panel de pestañas ultra responsivo */}
            <div className="w-full 2xl:w-2/5">
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-1 gap-2 sm:gap-3 md:gap-4">
                {featureTabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative flex items-center justify-start px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation min-h-[60px] sm:min-h-[70px] md:min-h-[80px] ${activeTab === tab.id
                        ? `${tab.color} text-white shadow-2xl scale-105`
                        : "bg-white text-[#1E1E3C] hover:bg-gray-50 shadow-lg border border-gray-100"
                      }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl mr-2 sm:mr-3 md:mr-4 group-hover:animate-bounce flex-shrink-0">
                      {tab.label.split(" ")[0]}
                    </span>
                    <span className="tracking-wide text-left leading-tight">
                      {tab.label.split(" ")[1]}
                    </span>
                    {activeTab === tab.id && (
                      <div className="absolute -right-1 sm:-right-2 top-1/2 transform -translate-y-1/2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-white rounded-full shadow-lg"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Contenido de la característica seleccionada ultra responsivo */}
            <div className="w-full 2xl:w-3/5">
              <div className={`${featureContent[activeTab].color} rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] relative group`}>
                {/* Patrón decorativo de fondo mejorado */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-2 sm:border-4 border-white rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 border-2 sm:border-4 border-white rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-40 h-20 sm:h-28 md:h-40 border-2 border-white rounded-full animate-pulse delay-500"></div>
                </div>

                <div className="relative p-4 sm:p-6 md:p-8 lg:p-12 h-full flex flex-col lg:flex-row items-center">
                  <div className="w-full lg:w-1/2 mb-6 sm:mb-8 lg:mb-0 lg:pr-4 xl:pr-8 text-center lg:text-left">
                    <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 md:mb-8 ${featureContent[activeTab].textColor} drop-shadow-lg transition-all duration-500 group-hover:scale-110`}>
                      {featureContent[activeTab].icon}
                    </div>
                    <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 md:mb-6 tracking-tight ${featureContent[activeTab].textColor} transition-all duration-500 group-hover:translate-x-1`}>
                      {featureContent[activeTab].title.toUpperCase()}
                    </h3>
                    <p className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium ${featureContent[activeTab].textColor === 'text-white' ? 'text-white/95' : 'text-[#1E1E3C]/90'} transition-all duration-500 delay-100 group-hover:translate-x-2`}>
                      {featureContent[activeTab].description}
                    </p>
                  </div>

                  <div className="w-full lg:w-1/2 flex justify-center">
                    {/* Mockup de celular profesional */}
                    <div className="relative transform transition-all duration-500 group-hover:-translate-y-2">
                      {/* Efecto de reflejo */}
                      <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 rounded-[3rem] sm:rounded-[4rem] md:rounded-[5rem] bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                      {/* Teléfono */}
                      <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 aspect-[9/19] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-4 sm:border-6 md:border-8 border-gray-700 p-1 sm:p-1.5 md:p-2 transform hover:scale-105 transition-transform duration-300 z-10">
                        <div className="h-full w-full bg-black rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                          {/* Notch profesional */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-4 sm:h-5 md:h-6 lg:h-7 bg-black rounded-b-xl sm:rounded-b-2xl z-20 border-x border-b sm:border-x-2 sm:border-b-2 border-gray-700 flex justify-center items-start pt-1">
                            <div className="w-8 sm:w-10 md:w-12 h-1 sm:h-1.5 md:h-2 bg-gray-700 rounded-full"></div>
                          </div>

                          {/* Imagen de la app con efecto de pantalla encendida */}
                          <div className="absolute inset-0 overflow-hidden">
                            <img
                              src="celu2.jpg"
                              alt={`AlphaPyme App - ${featureContent[activeTab].title}`}
                              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                              style={{
                                objectPosition: 'center top'
                              }}
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            {/* Fallback content mejorado */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 items-center justify-center hidden flex-col p-4">
                              <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 ${featureContent[activeTab].textColor === 'text-white' ? 'text-gray-600' : 'text-gray-700'}`}>
                                {featureContent[activeTab].icon}
                              </div>
                              <h4 className={`text-sm sm:text-base md:text-lg font-bold ${featureContent[activeTab].textColor === 'text-white' ? 'text-gray-600' : 'text-gray-700'} mb-2`}>
                                {featureContent[activeTab].title}
                              </h4>
                            </div>
                          </div>

                          {/* Efectos de pantalla */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-20 pointer-events-none"></div>
                          <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none"></div>

                          {/* Barra de navegación inferior simulada */}
                          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                            <div className="w-20 h-1 rounded-full bg-white/30"></div>
                          </div>
                        </div>
                      </div>

                      {/* Botones laterales realistas */}
                      <div className="absolute -left-2 sm:-left-2.5 md:-left-3 top-12 sm:top-14 md:top-16 lg:top-20 h-8 sm:h-10 md:h-12 w-1 sm:w-1.5 bg-gradient-to-b from-gray-700 to-gray-600 rounded-l-lg shadow-md"></div>
                      <div className="absolute -right-2 sm:-right-2.5 md:-right-3 top-10 sm:top-12 md:top-14 lg:top-16 h-10 sm:h-12 md:h-14 lg:h-16 w-1 sm:w-1.5 bg-gradient-to-t from-gray-700 to-gray-600 rounded-r-lg shadow-md"></div>
                      <div className="absolute -right-2 sm:-right-2.5 md:-right-3 top-24 sm:top-28 md:top-32 lg:top-36 h-8 sm:h-10 md:h-12 w-1 sm:w-1.5 bg-gradient-to-b from-gray-700 to-gray-600 rounded-r-lg shadow-md"></div>

                      {/* Sombras y reflejos externos */}
                      <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Efecto de brillo al hacer hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

