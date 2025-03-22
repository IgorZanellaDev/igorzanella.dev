import { Card } from "@/components/ui/card";
import { PROJECTS } from "@/constants/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { LuX } from "react-icons/lu";
import { MdWork } from "react-icons/md";

const ProjectCard: FC<{
  title: string;
  description: string;
  id: string;
  imageSize: { width: number; height: number };
  status: string;
}> = ({ title, description, id, imageSize: { width, height }, status }) => {
  return (
    <Link key={id} href={`/projects/${id}`}>
      <Card className={"relative flex h-full flex-col overflow-hidden"}>
        <div
          className={cn(
            "absolute right-2 top-2 flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-white",
            status === "working" ? "bg-green-500" : "bg-red-500",
          )}
        >
          {status === "working" ? <MdWork className={"h-4 w-4"} /> : <LuX className={"h-4 w-4"} />}
          <span>{status}</span>
        </div>
        <Image
          className={"flex-1 object-cover"}
          src={`/images/projects/${id}/main.jpg`}
          alt={title}
          width={width}
          height={height}
        />
        <div className={"bg-muted p-4"}>
          <h3 className={"text-lg font-medium"}>{title}</h3>
          <p className={"text-sm text-muted-foreground"}>{description}</p>
        </div>
      </Card>
    </Link>
  );
};

const Projects: FC = () => {
  const mainProject = PROJECTS.find((project) => project.main);
  const otherProjects = PROJECTS.filter((project) => !project.main);

  return (
    <>
      <h2 className={"text-3xl font-semibold"}>Projects</h2>
      <p className={"mt-1 font-medium text-muted-foreground"}>Here are some of the projects I&apos;ve worked on.</p>
      <h3 className={"mb-2 mt-6 text-2xl font-medium"}>Main Project</h3>
      {mainProject && (
        <ProjectCard
          title={mainProject.title}
          description={mainProject.description}
          id={mainProject.id}
          imageSize={{ width: mainProject.imageSize.width, height: mainProject.imageSize.height }}
          status={mainProject.status}
        />
      )}
      <h3 className={"mt-6 text-2xl font-medium"}>Other Projects</h3>
      <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
        {otherProjects.map(({ description, id, imageSize: { width, height }, status, title }) => (
          <ProjectCard
            key={id}
            title={title}
            description={description}
            id={id}
            imageSize={{ width, height }}
            status={status}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
