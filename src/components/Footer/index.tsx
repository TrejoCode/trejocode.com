/**
 * @description <Footer /> Componente
 */

import Link from 'next/link';
import { Icon } from '@trejocode/uikit';

const Footer = (): JSX.Element => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="flex justify-center bg-primaryAlt-base py-10">
      <div className="container flex justify-between items-center">
        <div className="__trademark">
          <span className="text-white font-semibold text-base">© {currentYear} Todos los derechos reservados</span>
        </div>
        <div className="__links flex">
          <Link
            href="/politicas"
            className="flex items-center text-white font-semibold text-base mr-3 outline-2 focus:outline-dashed focus:outline-white rounded"
          >
            <span className="mr-1">Privacidad y Políticas</span>
            <span role="img" aria-hidden>
              <Icon icon="ExternalLink" size={16} className="stroke-white" />
            </span>
          </Link>
          <Link
            href="/sitemap.xml"
            className="flex items-center text-white font-semibold text-base ml-3 outline-2 focus:outline-dashed focus:outline-white rounded"
          >
            <span className="mr-1">Mapa del sitio</span>
            <span role="img" aria-hidden>
              <Icon icon="ExternalLink" size={16} className="stroke-white" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
