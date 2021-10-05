import React, { FunctionComponent } from "react";
import Icon from "components/core/Icon";

const TestimonialSection: FunctionComponent = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img
            className="mx-auto h-12"
            src="/icons/customerly.svg"
            alt="Workcation"
          />
          <blockquote className="mt-6">
            <div className="max-w-4xl mx-auto text-center text-2xl leading-9 font-medium text-gray-300">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nemo expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.&rdquo;
              </p>
            </div>
            <div className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-100">
                    Luca Micheli
                  </div>
                  <Icon
                    type="slash"
                    size={16}
                    className="hidden md:block mx-1 h-5 w-5 text-customerly-blue"
                  />
                  <div className="text-base font-medium text-gray-300">
                    CEO, Workcation
                  </div>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
