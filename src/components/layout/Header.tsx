'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { navItems, siteConfig } from '@/data/profile';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-all duration-200 hover:text-primary hover:scale-[1.02]"
        >
          <span className="font-serif text-2xl font-bold tracking-tight">{siteConfig.title}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute inset-x-2 -bottom-[1.125rem] h-0.5 rounded-full bg-primary" />
              )}
            </Link>
          ))}
          <div className="ml-3 border-l border-border pl-3">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'overflow-hidden border-b border-border bg-background transition-all duration-300 ease-out md:hidden',
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 border-b-0 opacity-0',
        )}
      >
        <div className="mx-auto max-w-4xl px-6 py-4 sm:px-8">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-accent',
                  pathname === item.href ? 'bg-accent text-primary' : 'text-muted-foreground',
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
