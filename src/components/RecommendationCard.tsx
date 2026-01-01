import { Movie } from '@/types/movie';
import RatingBadge from './RatingBadge';
import PlatformBadge from './PlatformBadge';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Play, Plus, Sparkles } from 'lucide-react';

interface RecommendationCardProps {
  movie: Movie;
  reason: string;
  onAddToWatchlist?: (movie: Movie) => void;
}

const RecommendationCard = ({ movie, reason, onAddToWatchlist }: RecommendationCardProps) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row">
        {/* Poster */}
        <div className="relative w-full md:w-48 aspect-[2/3] md:aspect-auto shrink-0">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card opacity-0 md:opacity-100" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5">
          {/* Reason Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
              <Sparkles className="w-3 h-3" />
              Recommended
            </span>
          </div>

          {/* Title and Meta */}
          <h3 className="text-xl font-bold mb-1">{movie.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">
            {movie.year} • {movie.genres.slice(0, 2).join(', ')} • {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
          </p>

          {/* Ratings */}
          <div className="flex flex-wrap gap-2 mb-3">
            <RatingBadge type="imdb" value={movie.ratings.imdb} size="sm" />
            <RatingBadge type="rottenTomatoes" value={movie.ratings.rottenTomatoes} size="sm" />
          </div>

          {/* Why Recommended */}
          <p className="text-sm text-accent mb-4 italic">
            "{reason}"
          </p>

          {/* Platforms */}
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.streaming.slice(0, 3).map((option, idx) => (
              <PlatformBadge key={idx} option={option} size="sm" />
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {movie.streaming[0] && (
              <Button variant="hero" size="sm" asChild>
                <a href={movie.streaming[0].link} target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4" />
                  Watch
                </a>
              </Button>
            )}
            <Button
              variant="glass"
              size="sm"
              onClick={() => onAddToWatchlist?.(movie)}
            >
              <Plus className="w-4 h-4" />
              Watchlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
