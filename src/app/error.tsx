"use client";

import GlassCard from "@/components/ui/GlassCard";

/**
 * Error UI - Client Component
 *
 * Displayed when an error occurs in a Server Component or during rendering.
 * Provides a retry mechanism via the `reset` function from Next.js.
 *
 * @param props - Component props
 * @param props.error - The error object with optional digest for debugging
 * @param props.reset - Function to retry the failed render
 * @returns An error message with retry button in a glass card
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/error-handling
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <GlassCard variant="base" className="p-8 md:p-12 max-w-lg text-center">
        <h2 className="font-heading text-2xl mb-4 text-foreground">Something went wrong</h2>
        <p className="text-muted-foreground mb-6">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-lg bg-primary text-background font-semibold transition-all duration-300 hover:scale-105"
        >
          Try again
        </button>
      </GlassCard>
    </div>
  );
}
