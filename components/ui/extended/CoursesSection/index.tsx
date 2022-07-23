import React, { FunctionComponent } from "react";
import Project from "components/ui/base/Project";
import Course from "components/ui/base/Course";

const CoursesSection: FunctionComponent = () => {
  return (
    <section>
      <Course
        id={"react-ts-sc"}
        type={"React"}
        title={"React, Typescript e Styled Components: da zero a webapp!"}
        description={
          "Italian blog, business created to earn with affiliate marketing, Amazon and others."
        }
        imageWidth={1920}
        imageHeight={1080}
      />
    </section>
  );
};

export default CoursesSection;
