import { ReactNode } from 'react';

interface ShowcaseProps {
  title: string;
  children: ReactNode;
}

export function Showcase({ title, children }: ShowcaseProps) {
  return (
    <section className="space-y-4">
      <h2 className="font-serif text-xl font-bold tracking-tight">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
