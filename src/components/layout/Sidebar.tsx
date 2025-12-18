import Image from 'next/image';
import Link from 'next/link';

import { personalInfo, socialLinks } from '@/data/profile';
import { Github, Mail } from 'lucide-react';

// Custom X icon (formerly Twitter)
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Custom Steam icon
function SteamIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
    </svg>
  );
}

// Custom Facebook icon
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function getSocialIcon(iconName: string, className: string) {
  switch (iconName) {
    case 'x':
      return <XIcon className={className} />;
    case 'github':
      return <Github className={className} />;
    case 'steam':
      return <SteamIcon className={className} />;
    case 'facebook':
      return <FacebookIcon className={className} />;
    default:
      return null;
  }
}

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6">
      {/* Avatar */}
      <div className="relative aspect-square w-32 overflow-hidden rounded-2xl sm:w-40 lg:w-44">
        <Image
          src={personalInfo.avatar}
          alt={personalInfo.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Name & Bio */}
      <div className="space-y-1">
        <h2 className="font-serif text-2xl font-bold tracking-tight">{personalInfo.name}</h2>
        <p className="text-sm text-muted-foreground italic">{personalInfo.bio}</p>
      </div>

      {/* Education */}
      <div>
        <p className="text-sm">
          <Link
            href="https://syntropix.ai"
            className="underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
          >
            {personalInfo.title}
          </Link>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            title={link.name}
          >
            {getSocialIcon(link.icon, 'h-5 w-5')}
            <span className="sr-only">{link.name}</span>
          </Link>
        ))}
      </div>

      {/* Contact */}
      <Link
        href={`mailto:${personalInfo.email}`}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
      >
        <Mail className="h-4 w-4" />
        Contact Me
      </Link>
    </aside>
  );
}
