import './globals.css';
import BootstrapClient from '@/components/BootstrapClient';
import MyNavbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <MyNavbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}