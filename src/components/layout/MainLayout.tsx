import { ReactNode } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

// Header height is h-14 (3.5rem = 56px)
// Content top padding: pt-[calc(3.5rem+2rem)] = 5.5rem from top
const HEADER_HEIGHT = '3.5rem';
const CONTENT_GAP = '2rem';

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div
        className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8"
        style={{ paddingTop: `calc(${HEADER_HEIGHT} + ${CONTENT_GAP})` }}
      >
        <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* Sidebar - Hidden on mobile, visible on lg+ */}
          <div className="hidden lg:block">
            <div className="sticky" style={{ top: `calc(${HEADER_HEIGHT} + ${CONTENT_GAP})` }}>
              <Sidebar />
            </div>
          </div>

          {/* Mobile Sidebar - Visible on mobile, hidden on lg+ */}
          <div className="lg:hidden">
            <Sidebar />
          </div>

          {/* Main Content */}
          <main className="min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
