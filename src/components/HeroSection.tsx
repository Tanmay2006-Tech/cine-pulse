import { useState, useEffect } from 'react';
import { Movie } from '@/types/movie';
import RatingBadge from './RatingBadge';
import PlatformBadge from './PlatformBadge';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Play, Plus, Info, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  movies: Movie[];
  onAddToWatchlist?: (movie: Movie) => void;
}

const HeroSection = ({ movies, onAddToWatchlist }: HeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentMovie = movies[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
      setIsTransitioning(false);
    }, 300);
  };

  const formatRuntime = (minutes: number) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins}m`;
  };

  if (!currentMovie) return null;

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentMovie.backdropUrl}
          alt={currentMovie.title}
          className={cn(
            'w-full h-full object-cover transition-all duration-700',
            isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto flex items-center">
        <div className={cn(
          'max-w-2xl transition-all duration-500',
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        )}>
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {currentMovie.trending && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold animate-pulse-glow">
                🔥 Trending Now
              </span>
            )}
            {currentMovie.awards && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rating-gold text-accent-foreground text-sm font-semibold">
                🏆 {currentMovie.awards}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            {currentMovie.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
            <span className="text-lg">{currentMovie.year}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {formatRuntime(currentMovie.runtime)}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="px-2 py-0.5 rounded border border-border text-sm">
              {currentMovie.ageRating}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>{currentMovie.genres.join(', ')}</span>
          </div>

          {/* Ratings */}
          <div className="flex flex-wrap gap-3 mb-6">
            <RatingBadge type="imdb" value={currentMovie.ratings.imdb} size="lg" />
            <RatingBadge type="rottenTomatoes" value={currentMovie.ratings.rottenTomatoes} size="lg" />
            <RatingBadge type="metacritic" value={currentMovie.ratings.metacritic} size="lg" />
          </div>

          {/* Summary */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
            {currentMovie.summary}
          </p>

          {/* Streaming Platforms */}
          <div className="flex flex-wrap gap-2 mb-8">
            {currentMovie.streaming.map((option, idx) => (
              <PlatformBadge key={idx} option={option} size="md" />
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            {currentMovie.streaming[0] && (
              <Button variant="hero" size="xl" asChild>
                <a href={currentMovie.streaming[0].link} target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5 fill-current" />
                  Watch Now
                </a>
              </Button>
            )}
            <Button
              variant="glass"
              size="xl"
              onClick={() => onAddToWatchlist?.(currentMovie)}
            >
              <Plus className="w-5 h-5" />
              Add to Watchlist
            </Button>
            <Button variant="ghost" size="xl">
              <Info className="w-5 h-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4">
        <Button
          variant="glass"
          size="icon"
          onClick={goToPrev}
          className="h-12 w-12"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div className="flex gap-2">
          {movies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                idx === currentIndex ? 'w-8 bg-primary' : 'bg-muted-foreground/50 hover:bg-muted-foreground'
              )}
            />
          ))}
        </div>
        <Button
          variant="glass"
          size="icon"
          onClick={goToNext}
          className="h-12 w-12"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
