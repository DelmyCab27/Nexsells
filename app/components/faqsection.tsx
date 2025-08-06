'use client';

import { useState, memo, useCallback, useMemo } from 'react';

const ChevronDown = memo(({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
));

const Monitor = memo(({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth={2} />
    <line x1="8" y1="21" x2="16" y2="21" strokeWidth={2} />
    <line x1="12" y1="17" x2="12" y2="21" strokeWidth={2} />
  </svg>
));

const Smartphone = memo(({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth={2} />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={2} />
  </svg>
));

const Sparkles = memo(({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
    <circle cx="12" cy="12" r="3" strokeWidth={2} />
  </svg>
));

const Zap = memo(({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" strokeWidth={2} />
  </svg>
));

const BarChart3 = memo(({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="12" y1="20" x2="12" y2="10" strokeWidth={2} />
    <line x1="18" y1="20" x2="18" y2="4" strokeWidth={2} />
    <line x1="6" y1="20" x2="6" y2="16" strokeWidth={2} />
  </svg>
));

const FAQItem = memo(({ faq, index, isOpen, onToggle }) => {
  const IconComponent = faq.icon;
  
  const handleClick = useCallback(() => {
    onToggle(index);
  }, [index, onToggle]);

  return (
    <div
      className={`group relative bg-white rounded-xl shadow-md border ${
        isOpen ? 'border-[#00ACFD]' : 'border-gray-200'
      } overflow-hidden transition-all duration-300 hover:shadow-lg will-change-transform`}
    >
      <button
        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#00ACFD] focus:ring-offset-2"
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex items-center space-x-4">
          <div 
            className={`p-3 rounded-lg ${faq.color} ${
              isOpen ? 'scale-110' : 'group-hover:scale-105'
            } transition-transform will-change-transform`}
          >
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <span className={`text-lg font-semibold ${isOpen ? 'text-[#00ACFD]' : 'text-gray-800'}`}>
            {faq.question}
          </span>
        </div>
        
        <div 
          className={`transform transition-all duration-300 will-change-transform ${
            isOpen ? 'rotate-180 text-[#00ACFD]' : 'text-gray-500'
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      
      <div
        id={`faq-answer-${index}`}
        className={`transition-all duration-300 ease-in-out will-change-auto ${
          isOpen
            ? 'max-h-96 opacity-100 pb-6'
            : 'max-h-0 opacity-0 pb-0'
        } overflow-hidden`}
      >
        <div className="px-6">
          <div className="pl-16 pr-8">
            <p className="text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});


const DeviceMockup = memo(() => {
  const mockupItems = useMemo(() => [
    { color: 'bg-[#D6DF2A]', width: 'w-40' },
    { color: 'bg-[#00ACFD]', width: 'w-36' },
    { color: 'bg-[#FF9500]', width: 'w-44' },
    { color: 'bg-white border border-[#00ACFD]', width: 'w-32' },
    { color: 'bg-[#FDDF00]', width: 'w-38' }
  ], []);

  const phoneItems = useMemo(() => [
    'bg-[#D6DF2A]',
    'bg-[#00ACFD]',
    'bg-[#FF9500]',
    'bg-white border border-[#00ACFD]',
    'bg-[#FDDF00]',
    'bg-white border border-[#FDDF00]'
  ], []);

  return (
    <div className="relative lg:ml-8">
      {/* Laptop Mockup */}
      <div className="relative bg-white rounded-xl shadow-xl border border-gray-200 p-3">
        <div className="flex space-x-2 mb-3">
          <div className="w-3 h-3 bg-[#FF9500] rounded-full"></div>
          <div className="w-3 h-3 bg-[#FDDF00] rounded-full"></div>
          <div className="w-3 h-3 bg-[#00ACFD] rounded-full"></div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 h-72 border border-gray-200">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-[#D6DF2A] rounded-lg flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="w-32 h-3 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-20 h-2 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-gray-400">
                <Monitor className="w-6 h-6" />
              </div>
            </div>
            
            <div className="space-y-3">
              {mockupItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-3 bg-white rounded-lg border ${
                    index === 3 ? 'border-[#00ACFD]' : 'border-gray-200'
                  } hover:border-[#00ACFD] transition-colors will-change-auto`}
                >
                  <div className="flex space-x-3">
                    <div className={`w-3 h-3 ${item.color} rounded-full mt-1`}></div>
                    <div className="space-y-2">
                      <div className={`${item.width} h-2 bg-gray-200 rounded-full animate-pulse`}></div>
                      <div className="w-24 h-1 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#D6DF2A] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#FDDF00] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#FF9500] rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="absolute -bottom-12 -right-12 z-10 w-32 bg-white rounded-3xl shadow-xl border border-gray-200 p-2">
        <div className="bg-gray-50 rounded-2xl p-4 h-64 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
            <Smartphone className="w-4 h-4 text-gray-400" />
          </div>
          
          <div className="space-y-3">
            {phoneItems.map((color, index) => (
              <div key={index} className={`flex items-center space-x-3 p-2 rounded-lg ${color} will-change-auto`}>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="space-y-1">
                  <div className={`h-1 ${index % 2 === 0 ? 'w-12' : 'w-10'} bg-white/80 rounded-full animate-pulse`}></div>
                  <div className="h-1 w-6 bg-white/50 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = useMemo(() => [
    {
      question: "¿En dónde puedo usar el servicio?",
      answer: "Nuestro servicio se pueden usar en cualquier computadora y también podrás usarlo en equipos Android, como nuestra plataforma es digital podrás ingresar en cualquier momento por medio de tus claves de acceso.",
      icon: Monitor,
      color: "bg-[#D6DF2A]"
    },
    {
      question: "¿En cuánto tiempo se actualiza la información en la plataforma?",
      answer: "La plataforma se actualiza en tiempo real, eso significa que todos los movimientos que se generen en los equipos telefónicos se verán reflejados en la plataforma automáticamente por medio del internet del telefono.",
      icon: Zap,
      color: "bg-[#FF9500]"
    },
    {
      question: "¿Qué beneficios tengo al estar en la plataforma?",
      answer: "Con el portal Web podrás visualizar todos los movimientos de todas tus sucursales y almacenes sin necesidad de encontrarte en el lugar, además podrás generar los reportes de ventas del día, semana o mes para generar nuevas estrategias que te ayuden a incrementar tus ventas.",
      icon: Sparkles,
      color: "bg-[#00ACFD]"
    },
    {
      question: "¿Qué información puedo obtener en la plataforma?",
      answer: "Puedes organizar a tus clientes, realizar agendas de visitas, reporte de ventas, facturación, alta de productos, actualizar inventarios, realizar viajes de ventas, registro de cadenas y tiendas, tiempo de la visita, localización por medio de GPS, seguimiento de entregas, asignación de tareas, y mucho más.",
      icon: BarChart3,
      color: "bg-[#1E1E3C]"
    }
  ], []);  const toggleFAQ = useCallback((index) => {
    setOpenIndex(current => current === index ? -1 : index);
  }, []);

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-16 bg-[#00ACFD] rounded-full"></div>
              <div className="pl-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E1E3C] mb-6">
                  Preguntas Frecuentes
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Encuentra respuestas a las dudas más comunes sobre nuestra plataforma
                </p>
              </div>
            </div>

            <div className="space-y-4" role="region" aria-label="Preguntas frecuentes">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={toggleFAQ}
                />
              ))}
            </div>
          </div>

          {/* Device Mockup Section */}
          <DeviceMockup />
        </div>
      </div>
    </div>
  );
}