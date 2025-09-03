import Image from 'next/image';
import { Icon, Colors } from '@trejocode/uikit';
import { InterfaceCardProps } from './Project.model';
import { useHomeController } from 'controllers/home/controller';

const CardProject = ({ image, title, url, description, tags }: InterfaceCardProps) => {
  const { getTagColor } = useHomeController();
  return (
    <div className="card group flex w-full flex-col rounded-br-2xl rounded-bl-2xl transition-shadow hover:shadow-xl md:w-96">
      <div className="w-full rounded-2xl rounded-br-none rounded-bl-none bg-white pt-2">
        <Image
          src={image}
          alt={title}
          className="h-64 w-full rounded-2xl rounded-br-none rounded-bl-none object-cover object-center md:h-60"
        />
      </div>
      <div className="w-full rounded-br-2xl rounded-bl-2xl bg-white p-5 md:p-6">
        <a
          className="text-secondary-base focus:outline-secondary-base focus:text-primary-alt-base hover:text-primary-alt-base group-hover:text-primary-alt-base flex items-center rounded text-xl font-bold outline-2 outline-transparent transition-colors duration-300 focus:outline-dashed"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {title}
          <span role="img" aria-hidden className="ml-2">
            <Icon icon="ExternalLink" size={16} color={Colors.secondary.base} />
          </span>
        </a>
        <p className="text-secondary-base mt-4 mb-4 min-h-[4.5rem] text-justify text-sm leading-6 font-semibold">
          {description}
        </p>
        <div className="flex flex-row flex-wrap gap-2">
          {tags?.map(({ title, type }, key) => (
            <span key={key} className={`rounded-md px-3 py-1 text-sm font-semibold text-white ${getTagColor(type)}`}>
              {title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
