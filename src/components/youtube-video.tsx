import { FC } from "react";

interface YoutubeVideoProps {
  videoId: string;
}

const YoutubeVideo: FC<YoutubeVideoProps> = ({ videoId }) => {
  return (
    <div className={"aspect-video w-full overflow-hidden rounded-xl"}>
      <iframe width={"100%"} height={"100%"} src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen />
    </div>
  );
};

export default YoutubeVideo;
