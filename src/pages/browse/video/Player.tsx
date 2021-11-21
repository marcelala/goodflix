import YouTube from "react-youtube";

interface iProps {
  video: string;
  setPlay: Function;
  play: boolean;
}
const PLAYER_CONFIG = {
  playerVars: {
    autoplay: 1,
    iv_load_policy: 3,
    controls: 1,
    loop: 1,
    modestbranding: 1,
    disablekb: 1,
    showinfo: 1,
  },
};

export default function Player({ video, setPlay }: iProps) {
  return (
    <>
      <YouTube
        videoId={video || ""}
        className="video"
        containerClassName="player"
        onPlay={() => setPlay(true)}
        onPause={() => setPlay(false)}
        // @ts-ignore
        opts={PLAYER_CONFIG}
      />
    </>
  );
} // @ts-ignore
