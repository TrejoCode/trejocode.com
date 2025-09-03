import { useState } from 'react';
import { CARDS_DATA } from 'data/services';
import { useRouter } from 'next/navigation';
import { openInNewTab } from 'utils/openTab';
import { useLocalImage } from 'hooks/useLocalImages';
import { CARDS_DATA as PROJECTS } from 'data/projects';
import type { TypeTags } from 'components/Cards/Project/Project.model';

const INITIAL_LIMIT: number = 9;

export const useHomeController = () => {
  const router = useRouter();
  const images = useLocalImage();
  const [projectLimit, setProjectLimit] = useState<number>(INITIAL_LIMIT);

  /**
   * @description Abre la URL en una nueva ventana
   * @param {string} url - La URL a abrir
   */
  const handleOpenInNewTab = (url: string): void => {
    openInNewTab(url);
  };

  /**
   * @description Obtiene el color del tag
   */
  const getTagColor = (type: TypeTags['type']) => {
    switch (type) {
      case 'web':
        return 'bg-primary-base';
      case 'web3':
        return 'bg-primary-alt-base';
      case 'design':
        return 'bg-secondary-base';
      case 'app':
        return 'bg-secondary-alt-base';
      case 'pwa':
        return 'bg-success-base';
      case 'backend':
        return 'bg-info-base';
      case 'infra':
        return 'bg-warning-base';
      case 'open':
        return 'bg-danger-base';
      case 'wordpress':
        return 'bg-gray';
      default:
    }
  };

  return {
    router,
    images,
    getTagColor,
    projectLimit,
    setProjectLimit,
    handleOpenInNewTab,
    projects: PROJECTS,
    services: CARDS_DATA,
    initialLimit: INITIAL_LIMIT,
  };
};
