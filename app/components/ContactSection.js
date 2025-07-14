"use client"
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    numeroContacto: '',
    estado: '',
    nombreEmpresa: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const mensaje = `
        Nuevo contacto desde el formulario:
        
        Nombre: ${formData.nombre} ${formData.apellido}
        Correo: ${formData.correo}
        Teléfono: ${formData.numeroContacto}
        Estado: ${formData.estado}
        Empresa: ${formData.nombreEmpresa}
      `;

      console.log('Datos para enviar a demycabpechpech@gmail.com:', mensaje);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.');
      setFormData({
        nombre: '',
        apellido: '',
        correo: '',
        numeroContacto: '',
        estado: '',
        nombreEmpresa: ''
      });
    } catch (error) {
      setSubmitMessage('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const estados = [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
    'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima',
    'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco',
    'México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León',
    'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí',
    'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala',
    'Veracruz', 'Yucatán', 'Zacatecas'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conecta con Nosotros
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Transforma tu visión empresarial con nuestro apoyo personalizado
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Acelera tu Éxito Empresarial
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Estamos aquí para ayudarte a llevar tu negocio al siguiente nivel. 
                  Completa el formulario y descubre cómo podemos trabajar juntos para 
                  alcanzar tus metas con soluciones a medida.
                </p>
                <div className="mt-6 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🌟</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700">
                    ¡Tu éxito es nuestra prioridad!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">Formulario de Contacto</h3>
                  <p className="text-gray-500 text-sm">Ingresa tus datos para comenzar</p>
                </div>

                <div className="space-y-5">
                  {/* Nombre y Apellido */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1.5">
                        Nombre<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 placeholder-gray-400"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1.5">
                        Apellido<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 placeholder-gray-400"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>

                  {/* Correo y Número de contacto */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1.5">
                        Correo<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 placeholder-gray-400"
                        placeholder="demycabpech@gmail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1.5">
                        Número de contacto<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="numeroContacto"
                        value={formData.numeroContacto}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 placeholder-gray-400"
                        placeholder="+52 9990905620"
                      />
                    </div>
                  </div>

                  {/* Estado y Nombre de empresa */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1.5">
                        Estado<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="estado"
                          value={formData.estado}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 appearance-none cursor-pointer"
                        >
                          <option value="">Seleccione su estado...</option>
                          {estados.map((estado, index) => (
                            <option key={index} value={estado}>
                              {estado}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1.5">
                        Nombre de empresa<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombreEmpresa"
                        value={formData.nombreEmpresa}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 placeholder-gray-400"
                        placeholder="Tu empresa"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Enviar Información</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    )}
                  </button>

                  {/* Submission Message */}
                  {submitMessage && (
                    <div className={`text-center p-4 rounded-lg border ${
                      submitMessage.includes('error') 
                        ? 'bg-red-50 border-red-200 text-red-700' 
                        : 'bg-green-50 border-green-200 text-green-700'
                    }`}>
                      <div className="flex items-center justify-center space-x-2">
                        {submitMessage.includes('error') ? (
                          <span className="text-xl">❌</span>
                        ) : (
                          <span className="text-xl">✅</span>
                        )}
                        <span className="font-medium">{submitMessage}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}