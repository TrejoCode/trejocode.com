import CTA from './CTA';
import Image from 'next/image';
import { useLocalImage } from 'hooks/useLocalImages';

const Contact = () => {
  const images = useLocalImage();
  return (
    <div className="flex w-full justify-center bg-[#EBF3F5] py-16">
      <div className="container flex justify-center">
        <div className="flex w-full flex-col items-center rounded-2xl bg-white shadow md:flex-row lg:w-5/6">
          <div className="flex w-full flex-col py-8 pr-8 pl-8 md:w-1/2 md:pr-0">
            <span className="text-secondary-base mb-2 text-center text-base font-semibold md:text-left lg:text-lg">
              ¡Trabajemos juntos!
            </span>
            <h3 className="text-secondary-base mb-2 text-center text-3xl font-bold md:text-left lg:text-4xl">
              Conversemos
            </h3>
            <span className="text-secondary-base mb-5 text-center text-base font-semibold md:text-left lg:text-lg">
              Estoy convencido que seré la respuesta a sus necesidades.
            </span>
            <CTA />
          </div>
          <div className="flex w-full justify-end md:w-1/2">
            <Image src={images.contact} alt="Imagen de referencia de contacto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
