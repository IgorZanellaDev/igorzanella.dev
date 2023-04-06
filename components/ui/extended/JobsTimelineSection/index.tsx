import React, { FunctionComponent } from "react";
import TimelineObject from "components/ui/extended/JobsTimelineSection/TimelineObject";
import Animation from "components/core/Animation";

const JobsTimelineSection: FunctionComponent = () => {
  return (
    <section className="text-white py-8">
      <div className="container mx-auto flex flex-col items-start lg:flex-row-reverse my-12 lg:my-24">
        <Animation
          type={"fadeInUp"}
          className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 md:mt-12 lg:px-8"
        >
          <p className="text-base font-semibold text-iz-blue-light tracking-wide uppercase">
            Timeline
          </p>
          <h3 className="leading-normal md:leading-relaxed text-3xl lg:text-5xl font-bold transition hover:border-b-8 border-white">
            My previous jobs
          </h3>
          <p className="mt-4 text-xl text-gray-400 flex flex-wrap lg:max-w-lg">
            I&apos;m young but I still had some interesting experiences. I also
            did an experience in Poland for Erasmus.
          </p>
          <p className="mt-2 text-xl text-gray-400 flex flex-wrap lg:max-w-lg">
            Now I&apos;m a Freelance Full Stack Developer but I work almost full
            time for Customerly, an interesting startup.
          </p>
        </Animation>
        <Animation
          type={"fadeInUp"}
          typeMd={"fadeInLeft"}
          className="ml-0 lg:ml-12 w-full lg:w-2/3 sticky"
        >
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div
                className="absolute h-full"
                style={{
                  left: "calc(50% - 8px)",
                  width: "8px",
                  background:
                    "linear-gradient(180deg, rgb(0,204,255), rgb(0,92,180))",
                }}
              />
              <TimelineObject
                type="right"
                date="Dec 2020 - Now"
                title="Customerly"
                description="Full Stack Developer"
                link="https://www.customerly.io"
              />
              <TimelineObject
                type="left"
                date="Sep 2020 - Now"
                title="IZDev"
                description="Freelance Developer"
                link="/"
              />
              <TimelineObject
                type="right"
                date="Dec 2017 - Sep 2020"
                title="Metix"
                description="IT Consultant"
                link="https://metix.it/"
              />
              <TimelineObject
                type="left"
                date="Sep - Nov 2017"
                title="UBware"
                description="Full Stack Developer"
                link="https://www.ubware.it/"
              />
              <TimelineObject
                type="right"
                date="Aug - Sep 2017"
                title="Yarix"
                description="IT Security Expert"
                link="https://www.yarix.com/"
              />
              <TimelineObject
                type="left"
                date="May - Jun 2016"
                title="BPNT - Białystok"
                description="Network engineer"
                link="https://bpnt.bialystok.pl/"
              />
              <TimelineObject
                type="right"
                date="Jun 2015"
                title="Computer Factory"
                description="IT Technician"
                link="http://www.computerfactory.it/"
              />
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
};

export default JobsTimelineSection;
