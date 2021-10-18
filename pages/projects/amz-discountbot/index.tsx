import React from "react";
import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";

const AmzDiscountbot: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title={"AMZ DiscountBot"} />
      <ProjectTitle
        category={"Telegram bot"}
        id={"amz-discountbot"}
        links={{}}
        name={"AMZ DiscountBot"}
        subtitle={"Personal side project"}
        imageWidth={1920}
        imageHeight={1080}
        technologies={["telegram"]}
      />
    </GlobalWrapper>
  );
};

export default AmzDiscountbot;
