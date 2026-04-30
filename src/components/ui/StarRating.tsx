import { Star } from "lucide-react";

/**
 * Props for the StarRating component
 */
interface StarRatingProps {
  /** Number of stars to display (typically 1-5) */
  rating: number;
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * StarRating Component
 *
 * Displays a row of filled star icons based on the rating value.
 * Uses Lucide React Star component with primary color fill.
 *
 * @param props - Component props
 * @param props.rating - Number of stars to render (1-5)
 * @param props.className - Additional CSS classes
 * @returns A div containing the specified number of star icons
 *
 * @example
 * <StarRating rating={5} /> // Renders 5 gold stars
 * <StarRating rating={3} className="mb-2" />
 */
export default function StarRating({ rating, className = "" }: StarRatingProps) {
  return (
    <div className={`flex mb-4 ${className}`}>
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current text-primary" />
      ))}
    </div>
  );
}
