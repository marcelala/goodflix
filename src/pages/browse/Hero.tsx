import { useEffect, useState } from "react";
import axios from "scripts/axios";
import requests from "../../scripts/requests";
import { newMedia } from "../../types/newMedia";
import Icon from "../../components/Icon";
import truncate from "../../scripts/truncate";
import getRandom from "../../scripts/getRandom";

export default function Hero() {
  const [media, setMedia] = useState(newMedia);
  const baseURL = "https://image.tmdb.org/t/p/original";
  const banner = `${baseURL}${media.backdrop_path}`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const results = request.data.results;
      const randomMedia = await getRandom(results);
      //results[Math.floor(Math.random() * results.length - 1)];
      setMedia(randomMedia);
      return randomMedia;
    }
    fetchData();
  }, []);

  return (
    <header
      id="hero"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="hero-contents">
        <h1>{media.title || media.name || media.original_name}</h1>
        <p>{truncate(media.overview, 150)}</p>
        <div className="hero-contents-buttons">
          <button className={"btn-icon play"}>
            {" "}
            <Icon fileName={"Play"} />
            Play
          </button>
          <button className={"btn-icon info"}>
            {" "}
            <Icon fileName={"Detail"} />
            More info
          </button>
        </div>
      </div>
      <div className="fade" />
    </header>
  );
}
