"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-la-app", label: "Sobre la App" },
    { href: "/servicio", label: "Servicios" },
    { href: "/preguntas-frecuentes", label: "FAQ" },
    { href: "/solucion", label: "Soluciones"},
    { href: "/contacto", label: "Contacto" },
    { href: "/blog", label: "Blog" }

  ];

  return (
    <header className="bg-[#00ACFD] text-white shadow-lg font-open-sans">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo1.png"
              alt="AlphaPyME Logo"
              width={500}
              height={500}
              className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6 font-montserrat">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md transition-all duration-300 text-sm xl:text-base ${
                  pathname === item.href
                    ? "bg-[#D6DF2A] text-[#1E1E3C] font-semibold shadow-md"
                    : "hover:bg-[#1E1E3C]/20 hover:text-[#D6DF2A] hover:shadow-sm"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-3 font-montserrat">
            <a
              href="https://alphapyme.com/clientes/adm_login/login.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-[#1E1E3C] border-2 border-white rounded-lg hover:bg-[#D6DF2A] hover:border-[#D6DF2A] hover:text-[#1E1E3C] transition-all duration-300 font-medium text-sm xl:text-base shadow-sm"
            >
              Ingresar
            </a>
            <a
              href="https://alphapyme.com/formulario/formulario_trials.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#FDDF00] text-[#1E1E3C] border-2 border-[#FDDF00] rounded-lg hover:bg-[#D6DF2A] hover:border-[#D6DF2A] transition-all duration-300 font-medium text-sm xl:text-base shadow-sm"
            >
              Registrarse
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-2xl focus:outline-none z-50 hover:text-[#D6DF2A] transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu (Slide-in from right) */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-64 sm:w-72 bg-[#1E1E3C]/95 backdrop-blur-sm p-6 shadow-lg transform transition-transform duration-300 ease-in-out z-40 border-l border-[#00ACFD]/30 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-4 mt-16 font-montserrat">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-md transition-all duration-300 text-base ${
                  pathname === item.href
                    ? "bg-[#D6DF2A] text-[#1E1E3C] font-semibold shadow-md"
                    : "text-white hover:bg-[#00ACFD]/30 hover:text-[#D6DF2A]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-[#00ACFD]/30">
              <a
                href="https://alphapyme.com/clientes/adm_login/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-[#1E1E3C] border-2 border-white rounded-lg hover:bg-[#D6DF2A] hover:border-[#D6DF2A] transition-all duration-300 font-medium text-base text-center"
              >
                Ingresar
              </a>
              <a
                href="https://alphapyme.com/formulario/formulario_trials.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#FDDF00] text-[#1E1E3C] border-2 border-[#FDDF00] rounded-lg hover:bg-[#D6DF2A] hover:border-[#D6DF2A] transition-all duration-300 font-medium text-base text-center"
              >
                Registrarse
              </a>
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-[#1E1E3C]/50 z-30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
}