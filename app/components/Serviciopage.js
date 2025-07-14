'use client';

import { useState } from 'react';

export default function serviciosSection() {
    const plans = [
        {
            id: 'vendedores',
            title: 'Vendedores / Repartidores',
            description: 'Ideal para control de ventas, rutas y visitas.',
            features: [
                'Ventas, pedidos, cambios, devoluciones',
                'Productividad de vendedores',
                'Metas de ventas',
                'Agenda de visitas',
                'Control de inventarios',
                'Liquidaciones de viajes',
                'Encuestas a clientes',
                'Créditos a clientes',
                'Almacén',
                'Multi bodegas',
                'Lotes',
                'Promociones',
                'Descuentos',
                'Rastreo celular',
                'Geocercas',
                'Y más...'
            ],
            whatsappLink: 'https://wa.me/529993551021?text=Hola%2C+estoy+interesado+en+el+plan+de+Vendedores.',
            bgColor: 'bg-purple-50',
            icon: '🚚',
            label: 'Controla YA',
            labelBg: 'bg-purple-500',
        },
        {
            id: 'promotores',
            title: 'Promotores',
            description: 'Perfecto para seguimiento de promociones y captura de datos.',
            features: [
                'Agenda de visitas',
                'Captura de datos por productos',
                'Productividad de promotores',
                'Reportes de nómina por efectividad',
                'Evidencias de actividades',
                'Rastreo celular',
                'Se puede generar pedidos por próximos a caducar'
            ],
            whatsappLink: 'https://wa.me/529993551021?text=Hola%2C+estoy+interesado+en+el+plan+de+Promotores.',
            bgColor: 'bg-blue-50',
            icon: '📊',
            label: 'Sin caducados',
            labelBg: 'bg-green-500',
        },
        {
            id: 'localizacion',
            title: 'Localización Vehicular',
            description: 'Rastrea tus vehículos en tiempo real y optimiza rutas.',
            features: [
                'Ubicación en tiempo real',
                'Histórico de ubicaciones',
                'Puntos de interés',
                'Geocercas',
                'Trayectoria de viajes',
                'Reporte de paradas',
                'Excesos de velocidad',
                'Ralentis',
                'Reportes de indicadores'
            ],
            whatsappLink: 'https://wa.me/529993551021?text=Hola%2C+estoy+interesado+en+el+plan+de+Localización+Vehicular.',
            bgColor: 'bg-red-50',
            icon: '📍',
            label: 'Ni un Km más',
            labelBg: 'bg-red-500',
        }
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16 px-4">
            <div className="container mx-auto max-w-6xl">

                {/* Título */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6 font-anton uppercase tracking-wide">
                    Nuestros Servicios
                </h1>
                <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16 font-nunito leading-relaxed">
                    Tenemos la solución perfecta para tu empresa. Cada uno de nuestros planes incluye atención personalizada y capacitación en línea.
                </p>

                {/* Tarjetas de planes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {plans.map((plan) => (
                        <section
                            key={plan.id}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-gray-100"
                        >
                            {/* Etiqueta rotada */}
                            <div className="absolute top-5 right-2 transform translate-x-1/15 -translate-y-1/10 z-9">
                                <span
                                    className={`${plan.labelBg} text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full rotate-15 inline-block shadow-lg transform group-hover:scale-100 transition-transform duration-300 whitespace-normal text-center`}
                                >
                                    {plan.label}
                                </span>
                            </div>

                            {/* Icono */}
                            <div className="text-4xl mb-4 text-center">{plan.icon}</div>

                            {/* Título */}
                            <h3 className="text-2xl font-bold text-center mb-4 text-gray-800 font-anton uppercase">
                                {plan.title}
                            </h3>

                            {/* Descripción breve */}
                            <p className="font-nunito text-gray-700 mb-6 text-center">
                                {plan.description}
                            </p>

                            {/* Todas las características visibles */}
                            <div className="mb-6">
                                <ul className="space-y-2 text-gray-700 pl-2">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-nunito text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Botón WhatsApp */}
                            <div className="mt-6 text-center">
                                <a
                                    href={plan.whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold font-anton uppercase tracking-wider transition-colors"
                                >
                                    Empezar
                                </a>
                            </div>
                        </section>
                    ))}

                </div>

                {/* Llamado a acción final */}
                <div className="mt-16 bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-inner text-center">
                    <h2 className="text-2xl font-bold text-gray-800 font-anton mb-4">¿Tienes dudas?</h2>
                    <p className="text-gray-600 font-nunito mb-4">
                        Escríbenos por WhatsApp y te ayudamos a elegir el mejor plan para ti.
                    </p>
                    <a
                        href="https://wa.me/529993551021"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold font-anton px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                    >
                        Contáctanos por WhatsApp
                    </a>
                </div>

            </div>
        </div>
    );
}