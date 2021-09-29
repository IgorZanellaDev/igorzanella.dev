import React, { FunctionComponent } from "react";
import Led from "../../base/Led";

const HeaderSection: FunctionComponent = () => {
  return (
    <section>
      <div className="mx-auto container px-6 lg:px-14 xl:px-0">
        <div className="flex justify-between items-center flex-col xl:flex-row xl:space-x-12 space-y-16 xl:space-y-0">
          <div className="flex justify-start items-start flex-col">
            <div className="flex mb-1 justify-center items-center text-xl text-gray-400 py-1 px-3 bg-gray-800 rounded-full">
              <Led color={"green"} className={"mr-2"} /> Available for new
              projects
            </div>
            <div>
              <h1 className="md:text-7xl text-4xl font-black leading-tight text-white xl:w-4/5">
                Hello world, I am Igor Zanella.
              </h1>
            </div>
            <div className="md::mt-8 mt-4">
              <p className="text-2xl leading-6 font-medium text-white">
                Full Stack Developer and DevOps
              </p>
            </div>
            <div className="md:mt-4 mt-2">
              <p className="text-base leading-normal text-gray-400 xl:w-96">
                I am a Freelance Developer located in{" "}
                <a
                  className="text-gray-200 underline"
                  href="https://it.wikipedia.org/wiki/Ciano_del_Montello"
                  target="_blank"
                  rel="noopener"
                >
                  Ciano
                </a>{" "}
                (near Venice), Italy. I am also an entrepreneur and sporty
                person in my spare time. I love startups and new projects.
              </p>
            </div>
            <button className="mt-6 py-4 px-6 rounded-xl text-lg font-bold text-white bg-gradient-to-b from-iz-blue-light to-iz-blue-dark hover:to-iz-blue-dark-darker-10">
              Let's get in touch!
            </button>
          </div>
          <div className="flex justify-start items-start flex-col xl:w-8/12	">
            <div>
              <p className="text-lg font-bold leading-none text-white">
                Highlights
              </p>
            </div>
            <div className="px-8 py-10 mt-4 bg-gray-800 flex  justify-start items-start flex-col rounded">
              <div className="">
                <p className="text-xs font-medium leading-3 text-white">
                  JAVASCRIPT
                </p>
              </div>
              <div className="md:mt-2">
                <p className="text-2xl md:text-3xl font-semibold lg:leading-7  text-white">
                  Front-end architecture
                </p>
              </div>
              <div className="mt-2 md:mt-4 ">
                <p className="text-base leading-normal text-gray-300 ">
                  It is a long established fact that a reader will be distracted
                  by the readable content for remote Junior Web Developer for
                  Coolor, located in Las Vegas
                </p>
              </div>
              <div className="mt-3 md:mt-6">
                <div className="inline-flex space-x-2 items-center justify-start w-40 h-4">
                  <svg
                    width="14"
                    height="2"
                    viewBox="0 0 14 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="14" height="2" fill="#9CA3AF" />
                  </svg>

                  <p className="text-base leading-none text-gray-400">
                    Schinner Systems
                  </p>
                </div>
              </div>
            </div>
            <div className="px-8 py-10 mt-4 bg-gray-800 flex  justify-start items-start flex-col rounded">
              <div className="">
                <p className="text-xs font-medium leading-3 text-white">
                  JAVASCRIPT
                </p>
              </div>
              <div className="md:mt-2">
                <p className="text-2xl md:text-3xl font-semibold lg:leading-7 text-white">
                  Building an MVP in react
                </p>
              </div>
              <div className="mt-2 md:mt-4 ">
                <p className="text-base leading-normal text-gray-300 ">
                  It is a long established fact that a reader will be distracted
                  by the readable content for remote Junior Web Developer for
                  Coolor, located in Las Vegas
                </p>
              </div>
              <div className="mt-3 md:mt-6">
                <div className="inline-flex space-x-2 items-center justify-start w-40 h-4">
                  <svg
                    width="14"
                    height="2"
                    viewBox="0 0 14 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="14" height="2" fill="#9CA3AF" />
                  </svg>

                  <p className="text-base leading-none text-gray-400">
                    {" "}
                    Casper LLC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
