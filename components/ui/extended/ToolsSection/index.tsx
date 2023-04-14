import React, { FunctionComponent } from "react";
import Animation from "components/core/Animation";
import { TOOLS } from "constants/tools";
import { getFaviconUrl } from "utils/image";
import Image from "next/image";
import Icon from "components/core/Icon";

const ToolsSection: FunctionComponent = () => {
  return (
    <section className={"flex flex-wrap justify-center gap-8"}>
      {TOOLS.map(
        (
          { name, domain, icon, imageUrl, description, link, rounded },
          index
        ) => (
          <Animation
            type={"fadeInUp"}
            key={"name"}
            delay={index < 12 ? `${(index * 100).toString()}ms` : undefined}
          >
            <a
              target={"_blank"}
              rel={"noopener"}
              href={link}
              className={
                "flex flex-col gap-3 p-6 bg-gray-800 text-white max-w-sm rounded-xl"
              }
            >
              <div className={"flex gap-3 items-center"}>
                {icon && <Icon size={40} type={icon} />}
                {imageUrl && (
                  <Image src={imageUrl} alt={name} width={40} height={40} />
                )}
                {domain && (
                  <Image
                    className={rounded ? "rounded-xl" : undefined}
                    src={getFaviconUrl(domain, 256)}
                    alt={name}
                    width={40}
                    height={40}
                  />
                )}
                <h3 className={"text-2xl font-medium"}>{name}</h3>
              </div>
              <span className={"text-gray-300"}>{description}</span>
            </a>
          </Animation>
        )
      )}
    </section>
  );
};

export default ToolsSection;
