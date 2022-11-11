/**
 * @description Componente <Services /> de la página de inicio
 */

import CardService from 'components/Cards/Service';
import { CARDS_DATA } from 'components/Cards/Service/data';

const Services = (): JSX.Element => (
  <div className="w-full flex justify-center bg-[#EBF3F5] pt-24" id="soluciones">
    <div className="container flex flex-col">
      <div className="flex flex-col mb-24 xl:mb-32">
        <h2 className="text-center text-5xl font-bold xl:text-display-4 text-secondary-base mb-4">
          <span className="text-primary-base animate-pulse">_</span>
          Hagámoslo
        </h2>
        <p className="text-center text-lg xl:text-xl color-secondary-base font-medium">
          <span className="font-bold">¡Trabajemos juntos! </span>
          Mi pasión es desarrollar parte del futuro, cuénteme su idea y haré todo lo demás.
        </p>
      </div>
      <div className="flex flex-col items-center xl:items-start xl:flex-row mb-16 md:mb-40">
        <div className="w-full md:w-3/5 xl:w-1/2 flex justify-center items-center xl:sticky xl:top-4 xl:self-center">
          <video
            autoPlay
            muted
            loop
            className="w-full xl:w-auto rounded-2xl rounded-bl-none rounded-br-none xl:rounded-bl-3xl xl:rounded-br-3xl"
          >
            <source src="/video/web-min.mp4" type="video/mp4" />
            El navegador no admite el formato de video
          </video>
        </div>
        <div className="w-full md:w-3/5 xl:w-1/2">
          <CardService
            icon={CARDS_DATA[0]?.icon}
            title={CARDS_DATA[0]?.title}
            description={CARDS_DATA[0]?.description}
            btnLabel={CARDS_DATA[0]?.btnLabel}
            color={CARDS_DATA[0]?.color}
            icons={CARDS_DATA[0]?.icons}
          />
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-start xl:flex-row mb-16 md:mb-40">
        <div className="w-full md:w-3/5 xl:w-1/2 flex justify-center items-center xl:sticky xl:top-4 xl:self-center">
          <video
            autoPlay
            muted
            loop
            className="w-full xl:w-auto rounded-2xl rounded-bl-none rounded-br-none xl:rounded-bl-3xl xl:rounded-br-3xl"
          >
            <source src="/video/design-min.mp4" type="video/mp4" />
            El navegador no admite el formato de video
          </video>
        </div>
        <div className="w-full md:w-3/5 xl:w-1/2">
          <CardService
            icon={CARDS_DATA[1]?.icon}
            title={CARDS_DATA[1]?.title}
            description={CARDS_DATA[1]?.description}
            btnLabel={CARDS_DATA[1]?.btnLabel}
            color={CARDS_DATA[1]?.color}
            icons={CARDS_DATA[1]?.icons}
          />
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-start xl:flex-row mb-16 md:mb-40">
        <div className="w-full md:w-3/5 xl:w-1/2 flex justify-center items-center xl:sticky xl:top-4 xl:self-center">
          <video
            autoPlay
            muted
            loop
            className="w-full xl:w-auto rounded-2xl rounded-bl-none rounded-br-none xl:rounded-bl-3xl xl:rounded-br-3xl"
          >
            <source src="/video/apps-min.mp4" type="video/mp4" />
            El navegador no admite el formato de video
          </video>
        </div>
        <div className="w-full md:w-3/5 xl:w-1/2">
          <CardService
            icon={CARDS_DATA[2]?.icon}
            title={CARDS_DATA[2]?.title}
            description={CARDS_DATA[2]?.description}
            btnLabel={CARDS_DATA[2]?.btnLabel}
            color={CARDS_DATA[2]?.color}
            icons={CARDS_DATA[2]?.icons}
          />
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-start xl:flex-row mb-16 md:mb-40">
        <div className="w-full md:w-3/5 xl:w-1/2 flex justify-center items-center xl:sticky xl:top-4 xl:self-center">
          <video
            autoPlay
            muted
            loop
            className="w-full xl:w-auto rounded-2xl rounded-bl-none rounded-br-none xl:rounded-bl-3xl xl:rounded-br-3xl"
          >
            <source src="/video/mentorias-min.mp4" type="video/mp4" />
            El navegador no admite el formato de video
          </video>
        </div>
        <div className="w-full md:w-3/5 xl:w-1/2">
          <CardService
            icon={CARDS_DATA[3]?.icon}
            title={CARDS_DATA[3]?.title}
            description={CARDS_DATA[3]?.description}
            btnLabel={CARDS_DATA[3]?.btnLabel}
            color={CARDS_DATA[3]?.color}
            icons={CARDS_DATA[3]?.icons}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Services;
