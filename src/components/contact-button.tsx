"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";

const ContactButton: FC = () => {
  const handleChatClick = () => {
    window.customerly?.showNewMessage("Hi Igor! ");
  };

  return <Button onClick={handleChatClick}>Contact me</Button>;
};

export default ContactButton;
