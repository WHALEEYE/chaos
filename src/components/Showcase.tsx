import { ReactNode } from 'react';

interface ShowcaseProps {
  title: string;
  children: ReactNode;
}

export function Showcase({ title, children }: ShowcaseProps) {
  return (
    <section className="space-y-5">
      <h2 className="font-serif text-xl font-bold tracking-tight md:text-2xl">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed md:text-lg md:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
