import { toast } from 'sonner';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import type { TypeFormData, TypeForm } from 'app/contacto/model';

export const useContactController = () => {
  const [captcha, setCaptcha] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Hook controlador para manejar el estado y envío del formulario de contacto.
   *
   * - Valida el captcha.
   * - Envía los datos mediante EmailJS.
   * - Expone el estado de carga y el manejador de envío.
   */
  const handleSubmit = async (event: TypeFormData) => {
    event.preventDefault();

    if (!captcha) {
      return false;
    }

    setLoading(true);

    const form = event.currentTarget as TypeForm;
    const { fullName, email, message } = form;
    const payload = {
      fullName: fullName.value,
      email: email.value,
      message: message.value,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        payload,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success('Mensaje enviado, muchas gracias');
    } catch (error) {
      toast.error('Lo siento, no fue posible enviar el mensaje');
      console.error('Error sending email', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    setCaptcha,
    loading,
    handleSubmit,
  };
};
