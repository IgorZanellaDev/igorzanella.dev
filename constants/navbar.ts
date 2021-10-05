import { GITHUB_URL, LINKEDIN_URL } from "constants/url";
import { IconType } from "components/core/Icon";

export const MENU_LINKS = [
  { name: "Hello", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "About", link: "/about" },
];

export const SOCIAL_LINKS: { name: string; icon: IconType; link: string }[] = [
  {
    name: "Github",
    icon: "github",
    link: GITHUB_URL,
  },
  {
    name: "Linkedin",
    icon: "linkedin",
    link: LINKEDIN_URL,
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: LINKEDIN_URL,
  },
];
