'use client';
import { motion } from 'framer-motion';
import { FaAndroid, FaDesktop, FaUsers, FaGlobe } from 'react-icons/fa';

const companyLogos = [
  { id: 1, src: '/logos/logo01.svg', alt: 'Empresa 1' },
  { id: 2, src: '/logos/logo02.svg', alt: 'Empresa 2' },
  { id: 3, src: '/logos/logo03.svg', alt: 'Empresa 3' },
  { id: 4, src: '/logos/logo04.svg', alt: 'Empresa 4' },
  { id: 5, src: '/logos/logo05.svg', alt: 'Empresa 5' },
  { id: 6, src: '/logos/logo06.svg', alt: 'Empresa 6' },
];

const stats = [
  { value: '2052', label: 'Descargas', icon: <FaAndroid /> },
  { value: '1100', label: 'Activos', icon: <FaUsers /> },
  { value: '1570', label: 'En línea', icon: <FaGlobe /> },
];

export default function PremiumHero() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-[#1E1E3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Potencia tu negocio con nuestra <br />
                <span className="text-[#D6DF2A]">solución integral</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed text-[#CBD5E0]">
                La plataforma de Ventas en Ruta más completa del mercado, con app móvil y dashboard web para gestionar tu equipo comercial.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton
                  href="#"
                  bgColor="#D6DF2A"
                  textColor="#1E1E3C"
                  hoverColor="#c4cd25"
                  icon={<FaAndroid className="text-xl" />}
                  title="Descarga la App"
                  subtitle="AlphaPyME"
                />
                <CTAButton
                  href="#"
                  bgColor="#00ACFD"
                  textColor="white"
                  hoverColor="#0099e0"
                  icon={<FaDesktop className="text-xl" />}
                  title="Acceso Plataforma"
                  subtitle="AlphaPyME"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full p-8 rounded-xl shadow-xl bg-[#F8FAFC]"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#1E1E3C]">
              Con la confianza de <span className="text-[#D6DF2A]">+1000 usuarios</span>
            </h2>
            <p className="font-medium mb-6 text-[#00ACFD]">Convierte tu empresa en Alpha</p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="p-3 rounded-lg text-center bg-[#D6DF2A]/20 border border-[#D6DF2A]"
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#D6DF2A] text-[#1E1E3C]">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-lg font-bold text-[#1E1E3C]">{stat.value}</div>
                  <div className="text-sm font-medium text-black">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="w-full py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h3 className="text-sm font-medium uppercase tracking-widest mb-3 text-[#00ACFD]">
              Nuestros Aliados
            </h3>
            <h2 className="text-3xl font-bold text-[#1E1E3C] mb-2">
              Marcas que confían en nosotros
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Colaboramos con las empresas más innovadoras del sector
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-16 px-8">
            {companyLogos.map((logo) => (
              <motion.img
                key={logo.id}
                src={logo.src}
                alt={logo.alt}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
                className="h-24 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Reusable CTA Button Component
function CTAButton({ href, bgColor, textColor, hoverColor, icon, title, subtitle }) {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium shadow-lg transition-colors`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    >
      {icon}
      <div className="text-left">
        <div className="font-semibold text-sm sm:text-base">{title}</div>
        <div className="text-xs">{subtitle}</div>
      </div>
    </motion.a>
  );
}
