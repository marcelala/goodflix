import getYouTubeID from "get-youtube-id";

interface iProps {
  video: string;
  autoplay: string;
  controls: string;
}

export default function Video({ video, autoplay, controls }: iProps) {
  const youtubeId = getYouTubeID(video);
  return (
    <div id={"video-player"}>
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoplay}&mute=${autoplay}&showinfo=0&controls=${controls}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );
}
