import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@trejocode/uikit';
import { Icon as CustomIcon } from 'components/Icon/Icon';
import { useFooterController } from './Footer.controller';

const Footer = () => {
  const { socialData, currentYear, images } = useFooterController();
  return (
    <footer className="bg-primary-alt-base flex justify-center pt-12 pb-8">
      <div className="container flex flex-col">
        <div className="mb-6 flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <Image src={images.bracketWhite} alt="Trejocode logo" className="mb-6 h-12 w-12 lg:h-16 lg:w-16" />
            <span className="mb-4 text-lg font-semibold text-white">Encuentra más:</span>
            <div className="mb-6 flex flex-row gap-x-2">
              {socialData?.map(({ id, title, url, icon }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="follow noreferrer"
                  className="flex items-center rounded focus:outline-2 focus:outline-white focus:outline-dashed"
                  aria-label="Abir enlace externo de LinkedIn"
                >
                  <span role="img" aria-hidden>
                    <CustomIcon
                      name={icon}
                      title={`${title} icono`}
                      width={24}
                      height={24}
                      ariaLabelId={`${title}-icon`}
                      classNames={'fill-white'}
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="mb-2 text-lg font-semibold text-white">Enlaces útiles</span>
            <Link
              href="/sitemap.xml"
              className="my-1 flex items-center border-b-2 border-transparent text-base font-medium text-white outline-2 outline-offset-0 outline-transparent hover:border-b-2 hover:border-dashed hover:border-white focus:rounded focus:outline-white focus:outline-dashed"
              target="_blank"
              rel="follow noreferrer"
            >
              <span className="mr-1">Mapa del sitio</span>
              <span role="img" aria-hidden>
                <Icon icon="ExternalLink" size={16} color="#ffffff" />
              </span>
            </Link>
            <Link
              href="/politicas"
              className="my-1 flex items-center border-b-2 border-transparent text-base font-medium text-white outline-2 outline-offset-0 outline-transparent hover:border-b-2 hover:border-dashed hover:border-white focus:rounded focus:outline-white focus:outline-dashed"
            >
              <span className="mr-1">Privacidad y Políticas</span>
            </Link>
            <a
              href="https://github.com/trejocode"
              className="my-1 flex items-center border-b-2 border-transparent text-base font-medium text-white outline-2 outline-offset-0 outline-transparent hover:border-b-2 hover:border-dashed hover:border-white focus:rounded focus:outline-white focus:outline-dashed"
              target="_blank"
              rel="follow noreferrer"
            >
              <span className="mr-1">Proyectos en GitHub</span>
              <span role="img" aria-hidden>
                <Icon icon="ExternalLink" size={16} color="#ffffff" />
              </span>
            </a>
            <a
              href="https://bit.ly/4cwF9xC"
              className="my-1 flex items-center border-b-2 border-transparent text-base font-medium text-white outline-2 outline-offset-0 outline-transparent hover:border-b-2 hover:border-dashed hover:border-white focus:rounded focus:outline-white focus:outline-dashed"
              target="_blank"
              rel="follow noreferrer"
            >
              <span className="mr-1">Mentorías personalizadas</span>
              <span role="img" aria-hidden>
                <Icon icon="ExternalLink" size={16} color="#ffffff" />
              </span>
            </a>
          </div>
          <div className="mt-6 flex flex-col items-center md:mt-0 md:items-start">
            <span className="mb-2 text-lg font-semibold text-white">Soporte</span>
            <Link
              href="/contacto"
              className="my-1 flex items-center border-b-2 border-transparent text-base font-medium text-white outline-2 outline-offset-0 outline-transparent hover:border-b-2 hover:border-dashed hover:border-white focus:rounded focus:outline-white focus:outline-dashed"
            >
              Contacto
            </Link>
            <Link
              href="/licencias"
              className="my-1 flex items-center border-b-2 border-transparent text-base font-medium text-white outline-2 outline-offset-0 outline-transparent hover:border-b-2 hover:border-dashed hover:border-white focus:rounded focus:outline-white focus:outline-dashed"
            >
              Licencias de código abierto
            </Link>
          </div>
        </div>
        <div className="border-primary-alt-lighten flex w-full flex-row justify-center border-t-2">
          <span className="mt-6 text-sm font-medium text-white">© {currentYear} Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
