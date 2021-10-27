import { FunctionComponent, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type Animation = "fadeInUp" | "fadeInDown" | "fadeInRight" | "fadeInLeft";

interface AnimationProps {
  className?: string;
  children: ReactNode;
  delay?: string;
  type: Animation;
  typeMd?: Animation;
  triggerMore?: boolean;
}

const Animation: FunctionComponent<AnimationProps> = (
  props: AnimationProps
) => {
  const [ref, inView] = useInView({
    triggerOnce: !props.triggerMore,
  });
  return (
    <div
      ref={ref}
      className={`${
        inView
          ? `animate__animated animate__${props.type} ${
              props.typeMd ? `md:animate__${props.typeMd}` : ""
            }`
          : "opacity-0"
      } ${props.className ? props.className : ""}`}
      style={{ animationDelay: props.delay }}
    >
      {props.children}
    </div>
  );
};

export default Animation;
