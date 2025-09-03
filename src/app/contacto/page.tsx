import { Metadata } from 'next';
import Form from 'components/Contact/Form';
import { Icon, Colors } from '@trejocode/uikit';

export const metadata: Metadata = {
  title: 'Contacto - Trejocode',
};

const PageContact = () => {
  return (
    <div className="min-h-70vh w-full bg-[#EBF3F5]">
      <div className="flex justify-center">
        <div className="text-secondary-base container my-16 flex flex-col">
          <div className="flex flex-col lg:flex-row">
            <div className="flex w-full flex-col pr-4 lg:w-2/5">
              <h2 className="mb-4 text-2xl font-semibold lg:text-4xl">Contáctame</h2>
              <p className="text-base font-medium">Estoy convencido que seré la respuesta a sus necesidades.</p>
              <div className="border-gray/25 my-8 border" />
              <span className="text-secondary-base my-2 text-base font-semibold">Cuartel secreto:</span>
              <div className="flex flex-row items-center px-2">
                <Icon icon="Home" color={Colors.secondary.base} className="h-4 w-4" />
                <span className="text-secondary-base ml-2 text-base font-medium">Cancún, Quintana Roo, México</span>
              </div>
              <span className="text-secondary-base my-2 mt-8 text-base font-semibold">Correo electrónico:</span>
              <div className="flex flex-row items-center px-2">
                <Icon icon="Mail" color={Colors.secondary.base} className="h-4 w-4" />
                <a
                  href="mailto:hola@trejocode.com"
                  className="text-secondary-base focus:outline-info-base ml-2 rounded text-base font-medium outline-2 outline-transparent focus:outline-dashed"
                >
                  hola@trejocode.com
                </a>
              </div>
              <span className="text-secondary-base my-2 mt-8 text-base font-semibold">Teléfono:</span>
              <div className="flex flex-row items-center px-2">
                <Icon icon="Mail" color={Colors.secondary.base} className="h-4 w-4" />
                <a
                  href="tel:+529983000000"
                  className="text-secondary-base focus:outline-info-base ml-2 rounded text-base font-medium outline-2 outline-transparent focus:outline-dashed"
                >
                  +52 (998) 300 0000
                </a>
              </div>
            </div>
            <div className="mt-8 w-full lg:mt-0 lg:w-3/5">
              <div className="flex flex-col rounded-2xl bg-white p-6 lg:ml-16 lg:p-8">
                <span className="text-secondary-base mb-2 text-2xl font-bold">¿Cómo puedo ayudarte?</span>
                <span className="text-secondary-base text-base font-semibold">
                  Ayúdame un poco, tu información estará protegida en todo momento
                </span>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContact;
