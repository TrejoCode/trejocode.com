'use client';

import Image from 'next/image';
import { Button } from '@trejocode/uikit';
import { InterfaceCardProps } from './Service.model';
import { useHomeController } from 'controllers/home/controller';

const CardService = ({ icon, title, description, btnLabel, icons, color }: InterfaceCardProps) => {
  const { router } = useHomeController();
  return (
    <div className="card flex w-full flex-col rounded-3xl rounded-tl-none rounded-tr-none bg-white px-6 py-8 shadow md:px-10 md:py-12 xl:w-4/5 xl:rounded-tl-3xl xl:rounded-tr-3xl">
      <div className={`icon flex h-14 w-14 items-center justify-center rounded-full bg-${color}-base mb-5`}>
        <Image src={icon} alt={title} />
      </div>
      <div className="title mb-5">
        <h1 className="text-secondary-base text-5xl font-bold">{title}</h1>
      </div>
      <div className="description mb-6">
        <p className="text-secondary-base text-base font-medium">{description}</p>
      </div>
      <div className="cta mb-8">
        <Button type="button" size="default" color={color} onClick={() => router.push('#proyectos')}>
          {btnLabel}
        </Button>
      </div>
      <div className="mb-6 w-full border-b-2 border-neutral-200"></div>
      <div className="grid w-full auto-rows-auto grid-cols-8 gap-x-1 gap-y-4">
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
