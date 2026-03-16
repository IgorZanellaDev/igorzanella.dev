"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useCustomerly } from "react-live-chat-customerly";

const ContactButton: FC = () => {
  const { showNewMessage } = useCustomerly();

  const handleChatClick = () => {
    showNewMessage("Hi Igor! ");
  };

  return <Button onClick={handleChatClick}>Contact me</Button>;
};

export default ContactButton;
