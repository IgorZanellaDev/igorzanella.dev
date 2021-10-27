import React, { FunctionComponent } from "react";
import Image from "next/image";

interface ImgProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const Img: FunctionComponent<ImgProps> = (props: ImgProps) => {
  return (
    <div className="my-4 lg:mx-16 overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
      <Image
        {...props}
        placeholder="blur"
        blurDataURL={props.src}
        alt={props.alt}
        className="overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl"
      />
    </div>
  );
};

export default Img;
