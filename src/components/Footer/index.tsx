/**
 * @description <Footer /> Componente
 */

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@trejocode/uikit';
// Imágenes
import SvgLinkedIn from 'assets/svg/LinkedIn';
import SvgFacebook from 'assets/svg/Facebook';
import SvgYoutube from 'assets/svg/Youtube';
import SvgInstagram from 'assets/svg/Instagram';
import ImageLogo from 'assets/icons/footer/brackets-web-white.svg';

const date = new Date();
const currentYear = date.getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer className="flex justify-center bg-primaryAlt-base pt-12 pb-8">
      <div className="container flex flex-col">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-6">
          <div className="flex flex-col items-center md:items-start">
            <Image src={ImageLogo} alt="Trejocode logo" className="w-12 h-12 lg:w-16 lg:h-16 mb-6" />
            <span className="text-white text-lg font-medium mb-4">Encuentra más:</span>
            <div className="flex flex-row mb-6">
              <a
                href="https://www.linkedin.com/in/trejocode"
                target="_blank"
                rel="follow noreferrer"
                className="flex items-center rounded focus:outline-none focus:ring focus:ring-white pr-2"
                aria-label="Abir enlace externo de LinkedIn"
              >
                <span role="img" aria-hidden>
                  <SvgLinkedIn
                    title="LinkedIn icon"
                    width={24}
                    height={24}
                    ariaLabelId="linkedin-icon"
                    classNames="fill-white"
                  />
                </span>
              </a>
              <a
                href="https://www.facebook.com/TrejoCode"
                target="_blank"
                rel="follow noreferrer"
                className="flex items-center rounded focus:outline-none focus:ring focus:ring-white px-2"
                aria-label="Abir enlace externo de Facebook"
              >
                <span role="img" aria-hidden>
                  <SvgFacebook
                    title="Facebook icon"
                    width={24}
                    height={24}
                    ariaLabelId="facebook-icon"
                    classNames="fill-white"
                  />
                </span>
              </a>
              <a
                href="https://www.youtube.com/trejocode"
                target="_blank"
                rel="follow noreferrer"
                className="flex items-center rounded focus:outline-none focus:ring focus:ring-white px-2"
                aria-label="Abir enlace externo de youtube"
              >
                <span role="img" aria-hidden>
                  <SvgYoutube
                    title="Youtube icon"
                    width={24}
                    height={24}
                    ariaLabelId="youtube-icon"
                    classNames="fill-white"
                  />
                </span>
              </a>
              <a
                href="https://www.instagram.com/trejocode"
                target="_blank"
                rel="follow noreferrer"
                className="flex items-center rounded focus:outline-none focus:ring focus:ring-white pl-2"
                aria-label="Abir enlace externo de Instagram"
              >
                <span role="img" aria-hidden>
                  <SvgInstagram
                    title="Instagram icon"
                    width={24}
                    height={24}
                    ariaLabelId="instagram-icon"
                    classNames="fill-white"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white text-lg font-medium mb-2">Enlaces útiles:</span>
            <Link
              href="/sitemap.xml"
              className="flex items-center text-white font-semibold text-base outline-2 focus:outline-dashed focus:outline-white rounded my-1"
              target="_blank"
              rel="follow noreferrer"
            >
              <span className="mr-1">Mapa del sitio</span>
              <span role="img" aria-hidden>
                <Icon icon="ExternalLink" size={16} className="stroke-white" />
              </span>
            </Link>
            <Link
              href="/politicas"
              className="flex items-center text-white font-semibold text-base mr-3 outline-2 focus:outline-dashed focus:outline-white rounded my-1"
            >
              <span className="mr-1">Privacidad y Políticas</span>
            </Link>
            <a
              href="https://github.com/trejocode"
              className="flex items-center text-white font-semibold text-base outline-2 focus:outline-dashed focus:outline-white rounded my-1"
              target="_blank"
              rel="follow noreferrer"
            >
              <span className="mr-1">Proyectos en GitHub</span>
              <span role="img" aria-hidden>
                <Icon icon="ExternalLink" size={16} className="stroke-white" />
              </span>
            </a>
            <a
              href="https://www.superprof.mx/programacion-desarrollo-web-aplicaciones-html-css-javascript-react-node-frontend-backend-desde-hasta-fullstack.html"
              className="flex items-center text-white font-semibold text-base outline-2 focus:outline-dashed focus:outline-white rounded my-1"
              target="_blank"
              rel="follow noreferrer"
            >
              <span className="mr-1">Mentorías personalizadas</span>
              <span role="img" aria-hidden>
                <Icon icon="ExternalLink" size={16} className="stroke-white" />
              </span>
            </a>
          </div>
          <div className="flex flex-col mt-6 md:mt-0 items-center md:items-start">
            <span className="text-white text-lg font-medium mb-2">Soporte:</span>
            <Link
              href="/contacto"
              className="flex items-center text-white font-semibold text-base mr-3 outline-2 focus:outline-dashed focus:outline-white rounded my-1"
            >
              <span className="mr-1">Contacto</span>
            </Link>
            <Link
              href="/licencias"
              className="flex items-center text-white font-semibold text-base mr-3 outline-2 focus:outline-dashed focus:outline-white rounded my-1"
            >
              <span className="mr-1">Licencias de código abierto</span>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center border-t-2 border-primaryAlt-lighten">
          <span className="text-white font-semibold text-sm mt-6">© {currentYear} Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
