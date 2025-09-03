export type TypeIcon = {
  title: string;
  width: number;
  height: number;
  classNames: string;
  ariaLabelId: string;
};

export type TypeIconName = 'instagram' | 'facebook' | 'linkedin' | 'youtube';

export type TypeIconComponent = (props: TypeIcon) => React.JSX.Element;

export type TypeIconGroup = Record<TypeIconName, TypeIconComponent>;

export type TypeIconProps = TypeIcon & {
  name: TypeIconName;
};
