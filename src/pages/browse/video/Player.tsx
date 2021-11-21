import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

interface iProps {
  video: string;
  onPlay: any;
  onPause: any;
}
const PLAYER_CONFIG = {
  youtube: {
    height: "390",
    width: "100%",
    playerVars: {
      iv_load_policy: 3,
      controls: 1,
      loop: 1,
    },
  },
};

export default function Player({ video, onPause, onPlay }: iProps) {
  const youtubeId = getYouTubeID(video);
  return (
    <div id={"video-player"}>
      <YouTube
        videoId={youtubeId || ""}
        className="video"
        containerClassName="player"
        onPlay={onPlay}
        onPause={onPause}
        // @ts-ignore
        opts={PLAYER_CONFIG}
      />
    </div>
  );
}
