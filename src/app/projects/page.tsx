import type { Metadata } from 'next';
import Link from 'next/link';

import { Showcase } from '@/components/Showcase';
import { MainLayout } from '@/components/layout';
import { personalInfo, projects, publications } from '@/data/profile';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects & Publications | CHAOS',
  description: "Isaac Jin's projects and publications",
};

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="space-y-14 md:space-y-16">
        {/* Page Header */}
        <section>
          <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Projects & Publications
          </h1>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            A collection of my research publications and engineering projects. See my full{' '}
            <Link
              href={personalInfo.resume}
              className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              Resume
            </Link>{' '}
            for more details.
          </p>
        </section>

        {/* Publications */}
        <Showcase title="Publications & Research">
          <div className="space-y-8 md:space-y-10">
            {publications.map((pub, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  {pub.url ? (
                    <Link
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-base font-medium underline decoration-muted-foreground/50 decoration-dotted underline-offset-4 transition-colors hover:text-primary hover:decoration-primary md:text-lg"
                    >
                      {pub.title}
                      <ExternalLink className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ) : (
                    <span className="text-base font-medium md:text-lg">{pub.title}</span>
                  )}
                </div>
                <div>
                  <span className="rounded-md bg-accent px-2.5 py-1 text-sm font-medium text-accent-foreground">
                    {pub.venue}
                  </span>
                </div>
                {pub.description && (
                  <p className="text-sm text-muted-foreground md:text-base">{pub.description}</p>
                )}
              </div>
            ))}
          </div>
        </Showcase>

        {/* Projects */}
        <Showcase title="Projects">
          <div className="space-y-8 md:space-y-10">
            {projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-lg font-medium underline decoration-muted-foreground/50 decoration-dotted underline-offset-4 transition-colors hover:text-primary hover:decoration-primary md:text-xl"
                    >
                      {project.name}
                      <ExternalLink className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ) : (
                    <span className="text-lg font-medium md:text-xl">{project.name}</span>
                  )}
                  {project.tech && (
                    <span className="text-sm text-muted-foreground md:text-base">
                      ({project.tech})
                    </span>
                  )}
                </div>
                {project.period && (
                  <div className="text-sm text-muted-foreground md:text-base">{project.period}</div>
                )}
                <ul className="space-y-2">
                  {project.descriptions.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="flex items-start gap-3 text-sm text-muted-foreground md:text-base"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Showcase>
      </div>
    </MainLayout>
  );
}
