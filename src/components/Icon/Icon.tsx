import type { TypeIconProps } from './Icon.model';
import { allIcons } from './index';

export const Icon = ({ name, ...props }: TypeIconProps) => {
  const IconComponent = allIcons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent {...props} />;
};
