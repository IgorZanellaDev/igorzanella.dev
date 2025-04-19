import Link from "next/link";
import { FC } from "react";
import { LuSearchX } from "react-icons/lu";

const NotFound: FC = () => {
  return (
    <div className={"flex flex-1 flex-col items-center justify-center gap-4"}>
      <LuSearchX className={"h-10 w-10"} />
      <div className={"flex flex-col items-center gap-1"}>
        <h1 className={"text-2xl font-bold"}>404 Not Found</h1>
        <p>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      </div>
      <Link className={"underline"} href={"/"}>
        Go back to the home page
      </Link>
    </div>
  );
};

export default NotFound;
