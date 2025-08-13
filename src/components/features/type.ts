export interface MobileNavProps {
  isOpen: boolean;
  handleIsOpen: () => void;
}

export interface Item {
  path: string;
  title: string;
  handleIsOpen?: MobileNavProps["handleIsOpen"];
}
