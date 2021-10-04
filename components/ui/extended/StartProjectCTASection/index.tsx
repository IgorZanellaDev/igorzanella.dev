import React, { FunctionComponent } from "react";

const StartProjectCTASection: FunctionComponent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:mt-24 md: mx-24 px-8 py-4 space-y-6 md:space-y-0 md:px-16 md:py-8 rounded-2xl bg-gradient-to-b from-iz-blue-light to-iz-blue-dark">
      <h3 className="text-3xl leading-6 font-bold text-white">New project?</h3>
      <p className="md:w-4/12 text-center text-white text-lg">
        Are you thinking to a new project? Let's talk about it, I will offer the
        beer!🍻
      </p>
      <div className="flex justify-center items-center">
        <button className="py-4 px-6 rounded-xl text-lg font-bold text-white bg-gradient-to-b from-iz-yellow-light to-iz-yellow-dark hover:to-iz-yellow-dark-darker-10">
          Let's chat
        </button>
      </div>
    </div>
  );
};

export default StartProjectCTASection;
