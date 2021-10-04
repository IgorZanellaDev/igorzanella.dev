import React, { FunctionComponent } from "react";

const ServicesSection: FunctionComponent = () => {
  return (
    <div className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h3 className="text-base font-semibold tracking-wider text-iz-blue-light uppercase">
          Work with me
        </h3>
        <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
          This is what I'm doing everyday ☀️
        </h2>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-400">
          In these years I had a lot of experiences. So this is what can I do
          for you. If you are interested or if you need something else, contact
          me.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div key="test" className="pt-6">
              <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-iz-blue-light rounded-md shadow-lg">
                      {/*<feature.icon*/}
                      {/*  className="h-6 w-6 text-white"*/}
                      {/*  aria-hidden="true"*/}
                      {/*/>*/}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-white tracking-tight">
                    Test
                  </h3>
                  <p className="mt-5 text-base text-gray-400">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
