import React from "react";
import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import H2 from "components/core/Typography/H2";
import P from "components/core/Typography/P";
import ProjectSection from "components/ui/base/ProjectSection";
import H3 from "components/core/Typography/H3";
import A from "components/core/Typography/A";
import Img from "components/core/Typography/Img";

const IzDev: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="IZDev"
        description="My portfolio websites. Check out the open source code of this and previous websites."
      />
      <ProjectTitle
        category={"Portfolio website"}
        id={"izdev"}
        links={{
          web: "https://www.igorzanella.dev/",
          github: "https://github.com/IgorZanellaDev/igorzanella.dev",
        }}
        name={"IZDev"}
        subtitle={"Freelance developer"}
        imageWidth={1920}
        imageHeight={1080}
        technologies={[
          "css3",
          "html5",
          "javascript",
          "netlify",
          "nextjs",
          "react",
          "svelte",
          "svelte-kit",
          "tailwind",
          "typescript",
          "vercel",
        ]}
      />
      <ProjectSection>
        <H2>Actual portfolio website</H2>
        <P>
          The actual website is based on NextJS, I decided to do on Next because
          I have never tried it. I also used Tailwind CSS to do styling, with no
          css code.
        </P>
        <H3>NextJS</H3>
        <P>
          Next is a good framework for websites like this. It's easy, it has the
          pros of React and also additional features for static websites. I also
          used Gatsby for other website, but I can't say Next is better, because
          on Gatsby there is a better plugin ecosystem.
          <br />
          So, in this moment (October 2021), I would use Gatsby for a landing
          website, because it's perfect for my usage and code style.
        </P>
        <H3>Tailwind CSS</H3>
        <P>
          Tailwind is a good CSS library if you use a component-driven logic,
          like on React, if you don't use it, it will be difficult to copy all
          classes on objects. I wouldn't use it for a simple static website
          written directly on HTML and CSS.
          <br />
          It's very easy to write CSS code with classes like this, I think it's
          good for simple projects, but maybe it won't be good for important
          project with super-custom styling, which would need something like
          Styled Components.
        </P>
        <H3>Open Source</H3>
        <P>
          Website is open source, you can find it on Github at this{" "}
          <A
            href={"https://github.com/IgorZanellaDev/igorzanella.dev"}
            target="_blank"
            rel="noopener"
          >
            link
          </A>
          .
        </P>
        <H2>Legacy website</H2>
        <P>
          The old website was based on Sapper, the Svelte static website
          framework created before SvelteKit, now it's not supported anymore. I
          think Svelte is super when you have to do something simple, or it's
          been useful also to replace jQuery from code, because is more simple
          than React, Angular or other frameworks.
          <br />I used Tailwind also here, nice, but I didn't use component
          logic, more difficult and more time-consuming approach, I didn't know
          which it was also possible on Svelte.
        </P>
        <Img
          src={"/projects/izdev/legacy-izdev.png"}
          width={1437}
          height={786}
          alt="IZDev legacy website"
        />
        <H3>Open Source</H3>
        <P>
          Also this website was open source and you can find it on Github at
          this{" "}
          <A
            href={"https://github.com/IgorZanellaDev/legacy-igorzanella.dev"}
            target="_blank"
            rel="noopener"
          >
            link
          </A>
          .
        </P>
      </ProjectSection>
    </GlobalWrapper>
  );
};

export default IzDev;
