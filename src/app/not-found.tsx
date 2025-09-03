'use client';

import Link from 'next/link';
import { Button } from '@trejocode/uikit';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <h1 className="text-display-1 text-primary-base">404</h1>
      <p className="text-secondary-base font-medium">Lo sentimos, la pagina que buscas no existe</p>
      <Button size="large" color="primary">
        <Link href="/">Regresar a Inicio</Link>
      </Button>
    </div>
  );
}
