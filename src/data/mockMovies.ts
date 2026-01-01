import { Movie } from '@/types/movie';

export const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Dune: Part Two',
    year: 2024,
    posterUrl: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    runtime: 166,
    ratings: { imdb: 8.8, rottenTomatoes: 93, metacritic: 79 },
    summary: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. A visually stunning epic that expands on the first film with breathtaking action and deeper character development.',
    streaming: [
      { platform: 'prime', type: 'rent', price: 5.99, link: 'https://amazon.com/dune2' },
      { platform: 'apple', type: 'buy', price: 19.99, link: 'https://apple.com/dune2' }
    ],
    releaseStatus: 'rent',
    popularity: 98,
    trending: true,
    ageRating: 'PG-13',
    language: 'English',
    country: 'USA',
    awards: 'Oscar Winner',
    sentiment: 'positive'
  },
  {
    id: '2',
    title: 'Oppenheimer',
    year: 2023,
    posterUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
    genres: ['Biography', 'Drama', 'History'],
    runtime: 180,
    ratings: { imdb: 8.4, rottenTomatoes: 93, metacritic: 88 },
    summary: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. Christopher Nolan delivers a masterful exploration of ambition, morality, and the consequences of scientific discovery.',
    streaming: [
      { platform: 'prime', type: 'stream', link: 'https://amazon.com/oppenheimer' }
    ],
    releaseStatus: 'streaming',
    popularity: 95,
    trending: true,
    ageRating: 'R',
    language: 'English',
    country: 'USA',
    awards: '7 Oscar Winner',
    sentiment: 'positive'
  },
  {
    id: '3',
    title: 'Poor Things',
    year: 2023,
    posterUrl: 'https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg',
    genres: ['Comedy', 'Drama', 'Romance'],
    runtime: 141,
    ratings: { imdb: 8.0, rottenTomatoes: 92, metacritic: 87 },
    summary: 'Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure. Emma Stone delivers a career-best performance in this visually unique and darkly comedic tale.',
    streaming: [
      { platform: 'hulu', type: 'stream', link: 'https://hulu.com/poorthings' },
      { platform: 'prime', type: 'rent', price: 4.99, link: 'https://amazon.com/poorthings' }
    ],
    releaseStatus: 'streaming',
    popularity: 88,
    trending: true,
    ageRating: 'R',
    language: 'English',
    country: 'UK',
    awards: '4 Oscar Winner',
    sentiment: 'positive'
  },
  {
    id: '4',
    title: 'The Holdovers',
    year: 2023,
    posterUrl: 'https://image.tmdb.org/t/p/w500/VHSzNBTwxV8vh7wylo7O9CLdac.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/5dRRCnhGkb0e1i1LhEL4E8vMj2C.jpg',
    genres: ['Comedy', 'Drama'],
    runtime: 133,
    ratings: { imdb: 7.9, rottenTomatoes: 96, metacritic: 82 },
    summary: 'A curmudgeonly instructor at a New England prep school is forced to remain on campus during Christmas break to babysit a handful of students who can\'t go home. A heartwarming comedy with exceptional performances.',
    streaming: [
      { platform: 'prime', type: 'stream', link: 'https://amazon.com/holdovers' }
    ],
    releaseStatus: 'streaming',
    popularity: 82,
    trending: false,
    ageRating: 'R',
    language: 'English',
    country: 'USA',
    awards: 'Oscar Winner',
    sentiment: 'positive'
  },
  {
    id: '5',
    title: 'Godzilla x Kong: The New Empire',
    year: 2024,
    posterUrl: 'https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/veIyxxi5Gs8gvztLEW1Ysb8rrzs.jpg',
    genres: ['Action', 'Sci-Fi', 'Adventure'],
    runtime: 115,
    ratings: { imdb: 6.5, rottenTomatoes: 54, metacritic: 47 },
    summary: 'Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins. A monster spectacle that prioritizes visual thrills over narrative depth.',
    streaming: [
      { platform: 'hbo', type: 'stream', link: 'https://max.com/godzillakong' }
    ],
    releaseStatus: 'streaming',
    popularity: 91,
    trending: true,
    ageRating: 'PG-13',
    language: 'English',
    country: 'USA',
    sentiment: 'mixed'
  },
  {
    id: '6',
    title: 'Challengers',
    year: 2024,
    posterUrl: 'https://image.tmdb.org/t/p/w500/H6vke7zGiuLsz4v4RPeReb9rsv.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/pHeXC2rpiNGJi9WvYf0Wa8I3hcI.jpg',
    genres: ['Drama', 'Romance', 'Sport'],
    runtime: 131,
    ratings: { imdb: 7.3, rottenTomatoes: 88, metacritic: 76 },
    summary: 'Tashi, a tennis player turned coach, transformed her husband into a champion. But to overcome a losing streak, he needs to face his former friend. An electrifying sports drama with sizzling chemistry.',
    streaming: [
      { platform: 'prime', type: 'rent', price: 5.99, link: 'https://amazon.com/challengers' }
    ],
    releaseStatus: 'rent',
    popularity: 85,
    trending: true,
    ageRating: 'R',
    language: 'English',
    country: 'USA',
    sentiment: 'positive'
  },
  {
    id: '7',
    title: 'Civil War',
    year: 2024,
    posterUrl: 'https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/en3GU5uGkKaYmSyetHV4csHHiH8.jpg',
    genres: ['Action', 'Drama', 'Thriller'],
    runtime: 109,
    ratings: { imdb: 7.0, rottenTomatoes: 81, metacritic: 73 },
    summary: 'A journey across a dystopian future America following a team of military-embedded journalists as they race against time to reach DC. A visceral and thought-provoking thriller from A24.',
    streaming: [
      { platform: 'apple', type: 'rent', price: 6.99, link: 'https://apple.com/civilwar' }
    ],
    releaseStatus: 'rent',
    popularity: 87,
    trending: false,
    ageRating: 'R',
    language: 'English',
    country: 'USA',
    sentiment: 'positive'
  },
  {
    id: '8',
    title: 'The Fall Guy',
    year: 2024,
    posterUrl: 'https://image.tmdb.org/t/p/w500/tSz1qsmSJon0rqjHBxXZmrotuse.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/H5HjE7Xs7GHHTfGfljD7pZhphpa.jpg',
    genres: ['Action', 'Comedy', 'Romance'],
    runtime: 126,
    ratings: { imdb: 7.1, rottenTomatoes: 82, metacritic: 66 },
    summary: 'A stuntman is drawn back into a dangerous underworld when the star of a movie goes missing. Ryan Gosling and Emily Blunt deliver charming performances in this action-packed romantic comedy.',
    streaming: [
      { platform: 'prime', type: 'stream', link: 'https://amazon.com/fallguy' }
    ],
    releaseStatus: 'streaming',
    popularity: 84,
    trending: true,
    ageRating: 'PG-13',
    language: 'English',
    country: 'USA',
    sentiment: 'positive'
  },
  {
    id: '9',
    title: 'Anatomy of a Fall',
    year: 2023,
    posterUrl: 'https://image.tmdb.org/t/p/w500/kQs6keheMwCxJxrzV83VUwFtHkB.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/bj3NvMnN3AJvjSxc1Y1cXVkVjEL.jpg',
    genres: ['Drama', 'Thriller', 'Mystery'],
    runtime: 151,
    ratings: { imdb: 7.8, rottenTomatoes: 96, metacritic: 88 },
    summary: 'A woman is suspected of her husband\'s murder, and their blind son faces a moral dilemma as a witness. A gripping courtroom drama that dissects truth, memory, and the complexity of relationships.',
    streaming: [
      { platform: 'hulu', type: 'stream', link: 'https://hulu.com/anatomyfall' }
    ],
    releaseStatus: 'streaming',
    popularity: 78,
    trending: false,
    ageRating: 'R',
    language: 'French',
    country: 'France',
    awards: 'Oscar Winner',
    sentiment: 'positive'
  },
  {
    id: '10',
    title: 'Furiosa: A Mad Max Saga',
    year: 2024,
    posterUrl: 'https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/shrwC6U8Bkst9T9J7fr1A50n6x6.jpg',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    runtime: 148,
    ratings: { imdb: 7.6, rottenTomatoes: 90, metacritic: 78 },
    summary: 'The origin story of renegade warrior Furiosa before she teamed up with Mad Max. An explosive prequel that delivers relentless action and stunning world-building in the Wasteland.',
    streaming: [
      { platform: 'hbo', type: 'stream', link: 'https://max.com/furiosa' }
    ],
    releaseStatus: 'streaming',
    popularity: 89,
    trending: true,
    ageRating: 'R',
    language: 'English',
    country: 'Australia',
    sentiment: 'positive'
  },
  {
    id: '11',
    title: 'Inside Out 2',
    year: 2024,
    posterUrl: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg',
    genres: ['Animation', 'Comedy', 'Family'],
    runtime: 96,
    ratings: { imdb: 7.7, rottenTomatoes: 91, metacritic: 74 },
    summary: 'Follow Riley, now a teenager, as new emotions like Anxiety join the team in headquarters. Pixar delivers another emotionally resonant story about growing up and self-acceptance.',
    streaming: [
      { platform: 'disney', type: 'stream', link: 'https://disneyplus.com/insideout2' }
    ],
    releaseStatus: 'streaming',
    popularity: 94,
    trending: true,
    ageRating: 'PG',
    language: 'English',
    country: 'USA',
    sentiment: 'positive'
  },
  {
    id: '12',
    title: 'Kinds of Kindness',
    year: 2024,
    posterUrl: 'https://image.tmdb.org/t/p/w500/8mMEWXjJwdFr3zKRuqoqdmlNaBy.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/9VYdO3fE5Bxfl8EIUrdWqU0YkHn.jpg',
    genres: ['Drama', 'Comedy'],
    runtime: 164,
    ratings: { imdb: 6.8, rottenTomatoes: 72, metacritic: 62 },
    summary: 'A triptych fable featuring a man without choice who tries to take control of his own life. Yorgos Lanthimos reunites with Emma Stone for another darkly absurd exploration of human nature.',
    streaming: [
      { platform: 'hulu', type: 'stream', link: 'https://hulu.com/kindsofkindness' }
    ],
    releaseStatus: 'streaming',
    popularity: 72,
    trending: false,
    ageRating: 'R',
    language: 'English',
    country: 'UK',
    sentiment: 'mixed'
  }
];

export const genres = [
  'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime',
  'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror',
  'Music', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'War', 'Western'
];

export const moods = [
  'Feel Good', 'Thrilling', 'Thought-Provoking', 'Emotional', 'Fun',
  'Dark', 'Romantic', 'Inspiring', 'Relaxing', 'Mind-Bending'
];

export const platforms = [
  { id: 'netflix', name: 'Netflix', color: 'netflix' },
  { id: 'prime', name: 'Prime Video', color: 'prime' },
  { id: 'disney', name: 'Disney+', color: 'disney' },
  { id: 'hbo', name: 'Max', color: 'hbo' },
  { id: 'apple', name: 'Apple TV+', color: 'apple' },
  { id: 'hulu', name: 'Hulu', color: 'hulu' }
];
