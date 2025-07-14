import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';


import { Nunito, Anton } from 'next/font/google';

// Configura Nunito (para texto normal)
const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--font-nunito',
});

// Configura Anton (para títulos)
const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${anton.variable} ${nunito.variable}`}>
      <body className="min-h-screen bg-white font-nunito">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}