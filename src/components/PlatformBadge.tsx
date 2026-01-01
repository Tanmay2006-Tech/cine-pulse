import { cn } from '@/lib/utils';
import { Play, ShoppingCart, Tv } from 'lucide-react';
import { StreamingOption } from '@/types/movie';

interface PlatformBadgeProps {
  option: StreamingOption;
  showType?: boolean;
  size?: 'sm' | 'md';
}

const platformNames: Record<string, string> = {
  netflix: 'Netflix',
  prime: 'Prime',
  disney: 'Disney+',
  hbo: 'Max',
  apple: 'Apple TV+',
  hulu: 'Hulu'
};

const platformColors: Record<string, string> = {
  netflix: 'bg-platform-netflix',
  prime: 'bg-platform-prime',
  disney: 'bg-platform-disney',
  hbo: 'bg-platform-hbo',
  apple: 'bg-secondary text-foreground',
  hulu: 'bg-platform-hulu'
};

const PlatformBadge = ({ option, showType = true, size = 'md' }: PlatformBadgeProps) => {
  const TypeIcon = option.type === 'stream' ? Tv : option.type === 'rent' ? Play : ShoppingCart;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-3 py-1 gap-1.5'
  };

  return (
    <a
      href={option.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg',
        platformColors[option.platform],
        sizeClasses[size],
        option.platform !== 'apple' && 'text-primary-foreground'
      )}
    >
      <TypeIcon className={cn(size === 'sm' ? 'w-3 h-3' : 'w-4 h-4')} />
      <span>{platformNames[option.platform]}</span>
      {showType && option.price && (
        <span className="opacity-80">${option.price}</span>
      )}
    </a>
  );
};

export default PlatformBadge;
