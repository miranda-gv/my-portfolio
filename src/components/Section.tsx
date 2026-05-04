import type { ReactNode } from "react";
import { typography } from "@/constants/animations";

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
  /** Max width preset (2xl-7xl) or custom value */
  maxWidth?: string;
  /** Additional CSS classes for heading */
  headingClassName?: string;
  /** Section content */
  children: ReactNode;
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
  children,
}: SectionProps) {
  const headingMargin = subheading ? "mb-8" : "mb-24";

  return (
    <section id={id} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mx-auto" style={{ maxWidth: maxWidthMap[maxWidth] || maxWidthMap["4xl"] }}>
          {heading && (
            <h2
              className={`font-heading mt-12 mb-12 ${headingClassName} text-center text-foreground`}
              style={typography.heading}
            >
              {heading}
            </h2>
          )}

          {subheading && (
            <p
              className="text-center mb-12 text-muted-foreground"
              style={typography.body}
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
