import React, { FunctionComponent } from "react";

const MainCard: FunctionComponent = () => {
  return (
    <section
      className={
        "md:col-span-3 flex flex-wrap md:flex-nowrap items-center bg-iz-yellow-light shadow-lg rounded-2xl py-6 md:py-4 px-6 md:pr-5 space-y-4 md:space-y-0 md:space-x-8"
      }
    >
      <h1>Test</h1>
    </section>
  );
};

export default MainCard;
