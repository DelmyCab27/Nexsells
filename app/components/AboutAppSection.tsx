"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";

// Mover datos fuera del componente para evitar recrearlos
const FEATURE_TABS = [
  { id: "sales", label: "🛍️ Ventas", color: "bg-[#FF9500]" },
  { id: "orders", label: "📋 Pedidos", color: "bg-[#00ACFD]" },
  { id: "quotes", label: "💼 Cotizaciones", color: "bg-[#D6DF2A]" },
  { id: "returns", label: "🔄 Devoluciones", color: "bg-[#1E1E3C]" },
  { id: "exchanges", label: "🔄 Cambios", color: "bg-[#FDDF00]" },
  { id: "surveys", label: "📊 Encuestas", color: "bg-[#1E1E3C]" }
];

const FEATURE_CONTENT = {
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

// Componente separado para las cards principales
const FeatureCard = ({ title, description, icon, gradient, delay = 0 }) => (
  <div className="group relative" style={{ animationDelay: `${delay}ms` }}>
    <div className={`absolute inset-0 ${gradient} rounded-xl sm:rounded-2xl lg:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`}></div>
    <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
      <div className={`flex items-center justify-center w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 ${gradient} rounded-lg sm:rounded-xl md:rounded-2xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1E1E3C] mb-2 sm:mb-3 md:mb-4 tracking-tight">{title}</h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-medium">{description}</p>
    </div>
  </div>
);

// Componente separado para los botones de tabs
const TabButton = ({ tab, isActive, onClick, index }) => (
  <button
    onClick={onClick}
    className={`group relative flex items-center justify-start px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation min-h-[60px] sm:min-h-[70px] md:min-h-[80px] ${
      isActive
        ? `${tab.color} text-white shadow-2xl scale-105`
        : "bg-white text-[#1E1E3C] hover:bg-gray-50 shadow-lg border border-gray-100"
    }`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <span className="text-lg sm:text-xl md:text-2xl mr-2 sm:mr-3 md:mr-4 group-hover:animate-bounce flex-shrink-0">
      {tab.label.split(" ")[0]}
    </span>
    <span className="tracking-wide text-left leading-tight">
      {tab.label.split(" ")[1]}
    </span>
    {isActive && (
      <div className="absolute -right-1 sm:-right-2 top-1/2 transform -translate-y-1/2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-white rounded-full shadow-lg"></div>
    )}
  </button>
);

export default function AboutAppSection() {
  const [activeTab, setActiveTab] = useState("sales");

  // Memoizar el contenido activo para evitar cálculos innecesarios
  const activeContent = useMemo(() => FEATURE_CONTENT[activeTab], [activeTab]);

  // Memoizar el callback para cambiar tabs
  const handleTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 relative overflow-hidden">
      {/* Elementos decorativos - Simplificados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1E1E3C]/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-[#D6DF2A]/8 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-[#FF9500]/6 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#00ACFD]/8 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
        {/* Header Section */}
        <header className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <div className="inline-flex items-center mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-[#1E1E3C] to-[#1E1E3C]/90 rounded-full shadow-lg backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#D6DF2A] rounded-full mr-3 animate-pulse"></div>
            <span className="text-white font-bold text-xs sm:text-sm lg:text-base uppercase tracking-widest">
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
        </header>

        {/* Características principales - Cards optimizadas */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <FeatureCard
            title="FÁCIL DE USAR"
            description="Interfaz intuitiva con botones organizados para encontrar todo rápidamente y sin complicaciones."
            gradient="bg-gradient-to-r from-[#D6DF2A] to-[#FDDF00]"
            icon={
              <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-[#1E1E3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            delay={0}
          />

          <FeatureCard
            title="DISEÑO PREMIUM"
            description="Interfaz moderna y elegante que agrupa todos tus procesos en una vista organizada y profesional."
            gradient="bg-gradient-to-r from-[#FF9500] to-[#FF9500]/80"
            icon={
              <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
            delay={100}
          />

          <FeatureCard
            title="PERSONALIZABLE"
            description="Crea perfiles únicos y asigna permisos específicos para cada miembro de tu equipo de ventas."
            gradient="bg-gradient-to-r from-[#00ACFD] to-[#00ACFD]/80"
            icon={
              <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            delay={200}
          />
        </section>

        {/* Sección de características interactiva */}
        <section className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-white/20">
          <header className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1E1E3C] mb-3 sm:mb-4 tracking-tight">
              CARACTERÍSTICAS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF9500] to-[#D6DF2A] mx-auto mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium px-2">
              Herramientas profesionales para gestionar tu negocio desde cualquier dispositivo
            </p>
          </header>

          <div className="flex flex-col 2xl:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Panel de pestañas */}
            <div className="w-full 2xl:w-2/5">
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-1 gap-2 sm:gap-3 md:gap-4">
                {FEATURE_TABS.map((tab, index) => (
                  <TabButton
                    key={tab.id}
                    tab={tab}
                    isActive={activeTab === tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Contenido de la característica seleccionada */}
            <div className="w-full 2xl:w-3/5">
              <div className={`${activeContent.color} rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] relative group`}>
                {/* Patrón decorativo simplificado */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white rounded-full animate-pulse delay-300"></div>
                </div>

                <div className="relative p-4 sm:p-6 md:p-8 lg:p-12 h-full flex flex-col lg:flex-row items-center">
                  <div className="w-full lg:w-1/2 mb-6 sm:mb-8 lg:mb-0 lg:pr-8 text-center lg:text-left">
                    <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 ${activeContent.textColor} drop-shadow-lg transition-all duration-500 group-hover:scale-110`}>
                      {activeContent.icon}
                    </div>
                    <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-6 tracking-tight ${activeContent.textColor} transition-all duration-500 group-hover:translate-x-1`}>
                      {activeContent.title.toUpperCase()}
                    </h3>
                    <p className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium ${activeContent.textColor === 'text-white' ? 'text-white/95' : 'text-[#1E1E3C]/90'} transition-all duration-500 delay-100 group-hover:translate-x-2`}>
                      {activeContent.description}
                    </p>
                  </div>

                  <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative transform transition-all duration-500 group-hover:-translate-y-2">
                      {/* Teléfono optimizado */}
                      <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 aspect-[9/19] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-4 sm:border-6 md:border-8 border-gray-700 p-1 sm:p-1.5 md:p-2 transform hover:scale-105 transition-transform duration-300 z-10">
                        <div className="h-full w-full bg-black rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20 border-x-2 border-b-2 border-gray-700 flex justify-center items-start pt-1">
                            <div className="w-10 h-1.5 bg-gray-700 rounded-full"></div>
                          </div>

                          {/* Imagen optimizada */}
                          <div className="absolute inset-0 overflow-hidden">
                            <Image
                              src="/celu2.jpg"
                              alt={`AlphaPyme App - ${activeContent.title}`}
                              width={288}
                              height={576}
                              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                              priority={activeTab === 'sales'} // Solo priorizar la primera imagen
                              quality={85}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>

                          {/* Efectos mínimos */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-black/5 pointer-events-none"></div>
                          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                            <div className="w-20 h-1 rounded-full bg-white/30"></div>
                          </div>
                        </div>
                      </div>

                      {/* Botones simplificados */}
                      <div className="absolute -left-2.5 top-16 h-10 w-1.5 bg-gradient-to-b from-gray-700 to-gray-600 rounded-l-lg"></div>
                      <div className="absolute -right-2.5 top-14 h-14 w-1.5 bg-gradient-to-t from-gray-700 to-gray-600 rounded-r-lg"></div>
                      <div className="absolute -right-2.5 top-32 h-10 w-1.5 bg-gradient-to-b from-gray-700 to-gray-600 rounded-r-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}