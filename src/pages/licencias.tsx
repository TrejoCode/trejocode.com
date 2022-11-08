/**
 * @description Página "/licencias"
 */

import PageLayout from 'components/Layout';
import { Icon } from '@trejocode/uikit';

const PageLicences = (): JSX.Element => (
  <div className="w-full">
    <PageLayout title="Licencias de código abierto y agradecimientos">
      <main className="w-full">
        <div className="flex justify-center">
          <div className="container flex flex-col my-16 text-secondary-base text-justify">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-8">LICENCIAS DE CÓDIGO ABIERTO Y AGRADECIMIENTOS</h2>
            <p className="leading-8">
              En TrejoCode apostamos al código abierto, el código abierto es software que se crea y distribuye para que
              multitud de equipos y desarrolladores puedan modificar y aportar libremente nuevas características o
              revisiones para su desarrollo y actualización continua. Este sitio Web utiliza código abierto
            </p>
            <h3 className="font-semibold text-2xl my-8">Multimedia</h3>
            <div className="flex flex-col w-1/2 lg:w-1/4 mb-6">
              <a
                href="https://feathericons.com/"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Feather Icons
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
              <a
                href="https://twitter.com/colebemis"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Cole Bemis
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
            </div>

            <div className="flex flex-col w-1/2 lg:w-1/4 my-6">
              <a
                href="https://www.pexels.com/es-es/video/pantalla-del-monitor-de-computadora-2278095/"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Pantalla Del Monitor De Computadora
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
              <a
                href="https://www.pexels.com/es-es/@inforexplore/"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Joseph Redfield
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
            </div>

            <div className="flex flex-col w-1/2 lg:w-1/4 my-6">
              <a
                href="https://coverr.co/es/videos/navegando-colecciones-nft-6vbTzmEx8v"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Navegando colecciones NFT
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
              <a
                href="https://coverr.co/es/videos/navegando-colecciones-nft-6vbTzmEx8v"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Coverr
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
            </div>

            <div className="flex flex-col w-1/2 lg:w-1/4 my-6">
              <a
                href="https://www.pexels.com/es-es/video/telefono-inteligente-telefono-movil-movil-telefonos-moviles-4201543/"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Télefonos móviles 4201543
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
              <a
                href="https://www.pexels.com/es-es/@foysal-ahmed-2102283/"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Foysal Ahmed
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
            </div>

            <div className="flex flex-col w-1/2 lg:w-1/4 my-6">
              <a
                href="https://www.pexels.com/es-es/video/gente-escritorio-trabajando-amigos-4974769/"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Gente trabajando
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
              <a
                href="https://www.pexels.com/es-es/@olia-danilevich/"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Olia Danilevich
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
            </div>

            <div className="flex flex-col w-1/2 lg:w-1/4 my-6">
              <a
                href="https://github.com/tailwindlabs/tailwindcss"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Tailwind CSS
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
              <a
                href="https://github.com/tailwindlabs/tailwindcss"
                target="_blank"
                rel="noreferrer"
                className="leading-8 flex items-center font-medium underline"
              >
                Tailwind Labs
                <span aria-hidden>
                  <Icon icon="ExternalLink" className="stroke-secondary-base w-4 h-4 ml-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  </div>
);

export default PageLicences;
