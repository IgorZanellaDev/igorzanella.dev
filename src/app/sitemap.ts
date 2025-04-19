import { PROJECTS } from "@/constants/projects";
import { WEBSITE_URL } from "@/constants/seo";
import { MetadataRoute } from "next";

const routes = ["/", "/about", "/courses", "/projects", ...PROJECTS.map((project) => `/projects/${project.id}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${WEBSITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
