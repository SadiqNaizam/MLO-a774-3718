import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface MainAppLayoutProps {
  children: React.ReactNode;
  /** Optional className for the <main> wrapper element */
  className?: string;
  /** Optional className for the <Card> element */
  cardClassName?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className, cardClassName }) => {
  return (
    <main
      className={cn(
        // As per Layout Requirements.overall.definition
        "flex items-center justify-center h-screen bg-background text-foreground",
        className
      )}
    >
      <Card
        className={cn(
          // As per Layout Requirements.overall.sizing.card:
          // "max-w-sm w-full p-6 bg-surface rounded-md shadow"
          // Shadcn Card component provides:
          // - bg-card (which maps to hsl(var(--card)), effectively bg-surface)
          // - text-card-foreground
          // - rounded-lg (which is var(--radius)). Since --radius is 0.375rem, this equals Tailwind's rounded-md.
          // - shadow-sm (fulfills the "shadow" requirement)
          // - border
          // We explicitly add max-w-sm, w-full, and p-6.
          "max-w-sm w-full p-6",
          cardClassName
        )}
      >
        {children}
      </Card>
    </main>
  );
};

export default MainAppLayout;
