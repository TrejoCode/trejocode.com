'use client';

import { Button, Icon } from '@trejocode/uikit';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useContactController } from 'controllers/contact/controller';

const Form = () => {
  const { loading, setCaptcha, handleSubmit } = useContactController();

  return (
    <form className="mt-6 flex w-full flex-col" onSubmit={handleSubmit}>
      <label htmlFor="fullName" className="text-secondary-base mb-6 flex w-full flex-col xl:w-4/5">
        <span className="mb-2 text-base font-semibold">Nombre completo:</span>
        <input
          required
          type="text"
          id="fullName"
          name="fullName"
          minLength={4}
          maxLength={64}
          placeholder="Escribe tu nombre"
          className="border-secondary-base/50 focus:ring-primary-base focus:border-primary-base hover:border-primary-base rounded border-2 px-4 py-2 text-base font-medium focus:ring-2 focus:outline-none"
        />
      </label>
      <label htmlFor="email" className="text-secondary-base mb-6 flex w-full flex-col xl:w-4/5">
        <span className="mb-2 text-base font-semibold">Correo electrónico:</span>
        <input
          required
          id="email"
          type="email"
          name="email"
          minLength={4}
          maxLength={128}
          placeholder="Escribe tu teléfono"
          className="border-secondary-base/50 focus:ring-primary-base focus:border-primary-base hover:border-primary-base rounded border-2 px-4 py-2 text-base font-medium focus:ring-2 focus:outline-none"
        />
      </label>
      <label htmlFor="message" className="text-secondary-base mb-6 flex w-full flex-col xl:w-4/5">
        <span className="mb-2 text-base font-semibold">Mensaje:</span>
        <textarea
          required
          rows={4}
          id="message"
          name="message"
          maxLength={500}
          placeholder="¿En que puedo ayudarte?"
          className="border-secondary-base/50 focus:ring-primary-base focus:border-primary-base hover:border-primary-base resize-none rounded border-2 px-4 py-2 text-base font-medium focus:ring-2 focus:outline-none"
        />
      </label>
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA!}
        onVerify={() => setCaptcha(true)}
        onExpire={() => setCaptcha(false)}
        onError={() => setCaptcha(false)}
      />
      <div className="mt-4 w-auto">
        <Button type="submit" size="default" color="primary" loading={loading} disabled={loading}>
          Enviar mensaje
          {!loading && (
            <span aria-hidden>
              <Icon icon="Send" className="ml-2 h-4 w-4" color="#ffffff" />
            </span>
          )}
        </Button>
      </div>
    </form>
  );
};

export default Form;
