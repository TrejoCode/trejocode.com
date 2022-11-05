/**
 * @description Componente <CardProject />
 */

import Image from 'next/image';
import classnames from 'classnames';
import { Icon } from '@trejocode/uikit';
import { InterfaceCardProps } from './index.types';

const CardProject = ({ image, title, url, description, tags }: InterfaceCardProps): JSX.Element => (
  <div className="card flex flex-col w-full md:w-96 rounded-bl-2xl rounded-br-2xl transition-shadow hover:shadow-xl group">
    <div className="w-full rounded-2xl rounded-bl-none rounded-br-none bg-white pt-2">
      <Image
        src={image}
        alt={title}
        className="w-full h-64 md:h-60 object-cover object-center rounded-2xl rounded-bl-none rounded-br-none"
      />
    </div>
    <div className="w-full bg-white p-5 md:p-6 rounded-bl-2xl rounded-br-2xl">
      <a
        className="flex items-center font-bold text-xl text-secondary-base rounded transition-colors duration-300 outline-2 focus:outline-dashed focus:outline-secondary-base hover:text-primaryAlt-base group-hover:text-primaryAlt-base"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {title}
        <span role="img" aria-hidden className="ml-2">
          <Icon icon="ExternalLink" size={16} className="stroke-secondary-base" />
        </span>
      </a>
      <p className="text-justify text-sm mt-4 mb-4 text-secondary-base font-semibold leading-6 min-h-[4.5rem]">
        {description}
      </p>
      <div className="flex flex-row flex-wrap gap-2">
        {tags?.map(({ title, type }, key) => (
          <span
            key={key}
            className={classnames('py-1 px-3 font-semibold text-sm rounded-md text-white', {
              'bg-primary-base': type === 'web',
              'bg-primaryAlt-base': type === 'web3',
              'bg-secondary-base': type === 'design',
              'bg-secondaryAlt-base': type === 'app',
              'bg-success-base': type === 'pwa',
              'bg-info-base': type === 'backend',
              'bg-warning-base': type === 'infra',
              'bg-danger-base': type === 'open',
              'bg-gray': type === 'wordpress',
            })}
          >
            {title}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default CardProject;
