import Link from "next/link";
import React, { FunctionComponent } from "react";
import Animation from "components/core/Animation";

const CTASection: FunctionComponent = () => {
  return (
    <section className="py-16">
      <div className="flex flex-auto flex-col justify-center items-center">
        <Animation
          type={"fadeInDown"}
          className="flex justify-center items-center flex-col"
        >
          <h2 className="text-3xl md:text-6xl text-white font-extrabold">
            Do you have an idea? 💡
          </h2>
          <h3 className="mt-2 text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-iz-yellow-light to-iz-yellow-dark">
            Let's talk about it!
          </h3>
        </Animation>
        <div className="flex justify-center items-center mt-8">
          <Animation type={"fadeInLeft"}>
            <button className="mx-2 py-6 px-8 rounded-xl text-xl md:text-2xl font-bold text-white bg-gradient-to-b from-iz-blue-light to-iz-blue-dark hover:to-iz-blue-dark-darker-10">
              Contact me
            </button>
          </Animation>
          <Animation type={"fadeInRight"}>
            <Link href={"/projects"}>
              <a className="mx-2 py-6 px-8 rounded-xl text-xl md:text-2xl font-bold text-white bg-gradient-to-b from-gray-700 to-gray-800">
                Go to projects
              </a>
            </Link>
          </Animation>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
