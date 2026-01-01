import { useRef } from 'react';
import { Movie } from '@/types/movie';
import MovieCard from './MovieCard';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MovieSectionProps {
  movies: Movie[];
  title: string;
  subtitle?: string;
  onAddToWatchlist?: (movie: Movie) => void;
  onLike?: (movie: Movie) => void;
  watchlist?: string[];
  likedMovies?: string[];
  featured?: boolean;
}

const MovieSection = ({
  movies,
  title,
  subtitle,
  onAddToWatchlist,
  onLike,
  watchlist = [],
  likedMovies = [],
  featured = false
}: MovieSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8">
      {/* Header */}
      <div className="container mx-auto flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        <div className="hidden md:flex gap-2">
          <Button
            variant="glass"
            size="icon"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="glass"
            size="icon"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className={cn(
          'flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4',
          'snap-x snap-mandatory scroll-smooth'
        )}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={cn(
              'flex-shrink-0 snap-start animate-fade-in',
              featured ? 'w-[85vw] md:w-[60vw] lg:w-[45vw]' : 'w-[45vw] sm:w-[30vw] md:w-[22vw] lg:w-[18vw]'
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <MovieCard
              movie={movie}
              onAddToWatchlist={onAddToWatchlist}
              onLike={onLike}
              isInWatchlist={watchlist.includes(movie.id)}
              isLiked={likedMovies.includes(movie.id)}
              featured={featured}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
