import React, { FunctionComponent } from "react";
import Image from "next/image";

const PresentationSection: FunctionComponent = () => {
  //@ts-ignore
  const age = ~~((Date.now() - new Date(Date.UTC(1998, 1, 2))) / 31557600000);

  const handleChatClick = () => {
    //@ts-ignore
    window.customerly.showNewMessage("Hi Igor! ");
  };

  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row mx-auto py-6 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <p className="text-xl lg:text-3xl font-semibold text-iz-blue-light tracking-wide uppercase">
            Currently in Italy 🇮🇹
          </p>
          <h2 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Igor Zanella
          </h2>
          <p className="mt-4 text-xl lg:text-3xl font-semibold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-b from-iz-yellow-light to-iz-yellow-dark">
            {age} years
          </p>
          <p className="mt-2 text-base lg:text-lg md:text-xl leading-normal text-gray-400 xl:w-2/3">
            I'm a nerd but I'm also a super sporty person. I also love
            travelling and I would like to try also the digital nomad life.
          </p>
          <p className="mt-2 lg:mt-4 text-base lg:text-lg md:text-xl leading-normal text-gray-400 xl:w-2/3">
            I do martial arts like MMA and BJJ, almost every day during week,
            and I also go running, snowboarding and downhill.
          </p>
          <p className="mt-2 lg:mt-4 text-base lg:text-lg md:text-xl leading-normal text-gray-400 xl:w-2/3">
            One of my biggest passion is motorsport, one of my dream is to do a
            car race.
          </p>
          <button
            onClick={handleChatClick}
            className="mt-6 py-4 px-6 rounded-xl text-lg font-bold text-white bg-gradient-to-b from-iz-blue-light to-iz-blue-dark hover:to-iz-blue-dark-darker-10"
          >
            Chat with me!
          </button>
        </div>
        <div className="w-full h-64 sm:h-96 lg:h-auto lg:w-1/2 relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
          <Image
            src={"/about/igor-zanella.jpg"}
            layout="fill"
            className="overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl object-cover"
            placeholder="blur"
            blurDataURL={"/about/igor-zanella.jpg"}
          />
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
