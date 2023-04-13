import { FunctionComponent } from "react";
import Animation from "components/core/Animation";
import { SERVICES_TOOLS, SOFTWARE_TOOLS } from "constants/tools";
import Image from "next/image";
import { getFaviconUrl } from "utils/image";

const ToolsSection: FunctionComponent = () => {
  return (
    <Animation type={"fadeInUp"}>
      <section className={"flex gap-8"}>
        <div className={"flex flex-col flex-1 gap-2 items-center"}>
          <h3 className={"text-2xl text-white font-semibold"}>Services</h3>
          <ul className={"flex flex-col gap-2 text-white underline"}>
            {SERVICES_TOOLS.map(({ name, domain, link }) => (
              <li key={name}>
                <a
                  className={"flex gap-2"}
                  href={link}
                  target={"_blank"}
                  rel={"noopener"}
                >
                  <Image
                    src={getFaviconUrl(domain, 256)}
                    alt={name}
                    width={24}
                    height={24}
                  />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={"flex flex-col flex-1 gap-2 items-center"}>
          <h3 className={"text-2xl text-white font-semibold"}>Tools</h3>
          <ul className={"flex flex-col gap-2 text-white underline"}>
            {SOFTWARE_TOOLS.map(({ name, domain, link }) => (
              <li key={name}>
                <a
                  className={"flex gap-2"}
                  href={link}
                  target={"_blank"}
                  rel={"noopener"}
                >
                  <Image
                    src={getFaviconUrl(domain, 256)}
                    alt={name}
                    width={24}
                    height={24}
                  />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Animation>
  );
};

export default ToolsSection;
