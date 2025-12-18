import Link from 'next/link';

import { Showcase } from '@/components/Showcase';
import { MainLayout } from '@/components/layout';
import { personalInfo } from '@/data/profile';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-10">
        {/* Intro */}
        <section className="space-y-4">
          <p>
            Hello there! Welcome to <span className="font-bold">CHAOS</span>, my personal website.
          </p>
          <p>
            You can see my CV{' '}
            <Link
              href={personalInfo.cv}
              className="underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
            >
              here
            </Link>{' '}
            if interested.
          </p>
          <p>Have a good time! =)</p>
        </section>

        {/* About This Blog */}
        <Showcase title="About This Blog">
          <p>
            This blog is totally built from scratch with{' '}
            <Link
              href="https://react.dev/"
              className="underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </Link>{' '}
            +{' '}
            <Link
              href="https://nextjs.org/"
              className="underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </Link>{' '}
            +{' '}
            <Link
              href="https://www.typescriptlang.org/"
              className="underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </Link>
            , with{' '}
            <Link
              href="https://tailwindcss.com/"
              className="underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </Link>{' '}
            used as the CSS library. The blog is a static website hosted on{' '}
            <Link
              href="https://vercel.com/"
              className="underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </Link>
            .
          </p>
          <p>
            You can view the GitHub repository of this blog{' '}
            <Link
              href="https://github.com/WHALEEYE/chaos"
              className="underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </Link>
            . The source code of this blog is MIT licensed.
          </p>
        </Showcase>
      </div>
    </MainLayout>
  );
}
