import React, { FunctionComponent } from "react";
import Navbar from "./Navbar";

const Header: FunctionComponent = () => {
  return (
    <header className="mx-auto container px-6 lg:px-14 xl:px-2">
      <Navbar />
    </header>
  );
};

export default Header;
