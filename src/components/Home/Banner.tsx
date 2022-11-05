/**
 * @description Componente <Banner /> de la página de inicio
 */

import Image from 'next/image';
import { Button, Icon } from '@trejocode/uikit';

// Images
import ImageBanner from 'assets/images/hero.png';
import ImageWoonkly from 'assets/images/woonkly.svg';
import ImageSuperProf from 'assets/images/superprof.svg';
import ImageGitHub from 'assets/images/github-text.svg';

const Banner = (): JSX.Element => (
  <>
    <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-start my-20 lg:my-36">
      <div className="flex w-full flex-col items-center lg:items-start">
        <h1 className="text-center lg:text-left text-5xl xl:text-display-4 text-secondary-base font-bold mb-4">
          ¡Hola, soy <span className="text-primary-base">Trejocode!</span>
          <span role="img" aria-label="Emoji saludando">
            👋
          </span>
        </h1>
        <h2 className="text-center lg:text-left text-xl xl:text-2xl font-semibold text-secondaryAlt-base mb-1">
          Desarrollo increíbles aplicaciones Web y móviles
        </h2>
        <h2 className="text-center lg:text-left text-xl xl:text-2xl font-semibold text-secondaryAlt-base">
          Rápidas, intuitivas y autoadministrables
        </h2>
        <div className="flex my-5">
          <Button variation="filled" color="primary" size="default" type="button" classNames="!px-4 !sm:px-6">
            <span className="mr-1">Conocer más</span>
            <Icon icon="ChevronRight" size={16} className="stroke-white" aria-hidden />
          </Button>
          <Button variation="filled" color="primaryAlt" size="default" type="button" classNames="ml-2 !px-4 !sm:px-6">
            <span className="mr-1">Descargar CV</span>
            <Icon icon="FileText" size={16} className="stroke-white" aria-hidden />
          </Button>
        </div>
      </div>
      <div className="flex w-full justify-center lg:ml-12 mt-8 lg:mt-0">
        <Image src={ImageBanner} alt="Mockup de mis trabajos más recientes" />
      </div>
    </div>
    <div className="w-full flex flex-col mb-12">
      <div className="flex row items-center">
        <div className="flex-1 border-b border-b-neutral-200"></div>
        <span className="flex-2 lg:flex-1 text-center font-medium text-secondary">
          Activamente colaborando con las mejores compañías
        </span>
        <div className="flex-1 border-b border-b-neutral-200"></div>
      </div>
      <div className="w-full flex justify-center items-center my-4">
        <a
          href="https://woonkly.com"
          target="_blank"
          rel="nofollow noreferrer"
          className="mr-4 lg:mr-2 rounded focus:outline-dashed focus:outline-2 focus:outline-info-base"
        >
          <Image src={ImageWoonkly} width={100} height={24} alt="Woonkly logo" />
        </a>
        <a
          href="https://bit.ly/3ngHBR7"
          target="_blank"
          rel="nofollow noreferrer"
          className="mr-4 lg:mr-2 rounded focus:outline-dashed focus:outline-2 focus:outline-info-base"
        >
          <Image src={ImageSuperProf} width={120} height={24} alt="Superprof logo" />
        </a>
        <a
          href="https://github.com/trejocode"
          target="_blank"
          rel="follow noreferrer"
          className="rounded focus:outline-dashed focus:outline-2 focus:outline-info-base"
        >
          <Image src={ImageGitHub} alt="Github logo" />
        </a>
      </div>
    </div>
  </>
);

export default Banner;
