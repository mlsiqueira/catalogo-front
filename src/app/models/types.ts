export interface Actor {
  id: number;
  name: string;
  nationality: string;
  bio: string;
  avatar: string;
}

export interface Director {
  id: number;
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

export interface MovieResponse {
  ok: boolean;
  data: Movie[];
}

export interface ActorResponse {
  ok: boolean;
  data: Actor[];
}

export interface DirectorResponse {
  ok: boolean,
  data: Director[];
}

