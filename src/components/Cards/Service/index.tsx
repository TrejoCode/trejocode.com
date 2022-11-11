/**
 * @description Componente <CardService />
 */

import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@trejocode/uikit';
import { InterfaceCardProps } from './index.types';

const CardService = ({ icon, title, description, btnLabel, icons, color }: InterfaceCardProps): JSX.Element => {
  const router = useRouter();
  return (
    <div className="card w-full xl:w-4/5 flex flex-col bg-white py-8 md:py-12 px-6 md:px-10 rounded-3xl rounded-tl-none rounded-tr-none xl:rounded-tl-3xl xl:rounded-tr-3xl shadow">
      <div className={`icon flex justify-center items-center w-14 h-14 rounded-full bg-${color}-base mb-5`}>
        <Image src={icon} alt={title} />
      </div>
      <div className="title mb-5">
        <h1 className="font-bold text-5xl text-secondary-base">{title}</h1>
      </div>
      <div className="description mb-6">
        <p className="text-secondary-base text-base font-medium">{description}</p>
      </div>
      <div className="cta mb-8">
        <Button type="button" size="default" variation="filled" color={color} onClick={() => router.push('#proyectos')}>
          {btnLabel}
        </Button>
      </div>
      <div className="w-full border-b-2 border-neutral-200 mb-6"></div>
      <div className="w-full grid grid-cols-8 auto-rows-auto gap-x-1 gap-y-4">
        {icons?.map((icon, key) => (
          <span key={key} role="img" aria-label={icon.alt}>
            <Image className="col-span-1" src={icon.icon} width={32} height={32} alt={icon.alt} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardService;
