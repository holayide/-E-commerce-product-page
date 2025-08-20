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

export interface CartContextType {
  inCart: boolean;
  quantity: number;
  addToCart: () => void;
  increase: () => void;
  decrease: () => void;
  remove: () => void;
}

export interface HeaderProp {
  handleIsOpenCart: () => void;
}
