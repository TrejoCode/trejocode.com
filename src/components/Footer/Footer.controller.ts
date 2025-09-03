import { navigationConfig } from 'config/routes';
import { useLocalImage } from 'hooks/useLocalImages';

export const useFooterController = () => {
  const date = new Date();
  const images = useLocalImage();
  const currentYear = date.getFullYear();
  const { socialData } = navigationConfig;

  return {
    images,
    socialData,
    currentYear,
  };
};
