import Script from 'next/script';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import { fontConfig } from 'config/fonts';
import Layout from 'components/Layout/Layout';
import '@trejocode/uikit/styles';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trejocode - Desarrollo de aplicaciones Web y móviles',
  description: 'Desarrollo y Diseño Web, Progressive Web Apps y Desarrollo de Software en Cancún | Trejocode',
  authors: { name: 'Trejocode' },
  keywords: 'Diseño Web, Desarrollo Web, Programación, Aplicaciones, Progressive Web Apps, Cancún',
  openGraph: {
    type: 'website',
    images: { url: 'https://res.cloudinary.com/trejocode/image/upload/v1585867983/Trejocode/og_ccf7n6.jpg' },
    description: 'Desarrollo y Diseño Web, Progressive Web Apps y Desarrollo de Software en Cancún | Trejocode',
    title: 'Trejocode - Desarrollo de aplicaciones Web y móviles',
    url: 'https://www.trejocode.com',
  },
  twitter: {
    creator: '@trejocode',
    images: 'https://res.cloudinary.com/trejocode/image/upload/v1585867983/Trejocode/og_ccf7n6.jpg',
    description: 'Desarrollo y Diseño Web, Progressive Web Apps y Desarrollo de Software en Cancún | Trejocode',
    title: 'Trejocode - Desarrollo de aplicaciones Web y móviles',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fontConfig.globalFont.variable}`}>
        <Layout>{children}</Layout>
        <Toaster position="top-right" />
      </body>
      <Script data-account="cr2XyIS2q3" src="https://cdn.userway.org/widget.js" />
    </html>
  );
}
