export interface iEpisode {
  id: number;
  episode_number: number;
  name: string;
  overview: string;
  still_path: string;
  [x: string]: any;
}
