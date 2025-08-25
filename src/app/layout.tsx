import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ReactNode } from 'react';

export const metadata = { title: 'Mon Portfolio dev web',
  description: 'Mon portfolio dev web',
  icons: {
    icon: '/Photo-profil.png',
 }
}

export default function RootLayout({ children } : { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="pt-30 lg:pt-0 bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
