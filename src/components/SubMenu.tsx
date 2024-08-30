import Link from "next/link";
import { Transition } from "@headlessui/react";
import { MenuItem } from "./types";

type SubMenuProps = {
  subMenuItems: MenuItem[];
  isOpen: boolean;
  handleLinkClick: () => void;
};

const SubMenu = ({ subMenuItems, isOpen, handleLinkClick }: SubMenuProps) => {
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 transform scale-95"
      enterTo="opacity-100 transform scale-100"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100 transform scale-100"
      leaveTo="opacity-0 transform scale-95"
    >
      <div className="pl-4 md:pl-0 md:absolute md:bg-white md:shadow-lg md:rounded-md">
        {subMenuItems.map((subItem) => (
          <Link key={subItem.to} href={subItem.to} legacyBehavior>
            <a
              className="block px-4 py-2 hover:bg-gray-100 md:hover:bg-primary-light transition-colors duration-300"
              onClick={handleLinkClick}
            >
              {subItem.name}
            </a>
          </Link>
        ))}
      </div>
    </Transition>
  );
};

export default SubMenu;
