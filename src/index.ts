export interface DownloadOption {
  quality?: number;
  type: string;
  url: string;
}

export enum MovieType {
  Movie = 'movie',
  Series = 'series'
}

export interface Episode {
  actors?: string;

  backdrop: string;

  director?: string;

  episode: number;

  firstAired?: string;

  imdbId?: string;

  movie?: Movie;

  plot?: string;

  poster: string;

  rating?: number;

  resolution?: number;

  runtime?: number;

  season: number;

  thumbnail?: string;

  title: string;

  watched?: number;

  writer?: string;

  year?: number;

  id?: number;

  createdAt?: Date;

  updatedAt?: Date;
}

export interface Movie {
  actors?: string;

  backdrop?: string;

  country?: string;

  director?: string;

  downloadOptions?: DownloadOption[];

  episodes?: Episode[];

  genre?: string;

  imdbId?: string;

  language?: string;

  plot?: string;

  poster?: string;

  rated?: string;

  rating?: number;

  resolution?: number;

  runtime?: number;

  title?: string;

  type?: string;

  watched?: number;

  writer?: string;

  year?: number;

  id?: number;

  createdAt?: Date;

  updatedAt?: Date;
}

export abstract class CouchBuddyExtension {
  constructor () {}

  abstract name: string;
  abstract explore (query: string): Promise<Movie[]>;
}
