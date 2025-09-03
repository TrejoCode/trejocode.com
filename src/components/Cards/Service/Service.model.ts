type TypeIcon = {
  icon: string;
  alt: string;
};

export interface InterfaceCardProps {
  icon: string;
  title: string;
  description: string;
  btnLabel: string;
  icons: TypeIcon[];
  color: 'primary' | 'primary-alt' | 'secondary' | 'secondary-alt' | 'success' | 'info' | 'warning' | 'danger';
  video?: string;
}
