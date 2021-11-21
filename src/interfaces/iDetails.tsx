import iMedia from "./iMedia";

export interface iDetails extends iMedia {
  genres: Array<{ id: number; name: string }>;
  created_by?: Array<{
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
  }>;
  episode_run_time?: Array<number>;
  number_of_episodes?: number;
  [x: string]: any;
}
