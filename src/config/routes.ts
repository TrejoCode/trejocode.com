import type { TypeNavigationConfig, TypeNavigationSocial } from './config.model';

const navigationData: Array<TypeNavigationConfig> = [
  {
    id: 1,
    title: 'Soluciones',
    url: '/#soluciones',
  },
  {
    id: 2,
    title: 'Conóceme',
    url: '/#conoceme',
  },
  {
    id: 3,
    title: 'Proyectos',
    url: '/#proyectos',
  },
  {
    id: 4,
    title: 'Contacto',
    url: '/contacto',
  },
];

const socialData: Array<TypeNavigationSocial> = [
  {
    id: 1,
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/trejocode',
    icon: 'linkedin',
  },
  {
    id: 2,
    title: 'Facebook',
    url: 'https://github.com/TrejoCode',
    icon: 'facebook',
  },
  {
    id: 3,
    title: 'Youtube',
    url: 'https://instagram.com/TrejoCode',
    icon: 'youtube',
  },
  {
    id: 4,
    title: 'Instagram',
    url: 'https://instagram.com/TrejoCode',
    icon: 'instagram',
  },
];

export const navigationConfig = {
  navigationData,
  socialData,
};
