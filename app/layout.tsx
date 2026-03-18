import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ORTHOCLINIX | Ortodoncia premium en Ciudad de Panamá',
  description: 'Landing page premium para ORTHOCLINIX con enfoque en ortodoncia, evaluación y captación de prospectos por WhatsApp en Ciudad de Panamá.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="font-[var(--font-sans)] antialiased">{children}</body>
    </html>
  );
}
