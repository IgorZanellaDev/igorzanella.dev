import React, { FunctionComponent } from "react";
import Image from "next/image";

interface ImgProps {
  src: string;
  width: number;
  height: number;
}

const Img: FunctionComponent<ImgProps> = (props: ImgProps) => {
  return (
    <div className="my-4">
      <Image {...props} className="rounded-lg md:rounded-xl lg:rounded-2xl" />
    </div>
  );
};

export default Img;
