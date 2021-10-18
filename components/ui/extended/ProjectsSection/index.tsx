import React, { FunctionComponent } from "react";
import Project from "components/ui/base/Project";

const ProjectsSection: FunctionComponent = () => {
  return (
    <section>
      <Project
        id={"bestondesk"}
        type={"Personal side project"}
        title={"BestOnDesk"}
        description={
          "Italian blog, business created to earn with affiliate marketing, Amazon and others."
        }
        imageWidth={1920}
        imageHeight={1080}
      />
      <Project
        inverted
        id={"customerly"}
        type={"Customer project"}
        title={"Customerly"}
        description={
          "Italian blog, business created to earn with affiliate marketing, Amazon and others."
        }
        imageWidth={1950}
        imageHeight={1010}
      />
      <Project
        id={"racing-line-motorsport"}
        type={"Team project"}
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
