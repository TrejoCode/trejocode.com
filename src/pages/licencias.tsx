/**
 * @description Página "/licencias"
 */

import PageLayout from 'components/Layout';
import { Icon } from '@trejocode/uikit';
import { LICENSES_DATA, InterfaceLicense } from 'data/licenses';

const PageLicenses = (): JSX.Element => (
  <div className="w-full">
    <PageLayout title="Licencias de código abierto y agradecimientos">
      <main className="w-full bg-[#EBF3F5]">
        <div className="flex justify-center">
          <div className="container flex flex-col my-16 text-secondary-base text-justify">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-8">LICENCIAS DE CÓDIGO ABIERTO Y AGRADECIMIENTOS</h2>
            <p className="leading-8">
              En TrejoCode apostamos al código abierto, el código abierto es software que se crea y distribuye para que
              multitud de equipos y desarrolladores puedan modificar y aportar libremente nuevas características o
              revisiones para su desarrollo y actualización continua. Este sitio Web utiliza código abierto
            </p>
            <h3 className="font-semibold text-2xl my-8">Multimedia</h3>
            {LICENSES_DATA?.map(({ url, title, link, author }: InterfaceLicense, key) => (
              <div key={key} className="flex flex-col w-1/2 lg:w-1/4 mb-6">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-8 flex items-center font-medium underline"
                >
                  {title}
                  <span aria-hidden>
                    <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                  </span>
                </a>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-8 flex items-center font-medium underline"
                >
                  {author}
                  <span aria-hidden>
                    <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageLayout>
  </div>
);

export default PageLicenses;
