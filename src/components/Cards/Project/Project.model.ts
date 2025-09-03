import { StaticImageData } from 'next/image';

export type TypeTags = {
  type: 'web' | 'web3' | 'design' | 'app' | 'pwa' | 'backend' | 'infra' | 'open' | 'wordpress';
  title: string;
};

export interface InterfaceCardProps {
  image: string | StaticImageData;
  title: string;
  url: string;
  description: string;
  tags: TypeTags[];
}
