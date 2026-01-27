
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Angeles a tu Lado - Cuidado Médico para el Adulto Mayor',
  description: 'Servicios de acompañamiento médico, transporte y cuidado en casa para el adulto mayor en Santo Domingo, República Dominicana.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
