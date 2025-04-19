import ClyTestimonial from "@/components/cly-testimonial";
import Header from "@/components/header";
import Technologies from "@/components/technologies";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { FC } from "react";
import { LuRocket } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Igor Zanella | Freelance Full-Stack & DevOps Engineer",
  description:
    "Freelance Full Stack Software Engineer & DevOps specialist delivering end-to-end digital solutions. Discover how I can elevate your project.",
  alternates: {
    canonical: "/",
  },
};

const Home: FC = () => {
  return (
    <>
      <Header title={"Hello world! I'm Igor 👋🏻"} description={"Full Stack Developer & DevOps Engineer"} />
      <p className={"leading-relaxed"}>
        Based in Treviso, Italy. I love building products and startups. Specialized in React, but I also work on backend
        and infrastructure side. I usually work with or manage teams to deliver products in a fast but quality way.
      </p>
      <hr className={"my-3"} />
      <Technologies />
      <hr className={"mb-5 mt-3"} />
      <ClyTestimonial />
      <hr className={"my-5"} />
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
          {/* FIXME: Open messenger on contact me */}
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
