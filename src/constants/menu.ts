import { FaGithub, FaLinkedin, FaMedium, FaSpotify, FaYoutube } from "react-icons/fa";
import { LuBookText, LuHouse, LuUser, LuVideo } from "react-icons/lu";

export const NAV_LINKS = [
  {
    label: "Home",
    link: "/",
    icon: LuHouse,
  },
  {
    label: "Projects",
    link: "/projects",
    icon: LuBookText,
  },
  {
    label: "Courses",
    link: "/courses",
    icon: LuVideo,
  },
  {
    label: "About",
    link: "/about",
    icon: LuUser,
  },
];

export const SOCIALS = [
  {
    label: "Github",
    link: "https://github.com/IgorZanellaDev",
    icon: FaGithub,
  },
  {
    label: "Youtube",
    link: "https://www.youtube.com/@igorzanelladev",
    icon: FaYoutube,
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
