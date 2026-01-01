export interface Movie {
  id: string;
  title: string;
  year: number;
  posterUrl: string;
  backdropUrl: string;
  genres: string[];
  runtime: number;
  ratings: {
    imdb: number;
    rottenTomatoes: number;
    metacritic: number;
  };
  summary: string;
  streaming: StreamingOption[];
  releaseStatus: 'streaming' | 'rent' | 'buy' | 'theatrical';
  popularity: number;
  trending: boolean;
  ageRating: string;
  language: string;
  country: string;
  awards?: string;
  sentiment: 'positive' | 'mixed' | 'negative';
}

export interface StreamingOption {
  platform: 'netflix' | 'prime' | 'disney' | 'hbo' | 'apple' | 'hulu';
  type: 'stream' | 'rent' | 'buy';
  price?: number;
  link: string;
}

export interface FilterOptions {
  genres: string[];
  mood: string[];
  language: string[];
  country: string[];
  yearRange: [number, number];
  ratingThreshold: number;
  runtime: [number, number];
  ageRating: string[];
  platforms: string[];
  sentiment: string[];
  sortBy: 'rating' | 'popularity' | 'recency' | 'trending';
}

export interface UserPreferences {
  likedMovies: string[];
  dislikedMovies: string[];
  watchlist: string[];
  watchHistory: string[];
  preferredGenres: string[];
  preferredPlatforms: string[];
}
