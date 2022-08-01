import {NextPage} from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import CourseTitle from "components/ui/extended/CourseTitle";

const ReactTsSc: NextPage = () => {
  return <GlobalWrapper withLayout>
    <SEO
      title="React + Typescript + Styled Components"
      description="Learn React basics, using Typescript to write better code, and using Styled Components to style your components."
    />
    <CourseTitle language={"🇮🇹 Italian"} id={"react-ts-sc"} links={{udemy: "https://google.com/"}} name={"React + Typescript + Styled Components"} subtitle={"Test"} imageWidth={3125} imageHeight={1759} technologies={["react", "typescript", "styledcomponents"]}/>
  </GlobalWrapper>;
}

export default ReactTsSc;