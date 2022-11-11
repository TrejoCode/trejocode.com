/**
 * @description Componente <About /> de la página de inicio
 */

import Image from 'next/image';
import { Icon } from '@trejocode/uikit';
import ImageMe from 'assets/images/me.jpg';

const About = (): JSX.Element => (
  <div className="w-full flex justify-center bg-white py-16 pb-6 lg:py-24" id="conoceme">
    <div className="container flex flex-col">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-2/5 xl:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <figure className="lg:mr-8">
            <Image src={ImageMe} alt="Trejocode photo" className="rounded-2xl" />
            <figcaption className="font-medium text-center mt-2 text-secondary-base">
              Me, feliz porque visitas mi Web
            </figcaption>
          </figure>
        </div>
        <div className="w-full lg:w-3/5 xl:w-1/2 flex flex-col">
          <h2 className="font-bold text-2xl md:text-4xl text-secondary-base mb-6">
            <span className="text-primaryAlt-base">{'{'} </span>
            Me: Sergio Alejandro Trejo
            <span className="text-primaryAlt-base"> {'}'}</span>
          </h2>
          <p className="font-semibold text-base md:text-lg text-secondary-base mb-4">
            Ingeniero en Software, entusiasta del desarrollo Web, desde Cancún, México{' '}
            <span role="img" aria-label="Emoji caribeño">
              🏖️
            </span>
          </p>
          <p className="font-medium text-base md:text-lg text-secondary-base mb-4">
            Cursé en la Universidad Politécnica de Quintana Roo la Ingeniería en Software de generación 2015 - 2018
          </p>
          <p className="font-medium text-base md:text-lg text-secondary-base mb-6">
            He adquirido conocimiento en desarrollo Web, Apps móviles, sistemas operativos y desarrollo de Software en
            general.
          </p>
          <h3 className="font-bold text-2xl text-secondary-base mb-6">
            <span className="text-primaryAlt-base">{'{'} </span>
            Empleo
            <span className="text-primaryAlt-base"> {'}'}</span>
          </h3>
          <p className="flex flex-row flex-wrap font-medium text-base md:text-lg text-secondary-base mb-4">
            <span className="font-semibold mr-1">Actualidad: </span>
            <span className="flex flex-row">
              <a
                href="https://www.woonkly.com"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex flex-row items-center w-auto"
              >
                <span className="mr-1">Woonkly</span>
                <Icon icon="ExternalLink" size={16} className="stroke-secondary-base" aria-hidden />
              </a>
              <span className="ml-1">- Ssr Frontend Developer</span>
            </span>
          </p>
          <p className="flex flex-row flex-wrap font-medium text-base md:text-lg text-secondary-base mb-6">
            <span className="font-semibold mr-1">Mentorías: </span>
            <span className="flex flex-row">
              <a
                href="https://bit.ly/3ngHBR7"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex flex-row items-center w-auto"
              >
                <span className="mr-1">Superprof</span>
                <Icon icon="ExternalLink" size={16} className="stroke-secondary-base" aria-hidden />
              </a>
              <span className="ml-1">- Web development mentor</span>
            </span>
          </p>
          <h3 className="font-bold text-2xl text-secondary-base mb-6">
            <span className="text-primaryAlt-base">{'{'} </span>
            2023
            <span className="text-primaryAlt-base"> {'}'}</span>
          </h3>
          <p className="font-medium text-base md:text-lg text-secondary-base mb-4">
            - Convertirme en Blockchain Developer, hola Web 3.0
          </p>
          <p className="font-medium text-base md:text-lg text-secondary-base mb-4">
            - Dominar Accesibilidad Web, ninguna discapacidad debe limitar la Web
          </p>
          <p className="font-medium text-base md:text-lg text-secondary-base mb-4">- Empezar en el idioma Portugués</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
