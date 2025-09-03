'use client';

import { Icon, Button } from '@trejocode/uikit';
import { useHomeController } from 'controllers/home/controller';

const CTA = () => {
  const { handleOpenInNewTab, router } = useHomeController();

  return (
    <div className="my-5 flex">
      <Button
        color="primary"
        size="default"
        type="button"
        className="!sm:px-6 !px-4"
        onClick={() => router.push('#soluciones')}
      >
        Conocer más
        <Icon icon="ChevronRight" size={16} ariaHidden="true" color="#ffffff" />
      </Button>
      <Button
        color="primary-alt"
        size="default"
        type="button"
        className="!sm:px-6 ml-2 !px-4"
        onClick={() =>
          handleOpenInNewTab(
            'https://docs.google.com/document/d/1ckTFHIer980VIhIpCVdd3yAaKGQpDbGzzMr-VOPBwqg/edit?usp=sharing'
          )
        }
      >
        <span className="mr-1">Descargar CV</span>
        <Icon icon="FileText" size={16} color="#ffffff" ariaHidden="true" />
      </Button>
    </div>
  );
};

export default CTA;
