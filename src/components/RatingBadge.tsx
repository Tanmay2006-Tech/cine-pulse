import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface RatingBadgeProps {
  type: 'imdb' | 'rottenTomatoes' | 'metacritic';
  value: number;
  size?: 'sm' | 'md' | 'lg';
}

const RatingBadge = ({ type, value, size = 'md' }: RatingBadgeProps) => {
  const getColorClass = () => {
    if (type === 'imdb') return 'text-rating-gold';
    if (type === 'rottenTomatoes') {
      return value >= 60 ? 'text-rating-green' : 'text-rating-red';
    }
    if (type === 'metacritic') {
      if (value >= 61) return 'text-rating-green';
      if (value >= 40) return 'text-rating-yellow';
      return 'text-rating-red';
    }
    return '';
  };

  const getBgClass = () => {
    if (type === 'imdb') return 'bg-rating-gold/10';
    if (type === 'rottenTomatoes') {
      return value >= 60 ? 'bg-rating-green/10' : 'bg-rating-red/10';
    }
    if (type === 'metacritic') {
      if (value >= 61) return 'bg-rating-green/10';
      if (value >= 40) return 'bg-rating-yellow/10';
      return 'bg-rating-red/10';
    }
    return '';
  };

  const getLabel = () => {
    if (type === 'imdb') return 'IMDb';
    if (type === 'rottenTomatoes') return 'RT';
    if (type === 'metacritic') return 'MC';
    return '';
  };

  const formatValue = () => {
    if (type === 'imdb') return value.toFixed(1);
    return `${value}%`;
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-2.5 py-1 gap-1.5',
    lg: 'text-base px-3 py-1.5 gap-2'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-md font-semibold',
        getBgClass(),
        getColorClass(),
        sizeClasses[size]
      )}
    >
      {type === 'imdb' && <Star className={cn('fill-current', size === 'sm' ? 'w-3 h-3' : 'w-4 h-4')} />}
      <span className="opacity-70">{getLabel()}</span>
      <span>{formatValue()}</span>
    </div>
  );
};

export default RatingBadge;
