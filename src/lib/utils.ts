import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes
 *
 * Combines clsx for conditional classes with tailwind-merge to properly
 * handle Tailwind class conflicts (e.g., px-4 and px-6).
 *
 * @param inputs - Class values (strings, objects, arrays, or falsy values)
 * @returns Merged and deduplicated className string
 *
 * @example
 * cn("px-4", "py-2", isActive && "bg-primary") // "px-4 py-2 bg-primary"
 * cn("px-4", "px-6") // "px-6" (tailwind-merge resolves conflict)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
