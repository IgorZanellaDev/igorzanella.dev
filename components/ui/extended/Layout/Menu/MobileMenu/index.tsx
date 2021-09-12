import { FunctionComponent } from "react";
import { Item } from "../index";
import MobileMenuItem from "./mobile-menu-item";
import { useRouter } from "next/router";

interface MobileMenuProps {
  open: boolean;
  items: Item[];
}

const MobileMenu: FunctionComponent<MobileMenuProps> = (
  props: MobileMenuProps
) => {
  const pathname = useRouter().pathname;

  return (
    <div className={"sm:hidden " + (!props.open && "hidden")} id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {props.items.map((item) => (
          <MobileMenuItem
            href={item.path}
            current={pathname === item.path}
            key={item.path}
          >
            {item.name}
          </MobileMenuItem>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
