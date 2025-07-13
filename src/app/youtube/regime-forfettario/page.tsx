import Header from "@/components/header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import YoutubeVideo from "@/components/youtube-video";
import Image from "next/image";
import { FC } from "react";
import { LuTriangleAlert } from "react-icons/lu";

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
      <Card className={"mt-6 bg-yellow-50 dark:bg-yellow-950"}>
        <CardHeader className={"flex flex-row items-center gap-2 pb-2"}>
          <LuTriangleAlert className={"h-4 w-4"} />
          <span className={"!mt-0 text-lg font-semibold"}>DISCLAIMER</span>
        </CardHeader>
        <CardContent>
          <p className={"text-sm"}>
            I file messi a disposizione hanno esclusivamente finalità informative e didattiche. Non costituisce in alcun
            modo consulenza fiscale o professionale. Non garantisco l&apos;accuratezza, la completezza o
            l&apos;aggiornamento dei calcoli, che potrebbero variare in base a normative e situazioni personali
            specifiche. L&apos;utilizzo del file avviene sotto la piena responsabilità dell&apos;utente. Per una
            valutazione corretta e personalizzata delle proprie imposte, si raccomanda di rivolgersi a un commercialista
            o a un professionista abilitato.
          </p>
        </CardContent>
      </Card>
      <div className={"flex flex-col gap-4 pt-6 md:flex-row md:gap-8"}>
        <ButtonCard
          image={{ url: "/youtube/icons/google-sheets.svg", alt: "Google Sheets", width: 1838, height: 2500 }}
          label={"Clona su Google Spreadsheet"}
          link={"https://docs.google.com/spreadsheets/d/1ZOCbq2vlHXEadEI5ht85sieCxxv6fafSTWkHw1HCXWU/copy"}
        />
        <ButtonCard
          image={{ url: "/youtube/icons/excel.svg", alt: "Excel", width: 2500, height: 2480 }}
          label={"Scarica in formato Excel"}
          link={"/youtube/files/Calcolo tasse Regime Forfettario 2025.xlsx"}
        />
      </div>
    </>
  );
};

export default RegimeForfettario;
