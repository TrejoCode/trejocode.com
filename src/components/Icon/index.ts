import { socialIcons } from './Social';
import type { TypeIconGroup } from './Icon.model';

export const allIcons: TypeIconGroup = {
  ...socialIcons,
} as const;
