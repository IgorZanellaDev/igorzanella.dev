import React, { FunctionComponent, ReactNode } from "react";

interface CategoryButtonProps {
  active: boolean;
  children: ReactNode;
}

type Props = CategoryButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const CategoryButton: FunctionComponent<Props> = ({
  active,
  children,
  ...rest
}: Props) => {
  return (
    <button
      className={
        "font-medium lg:leading-6 focus:outline-none pb-2 md:pb-4 xl:pb-2 text-sm md:text-xl xl:text-2xl pr-2 md:mr-0 border-b-2 xl:border-b-4 border-transparent hover:text-white" +
        (active ? " border-white text-white " : " text-gray-400")
      }
      {...rest}
    >
      <p>{children}</p>
    </button>
  );
};

export default CategoryButton;
