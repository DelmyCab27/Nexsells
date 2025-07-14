'use client';

import { useState, memo, useCallback, useMemo } from 'react';

// Componente SolutionCard memoizado para evitar re-renderizados innecesarios
const SolutionCard = memo(({ solution, isActive, onCardClick }) => {
  const handleClick = useCallback(() => {
    onCardClick(solution.id);
  }, [solution.id, onCardClick]);

  const whatsappLink = useMemo(() => {
    const message = `Hola, me interesaria información sobre ${solution.title}`;
    return `https://wa.me/5219993551021?text=${encodeURIComponent(message)}`;
  }, [solution.title]);

  const handleWhatsAppClick = useCallback((e) => {
    e.stopPropagation(); // Evitar que se active el click del card
  }, []);

  return (
    <article
      className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer will-change-transform"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-expanded={isActive}
      aria-label={`Solución: ${solution.title}`}
    >
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={solution.image}
          alt={`Imagen representativa de ${solution.title}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 will-change-transform"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {solution.title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {solution.description}
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={`Solicitar más información sobre ${solution.title} por WhatsApp`}
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          Más información
        </a>
      </div>
    </article>
  );
});

// Componente principal
export default function SolucionesEmpresa() {
  const [activeCard, setActiveCard] = useState(null);

  // Datos de soluciones memoizados para evitar re-creación
  const solutions = useMemo(() => [
    {
      id: 'venta-en-ruta',
      title: 'Venta en Ruta',
      description: 'Ahora podrás entregar productos y monitorear las ventas que realiza tu personal en tiempo real.',
      image: '/soluciones/s0.jpg',
    },
    {
      id: 'preventa-y-reparto',
      title: 'Preventa y Reparto',
      description: 'Con nuestra aplicación móvil podrás visitar a tus clientes y levantar los pedidos que necesitan para posteriormente entregarlos.',
      image: '/soluciones/s1.jpg',
    },
    {
      id: 'localizacion-gps',
      title: 'Localización GPS',
      description: 'Controla tu flotilla, contamos con apagado de motor, botón de pánico, control de velocidad e historial de eventos.',
      image: '/soluciones/s2.jpg',
    },
    {
      id: 'promotores',
      title: 'Promotores',
      description: 'Una App que permite llevar un registro de los productos y las visitas de tus promotores a las tiendas y cadenas.',
      image: '/soluciones/s3.jpg',
    },
    {
      id: 'seguimiento-entradas',
      title: 'Seguimiento de Entregas',
      description: 'Elige entre modo repartidor o modo cobratario, rastrea tus entregas y agiliza tu trabajo trazando tus rutas.',
      image: '/soluciones/s4.jpg',
    },
    {
      id: 'asignacion-tareas',
      title: 'Asignación de Tareas',
      description: 'Ahora podrás saber cuando se instalan, entregan o realizan un servicio gracias a nuestra solución Seguimiento de personal.',
      image: '/soluciones/s5.jpg',
    },
  ], []);

  // Función de click memoizada
  const handleCardClick = useCallback((cardId) => {
    setActiveCard(current => current === cardId ? null : cardId);
  }, []);

  // Header content memoizado
  const headerContent = useMemo(() => ({
    title: 'Nuestras Soluciones',
    description: 'Cada solución tiene sus características que permitirá generar una gran cantidad de información, la cual se puede ver en tiempo real en la plataforma y poder generar reportes específicos que permita ver el crecimiento de la empresa.'
  }), []);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {headerContent.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {headerContent.description}
          </p>
        </header>

        <main>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            role="region"
            aria-label="Lista de soluciones empresariales"
          >
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                isActive={activeCard === solution.id}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}