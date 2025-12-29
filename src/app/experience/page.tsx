import type { Metadata } from 'next';
import Link from 'next/link';

import { Showcase } from '@/components/Showcase';
import { MainLayout } from '@/components/layout';
import { education, personalInfo, workExperience } from '@/data/profile';
import { ExternalLink, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experience | CHAOS',
  description: "Isaac Jin's education and work experience",
};

export default function ExperiencePage() {
  return (
    <MainLayout>
      <div className="space-y-14 md:space-y-16">
        {/* Page Header */}
        <section>
          <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Experience</h1>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            My education background and professional journey. See my full{' '}
            <Link
              href={personalInfo.resume}
              className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              Resume
            </Link>{' '}
            for more details.
          </p>
        </section>

        {/* Work Experience */}
        <Showcase title="Work Experience">
          <div className="space-y-10 md:space-y-12">
            {workExperience.map((job, index) => (
              <div key={index} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h3 className="text-lg font-semibold md:text-xl">{job.title}</h3>
                    <span className="text-muted-foreground">@</span>
                    <Link
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-lg underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary md:text-xl"
                    >
                      {job.company}
                      <ExternalLink className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground md:text-base">
                    <span>{job.period}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-3 text-sm text-muted-foreground md:text-base"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Showcase>

        {/* Education */}
        <Showcase title="Education">
          <div className="space-y-8 md:space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-base font-semibold md:text-lg">{edu.degree}</h3>
                <div>
                  <Link
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 italic underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                  >
                    {edu.institution}
                    <ExternalLink className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground md:text-base">
                  <span>{edu.period}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </span>
                  {edu.gpa && <span>GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </div>
        </Showcase>
      </div>
    </MainLayout>
  );
}
