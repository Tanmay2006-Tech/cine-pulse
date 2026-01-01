import { Movie } from '@/types/movie';
import MovieCard from './MovieCard';
import { cn } from '@/lib/utils';

interface MovieGridProps {
  movies: Movie[];
  title?: string;
  subtitle?: string;
  onAddToWatchlist?: (movie: Movie) => void;
  onLike?: (movie: Movie) => void;
  watchlist?: string[];
  likedMovies?: string[];
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const MovieGrid = ({
  movies,
  title,
  subtitle,
  onAddToWatchlist,
  onLike,
  watchlist = [],
  likedMovies = [],
  columns = 5,
  className
}: MovieGridProps) => {
  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'
  };

  return (
    <section className={cn('py-8', className)}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      )}
      <div className={cn('grid gap-4 md:gap-6', columnClasses[columns])}>
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <MovieCard
              movie={movie}
              onAddToWatchlist={onAddToWatchlist}
              onLike={onLike}
              isInWatchlist={watchlist.includes(movie.id)}
              isLiked={likedMovies.includes(movie.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;
