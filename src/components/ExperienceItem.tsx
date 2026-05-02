import type { Experience } from "@/data/experience";
import { hoverPop } from "@/constants/animations";

/**
 * Props for the ExperienceItem component
 */
interface ExperienceItemProps {
  /** Experience data object containing job details */
  experience: Experience;
  /** Index used for alternating layout (even = right side, odd = left side) */
  index: number;
}

/**
 * Experience Item - Component
 *
 * Renders a single experience entry with:
 * - Timeline dot positioned on the vertical line
 * - Date badge with primary color background
 * - Job title, company, and location
 * - Bullet list of responsibilities
 * - Alternating layout based on index (even/odd)
 *
 * The component uses glass-base styling and hover scale effects.
 *
 * @param props - Component props
 * @param props.experience - The experience data to display
 * @param props.index - Position index for alternating layout calculation
 * @returns A single experience entry with timeline positioning
 */
export default function ExperienceItem({ experience: exp, index }: ExperienceItemProps) {
  return (
    <>
      <div
        className="absolute left-3 md:left-1/2 w-4 h-4 rounded-full -translate-x-[7px] md:-translate-x-1/2 bg-primary"
        style={{
          boxShadow: '0 0 20px rgba(var(--color-primary-glow), 0.3), 0 0 40px rgba(var(--color-primary-glow), 0.2)',
          top: '1.5rem',
        }}
      />

       <div
         className={`ml-8 md:ml-0 p-6 md:p-8 rounded-xl ${hoverPop} glass-base`}
       >
        <div className={`mb-3 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} leading-tight`}>
          <span
            className="inline-block px-3 py-1 rounded-full text-sm"
            style={{ background: 'rgba(var(--color-primary-glow), 0.3)', color: 'hsl(var(--primary))' }}
          >
            {exp.dates}
          </span>
        </div>

        <h3
          className={`font-heading mb-2 text-2xl font-medium leading-tight ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
        >
          {exp.title}
        </h3>

        <p
          className={`mb-1 font-heading text-lg font-medium leading-tight text-primary ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
        >
          {exp.company}
        </p>

        <p
          className={`mb-4 text-sm leading-tight text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
        >
          {exp.location}
        </p>

        <ul className="space-y-2 text-left text-muted-foreground text-base">
          {exp.responsibilities.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3"
            >
              <span
                className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-primary"
              />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
