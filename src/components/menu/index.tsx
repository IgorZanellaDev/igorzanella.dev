import Logo from "@/components/logo";
import MobileMenu from "@/components/menu/mobile-menu";
import Nav from "@/components/menu/nav";
import Socials from "@/components/menu/socials";
import ThemeChooser from "@/components/menu/theme-chooser";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FC } from "react";
import { PiSealCheckFill } from "react-icons/pi";

const Menu: FC = () => {
  return (
    <div className={"flex-col pl-2 md:sticky md:top-0 md:flex md:h-full md:w-fit md:pt-10"}>
      <header className={"mt-4 flex justify-between px-4"}>
        <Link href={"/"} className={"flex items-center gap-2 pr-4"}>
          <Logo className={"h-[48px] w-[48px] md:h-[80px] md:w-[80px]"} />
          <div className={"flex flex-col"}>
            <div className={"flex items-center gap-1"}>
              <span className={"text-xl font-medium"}>Igor Zanella</span>
              <PiSealCheckFill className={"inline-block h-4 w-4 text-blue-500 md:h-5 md:w-5"} />
            </div>
            <p className={"text-sm text-muted-foreground"}>Software & DevOps</p>
          </div>
        </Link>
        <MobileMenu />
      </header>
      <aside className={"hidden flex-col md:flex"}>
        <Card className={"mt-6"}>
          <CardContent className={"p-2"}>
            <Nav />
          </CardContent>
        </Card>
        <Card className={"mt-6"}>
          <CardContent className={"p-2"}>
            <Socials />
          </CardContent>
        </Card>
        <Card className={"mt-6"}>
          <CardContent className={"p-2"}>
            <ThemeChooser />
          </CardContent>
        </Card>
      </aside>
    </div>
  );
};

export default Menu;
