import close from "@/assets/icons/icon-close.svg";

import type { MobileNavProps } from "../type";
import NavItems from "../navItems/navItems";
import { navItem } from "../../../lib/data";

export default function MobileNav({ isOpen, handleIsOpen }: MobileNavProps) {
  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-10 transition-opacity ${
          isOpen ? "opacity-100 block" : "opacity-0 hidden"
        }`}
        onClick={handleIsOpen}
      ></div>

      <nav
        className={`fixed top-0 left-0 w-3/4 p-6 max-w-xs h-full bg-white z-20 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          src={close}
          alt="close"
          onClick={handleIsOpen}
          className="cursor-pointer"
        />
        <ul className="mt-11 font-bold flex flex-col gap-5">
          {navItem.map((item) => (
            <NavItems key={item.title} {...item} handleIsOpen={handleIsOpen} />
          ))}
        </ul>
      </nav>
    </>
  );
}
