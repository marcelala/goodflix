import requests from "./requests";
import { iTrailer } from "../interfaces/iTrailer";
import axios from "./axios";
import iMedia from "../interfaces/iMedia";

interface iProps {
  media: iMedia;
  setTrailer: Function;
  trailer: iTrailer;
}

export async function FindTrailer({ media, trailer, setTrailer }: iProps) {
  setTimeout(async () => {
    try {
      const endpoint =
        media.media_type === "series"
          ? requests.fetchTVVideos.replace("{{tv_id}}", media.id.toString())
          : requests.fetchMovieVideos.replace(
              "{{movie_id}}",
              media.id.toString()
            );
      const response = await axios.get(endpoint);
      const results = response.data.results;
      const trailerDetails = await results.find(
        (video: iTrailer) =>
          video.site === "YouTube" && (video.type === "Trailer" || "Teaser")
      );
      if (trailerDetails) {
        setTrailer({
          id: trailerDetails.id,
          header: trailerDetails.name,
          url: trailerDetails.url,
          isLoaded: true,
          key: trailerDetails.key,
        });
        return trailerDetails;
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  }, 800);
}
