import CTA from './CTA';
import Image from 'next/image';
import { useLocalImage } from 'hooks/useLocalImages';

const Banner = () => {
  const images = useLocalImage();

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col">
        <div className="my-20 flex w-full flex-col lg:my-36 lg:flex-row lg:items-center lg:justify-start">
          <div className="flex w-full flex-col items-center lg:items-start">
            <h1 className="xl:text-display-4 text-secondary-base mb-4 text-center text-5xl font-bold lg:text-left">
              ¡Hola, soy <span className="text-primary-base">Trejocode!</span>
              <span role="img" aria-label="Emoji saludando">
                👋
              </span>
            </h1>
            <h2 className="text-secondary-alt-base mb-1 text-center text-xl font-semibold lg:text-left xl:text-2xl">
              Desarrollo increíbles aplicaciones Web y móviles.
            </h2>
            <h2 className="text-secondary-alt-base text-center text-xl font-semibold lg:text-left xl:text-2xl">
              Rápidas, intuitivas y autoadministrables
            </h2>
            <CTA />
          </div>
          <div className="mt-8 flex w-full justify-center lg:mt-0 lg:ml-12">
            <Image src={images.banner} alt="Mockup de mis trabajos más recientes" />
          </div>
        </div>
        <div className="mb-12 flex w-full flex-col">
          <div className="row flex items-center">
            <div className="hidden flex-1 border-b border-b-neutral-200 md:flex"></div>
            <span className="text-secondary flex-2 text-center font-medium lg:flex-1">
              Activamente colaborando con las mejores compañías
            </span>
            <div className="hidden flex-1 border-b border-b-neutral-200 md:flex"></div>
          </div>
          <div className="my-4 flex w-full items-center justify-center">
            <a
              href="https://www.softtek.com/"
              target="_blank"
              rel="nofollow noreferrer"
              className="focus:outline-info-base mr-4 rounded focus:outline-2 focus:outline-dashed lg:mr-4"
            >
              <Image src={images.softtek} width={104} alt="Softtek logo" />
            </a>
            <a
              href="https://bit.ly/4cwF9xC"
              target="_blank"
              rel="nofollow noreferrer"
              className="focus:outline-info-base rounded focus:outline-2 focus:outline-dashed"
            >
              <Image src={images.superprof} width={120} height={24} alt="Superprof logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
