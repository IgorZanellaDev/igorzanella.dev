"use client";

import { FC, ReactNode } from "react";

interface CustomerlyButtonProps {
  message: string;
  children: ReactNode;
}

const CustomerlyButton: FC<CustomerlyButtonProps> = ({ message, children }) => {
  const handleClick = () => {
    window.customerly?.showNewMessage(message);
  };

  return (
    <button onClick={handleClick} className="underline">
      {children}
    </button>
  );
};

export default CustomerlyButton;
