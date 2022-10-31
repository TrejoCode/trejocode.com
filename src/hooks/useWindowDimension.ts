/**
 * @descriptio Obtener la altura y anchura del viewport/window
 */

import { useEffect, useState } from 'react';

interface InterfaceWindowDimentions {
  width: number | undefined;
  height: number | undefined;
}

const useWindowDimensions = (): InterfaceWindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<InterfaceWindowDimentions>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
