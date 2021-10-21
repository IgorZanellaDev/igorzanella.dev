import React, { FunctionComponent } from "react";
import TimelineObject from "components/ui/extended/JobsTimeline/TimelineObject";

const JobsTimeline: FunctionComponent = () => {
  return (
    <section>
      <div className="text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="text-base font-semibold text-iz-blue-light tracking-wide uppercase">
              Timeline
            </p>
            <h3 className="leading-normal md:leading-relaxed text-3xl lg:text-5xl font-bold transition hover:border-b-8 border-white">
              My previous jobs
            </h3>
            <p className="mt-2 text-xl text-gray-500 flex flex-wrap max-w-lg">
              I'm young and I did not have a long working time, but I did some
              interesting experiences.
            </p>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="absolute h-full border"
                  style={{
                    right: "50%",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderImage:
                      "linear-gradient(180deg, rgb(0,204,255), rgb(0,92,180)) 1",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="absolute h-full border"
                  style={{
                    left: "50%",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderImage:
                      "linear-gradient(180deg, rgb(0,204,255), rgb(0,92,180)) 1",
                    borderRadius: "1%",
                  }}
                ></div>
                <TimelineObject
                  type={"left"}
                  date={"Test date"}
                  title={"Title"}
                  description={"test"}
                />
                <TimelineObject
                  type={"right"}
                  date={"Test date"}
                  title={"Title"}
                  description={"test"}
                />
                <TimelineObject
                  type={"left"}
                  date={"Test date"}
                  title={"Title"}
                  description={"test"}
                />
                <TimelineObject
                  type={"right"}
                  date={"Test date"}
                  title={"Title"}
                  description={"test"}
                />
              </div>
              {/*<img*/}
              {/*  className="mx-auto -mt-36 md:-mt-36"*/}
              {/*  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"*/}
              {/*/>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsTimeline;
