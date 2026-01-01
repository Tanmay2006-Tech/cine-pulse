import { useState, useMemo } from 'react';
import { mockMovies } from '@/data/mockMovies';
import { Movie } from '@/types/movie';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MovieSection from '@/components/MovieSection';
import MovieGrid from '@/components/MovieGrid';
import FilterPanel from '@/components/FilterPanel';
import RecommendationCard from '@/components/RecommendationCard';
import { Sparkles, TrendingUp, Clock, Award } from 'lucide-react';

const Index = () => {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [likedMovies, setLikedMovies] = useState<string[]>([]);

  const handleAddToWatchlist = (movie: Movie) => {
    setWatchlist(prev =>
      prev.includes(movie.id)
        ? prev.filter(id => id !== movie.id)
        : [...prev, movie.id]
    );
  };

  const handleLike = (movie: Movie) => {
    setLikedMovies(prev =>
      prev.includes(movie.id)
        ? prev.filter(id => id !== movie.id)
        : [...prev, movie.id]
    );
  };

  const handleSelectMovie = (movie: Movie) => {
    console.log('Selected movie:', movie);
  };

  // Categorized movies
  const featuredMovies = useMemo(
    () => mockMovies.filter(m => m.trending && m.ratings.imdb >= 8).slice(0, 5),
    []
  );

  const trendingMovies = useMemo(
    () => mockMovies.filter(m => m.trending).slice(0, 10),
    []
  );

  const topRatedMovies = useMemo(
    () => [...mockMovies].sort((a, b) => b.ratings.imdb - a.ratings.imdb).slice(0, 10),
    []
  );

  const recentlyAdded = useMemo(
    () => [...mockMovies].sort((a, b) => b.year - a.year).slice(0, 10),
    []
  );

  const awardWinners = useMemo(
    () => mockMovies.filter(m => m.awards).slice(0, 10),
    []
  );

  // Personalized recommendations with reasons
  const recommendations = useMemo(() => [
    {
      movie: mockMovies.find(m => m.id === '1')!,
      reason: 'Because you like visually rich sci-fi with epic world-building'
    },
    {
      movie: mockMovies.find(m => m.id === '3')!,
      reason: 'Similar to dark comedies you\'ve watched recently'
    },
    {
      movie: mockMovies.find(m => m.id === '6')!,
      reason: 'Trending among viewers with similar taste'
    }
  ].filter(r => r.movie), []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        movies={mockMovies}
        watchlistCount={watchlist.length}
        onSelectMovie={handleSelectMovie}
      />

      {/* Hero Section */}
      <HeroSection
        movies={featuredMovies}
        onAddToWatchlist={handleAddToWatchlist}
      />

      {/* Main Content */}
      <main className="relative z-10 -mt-20">
        {/* Trending Section */}
        <MovieSection
          movies={trendingMovies}
          title="🔥 Trending Now"
          subtitle="What everyone is watching this week"
          onAddToWatchlist={handleAddToWatchlist}
          onLike={handleLike}
          watchlist={watchlist}
          likedMovies={likedMovies}
        />

        {/* Personalized Recommendations */}
        <section className="py-8 container mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/20">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">For You</h2>
              <p className="text-muted-foreground">Personalized picks based on your taste</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map(({ movie, reason }) => (
              <RecommendationCard
                key={movie.id}
                movie={movie}
                reason={reason}
                onAddToWatchlist={handleAddToWatchlist}
              />
            ))}
          </div>
        </section>

        {/* Featured Picks */}
        <MovieSection
          movies={topRatedMovies.slice(0, 6)}
          title="⭐ Featured Picks"
          subtitle="Critically acclaimed and audience favorites"
          onAddToWatchlist={handleAddToWatchlist}
          onLike={handleLike}
          watchlist={watchlist}
          likedMovies={likedMovies}
          featured
        />

        {/* Browse with Filters */}
        <section className="py-8 container mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Browse All</h2>
          </div>
          <FilterPanel />
          <MovieGrid
            movies={mockMovies}
            onAddToWatchlist={handleAddToWatchlist}
            onLike={handleLike}
            watchlist={watchlist}
            likedMovies={likedMovies}
            columns={5}
          />
        </section>

        {/* Award Winners */}
        <MovieSection
          movies={awardWinners}
          title="🏆 Award Winners"
          subtitle="Oscar, Golden Globe, and BAFTA honorees"
          onAddToWatchlist={handleAddToWatchlist}
          onLike={handleLike}
          watchlist={watchlist}
          likedMovies={likedMovies}
        />

        {/* Recently Added */}
        <MovieSection
          movies={recentlyAdded}
          title="🆕 Recently Added"
          subtitle="Fresh arrivals to your streaming platforms"
          onAddToWatchlist={handleAddToWatchlist}
          onLike={handleLike}
          watchlist={watchlist}
          likedMovies={likedMovies}
        />

        {/* Footer */}
        <footer className="py-12 mt-12 border-t border-border">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">
                  Cine<span className="text-gradient">Match</span>
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover your next favorite movie with AI-powered recommendations
                </p>
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">About</a>
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
              <p>© 2024 CineMatch. All rights reserved. Movie data provided by TMDB.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
