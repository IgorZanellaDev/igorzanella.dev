import { WEBSITE_URL } from "@/constants/seo";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}
