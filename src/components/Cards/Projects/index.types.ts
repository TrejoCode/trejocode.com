/**
 * @description <CardProject /> Definición de tipos
 */

import { StaticImageData } from 'next/image';

export type TypeTags = {
  type: 'web' | 'web3' | 'design' | 'app' | 'pwa' | 'backend' | 'infra' | 'open' | 'wordpress';
  title: string;
};

export interface InterfaceCardProps {
  /**
   * Imagen de la card
   */
  image: string | StaticImageData;
  /**
   * Título del proyecto
   */
  title: string;
  /**
   * Enlace del proyecto
   */
  url: string;
  /**
   * Descripción del proyecto
   */
  description: string;
  /**
   * Etiquetas
   */
  tags: TypeTags[];
}
