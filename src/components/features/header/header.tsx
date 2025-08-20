import { useState } from "react";

import NavItems from "../navItems/navItems";
import { navItem } from "../../../lib/data";

import avatar from "@/assets/images/image-avatar.png";
import menu from "@/assets/icons/icon-menu.svg";
import cart from "@/assets/icons/icon-cart.svg";
import logo from "@/assets/icons/logo.svg";
import MobileNav from "./mobileNav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className="container h-21 pb-2 flex items-center justify-between border-b-2 border-accent-foreground">
      <div className="flex items-center">
        <div className="block md:hidden mr-3">
          <img
            src={menu}
            alt="menu"
            onClick={handleIsOpen}
            className="cursor-pointer"
          />

          <MobileNav handleIsOpen={handleIsOpen} isOpen={isOpen} />
        </div>

        <div>
          <img src={logo} alt="logo" />
        </div>

        <nav className="hidden md:block ml-8">
          <ul className="flex items-center gap-6 text-accent text-sm font-medium">
            {navItem.map((item) => (
              <NavItems key={item.title} {...item} />
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-8">
        <div>
          <img src={cart} alt="cart" className="cursor-pointer" />
        </div>
        <img
          src={avatar}
          alt="avatar"
          className="h-11 hover:shadow-[0_0_0_1px_var(--primary)] rounded-4xl cursor-pointer"
        />
      </div>
    </header>
  );
}
