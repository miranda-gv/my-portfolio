import type { ReactNode } from "react";

/**
 * Props for the Section component
 */
interface SectionProps {
  /** Section ID for navigation linking */
  id: string;
  /** Optional section heading text */
  heading?: string;
  /** Optional subheading text below heading (supports ReactNode for line breaks) */
  subheading?: ReactNode;
  /** Max width preset (2xl-7xl), "none" for no constraint, or custom value */
  maxWidth?: string;
  /** Additional CSS classes for heading */
  headingClassName?: string;
  /** Additional CSS classes for section element */
  className?: string;
  /** Section content */
  children: ReactNode;
  /** Top margin for heading (default: mt-4, use "lg" for mt-20) */
  headingMargin?: "sm" | "lg";
}

/** Maps max-width presets to actual pixel values */
const maxWidthMap: Record<string, string> = {
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
};

/**
 * Section - Reusable Section Wrapper
 *
 * Standardized section layout with:
 * - Consistent vertical padding (py-24)
 * - Optional heading and subheading with typography styles
 * - Configurable max-width container
 * - Centered content with responsive padding
 *
 * Used by all portfolio sections for consistent spacing and layout.
 *
 * @param props - Component props
 * @param props.id - HTML id for section navigation
 * @param props.heading - Optional section title
 * @param props.subheading - Optional subtitle below heading
 * @param props.maxWidth - Max width preset or custom value (default: 4xl)
 * @param props.headingClassName - Additional heading classes
 * @param props.children - Section content
 * @returns A standardized section wrapper
 */
export default function Section({
  id,
  heading,
  subheading,
  maxWidth = "4xl",
  headingClassName = "",
  className = "",
  children,
  headingMargin = "sm",
}: SectionProps) {
  const headingMarginClass = headingMargin === "lg" ? "mt-20" : "mt-4";

  return (
    <section id={id} className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-6">
         <div className="mx-auto" style={{ maxWidth: maxWidth === "none" ? undefined : (maxWidthMap[maxWidth] || maxWidthMap["4xl"]) }}>
          {heading && (
            <h2
               className={`font-heading ${headingMarginClass} mb-12 ${headingClassName} text-center text-foreground text-3xl md:text-4xl`}
            >
              {heading}
            </h2>
          )}

          {subheading && (
             <p
              className="text-center mb-12 text-muted-foreground text-lg"
            >
              {typeof subheading === 'string' ? subheading.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < subheading.split('\n').length - 1 && <br />}
                </span>
              )) : subheading}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
