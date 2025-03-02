import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FC } from "react";

const ClyTestimonial: FC = () => {
  return (
    <Card
      className={
        "from-seagull-500 to-seagull-800 dark:from-seagull-800 dark:to-seagull-950 relative overflow-hidden bg-gradient-to-b"
      }
    >
      <Image
        className={"absolute inset-0 w-full opacity-50 mix-blend-multiply saturate-0 filter"}
        src={"/images/testimonials/luca-micheli.jpg"}
        alt={"Luca Micheli"}
        layout={"fill"}
        objectFit={"cover"}
      />
      <CardContent className={"relative z-10 flex flex-col items-start p-8"}>
        <Image
          className={"h-12 w-fit"}
          src={"/images/testimonials/customerly.svg"}
          alt={"Customerly"}
          width={2824}
          height={652}
        />
        <p className={"mt-4 font-medium leading-relaxed text-white"}>
          Igor is an amazing person to work with. He&apos;s talented and passionate about what he does. He&apos;s always
          searching for the best technology to use. He&apos;s a continuous learner and listener. He joined the
          Customerly culture from the very first day and I believe is one of the best developers I&apos;ve ever known.
          His creations at Customerly are astonishing and brought immense value to the platform. On the human side,
          he&apos;s a great person with soft skills and moreover a great friend.
        </p>
        <p className={"mt-4 text-sm font-medium text-white"}>Luca Micheli, CEO @ Customerly</p>
      </CardContent>
    </Card>
  );
};

export default ClyTestimonial;
