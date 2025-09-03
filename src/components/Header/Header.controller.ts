import { navigationConfig } from 'config/routes';
import { useState, useEffect, useRef } from 'react';
import useWindowDimensions from 'hooks/useWindowDimension';

export const useHeaderController = () => {
  const { width } = useWindowDimensions();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { navigationData, socialData } = navigationConfig;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  /**
   * @description Escuchar todos los cambios del window "width", previene mostrar el menú al ajustar la ventana
   */
  useEffect(() => {
    if (width && width > 768) {
      setIsMenuOpen(false);
    }
  }, [width, setIsMenuOpen]);

  /**
   * @description Al abrir el menú enfocar el botón de cerrar, para mejorar la accesibilidad
   */
  useEffect(() => {
    if (isMenuOpen) {
      closeButtonRef?.current?.focus();
    }
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    socialData,
    closeButtonRef,
    navigationData,
    setIsMenuOpen,
  };
};
