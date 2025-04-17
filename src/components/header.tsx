import { FC } from "react";

const Header: FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <>
      <h1 className={"text-3xl font-semibold"}>{title}</h1>
      <p className={"mb-4 mt-1 font-medium text-muted-foreground md:mb-8"}>{description}</p>
    </>
  );
};

export default Header;
