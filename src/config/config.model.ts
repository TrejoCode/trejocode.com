import type { TypeIconName } from 'components/Icon/Icon.model';

export type TypeNavigationConfig = {
  id: number;
  title: string;
  url: string;
};

export type TypeNavigationSocial = TypeNavigationConfig & {
  icon: TypeIconName;
};
