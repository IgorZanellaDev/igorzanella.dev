import {
  DEVTO_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  SPOTIFY_URL,
  TWITTER_URL,
} from "constants/url";
import { IconType } from "components/core/Icon";

export const MENU_LINKS = [
  { name: "Hello", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Courses", link: "/courses" },
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
    name: "Dev.to",
    icon: "devto",
    link: DEVTO_URL,
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: TWITTER_URL,
  },
  {
    name: "Spotify",
    icon: "spotify",
    link: SPOTIFY_URL,
  },
];
