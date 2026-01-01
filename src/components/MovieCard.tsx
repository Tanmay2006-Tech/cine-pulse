import { useState } from 'react';
import { Movie } from '@/types/movie';
import RatingBadge from './RatingBadge';
import PlatformBadge from './PlatformBadge';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Clock, Heart, Plus, Play, Award, TrendingUp } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  onAddToWatchlist?: (movie: Movie) => void;
  onLike?: (movie: Movie) => void;
  isInWatchlist?: boolean;
  isLiked?: boolean;
  featured?: boolean;
}

const MovieCard = ({
  movie,
  onAddToWatchlist,
  onLike,
  isInWatchlist = false,
  isLiked = false,
  featured = false
}: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatRuntime = (minutes: number) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins}m`;
  };

  const primaryStreaming = movie.streaming[0];

  return (
    <div
      className={cn(
        'group relative rounded-xl overflow-hidden bg-card transition-all duration-500 cursor-pointer',
        featured ? 'aspect-[16/9]' : 'aspect-[2/3]',
        isHovered ? 'shadow-card scale-[1.02] z-10' : 'shadow-md'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Poster/Backdrop Image */}
      <div className="absolute inset-0">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-shimmer" />
        )}
        <img
          src={featured ? movie.backdropUrl : movie.posterUrl}
          alt={movie.title}
          className={cn(
            'w-full h-full object-cover transition-all duration-700',
            isHovered ? 'scale-110 brightness-50' : 'scale-100 brightness-90',
            imageLoaded ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Gradient Overlay */}
        <div className={cn(
          'absolute inset-0 transition-opacity duration-500',
          featured 
            ? 'bg-gradient-to-t from-background via-background/60 to-transparent'
            : 'bg-gradient-to-t from-background via-background/40 to-transparent',
          isHovered ? 'opacity-100' : 'opacity-70'
        )} />
      </div>

      {/* Badges */}
      <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
        <div className="flex flex-wrap gap-1.5">
          {movie.trending && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              <TrendingUp className="w-3 h-3" />
              Trending
            </span>
          )}
          {movie.awards && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rating-gold text-accent-foreground text-xs font-semibold">
              <Award className="w-3 h-3" />
              {movie.awards}
            </span>
          )}
        </div>
        <div className={cn(
          'flex gap-1.5 transition-all duration-300',
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        )}>
          <Button
            variant="glass"
            size="icon"
            className={cn(
              'h-8 w-8',
              isLiked && 'bg-primary text-primary-foreground'
            )}
            onClick={(e) => {
              e.stopPropagation();
              onLike?.(movie);
            }}
          >
            <Heart className={cn('w-4 h-4', isLiked && 'fill-current')} />
          </Button>
          <Button
            variant="glass"
            size="icon"
            className={cn(
              'h-8 w-8',
              isInWatchlist && 'bg-primary text-primary-foreground'
            )}
            onClick={(e) => {
              e.stopPropagation();
              onAddToWatchlist?.(movie);
            }}
          >
            <Plus className={cn('w-4 h-4', isInWatchlist && 'rotate-45')} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className={cn(
        'absolute bottom-0 left-0 right-0 p-4 transition-all duration-500',
        featured ? 'p-6' : 'p-4',
        isHovered ? 'translate-y-0' : 'translate-y-2'
      )}>
        {/* Title and Year */}
        <div className="mb-2">
          <h3 className={cn(
            'font-bold leading-tight text-foreground',
            featured ? 'text-2xl md:text-3xl' : 'text-lg'
          )}>
            {movie.title}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            {movie.year} • {movie.genres.slice(0, 2).join(', ')}
          </p>
        </div>

        {/* Ratings */}
        <div className="flex flex-wrap gap-2 mb-3">
          <RatingBadge type="imdb" value={movie.ratings.imdb} size="sm" />
          <RatingBadge type="rottenTomatoes" value={movie.ratings.rottenTomatoes} size="sm" />
          {featured && <RatingBadge type="metacritic" value={movie.ratings.metacritic} size="sm" />}
        </div>

        {/* Runtime and Summary (on hover or featured) */}
        <div className={cn(
          'transition-all duration-500 overflow-hidden',
          isHovered || featured ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Clock className="w-4 h-4" />
            <span>{formatRuntime(movie.runtime)}</span>
            <span className="px-1.5 py-0.5 rounded bg-secondary text-xs">{movie.ageRating}</span>
          </div>
          {featured && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {movie.summary}
            </p>
          )}
        </div>

        {/* Streaming Platforms */}
        <div className={cn(
          'flex flex-wrap gap-2 transition-all duration-500',
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}>
          {primaryStreaming && (
            <Button variant="hero" size="sm" asChild>
              <a href={primaryStreaming.link} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4" />
                Watch Now
              </a>
            </Button>
          )}
          {movie.streaming.slice(0, 2).map((option, idx) => (
            <PlatformBadge key={idx} option={option} size="sm" showType={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
