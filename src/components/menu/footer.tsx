import { cn } from "@/lib/utils";
import { FC } from "react";

interface FooterProps {
  mobile?: boolean;
}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={cn("mb-2 mt-auto flex justify-between px-4 pb-2 text-sm text-muted-foreground md:px-8")}>
      <div className={"flex flex-col"}>
        <p>VAT: IT05104380265</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
      <div className={"flex flex-col"}>
        <a
          className={"underline"}
          href={"https://www.iubenda.com/privacy-policy/36569385"}
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          Privacy Policy
        </a>
        <a
          className={"underline"}
          href={"https://www.iubenda.com/privacy-policy/36569385/cookie-policy"}
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          Cookie Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
