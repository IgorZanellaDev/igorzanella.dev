import React, { FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";
import Animation from "components/core/Animation";
import CountUp from "react-countup";

interface StatsCardProps {
  title: string;
  value?: number;
  textValue?: string;
}

const StatsCard: FunctionComponent<StatsCardProps> = (
  props: StatsCardProps
) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <Animation type={"fadeInUp"} className="pt-6">
      <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8">
        <h3 className="mt-6 text-4xl font-bold text-white tracking-tight">
          {props.title}
        </h3>
        {props.value && (
          <p
            ref={ref}
            className="mt-3 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-iz-yellow-light to-iz-yellow-dark"
          >
            <CountUp
              start={0}
              end={inView ? props.value : 0}
              duration={3}
              useEasing
            />
          </p>
        )}
        {props.textValue && (
          <p className="mt-3 text-4xl leading-snug font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-iz-yellow-light to-iz-yellow-dark">
            {props.textValue}
          </p>
        )}
      </div>
    </Animation>
  );
};

export default StatsCard;
