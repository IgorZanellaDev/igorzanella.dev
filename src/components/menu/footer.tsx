import { cn } from "@/lib/utils";
import Link from "next/link";
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
        <Link className={"underline"} href={"/privacy-policy"}>
          Privacy Policy
        </Link>
        <Link className={"underline"} href={"/cookie-policy"}>
          Cookie Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
