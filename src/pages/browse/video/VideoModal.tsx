//dependencies
import { useState } from "react";
//project files
import Player from "./Player";
import iMedia from "../../../interfaces/iMedia";
import fallback from "../../../assets/images/authBanner.jpg";

interface iProps {
  media: iMedia;
}

export default function VideoModal({ media }: iProps) {
  const [displayOverview, setDisplay] = useState(true);
  const baseURL = "https://image.tmdb.org/t/p/original";
  const posterObject = `${baseURL}${media.backdrop_path}`;
  return (
    <div className="video-modal">
      <header
        id="preview"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${posterObject || fallback})`,
          backgroundPosition: "center center",
        }}
      >
        {/*<Player*/}
        {/*  video={""}*/}
        {/*  onPlay={() => setDisplay(false)}*/}
        {/*  onPause={() => setDisplay(true)}*/}
        {/*/>*/}
        {/*<img src={posterObject || fallback} alt={media.title} />*/}
        <h2>{media.title}</h2>
        <div className="fade" />
      </header>
      {displayOverview && (
        <div className="preview-content">
          <h3>{media.release_date}</h3>
          <p>{media.overview}</p>
          {/*<Link className="play-button" to={`/video/${media.videoId}`}>*/}
          {/*  Play{" "}*/}
          {/*</Link>*/}
        </div>
      )}

      {/*{media_type === "series" ? <>/!*list of episodes*!/</> : null}*/}
    </div>
  );
}
