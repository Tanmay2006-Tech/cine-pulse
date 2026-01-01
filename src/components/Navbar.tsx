import { useState, useEffect } from 'react';
import { Movie } from '@/types/movie';
import SearchBar from './SearchBar';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Film, Heart, BookmarkPlus, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  movies: Movie[];
  watchlistCount?: number;
  onSelectMovie?: (movie: Movie) => void;
}

const Navbar = ({ movies, watchlistCount = 0, onSelectMovie }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass py-3' : 'py-5 bg-gradient-to-b from-background to-transparent'
    )}>
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-xl font-bold shrink-0">
          <div className="p-2 rounded-lg bg-gradient-accent">
            <Film className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="hidden sm:inline">
            Cine<span className="text-gradient">Match</span>
          </span>
        </a>

        {/* Search - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <SearchBar movies={movies} onSelectMovie={onSelectMovie} />
        </div>

        {/* Actions - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <BookmarkPlus className="w-5 h-5" />
            {watchlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                {watchlistCount}
              </span>
            )}
          </Button>
          <Button variant="glass" className="ml-2">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'md:hidden overflow-hidden transition-all duration-300',
        isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="container mx-auto py-4 space-y-4">
          <SearchBar movies={movies} onSelectMovie={onSelectMovie} />
          <div className="flex justify-center gap-4">
            <Button variant="ghost" className="gap-2">
              <Heart className="w-5 h-5" />
              Favorites
            </Button>
            <Button variant="ghost" className="gap-2 relative">
              <BookmarkPlus className="w-5 h-5" />
              Watchlist
              {watchlistCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs">
                  {watchlistCount}
                </span>
              )}
            </Button>
          </div>
          <Button variant="glass" className="w-full">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
