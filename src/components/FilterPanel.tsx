import { useState } from 'react';
import { genres, moods, platforms } from '@/data/mockMovies';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Slider } from './ui/slider';
import { ChevronDown, X, Filter, SlidersHorizontal } from 'lucide-react';

interface FilterPanelProps {
  onFilterChange?: (filters: any) => void;
  className?: string;
}

const FilterPanel = ({ onFilterChange, className }: FilterPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [ratingThreshold, setRatingThreshold] = useState([0]);
  const [yearRange, setYearRange] = useState([2010, 2024]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const toggleMood = (mood: string) => {
    setSelectedMoods(prev =>
      prev.includes(mood) ? prev.filter(m => m !== mood) : [...prev, mood]
    );
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
    );
  };

  const clearAll = () => {
    setSelectedGenres([]);
    setSelectedMoods([]);
    setSelectedPlatforms([]);
    setRatingThreshold([0]);
    setYearRange([2010, 2024]);
  };

  const hasActiveFilters = selectedGenres.length > 0 || selectedMoods.length > 0 || 
    selectedPlatforms.length > 0 || ratingThreshold[0] > 0 || yearRange[0] > 2010 || yearRange[1] < 2024;

  return (
    <div className={cn('w-full', className)}>
      {/* Toggle Button */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="glass"
          onClick={() => setIsExpanded(!isExpanded)}
          className="gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <span className="ml-1 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs">
              {selectedGenres.length + selectedMoods.length + selectedPlatforms.length}
            </span>
          )}
          <ChevronDown className={cn(
            'w-4 h-4 transition-transform',
            isExpanded && 'rotate-180'
          )} />
        </Button>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearAll}>
            <X className="w-4 h-4 mr-1" />
            Clear all
          </Button>
        )}
      </div>

      {/* Active Filters Pills */}
      {hasActiveFilters && !isExpanded && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedGenres.map(genre => (
            <span
              key={genre}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-sm"
            >
              {genre}
              <button onClick={() => toggleGenre(genre)} className="hover:text-primary">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
          {selectedPlatforms.map(platform => (
            <span
              key={platform}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-sm"
            >
              {platforms.find(p => p.id === platform)?.name}
              <button onClick={() => togglePlatform(platform)} className="hover:text-primary">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Expanded Panel */}
      <div className={cn(
        'overflow-hidden transition-all duration-500',
        isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="p-6 rounded-xl glass-card space-y-6">
          {/* Genres */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-3">Genres</h4>
            <div className="flex flex-wrap gap-2">
              {genres.map(genre => (
                <button
                  key={genre}
                  onClick={() => toggleGenre(genre)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                    selectedGenres.includes(genre)
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  )}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Mood */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-3">Mood</h4>
            <div className="flex flex-wrap gap-2">
              {moods.map(mood => (
                <button
                  key={mood}
                  onClick={() => toggleMood(mood)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                    selectedMoods.includes(mood)
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  )}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-3">Streaming Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {platforms.map(platform => (
                <button
                  key={platform.id}
                  onClick={() => togglePlatform(platform.id)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                    selectedPlatforms.includes(platform.id)
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  )}
                >
                  {platform.name}
                </button>
              ))}
            </div>
          </div>

          {/* Rating Threshold */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-muted-foreground">Minimum IMDb Rating</h4>
              <span className="text-sm font-medium text-rating-gold">{ratingThreshold[0].toFixed(1)}</span>
            </div>
            <Slider
              value={ratingThreshold}
              onValueChange={setRatingThreshold}
              max={10}
              min={0}
              step={0.5}
              className="w-full"
            />
          </div>

          {/* Year Range */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-muted-foreground">Release Year</h4>
              <span className="text-sm font-medium">{yearRange[0]} - {yearRange[1]}</span>
            </div>
            <Slider
              value={yearRange}
              onValueChange={setYearRange}
              max={2024}
              min={1980}
              step={1}
              className="w-full"
            />
          </div>

          {/* Apply Button */}
          <div className="flex justify-end">
            <Button variant="hero" onClick={() => setIsExpanded(false)}>
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
