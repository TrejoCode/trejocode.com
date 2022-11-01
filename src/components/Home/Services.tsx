/**
 * @description Componente <Services /> de la página de inicio
 */

import Image from 'next/image';
import CardService from 'components/Cards/Service/CardService';
// Images
import ImageWeb from 'assets/images/placeholders/develop.jpg';
import { CARDS_DATA } from 'components/Cards/Service/data';

const Services = (): JSX.Element => (
  <div className="w-full flex justify-center bg-[#EBF3F5] py-24">
    <div className="container flex flex-col">
      <div className="service__item flex mb-24">
        <div className="w-1/2 flex justify-center items-center">
          <Image src={ImageWeb} alt="Web development" />
        </div>
        <div className="w-1/2">
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
      <div className="service__item flex mb-24">
        <div className="w-1/2 flex justify-center items-center">
          <Image src={ImageWeb} alt="Web development" />
        </div>
        <div className="w-1/2">
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
      <div className="service__item flex mb-24">
        <div className="w-1/2 flex justify-center items-center">
          <Image src={ImageWeb} alt="Web development" />
        </div>
        <div className="w-1/2">
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
      <div className="service__item flex mb-24">
        <div className="w-1/2 flex justify-center items-center">
          <Image src={ImageWeb} alt="Web development" />
        </div>
        <div className="w-1/2">
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
      <div className="flex justify-center">
        <p className="text-center text-xl color-secondaryAlt-base font-medium">
          <span className="font-semibold">¡Trabajemos juntos! </span>
          Mi pasión es desarrollar parte del futuro, cuénteme su idea y haré todo lo demás.
        </p>
      </div>
    </div>
  </div>
);

export default Services;
