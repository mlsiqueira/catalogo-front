export interface MovieResponse {
  ok: boolean,
  data: Movie[];
}

export interface Actor {
  name: string;
  nationality: string;
  bio: string;
  avatar: string;
}

export interface Director {
  name: string;
  nationality: string;
  bio: string;
  avatar: string;
}

export interface Movie {
  id: number;
  title: string;
  poster: string;
  director: Director;
  desc: string;
  genre: string;
  actors: Array<Actor>;
  releaseDate: string;
  runtime: number;
  inTheater: boolean;
}
