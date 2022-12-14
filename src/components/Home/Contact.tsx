/**
 * @description Componente <Contact /> de la página de inicio
 */

import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Icon } from '@trejocode/uikit';
import { openInNewTab } from 'utils/openTab';
import ImageContact from 'assets/images/contact.png';

const Contact = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="w-full flex justify-center bg-[#EBF3F5] py-16">
      <div className="container flex justify-center">
        <div className="w-full lg:w-4/5 flex flex-col md:flex-row items-center bg-white rounded-2xl shadow">
          <div className="w-full md:w-1/2 py-8 pl-8 pr-8 md:pr-0 flex flex-col">
            <span className="text-center md:text-left text-secondary-base font-semibold text-base lg:text-lg mb-2">
              ¡Trabajemos juntos!
            </span>
            <h3 className="text-center md:text-left text-secondary-base font-bold text-3xl lg:text-4xl mb-2">
              Conversemos
            </h3>
            <span className="text-center md:text-left text-secondary-base text-base lg:text-lg font-semibold mb-5">
              Estoy convencido que seré la respuesta a sus necesidades.
            </span>
            <div className="flex justify-center md:justify-start">
              <Button
                type="button"
                variation="filled"
                size="default"
                color="primary"
                classNames="!px-4 !sm:px-6"
                onClick={() => router.push('/contacto')}
              >
                Ir a contacto
              </Button>
              <Button
                type="button"
                variation="filled"
                size="default"
                color="primaryAlt"
                classNames="!px-4 !sm:px-6 ml-2"
                onClick={() =>
                  openInNewTab(
                    'https://docs.google.com/document/d/1ckTFHIer980VIhIpCVdd3yAaKGQpDbGzzMr-VOPBwqg/edit?usp=sharing'
                  )
                }
              >
                <span className="mr-1">Descargar CV</span>
                <Icon icon="FileText" size={16} className="stroke-white" aria-hidden />
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <Image src={ImageContact} alt="Imagen de referencia de contacto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
