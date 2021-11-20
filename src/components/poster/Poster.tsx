import PropsMedia from "../../interfaces/PropsMedia";
import iMedia from "../../interfaces/iMedia";

interface iProps {
  media: iMedia;
  baseURL: string;
}

export default function Poster({ media }: iProps) {
  const baseURL = "https://image.tmdb.org/t/p/original";
  const posterObject = `${baseURL}${media.poster_path}`;
  return (
    <li className="row-poster">
      <img src={posterObject} alt={media.title} />
    </li>
  );
}
