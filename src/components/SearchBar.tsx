import { useState, useRef, useEffect } from 'react';
import { Movie } from '@/types/movie';
import { cn } from '@/lib/utils';
import { Search, X, TrendingUp, Clock } from 'lucide-react';
import RatingBadge from './RatingBadge';

interface SearchBarProps {
  movies: Movie[];
  onSelectMovie?: (movie: Movie) => void;
}

const SearchBar = ({ movies, onSelectMovie }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredMovies = query.length > 0
    ? movies.filter(m =>
        m.title.toLowerCase().includes(query.toLowerCase()) ||
        m.genres.some(g => g.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 6)
    : [];

  const trendingMovies = movies.filter(m => m.trending).slice(0, 4);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
    setIsOpen(true);
  };

  const handleSelect = (movie: Movie) => {
    onSelectMovie?.(movie);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      {/* Input */}
      <div className={cn(
        'relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300',
        isFocused ? 'glass shadow-lg' : 'bg-secondary/50'
      )}>
        <Search className={cn(
          'w-5 h-5 transition-colors',
          isFocused ? 'text-primary' : 'text-muted-foreground'
        )} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          placeholder="Search movies, genres..."
          className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="p-1 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl glass-card shadow-card z-50 animate-scale-in">
          {filteredMovies.length > 0 ? (
            <div className="space-y-1">
              {filteredMovies.map((movie) => (
                <button
                  key={movie.id}
                  onClick={() => handleSelect(movie)}
                  className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors text-left"
                >
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{movie.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {movie.year} • {movie.genres[0]}
                    </p>
                    <div className="flex gap-2 mt-1">
                      <RatingBadge type="imdb" value={movie.ratings.imdb} size="sm" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : query.length > 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              <p>No movies found for "{query}"</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Trending */}
              <div>
                <div className="flex items-center gap-2 px-2 py-1 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  <span>Trending</span>
                </div>
                <div className="space-y-1">
                  {trendingMovies.map((movie) => (
                    <button
                      key={movie.id}
                      onClick={() => handleSelect(movie)}
                      className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors text-left"
                    >
                      <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        className="w-10 h-14 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{movie.title}</p>
                        <p className="text-sm text-muted-foreground">{movie.year}</p>
                      </div>
                      <RatingBadge type="imdb" value={movie.ratings.imdb} size="sm" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
