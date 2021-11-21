//dependencies
import { useState } from "react";
//project files
import Player from "./Player";
import iMedia from "interfaces/iMedia";
import fallback from "assets/images/authBanner.jpg";
import Icon from "components/Icon";
interface iProps {
  media: iMedia;
}

export default function VideoModal({ media }: iProps) {
  const [displayOverview, setDisplay] = useState(true);
  const baseURL = "https://image.tmdb.org/t/p/original";
  const posterObject = `${baseURL}${media.backdrop_path}`;
  const title = media.title || media.name || media.original_name;
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
        <div className="preview-overlay">
          <h2>{title}</h2>
          <div className="preview-overlay-buttons">
            <button className={"btn-icon play"}>
              {" "}
              <Icon fileName={"Play"} />
              Play
            </button>{" "}
          </div>
        </div>
        <div className="fade" />
      </header>
      {displayOverview && (
        <div className="preview-content">
          <h3>{media.release_date}</h3>
          <p>{media.overview}</p>
          {/*<Link className="play-button" to={`/video/${media.videoId}`}>*/}

          {/*</Link>*/}
        </div>
      )}

      {/*{media_type === "series" ? <>/!*list of episodes*!/</> : null}*/}
    </div>
  );
}
