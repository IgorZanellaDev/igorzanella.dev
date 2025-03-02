import Technologies from "@/components/technologies";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FC } from "react";
import { LuRocket } from "react-icons/lu";

const Home: FC = () => {
  return (
    <>
      <h2 className={"text-3xl font-semibold"}>Hello world! I&apos;m Igor 👋🏻</h2>
      <p className={"mt-1 font-medium text-muted-foreground"}>Based in Treviso, Italy 🇮🇹</p>
      <p className={"mt-6 leading-relaxed"}>
        Full Stack Developer & DevOps Engineer. I love building products and startups. Specialized in React, but I also
        work on backend and infrastructure side. I usually work with or manage teams to deliver products in a fast but
        quality way.
      </p>
      <hr className={"my-3"} />
      <Technologies />
      <hr className={"my-3"} />
      <Card className={"bg-muted"}>
        <CardHeader className={"pb-3"}>
          <CardTitle className={"inline-flex items-center gap-2"}>
            <LuRocket /> Let&apos;s work together
          </CardTitle>
        </CardHeader>
        <CardContent className={"pb-3"}>
          <p className={"text-muted-foreground"}>
            I&apos;m always looking for new challenges and opportunities to grow. If you have a project in mind,
            don&apos;t hesitate to contact me.
          </p>
        </CardContent>
        <CardFooter className={"flex items-center gap-4"}>
          <Button>Contact me</Button>
          <p className={"text-muted-foreground"}>
            {new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default Home;
