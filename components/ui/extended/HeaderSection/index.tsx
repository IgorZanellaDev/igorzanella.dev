import React, { FunctionComponent } from "react";
import Led from "components/ui/base/Led";
import TechnologyStack from "./TechnologyStack";
import Animation from "components/core/Animation";

const HeaderSection: FunctionComponent = () => {
  const handleChatClick = () => {
    //@ts-ignore
    window.customerly.showNewMessage("Hi Igor! ");
  };

  return (
    <section className="flex justify-between flex-col py-8 lg:flex-row xl:space-x-12 space-y-16 xl:space-y-0">
      <div className="flex justify-start items-start flex-col lg:w-5/12">
        <Animation
          delay={"500ms"}
          type="fadeInDown"
          className="flex mb-1 justify-center items-center text-lg lg:text-xl text-gray-400 py-1 px-3 bg-gray-800 rounded-full"
        >
          <Led color={"green"} className={"mr-2"} /> Available for new projects
        </Animation>
        <Animation type="fadeInUp" typeMd="fadeInLeft">
          <h1 className="md:text-7xl text-4xl font-black leading-tight text-white xl:w-4/5">
            Hello world, I am Igor Zanella 👋🏻
          </h1>
        </Animation>
        <Animation type={"fadeInUp"} delay={"500ms"} className="md:mt-8 mt-4">
          <h2 className="text-2xl md:text-3xl leading-6 font-medium text-white">
            Full Stack Developer and DevOps specialist
          </h2>
        </Animation>
        <Animation type={"fadeInUp"} delay={"750ms"} className="md:mt-4 mt-2">
          <p className="text-base md:text-lg leading-normal text-gray-400 xl:w-96">
            I am a Freelance Full Stack Developer located in{" "}
            <a
              className="text-gray-200 underline"
              href="https://it.wikipedia.org/wiki/Ciano_del_Montello"
              target="_blank"
              rel="noopener"
            >
              Ciano
            </a>{" "}
            (near Venice), Italy. I am also an entrepreneur and sporty person in
            my spare time. I love startups and new projects.
          </p>
        </Animation>
        <Animation type={"fadeInUp"} delay={"1s"}>
          <button
            onClick={handleChatClick}
            className="mt-6 py-4 px-6 rounded-xl text-lg font-bold text-white bg-gradient-to-b from-iz-blue-light to-iz-blue-dark hover:to-iz-blue-dark-darker-10"
          >
            Let's get in touch!
          </button>
        </Animation>
      </div>
      <TechnologyStack />
    </section>
  );
};

export default HeaderSection;
