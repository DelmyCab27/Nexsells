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
      <head>
        <script src="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
        />
      </head>
      <body className="min-h-screen bg-white font-nunito">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}