import type { FormEvent } from 'react';

export type TypeForm = HTMLFormElement & {
  fullName: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLInputElement;
};

export type TypeFormData = FormEvent<HTMLFormElement>;
