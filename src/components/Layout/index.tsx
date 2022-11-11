/**
 * @description <Layout /> Componente principal
 */

import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { InterfaceLayoutProps } from './types';

const PageLayout = ({
  title = 'Trejocode - Desarrollo de aplicaciones Web y móviles',
  image = 'https://res.cloudinary.com/trejocode/image/upload/v1585867983/Trejocode/og_ccf7n6.jpg',
  keywords = 'Diseño Web, Desarrollo Web, Programación, Aplicaciones, Progressive Web App, Cancún',
  description = 'Desarrollo y Diseño Web, Progressive Web Apps y Desarrollo de Software en Cancún | Trejocode',
  type = 'website',
  children,
}: InterfaceLayoutProps) => {
  return (
    <div className="page">
      <Head>
        {/** General */}
        <title>{title ? `${title} - Trejocode` : 'Trejocode - Desarrollo de aplicaciones Web y móviles'}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/** Open Graph */}
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={image} />
        <meta name="og:type" content={type} />
        <meta name="og:url" content="https://www.trejocode.com" />
        {/** Twitter */}
        <meta name="twitter:image" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
