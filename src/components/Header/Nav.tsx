'use client';

import { Icon } from '@trejocode/uikit';
import { Icon as CustomIcon } from 'components/Icon/Icon';
import { useHeaderController } from './Header.controller';

const Nav = () => {
  const { isMenuOpen, setIsMenuOpen, navigationData, closeButtonRef, socialData } = useHeaderController();

  return (
    <nav className="__navigation flex items-center" role="navigation">
      <ul className="flex items-center">
        <button
          type="button"
          className="focus:ring-primary-base flex h-8 w-8 items-center rounded-sm focus:ring-3 focus:outline-hidden md:hidden"
          onClick={() => setIsMenuOpen((prevSate) => !prevSate)}
          aria-expanded={isMenuOpen}
          aria-label="Abrir menú de navegación"
        >
          <span role="img" aria-hidden>
            <Icon icon="Menu" size={32} color="#000000" />
          </span>
        </button>
        <div
          className={`flex ${
            isMenuOpen && 'fadeIn bg-secondary-base fixed top-0 left-0 z-10 min-h-screen w-full flex-col'
          } md:static md:min-h-max md:flex-row`}
        >
          {isMenuOpen && (
            <div className="flex h-20 w-full items-center justify-end px-4">
              <button
                ref={closeButtonRef}
                type="button"
                className="focus:ring-primary-base h-8 w-8 rounded-sm focus:ring-3 focus:outline-hidden md:hidden"
                aria-label="Cerrrar menú de navegación"
                onClick={() => setIsMenuOpen((prevSate) => !prevSate)}
              >
                <span role="img" aria-hidden>
                  <Icon icon="X" size={32} color="#ffffff" />
                </span>
              </button>
            </div>
          )}
          <div className={`hidden md:flex ${isMenuOpen ? '!flex flex-col' : 'flex-row items-center'}`}>
            {navigationData?.map(({ id, title, url }) => (
              <li key={id} className={`focus:outline-hidden ${isMenuOpen && 'my-4 pr-6 text-right last:mb-8'}`}>
                <a
                  href={url}
                  className={`focus:outline-info-base rounded-sm font-semibold outline-2 outline-transparent transition-colors duration-150 focus:outline-dashed ${
                    isMenuOpen
                      ? 'px-0 text-lg text-white focus:outline-white'
                      : 'text-secondary-base hover:text-primary-lighten px-3 text-base'
                  } focus:text-primary-lighten`}
                >
                  {title}
                </a>
              </li>
            ))}
          </div>
          <ul className={`hidden md:flex ${isMenuOpen ? 'mr-4 !flex flex-row justify-end' : 'flex-row items-center'}`}>
            {socialData?.map(({ id, title, url, icon }) => (
              <li key={id} className="px-2 focus:outline-hidden">
                <a
                  href={url}
                  target="_blank"
                  rel="follow noreferrer"
                  className={`flex items-center rounded-sm outline-2 outline-transparent focus:outline-dashed ${
                    isMenuOpen ? 'focus:outline-white' : 'focus:outline-info-base'
                  }`}
                  aria-label={`Abir enlace externo de ${title}`}
                >
                  <span role="img" aria-hidden>
                    <CustomIcon
                      name={icon}
                      title={`${title} icono`}
                      width={isMenuOpen ? 32 : 18}
                      height={isMenuOpen ? 32 : 18}
                      ariaLabelId={`${title}-icon`}
                      classNames={isMenuOpen ? 'fill-white' : 'fill-primary-alt-base'}
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
