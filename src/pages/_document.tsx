/**
 * @description Document component personalizado
 */

import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="es_MX">
        <Head>
          {/** Common meta data */}
          <meta charSet="utf-8" />
          <meta name="robots" content="index" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content="Trejocode" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#3E816D" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
