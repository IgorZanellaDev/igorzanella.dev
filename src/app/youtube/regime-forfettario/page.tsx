import Header from "@/components/header";
import { Card } from "@/components/ui/card";
import YoutubeVideo from "@/components/youtube-video";
import Image from "next/image";
import { FC } from "react";

interface ButtonCardProps {
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  label: string;
  link: string;
}

const ButtonCard: FC<ButtonCardProps> = ({ image, label, link }) => {
  return (
    <a href={link} className={"flex-1"} target={"_blank"} rel={"noopener noreferrer"}>
      <Card className={"flex items-center gap-4 p-4"}>
        <Image className={"h-8 w-fit"} src={image.url} alt={image.alt} width={image.width} height={image.height} />
        <span className={"font-semibold"}>{label}</span>
      </Card>
    </a>
  );
};

const RegimeForfettario = () => {
  return (
    <>
      <Header
        title={"Calcolo tasse Regime Forfettario 2025"}
        description={"Spreadsheeet per calcolare le tasse del regime forfettario 2025"}
      />
      <YoutubeVideo videoId={"#"} />
      <div className={"flex flex-col gap-4 pt-6 md:flex-row md:gap-8"}>
        <ButtonCard
          image={{ url: "/youtube/google-sheets.svg", alt: "Google Sheets", width: 1838, height: 2500 }}
          label={"Clona su Google Spreadsheet"}
          link={"#"}
        />
        <ButtonCard
          image={{ url: "/youtube/excel.svg", alt: "Excel", width: 2500, height: 2480 }}
          label={"Scarica in formato Excel"}
          link={"#"}
        />
      </div>
    </>
  );
};

export default RegimeForfettario;
