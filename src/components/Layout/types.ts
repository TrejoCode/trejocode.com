/**
 * @description Declaración de types
 */

type TypeOpenGraph = 'website' | 'article' | 'book' | 'profile';

export interface InterfaceLayoutProps {
  /**
   * Título del sitio Web
   */
  title?: string;
  /**
   * Imagen OG
   */
  image?: string;
  /**
   * Meta keywords
   */
  keywords?: string;
  /**
   * Meta description
   */
  description?: string;
  /**
   * Meta og:type
   */
  type?: TypeOpenGraph;
  /**
   * Componente contenido
   */
  children: JSX.Element;
}
