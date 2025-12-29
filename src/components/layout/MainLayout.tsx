'use client';

import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

// Header height is h-16 (4rem = 64px)
const HEADER_HEIGHT = '4rem';
const CONTENT_GAP = '3rem';

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main
        className="mx-auto w-full max-w-4xl flex-1 px-6 pb-20 sm:px-8 lg:px-12"
        style={{ paddingTop: `calc(${HEADER_HEIGHT} + ${CONTENT_GAP})` }}
      >
        <div className="animate-fade-in">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
