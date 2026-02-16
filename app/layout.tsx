
import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script'; // Ensure this is imported
import FacebookPixel from '../components/FacebookPixel';
import ScrollDepthTracker from '../components/ScrollDepthTracker'; // Import the new component

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
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
            `,
          }}
        />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-50 text-slate-900">
        {children}
        <FacebookPixel />
        <ScrollDepthTracker />
        </body>
        </html>);
}

