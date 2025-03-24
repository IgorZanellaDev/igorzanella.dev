import { FC } from "react";

const Header: FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <>
      <h2 className={"text-3xl font-semibold"}>{title}</h2>
      <p className={"mb-8 mt-1 font-medium text-muted-foreground"}>{description}</p>
    </>
  );
};

export default Header;
