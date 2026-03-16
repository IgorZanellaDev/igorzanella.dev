"use client";

import { FC, ReactNode } from "react";
import { useCustomerly } from "react-live-chat-customerly";

interface CustomerlyButtonProps {
  message: string;
  children: ReactNode;
}

const CustomerlyButton: FC<CustomerlyButtonProps> = ({ message, children }) => {
  const { showNewMessage } = useCustomerly();

  const handleClick = () => {
    showNewMessage(message);
  };

  return (
    <button onClick={handleClick} className="underline">
      {children}
    </button>
  );
};

export default CustomerlyButton;
