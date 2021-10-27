import React, { FunctionComponent } from "react";
import Animation from "components/core/Animation";
import Image from "next/image";

const TestimonialSection: FunctionComponent = () => {
  return (
    <section className="py-16">
      <Animation type={"fadeInUp"}>
        <div className="relative">
          <div className="relative py-24 px-8 bg-gradient-to-b from-iz-blue-light to-iz-blue-dark rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:gap-x-8">
            <div className="absolute w-full inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
              <Image
                src="/hello/luca-micheli.jpg"
                layout="fill"
                alt=""
                className="w-full h-full object-cover"
                placeholder="blur"
                blurDataURL="/hello/luca-micheli.jpg"
              />
            </div>
            <div className="relative">
              <img className="h-12 w-auto" src="/icons/customerly.svg" alt="" />
              <blockquote className="mt-6 text-white">
                <p className="text-base font-medium sm:text-2xl">
                  Igor is an amazing person to work with. He's talented and
                  passionate about what he does. He's always searching for the
                  best technology to use. He's a continuous learner and
                  listener. He joined the Customerly culture from the very first
                  day and I believe is one of the best developers I've ever
                  known. His creations at Customerly are astonishing and brought
                  immense value to the platform. On the human side, he's a great
                  person with soft skills and moreover a great friend.
                </p>
                <footer className="mt-6">
                  <p className="flex flex-col font-medium">
                    <span>Luca Micheli</span>
                    <span>CoFounder, Customerly</span>
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </Animation>
    </section>
  );
};

export default TestimonialSection;
