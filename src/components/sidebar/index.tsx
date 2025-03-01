import Logo from "@/components/logo";
import Nav from "@/components/sidebar/nav";
import Socials from "@/components/sidebar/socials";
import ThemeChooser from "@/components/sidebar/theme-chooser";
import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";
import { LuBadgeCheck } from "react-icons/lu";

const Sidebar: FC = () => {
  return (
    <aside className={"sticky top-0 mt-8 flex h-full flex-col"}>
      <div className={"flex items-center gap-2 pr-4"}>
        <Logo />
        <div className={"flex flex-col"}>
          <div className={"flex items-center gap-1"}>
            <h1 className={"text-xl font-medium"}>Igor Zanella</h1>
            <LuBadgeCheck className={"inline-block h-5 w-5 text-blue-500"} />
          </div>
          <p className={"text-sm text-muted-foreground"}>Software & DevOps</p>
        </div>
      </div>
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
  );
};

export default Sidebar;
