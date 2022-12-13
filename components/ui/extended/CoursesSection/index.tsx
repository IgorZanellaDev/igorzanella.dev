import React, { FunctionComponent } from "react";
import Course from "components/ui/base/Course";

const CoursesSection: FunctionComponent = () => {
  return (
    <section>
      <Course
        id={"react-ts-sc"}
        language={"🇮🇹 Italian"}
        title={
          "(-50%) React, Typescript e Styled Components: da zero a webapp!"
        }
        description={
          "Learn React basics, using Typescript to write better code, and using Styled Components to style your components."
        }
        link={"https://go.igorzanella.dev/courses/react-ts-sc-discounted"}
        imageWidth={1920}
        imageHeight={1080}
      />
    </section>
  );
};

export default CoursesSection;
