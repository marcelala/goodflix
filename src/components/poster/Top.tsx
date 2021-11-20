import iMedia from "../../interfaces/iMedia";

interface iProps {
  media: iMedia;
  baseURL: string;
}

export default function Top({ media }: iProps) {
  const baseURL = "https://image.tmdb.org/t/p/original";
  const posterObject = `${baseURL}${media.poster_path}`;
  return (
    <li className="row-poster top">
      <img src={posterObject} alt={media.title} />
    </li>
  );
}
