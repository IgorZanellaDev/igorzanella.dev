import { cn } from "@/lib/utils";
import { FC } from "react";

interface FooterProps {
  mobile?: boolean;
}

const Footer: FC<FooterProps> = ({ mobile }) => {
  return (
    <footer
      className={cn("mb-2 mt-auto flex flex-col px-4 pb-2 text-sm text-muted md:p-0 md:text-xs", mobile && "md:hidden")}
    >
      <div className={"flex flex-row gap-2"}>
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
      <div className={"md: flex flex-row-reverse justify-between md:flex-col md:justify-start"}>
        <p>VAT: IT05104380265</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
