import Image from 'next/image';
import { Icon, Colors } from '@trejocode/uikit';
import { useLocalImage } from 'hooks/useLocalImages';

const About = () => {
  const images = useLocalImage();
  return (
    <div className="flex w-full justify-center bg-white py-16 pb-6 lg:py-24" id="conoceme">
      <div className="container flex flex-col">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="mb-8 flex w-full items-center justify-center lg:mb-0 lg:w-2/5 xl:w-1/2">
            <figure className="lg:mr-8">
              <Image src={images.me} alt="Trejocode photo" className="rounded-2xl" />
              <figcaption className="text-secondary-base mt-2 text-center font-medium">
                Me, feliz porque visitas mi Web
              </figcaption>
            </figure>
          </div>
          <div className="flex w-full flex-col lg:w-3/5 xl:w-1/2">
            <h2 className="text-secondary-base mb-6 text-2xl font-bold md:text-4xl">
              <span className="text-primary-alt-base">{'{'} </span>
              Me: Sergio Alejandro Trejo
              <span className="text-primary-alt-base"> {'}'}</span>
            </h2>
            <p className="text-secondary-base mb-4 text-base font-semibold md:text-lg">
              Ingeniero en Software, entusiasta del desarrollo Web, desde Cancún, México{' '}
              <span role="img" aria-label="Emoji caribeño">
                🏖️
              </span>
            </p>
            <p className="text-secondary-base mb-4 text-base font-medium md:text-lg">
              Cursé en la Universidad Politécnica de Quintana Roo la Ingeniería en Software de generación 2015 - 2018
            </p>
            <p className="text-secondary-base mb-6 text-base font-medium md:text-lg">
              He adquirido conocimiento en desarrollo Web, Apps móviles, sistemas operativos y desarrollo de Software en
              general.
            </p>
            <h3 className="text-secondary-base mb-6 text-2xl font-bold">
              <span className="text-primary-alt-base">{'{'} </span>
              Empleo
              <span className="text-primary-alt-base"> {'}'}</span>
            </h3>
            <p className="text-secondary-base mb-4 flex flex-row flex-wrap text-base font-medium md:text-lg">
              <span className="mr-1 font-semibold">Actualidad: </span>
              <span className="flex flex-row">
                <a
                  href="https://softtek.com/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="flex w-auto flex-row items-center"
                >
                  <span className="mr-1">Softtek</span>
                  <Icon icon="ExternalLink" size={16} color={Colors.secondary.base} ariaHidden="true" />
                </a>
                <span className="ml-1">- Sr React Native Developer</span>
              </span>
            </p>
            <p className="text-secondary-base mb-6 flex flex-row flex-wrap text-base font-medium md:text-lg">
              <span className="mr-1 font-semibold">Mentorías: </span>
              <span className="flex flex-row">
                <a
                  href="https://bit.ly/4cwF9xC"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="flex w-auto flex-row items-center"
                >
                  <span className="mr-1">Superprof</span>
                  <Icon icon="ExternalLink" size={16} color={Colors.secondary.base} ariaHidden="true" />
                </a>
                <span className="ml-1">- Web development mentor</span>
              </span>
            </p>
            <h3 className="text-secondary-base mb-6 text-2xl font-bold">
              <span className="text-primary-alt-base">{'{'} </span>
              2025
              <span className="text-primary-alt-base"> {'}'}</span>
            </h3>
            <p className="text-secondary-base mb-4 text-base font-medium md:text-lg">
              - Convertirme en Android/iOS Developer
            </p>
            <p className="text-secondary-base mb-4 text-base font-medium md:text-lg">
              - Dominar Accesibilidad Web, ninguna discapacidad debe limitar la Web
            </p>
            <p className="text-secondary-base mb-4 text-base font-medium md:text-lg">
              - Obtener el certificado B2 en Inglés
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
