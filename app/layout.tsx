import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';


export const metadata: Metadata = {
  title: 'PIZZA MONSTER',
  description: 'The coolest pizza place in town',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-aktiv antialiased">
        <div className="min-h-screen bg-background">
          <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm">
            <Navigation />
          </header>
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
