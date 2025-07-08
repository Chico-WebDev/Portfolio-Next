import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = { title: 'Mon Portfolio',
  description: 'Mon portfolio avec Next JS V.1.1.1',
  icons: {
    icon: '/favicon.ico',
 }
}

export default function RootLayout({ children }) {
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
