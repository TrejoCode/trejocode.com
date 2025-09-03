'use client';

import { Button, Icon } from '@trejocode/uikit';
import { useHomeController } from 'controllers/home/controller';

const CTA = () => {
  const { handleOpenInNewTab, router } = useHomeController();
  return (
    <div className="flex justify-center md:justify-start">
      <Button
        type="button"
        size="default"
        color="primary"
        className="!sm:px-6 !px-4"
        onClick={() => router.push('/contacto')}
      >
        Ir a contacto
      </Button>
      <Button
        type="button"
        size="default"
        color="primary-alt"
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
