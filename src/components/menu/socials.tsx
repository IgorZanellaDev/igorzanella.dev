import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/constants/menu";
import Link from "next/link";
import { FC } from "react";

const Socials: FC = () => {
  return (
    <div>
      <ul className={"flex flex-col gap-1"}>
        {SOCIALS.map((social) => (
          <li key={social.link} className={"w-full"}>
            <Button asChild className={"w-full justify-start"} variant={"ghost"}>
              <Link href={social.link} target={"_blank"} rel={"noopener noreferrer"}>
                <social.icon />
                {social.label}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
