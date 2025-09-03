import { Metadata } from 'next';
import { Icon, Colors } from '@trejocode/uikit';
import type { TypeLicense } from 'app/licencias/model';
import { useLicensesController } from 'controllers/licenses/controller';

export const metadata: Metadata = {
  title: 'Licencias de uso - Trejocode',
};

const PageLicenses = () => {
  const { licenses } = useLicensesController();
  return (
    <div className="w-full bg-[#EBF3F5]">
      <div className="flex justify-center">
        <div className="text-secondary-base container my-16 flex flex-col text-justify">
          <h2 className="mb-8 text-2xl font-semibold lg:text-4xl">LICENCIAS DE CÓDIGO ABIERTO Y AGRADECIMIENTOS</h2>
          <p className="leading-8">
            En TrejoCode apostamos al código abierto, el código abierto es software que se crea y distribuye para que
            multitud de equipos y desarrolladores puedan modificar y aportar libremente nuevas características o
            revisiones para su desarrollo y actualización continua. Este sitio Web utiliza código abierto
          </p>
          <h3 className="my-8 text-2xl font-semibold">Multimedia</h3>
          {licenses.map(({ url, title, link, author }: TypeLicense, key) => (
            <div key={key} className="mb-6 flex w-1/2 flex-col lg:w-1/4">
              <a href={url} target="_blank" rel="noreferrer" className="flex items-center pb-1 leading-8 font-medium">
                {title}
                <span aria-hidden>
                  <Icon icon="ExternalLink" color={Colors.secondary.base} size={16} className="ml-1" />
                </span>
              </a>
              <a href={link} target="_blank" rel="noreferrer" className="flex items-center pb-1 leading-8 font-medium">
                {author}
                <span aria-hidden>
                  <Icon icon="ExternalLink" color={Colors.secondary.base} size={16} className="ml-1" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLicenses;
