import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const SOCIALS = [
  {
    label: "Github",
    link: "https://github.com/IgorZanellaDev",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/igor-zanella/",
    icon: FaLinkedin,
  },
  {
    label: "Medium",
    link: "https://medium.com/@igorzanella-dev",
    icon: FaMedium,
  },
  {
    label: "Spotify",
    link: "https://open.spotify.com/user/11126271502?si=bbe625bd9431448a",
    icon: FaSpotify,
  },
];

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
