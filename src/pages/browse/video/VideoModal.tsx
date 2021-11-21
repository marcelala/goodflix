//dependencies
import { useState } from "react";
//project files
import Player from "./Player";
import iMedia from "interfaces/iMedia";
import fallback from "assets/images/authBanner.jpg";
import Icon from "components/Icon";
import { iTrailer } from "../../../interfaces/iTrailer";
interface iProps {
  media: iMedia;
  trailer: iTrailer;
}

export default function VideoModal({ media, trailer }: iProps) {
  const [play, setPlay] = useState(true);
  const baseURL = "https://image.tmdb.org/t/p/original";
  const posterObject = `${baseURL}${media.backdrop_path}`;
  const title = media.title || media.name || media.original_name;

  function handleClick() {
    setPlay(!play);
  }

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
        {trailer.isLoaded && trailer.key !== null && (
          <Player video={trailer.key} setPlay={setPlay} play={play} />
        )}
        <div className="preview-overlay">
          <h2>{title}</h2>
          <div className="preview-overlay-buttons">
            <button className={"btn-icon play"} onClick={() => handleClick()}>
              {" "}
              <Icon fileName={"Play"} />
              Play
            </button>{" "}
          </div>
        </div>
        <div className="fade" />
      </header>
      <div className="preview-content">
        <p>{media.overview}</p>
      </div>
    </div>
  );
}
