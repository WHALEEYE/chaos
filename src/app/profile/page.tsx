import type { Metadata } from 'next';
import Link from 'next/link';

import { Showcase } from '@/components/Showcase';
import { MainLayout } from '@/components/layout';
import { awards, education, personalInfo, projects, researchInterests } from '@/data/profile';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Profile',
  description: "Isaac Jin's profile - Education, Research Interests, Projects, and Awards",
};

export default function ProfilePage() {
  return (
    <MainLayout>
      <div className="space-y-10">
        {/* Intro */}
        <section>
          <p>
            This page is my profile containing some of my brief information. You can check the full
            CV{' '}
            <Link
              href={personalInfo.cv}
              className="underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
            >
              here
            </Link>
            .
          </p>
        </section>

        {/* Education */}
        <Showcase title="Education">
          {education.map((edu, index) => (
            <div key={index} className="space-y-0.5">
              <div>
                <span className="font-semibold">{edu.degree}</span>
                {', '}
                <Link
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
                >
                  {edu.institution}
                </Link>
              </div>
              <div className="text-sm text-muted-foreground">{edu.period}</div>
            </div>
          ))}
        </Showcase>

        {/* Research Interests */}
        <Showcase title="Research Interests">
          <p>{researchInterests.description}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {researchInterests.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-md bg-accent px-2.5 py-1 text-sm font-medium text-accent-foreground"
              >
                {keyword}
              </span>
            ))}
          </div>
        </Showcase>

        {/* Projects */}
        <Showcase title="Projects">
          {projects.map((project, index) => (
            <div key={index} className="space-y-1">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-lg font-medium underline decoration-muted-foreground/50 decoration-dotted underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
              >
                {project.name}
                <ExternalLink className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
              </Link>
              <div className="space-y-0.5 text-sm text-muted-foreground">
                {project.descriptions.map((desc, descIndex) => (
                  <p key={descIndex}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </Showcase>

        {/* Awards */}
        <Showcase title="Awards">
          {awards.map((award, index) => (
            <div key={index} className="space-y-0.5">
              <div>
                <span className="font-semibold">{award.title}</span>
                {', '}
                <span className="italic">{award.subtitle}</span>
              </div>
              <div className="text-sm text-muted-foreground">{award.date}</div>
            </div>
          ))}
        </Showcase>
      </div>
    </MainLayout>
  );
}
