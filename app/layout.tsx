import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ORTHOCLINIX | Ortodoncia premium en Ciudad de Panamá',
  description: 'Landing page premium para ORTHOCLINIX con enfoque en ortodoncia, evaluación y captación de prospectos por WhatsApp en Ciudad de Panamá.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico']
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="font-[var(--font-sans)] antialiased">{children}</body>
    </html>
  );
}
