import GlassCard from "@/components/ui/GlassCard";

/**
 * Loading UI - Server Component
 *
 * Displayed automatically by Next.js during page transitions and Suspense boundaries.
 * Uses glassmorphism styling consistent with the portfolio design system.
 *
 * @returns A centered loading spinner with glass card styling
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <GlassCard variant="base" className="p-8 flex items-center gap-4">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <span className="text-foreground">Loading...</span>
      </GlassCard>
    </div>
  );
}
