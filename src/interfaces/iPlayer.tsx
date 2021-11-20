export interface TrailerDisplayed {
  id: string;
  header: string;
  url: string | null;
  isLoaded: boolean;
}
export interface DetailsTrailer {
  id: string;
  key: string | null;
  start: number;
}

export interface ShowOverview {
  id: number;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: Array<number>;
  popularity: number;
  vote_average: number;
  vote_count: number;
  original_language: string;
  original_title?: string;
  title?: string;
  origin_country?: Array<string>;
  name?: string;
  original_name?: string;
  [x: string]: any;
}

export interface Genre {
  id: number;
  name: string;
}
