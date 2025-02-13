import React, { FunctionComponent } from "react";
import Project from "components/ui/base/Project";

const ProjectsSection: FunctionComponent = () => {
  return (
    <section>
      <Project
        id={"customerly"}
        role={"Partner and Full Stack Developer"}
        title={"Customerly"}
        description={
          "Customer support and marketing automation SaaS with more than 25K customers."
        }
        imageWidth={1950}
        imageHeight={1010}
      />
      <Project
        inverted
        id={"ethereum-validator"}
        role={"Consultant"}
        title={"Ethereum validator"}
        description={
          "Ethereum 2.0 validator server, installed for earning from staking rewards."
        }
        imageWidth={1920}
        imageHeight={1080}
      />
      <Project
        id={"izdev"}
        role={"Freelancer Developer"}
        title={"IZDev"}
        description={
          "My portfolio websites as Freelance Developer, also this one. They are all open source."
        }
        imageWidth={1920}
        imageHeight={1080}
      />
      <Project
        inverted
        id={"computer-portatile"}
        role={"Owner"}
        title={"ComputerPortatile"}
        description={
          "Affiliate marketing website, created to advice laptops to people who are searching."
        }
        imageWidth={1920}
        imageHeight={1080}
      />
      <Project
        id={"bestondesk"}
        role={"CTO"}
        title={"BestOnDesk"}
        description={
          "Italian blog, business created to earn with affiliate marketing, Amazon and others."
        }
        imageWidth={1920}
        imageHeight={1080}
      />
      <Project
        inverted
        id={"racing-line-motorsport"}
        role={"Staff member"}
        title={"Racing Line Motorsport"}
        description={
          "International sim racing team, competing in most important championships in the world"
        }
        imageWidth={1920}
        imageHeight={1080}
      />
    </section>
  );
};

export default ProjectsSection;
