/**
 * @description Página "/contacto"
 */

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Icon, Button } from '@trejocode/uikit';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import toast, { Toaster } from 'react-hot-toast';
import PageLayout from 'components/Layout';

const PageContact = (): JSX.Element => {
  // HCaptcha
  const [captcha, setCaptcha] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Gestionar el evento submit
  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!captcha) {
      return false;
    }

    setLoading(true);

    // Recopilar la información del formulario, formulario NO controlado
    const form = event.target as typeof event.target & {
      fullName: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const payload = {
      fullName: form.fullName.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        payload,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success('Mensaje enviado, pronto te contactaré', { position: 'bottom-center', duration: 5000 });
    } catch (error) {
      console.error('Error sending email', error);
      toast.error('No fue posible enviar el correo', { position: 'top-center', duration: 5000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <PageLayout title="Contacto">
        <main className="w-full bg-[#EBF3F5] min-h-70vh">
          <div className="flex justify-center">
            <div className="container flex flex-col my-16 text-secondary-base">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/5 flex flex-col pr-4">
                  <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Contáctame</h2>
                  <p className="text-base font-medium">Estoy convencido que seré la respuesta a sus necesidades.</p>
                  <div className="border border-gray border-opacity-25 my-8" />
                  <span className="text-base font-semibold text-secondary-base my-2">Cuartel secreto:</span>
                  <div className="flex flex-row items-center px-2">
                    <Icon icon="Home" className="w-4 h-4 stroke-secondary-base" />
                    <span className="ml-2 text-base font-medium text-secondary-base">Cancún, Quintana Roo, México</span>
                  </div>
                  <span className="text-base font-semibold text-secondary-base mt-8 my-2">Correo electrónico:</span>
                  <div className="flex flex-row items-center px-2">
                    <Icon icon="Mail" className="w-4 h-4 stroke-secondary-base" />
                    <a
                      href="mailto:hola@trejocode.com"
                      className="ml-2 text-base font-medium text-secondary-base outline-2 focus:outline-dashed focus:outline-info-base rounded"
                    >
                      hola@trejocode.com
                    </a>
                  </div>
                  <span className="text-base font-semibold text-secondary-base mt-8 my-2">Teléfono:</span>
                  <div className="flex flex-row items-center px-2">
                    <Icon icon="Mail" className="w-4 h-4 stroke-secondary-base" />
                    <a
                      href="tel:+529983000000"
                      className="ml-2 text-base font-medium text-secondary-base outline-2 focus:outline-dashed focus:outline-info-base rounded"
                    >
                      +52 (998) 300 0000
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-3/5 mt-8 lg:mt-0">
                  <div className="lg:ml-16 p-6 lg:p-8 bg-white rounded-2xl flex flex-col">
                    <span className="text-2xl font-bold text-secondary-base mb-2">¿Cómo puedo ayudarte?</span>
                    <span className="text-base font-semibold text-secondary-base">
                      Ayúdame un poco, tu información estará protegida en todo momento
                    </span>
                    <form className="w-full flex flex-col mt-6" onSubmit={handleSubmit}>
                      <label htmlFor="fullName" className="flex flex-col text-secondary-base w-full xl:w-4/5 mb-6">
                        <span className="mb-2 text-base font-semibold">Nombre completo:</span>
                        <input
                          required
                          type="text"
                          id="fullName"
                          name="fullName"
                          minLength={4}
                          maxLength={64}
                          placeholder="Escribe tu nombre"
                          className="rounded px-4 py-2 text-base font-medium border-2 border-secondary-base border-opacity-50 focus:ring-2 focus:ring-primary-base focus:border-primary-base focus:outline-none hover:border-primary-base"
                        />
                      </label>
                      <label htmlFor="email" className="flex flex-col text-secondary-base w-full xl:w-4/5 mb-6">
                        <span className="mb-2 text-base font-semibold">Correo electrónico:</span>
                        <input
                          required
                          id="email"
                          type="email"
                          name="email"
                          minLength={4}
                          maxLength={128}
                          placeholder="Escribe tu teléfono"
                          className="rounded px-4 py-2 text-base font-medium border-2 border-secondary-base border-opacity-50 focus:ring-2 focus:ring-primary-base focus:border-primary-base focus:outline-none hover:border-primary-base"
                        />
                      </label>
                      <label htmlFor="message" className="flex flex-col text-secondary-base w-full xl:w-4/5 mb-6">
                        <span className="mb-2 text-base font-semibold">Mensaje:</span>
                        <textarea
                          required
                          rows={4}
                          id="message"
                          name="message"
                          maxLength={500}
                          placeholder="¿En que puedo ayudarte?"
                          className="rounded px-4 py-2 text-base font-medium border-2 border-secondary-base border-opacity-50 focus:ring-2 focus:ring-primary-base focus:border-primary-base focus:outline-none hover:border-primary-base resize-none"
                        />
                      </label>
                      <HCaptcha
                        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA!}
                        onVerify={() => setCaptcha(true)}
                        onExpire={() => setCaptcha(false)}
                        onError={() => setCaptcha(false)}
                      />
                      <div className="w-auto mt-4">
                        <Button
                          type="submit"
                          size="default"
                          color="primary"
                          variation="filled"
                          loading={loading}
                          disabled={loading}
                        >
                          Enviar mensaje
                          {!loading && (
                            <span aria-hidden>
                              <Icon icon="Send" className="w-4 h-4 stroke-white ml-2" />
                            </span>
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageLayout>
      <Toaster />
    </div>
  );
};

export default PageContact;
