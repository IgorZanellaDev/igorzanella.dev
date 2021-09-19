import { FunctionComponent, useState } from "react";
import Navbar from "./Navbar";
import MenuItem from "./MenuItem";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
import Logo from "./Logo";

export interface Item {
  path: string;
  name: string;
}

const Menu: FunctionComponent = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const pathname = useRouter().pathname;

  const items: Item[] = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/about",
      name: "About",
    },
  ];

  return (
    <Navbar>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Logo />
            </div>
            <div className="hidden items-center sm:flex sm:ml-6">
              <div className="flex space-x-4">
                {items.map((item) => (
                  <MenuItem
                    href={item.path}
                    current={pathname === item.path}
                    key={item.path}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <MenuItem href="#" cta>
              Contact me
            </MenuItem>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden={!mobileOpen}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu open={mobileOpen} items={items} />
    </Navbar>
  );
};

export default Menu;
