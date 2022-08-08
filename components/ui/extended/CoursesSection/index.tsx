import React, { FunctionComponent } from "react";
import Project from "components/ui/base/Project";
import Course from "components/ui/base/Course";

const CoursesSection: FunctionComponent = () => {
  return (
    <section>
      <Course
        id={"react-ts-sc"}
        language={"🇮🇹 Italian"}
        title={"React, Typescript e Styled Components: da zero a webapp!"}
        description={
          "Learn React basics, using Typescript to write better code, and using Styled Components to style your components."
        }
        link={"https://www.udemy.com/course/react-typescript-e-styled-components-da-zero-a-web-app/?referralCode=36449F31118CB6A9A61C"}
        imageWidth={1920}
        imageHeight={1080}
      />
    </section>
  );
};

export default CoursesSection;
