import Image from 'next/image';
import Link from 'next/link';

import { Showcase } from '@/components/Showcase';
import { MainLayout } from '@/components/layout';
import { personalInfo, technicalSkills } from '@/data/profile';
import { FileText } from 'lucide-react';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-14 md:space-y-16">
        {/* Hero Section - Personal Info */}
        <section className="flex flex-col items-center gap-8 pt-2 text-center sm:flex-row sm:gap-10 sm:text-left">
          {/* Avatar */}
          <div className="relative aspect-square w-36 shrink-0 overflow-hidden rounded-2xl ring-2 ring-border transition-transform duration-300 hover:scale-[1.02] sm:w-40 md:w-44">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div className="space-y-3">
            <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {personalInfo.name}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              <Link
                href="https://syntropix.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              >
                {personalInfo.title}
              </Link>
            </p>
            <p className="text-base italic text-muted-foreground md:text-lg">{personalInfo.bio}</p>
          </div>
        </section>

        {/* Introduction */}
        <Showcase title="About Me">
          <p>
            Hello there! Welcome to <span className="font-semibold">CHAOS</span>, my personal
            website.
          </p>
          <p>
            I&apos;m a software engineer with experience across systems security, cloud-native
            infrastructure, and AI-driven platforms.
          </p>
          <p>
            Currently working on my own AI startup, building an AI-native ERP designed to work
            natively with LLM agents and real customer workflows. Previously, my work and research
            focused on cloud-native security, vulnerability analysis, and large-scale system
            evaluation, alongside active contributions to open-source LLM agent frameworks.
          </p>
          <p>
            I&apos;m interested in building robust, maintainable systems that balance low-level
            correctness with practical, user-focused design.
          </p>
          <p>
            Feel free to explore my{' '}
            <Link
              href="/experience"
              className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              experience
            </Link>
            ,{' '}
            <Link
              href="/projects"
              className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              projects & publications
            </Link>
            , or download my{' '}
            <Link
              href={personalInfo.resume}
              className="inline-flex items-center gap-1.5 underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              <FileText className="h-4 w-4" />
              Resume
            </Link>
            .
          </p>
        </Showcase>

        {/* Technical Skills */}
        <Showcase title="Technical Skills">
          <ul className="space-y-3 md:space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>
                <span className="font-medium">Languages:</span>{' '}
                <span className="text-muted-foreground">
                  {technicalSkills.languages.join(', ')}
                </span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>
                <span className="font-medium">Backend & Systems:</span>{' '}
                <span className="text-muted-foreground">{technicalSkills.backend.join(', ')}</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>
                <span className="font-medium">AI / LLM Systems:</span>{' '}
                <span className="text-muted-foreground">{technicalSkills.ai.join(', ')}</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>
                <span className="font-medium">Infrastructure:</span>{' '}
                <span className="text-muted-foreground">
                  {technicalSkills.infrastructure.join(', ')}
                </span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>
                <span className="font-medium">Systems & Performance:</span>{' '}
                <span className="text-muted-foreground">{technicalSkills.systems.join(', ')}</span>
              </span>
            </li>
          </ul>
        </Showcase>

        {/* About This Blog */}
        <Showcase title="About This Site">
          <p>
            This site is built with{' '}
            <Link
              href="https://react.dev/"
              className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </Link>{' '}
            +{' '}
            <Link
              href="https://nextjs.org/"
              className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </Link>{' '}
            +{' '}
            <Link
              href="https://www.typescriptlang.org/"
              className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </Link>
            , styled with{' '}
            <Link
              href="https://tailwindcss.com/"
              className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </Link>
            , and hosted on{' '}
            <Link
              href="https://vercel.com/"
              className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </Link>
            . View the source on{' '}
            <Link
              href="https://github.com/WHALEEYE/chaos"
              className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            .
          </p>
        </Showcase>
      </div>
    </MainLayout>
  );
}
