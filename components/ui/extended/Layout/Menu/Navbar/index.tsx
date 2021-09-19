import { FunctionComponent, ReactChild } from "react";

interface NavbarProps {
  children: ReactChild | ReactChild[];
}

const Navbar: FunctionComponent<NavbarProps> = ({ children }: NavbarProps) => {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="bg-trasparent"
    >
      {children}
    </nav>
  );
};

export default Navbar;
