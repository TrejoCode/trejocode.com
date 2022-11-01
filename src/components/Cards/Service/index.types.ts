/**
 * @description <CardService /> Definición de tipos
 */

type TypeIcon = {
  icon: string;
  alt: string;
};

export interface InterfaceCardProps {
  /**
   * Icono de la card
   */
  icon: string;
  /**
   * Título de la card
   */
  title: string;
  /**
   * Descripción de la card
   */
  description: string;
  /**
   * Título del <Button />
   */
  btnLabel: string;
  /**
   * Lista de iconos
   */
  icons: TypeIcon[];
  /**
   * Tema de color
   */
  color: 'primary' | 'primaryAlt' | 'secondary' | 'secondaryAlt' | 'success' | 'info' | 'warning' | 'danger';
}
