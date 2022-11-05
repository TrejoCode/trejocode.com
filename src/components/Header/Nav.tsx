/**
 * @description Componente <Nav>
 */
import { useState, useEffect, useRef } from 'react';
import { Icon } from '@trejocode/uikit';
import useWindowDimensions from 'hooks/useWindowDimension';
// Imágenes
import SvgLinkedIn from 'assets/svg/LinkedIn';
import SvgFacebook from 'assets/svg/Facebook';
import SvgYoutube from 'assets/svg/Youtube';
import SvgInstagram from 'assets/svg/Instagram';

// Enlaces de navegación
import navigationData from './data.json';

const Nav = (): JSX.Element => {
  const { navigation } = navigationData;
  const { width } = useWindowDimensions();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  /**
   * Escuchar todos los cambios del window "width", previene mostrar el menú al ajustar la ventana
   */
  useEffect(() => {
    if (width && width > 768) {
      setOpenMenu(false);
    }
  }, [width]);

  /**
   * Al abrir el menú enfocar el botón de cerrar, para mejorar la accesibilidad
   */
  useEffect(() => {
    if (openMenu) {
      closeRef?.current?.focus();
    }
  }, [openMenu]);

  return (
    <nav className="__navigation flex items-center" role="navigation">
      <ul className="flex items-center">
        {/** Hamburger/Close menu icons */}
        <button
          type="button"
          className="flex items-center w-8 h-8 md:hidden rounded focus:ring focus:ring-primary-base focus:outline-none"
          onClick={() => setOpenMenu((prevSate) => !prevSate)}
          aria-expanded={openMenu}
          aria-label="Abrir menú de navegación"
        >
          <span role="img" aria-hidden>
            <Icon icon="Menu" size={32} className="stroke-black" />
          </span>
        </button>
        <div
          className={`flex ${
            openMenu && 'fadeIn z-10 w-full flex-col fixed min-h-screen bg-secondary-base top-0 left-0'
          } md:static md:flex-row md:min-h-max`}
        >
          {openMenu && (
            <div className="w-full flex justify-end items-center px-4 h-20">
              <button
                ref={closeRef}
                type="button"
                className="w-8 h-8 md:hidden rounded focus:ring focus:ring-primary-base focus:outline-none"
                aria-label="Cerrrar menú de navegación"
                onClick={() => setOpenMenu((prevSate) => !prevSate)}
              >
                <span role="img" aria-hidden>
                  <Icon icon="X" size={32} className="stroke-white" />
                </span>
              </button>
            </div>
          )}
          {/** Navigation links */}
          <div className={`hidden md:flex ${openMenu ? '!flex flex-col' : 'flex-row items-center'}`}>
            {navigation?.map(({ id, title, url }) => (
              <li key={id} className={`focus:outline-none ${openMenu && 'my-4 pr-6 last:mb-8 text-right'}`}>
                <a
                  href={url}
                  className={`px-3 duration-150 transition-colors font-semibold outline-2 focus:outline-dashed focus:outline-info-base rounded ${
                    openMenu
                      ? 'text-lg text-white focus:outline-white'
                      : 'text-base text-secondary-base hover:text-primary-lighten'
                  }   focus:text-primary-lighten`}
                >
                  {title}
                </a>
              </li>
            ))}
          </div>
          {/** Social links */}
          <div className={`hidden md:flex ${openMenu ? '!flex flex-row justify-end mr-4' : 'flex-row items-center'}`}>
            <li className="px-2 focus:outline-none">
              <a
                href="https://www.linkedin.com/in/trejocode"
                target="_blank"
                rel="follow noreferrer"
                className={`flex items-center rounded focus:outline-none focus:ring ${
                  openMenu ? 'focus:ring-white' : ' focus:ring-info-base'
                }`}
                aria-label="Abir enlace externo de LinkedIn"
              >
                <span role="img" aria-hidden>
                  <SvgLinkedIn
                    title="LinkedIn icon"
                    width={openMenu ? 32 : 18}
                    height={openMenu ? 32 : 18}
                    ariaLabelId="linkedin-icon"
                    classNames={openMenu ? 'fill-white' : 'fill-primaryAlt-base'}
                  />
                </span>
              </a>
            </li>
            <li className="px-2">
              <a
                href="https://www.facebook.com/TrejoCode"
                target="_blank"
                rel="follow noreferrer"
                className={`flex items-center rounded focus:outline-none focus:ring ${
                  openMenu ? 'focus:ring-white' : ' focus:ring-info-base'
                }`}
                aria-label="Abir enlace externo de Facebook"
              >
                <span role="img" aria-hidden>
                  <SvgFacebook
                    title="Facebook icon"
                    width={openMenu ? 32 : 18}
                    height={openMenu ? 32 : 18}
                    ariaLabelId="facebook-icon"
                    classNames={openMenu ? 'fill-white' : 'fill-primaryAlt-base'}
                  />
                </span>
              </a>
            </li>
            <li className="px-2">
              <a
                href="https://www.youtube.com/trejocode"
                target="_blank"
                rel="follow noreferrer"
                className={`flex items-center rounded focus:outline-none focus:ring ${
                  openMenu ? 'focus:ring-white' : ' focus:ring-info-base'
                }`}
                aria-label="Abir enlace externo de youtube"
              >
                <span role="img" aria-hidden>
                  <SvgYoutube
                    title="Youtube icon"
                    width={openMenu ? 32 : 18}
                    height={openMenu ? 32 : 18}
                    ariaLabelId="youtube-icon"
                    classNames={openMenu ? 'fill-white' : 'fill-primaryAlt-base'}
                  />
                </span>
              </a>
            </li>
            <li className="px-2">
              <a
                href="https://www.instagram.com/trejocode"
                target="_blank"
                rel="follow noreferrer"
                className={`flex items-center rounded focus:outline-none focus:ring ${
                  openMenu ? 'focus:ring-white' : ' focus:ring-info-base'
                }`}
                aria-label="Abir enlace externo de Instagram"
              >
                <span role="img" aria-hidden>
                  <SvgInstagram
                    title="Instagram icon"
                    width={openMenu ? 32 : 18}
                    height={openMenu ? 32 : 18}
                    ariaLabelId="instagram-icon"
                    classNames={openMenu ? 'fill-white' : 'fill-primaryAlt-base'}
                  />
                </span>
              </a>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
