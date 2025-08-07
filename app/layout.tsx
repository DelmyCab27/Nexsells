import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Nunito, Anton } from 'next/font/google';

const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
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