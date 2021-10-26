import { FunctionComponent } from "react";
import Animation from "components/core/Animation";

interface TitleSectionProps {
  subtitle: string;
  title: string;
  description: string;
}

const TitleSection: FunctionComponent<TitleSectionProps> = (
  props: TitleSectionProps
) => {
  return (
    <section>
      <Animation
        type={"fadeInUp"}
        className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h1 className="text-base font-semibold text-iz-blue-light tracking-wide uppercase">
            {props.subtitle}
          </h1>
          <h2 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {props.title}
          </h2>
          <p className="max-w-2xl mt-5 mx-auto text-xl text-gray-500">
            {props.description}
          </p>
        </div>
      </Animation>
    </section>
  );
};

export default TitleSection;
