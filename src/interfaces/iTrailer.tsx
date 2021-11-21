export interface iTrailer {
  id: string;
  header: string;
  url: string | null;
  isLoaded: boolean;
  site?: string;
  size?: number;
  key: string;
  name?: string;
  type?: string;
}
