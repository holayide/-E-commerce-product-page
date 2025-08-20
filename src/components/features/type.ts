export interface MobileNavProps {
  isOpen: boolean;
  handleIsOpen: () => void;
}

export interface Item {
  path: string;
  title: string;
  handleIsOpen?: MobileNavProps["handleIsOpen"];
}

export interface HeroThumnailProps {
  value: number;
  setValue: (index: number) => void;
}

export interface LargeImgProps {
  value: number;
}
