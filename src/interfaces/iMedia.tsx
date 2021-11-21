import { iTrailer } from "./iTrailer";

export default interface iMedia {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  title?: string;
  name?: string;
  original_name?: string;
  overview: string;
  genre: string;
  poster_path: string | null;
  media_type: string;
  backdrop_path: string | null;
  vote_average?: number;
  release_date: string;
  trailer?: iTrailer;
}
