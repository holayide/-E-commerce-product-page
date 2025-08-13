import { NavLink } from "react-router-dom";
import type { Item } from "../type";

export default function NavItems({ path, title, handleIsOpen }: Item) {
  return (
    <li className="hover:text-secondary">
      <NavLink
        to={path}
        onClick={handleIsOpen}
        className="md:pb-[34px] md:hover:border-b-[3px] md:hover:border-primary"
      >
        {title}
      </NavLink>
    </li>
  );
}
