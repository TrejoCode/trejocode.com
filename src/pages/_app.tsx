/**
 * @description App component personalizado
 */

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Script from 'next/script';
import splitbee from '@splitbee/web';

// Carga la fuente desde local
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';

// Estilos
import '@trejocode/uikit/dist/trejocode-uikit.css';
import 'styles/globals.css';

function CustomApp({ Component, pageProps }: AppProps) {
  // Inicializar Splitbee analytics
  useEffect((): void => {
    splitbee.init({
      scriptUrl: '/bee.js',
      apiUrl: '/_hive',
    });
  }, []);

  return (
    <>
      <Script id="userway" data-account="cr2XyIS2q3" src="https://cdn.userway.org/widget.js" />
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
