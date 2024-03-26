/**
 * @description App component personalizado
 */

import type { AppProps } from 'next/app';
import Script from 'next/script';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

// Carga la fuente desde local
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';

// Estilos
import '@trejocode/uikit/dist/trejocode-uikit.css';
import 'styles/globals.css';

if (typeof window !== 'undefined') {
  // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug(); // debug mode in development
    },
  });
}

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="userway" data-account="cr2XyIS2q3" src="https://cdn.userway.org/widget.js" />
      <PostHogProvider client={posthog}>
        <Component {...pageProps} />
      </PostHogProvider>
    </>
  );
}

export default CustomApp;
