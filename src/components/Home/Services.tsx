import { CARDS_DATA as services } from 'data/services';
import CardService from 'components/Cards/Service/Service';

const Services = () => {
  return (
    <div className="flex w-full justify-center bg-[#EBF3F5] pt-24" id="soluciones">
      <div className="container flex flex-col">
        <div className="mb-24 flex flex-col xl:mb-32">
          <h2 className="xl:text-display-4 text-secondary-base mb-4 text-center text-5xl font-bold">
            <span className="text-primary-base animate-pulse">_</span>
            Hagámoslo
          </h2>
          <p className="color-secondary-base text-center text-lg font-medium xl:text-xl">
            <span className="font-bold">¡Trabajemos juntos! </span>
            Mi pasión es desarrollar parte del futuro, cuénteme su idea y haré todo lo demás.
          </p>
        </div>
        {services.map(({ icon, title, description, btnLabel, color, icons, video }, key) => (
          <div key={key} className="mb-16 flex flex-col items-center md:mb-40 xl:flex-row xl:items-start">
            <div className="flex w-full items-center justify-center md:w-3/5 xl:sticky xl:top-4 xl:w-1/2 xl:self-center">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-2xl rounded-br-none rounded-bl-none xl:w-auto xl:rounded-br-3xl xl:rounded-bl-3xl"
              >
                <source src={video} type="video/mp4" />
                El navegador no admite el formato de video
              </video>
            </div>
            <div className="w-full md:w-3/5 xl:w-1/2">
              <CardService
                icon={icon}
                title={title}
                description={description}
                btnLabel={btnLabel}
                color={color}
                icons={icons}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
