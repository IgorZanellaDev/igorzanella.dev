import React, { FunctionComponent } from "react";
import Led from "../../base/Led";
import TechnologyStack from "./TechnologyStack";

const HeaderSection: FunctionComponent = () => {
  return (
    <section>
      <div className="flex justify-between flex-col xl:mt-20 xl:flex-row xl:space-x-12 space-y-16 xl:space-y-0">
        <div className="flex justify-start items-start flex-col">
          <div className="flex mb-1 justify-center items-center text-xl text-gray-400 py-1 px-3 bg-gray-800 rounded-full">
            <Led color={"green"} className={"mr-2"} /> Available for new
            projects
          </div>
          <div>
            <h1 className="md:text-7xl text-4xl font-black leading-tight text-white xl:w-4/5">
              Hello world, I am Igor Zanella 👋🏻
            </h1>
          </div>
          <div className="md:mt-8 mt-4">
            <h2 className="text-2xl leading-6 font-medium text-white">
              Full Stack Developer and DevOps specialist
            </h2>
          </div>
          <div className="md:mt-4 mt-2">
            <p className="text-base leading-normal text-gray-400 xl:w-96">
              I am a Freelance Full Stack Developer located in{" "}
              <a
                className="text-gray-200 underline"
                href="https://it.wikipedia.org/wiki/Ciano_del_Montello"
                target="_blank"
                rel="noopener"
              >
                Ciano
              </a>{" "}
              (near Venice), Italy. I am also an entrepreneur and sporty person
              in my spare time. I love startups and new projects.
            </p>
          </div>
          <button className="mt-6 py-4 px-6 rounded-xl text-lg font-bold text-white bg-gradient-to-b from-iz-blue-light to-iz-blue-dark hover:to-iz-blue-dark-darker-10">
            Let's get in touch!
          </button>
        </div>
        <TechnologyStack />
      </div>
    </section>
  );
};

export default HeaderSection;
