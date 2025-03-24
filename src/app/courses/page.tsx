import Header from "@/components/header";
import { Card } from "@/components/ui/card";
import { COURSES } from "@/constants/courses";
import { Course } from "@/types/course";
import Image from "next/image";
import { FC } from "react";

const CourseCard: FC<{
  course: Course;
}> = ({ course }) => {
  return (
    <a key={course.link} href={course.link} target={"_blank"} rel={"noopener"}>
      <Card className={"relative flex h-full flex-col overflow-hidden"}>
        <div className={"bg- absolute left-2 top-2 flex items-center gap-1 rounded-lg bg-muted px-2 py-1 text-white"}>
          <span className={"text-sm font-medium leading-none"}>{course.language}</span>
        </div>
        <div className={"absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-muted px-2 py-1 text-white"}>
          <span className={"text-sm font-medium leading-none"}>-{course.discount}%</span>
        </div>
        <Image
          className={"flex-1 object-cover"}
          src={`/images/courses/${course.id}.jpg`}
          alt={course.title}
          width={course.imageSize.width}
          height={course.imageSize.height}
        />
        <div className={"flex flex-col gap-2 bg-muted p-4"}>
          <h3 className={"text-lg font-medium"}>{course.title}</h3>
          <p className={"text-sm text-muted-foreground"}>{course.description}</p>
        </div>
      </Card>
    </a>
  );
};

const Courses: FC = () => {
  return (
    <>
      <Header title={"Courses"} description={"These are the courses I've created."} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
};

export default Courses;
