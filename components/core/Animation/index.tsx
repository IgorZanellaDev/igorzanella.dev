import { FunctionComponent, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface AnimationProps {
  className?: string;
  children: ReactNode;
  delay?: string;
  type:
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInRight"
    | "fadeInLeft"
    | "lightSpeedInLeft";
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
        inView ? `animate__animated animate__${props.type}` : "opacity-0"
      } ${props.className}`}
      style={{ animationDelay: props.delay }}
    >
      {props.children}
    </div>
  );
};

export default Animation;
