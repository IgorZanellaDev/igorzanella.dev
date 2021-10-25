import React, { FunctionComponent } from "react";
import { SERVICES } from "constants/service";
import Icon from "components/core/Icon";
import Animation from "components/core/Animation";

const ServicesSection: FunctionComponent = () => {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-md text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <Animation type={"fadeInUp"}>
          <h3 className="text-base font-semibold tracking-wider text-iz-blue-light uppercase">
            Work with me
          </h3>
        </Animation>
        <Animation type={"fadeInUp"}>
          <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            This is what I do everyday ☀️
          </h2>
        </Animation>
        <Animation type={"fadeInUp"}>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-400">
            In these years I had a lot of experiences. So this is what can I do
            for you. If you are interested or if you need something else,
            contact me.
          </p>
        </Animation>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Animation type={"fadeInUp"} key={service.name}>
                <div className="pt-6">
                  <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-iz-blue-light rounded-md shadow-lg">
                          <Icon
                            size={16}
                            type={service.icon}
                            className="h-6 w-6 text-white"
                          />
                        </span>
                      </div>
                      <h3 className="mt-6 text-lg font-medium text-white tracking-tight">
                        {service.name}
                      </h3>
                      <p className="mt-3 text-base text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Animation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
