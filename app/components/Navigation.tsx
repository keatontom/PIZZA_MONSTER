'use client';

import Link from 'next/link';
import { Instagram, Menu as MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="px-4 h-14 flex items-center justify-center relative tracking-wide font-normal">
      {/* Desktop Links */}
      <div className="hidden md:flex absolute left-4 items-center space-x-4 sm:space-x-6 text-base">
        <Link
          href="/hours"
          className={`sharp-text text-white relative after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:bg-white after:transition-all after:duration-300 ${
            pathname === '/hours' ? 'after:w-full' : 'after:w-0'
          } hover:after:w-full`}
        >
          HOURS
        </Link>
        <Link
          href="/story"
          className={`sharp-text text-white relative after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:bg-white after:transition-all after:duration-300 ${
            pathname === '/story' ? 'after:w-full' : 'after:w-0'
          } hover:after:w-full`}
        >
          OUR STORY
        </Link>
        <Link
          href="/order"
          className={`bg-primary text-white px-4 sm:px-6 py-2 rounded-full transition-colors font-medium ${
            pathname === '/order' ? 'bg-white !text-primary' : 'hover:bg-white hover:text-primary'
          }`}
        >
          ORDER NOW
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden absolute left-4">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button aria-label="Open menu" className="p-2">
              <MenuIcon className="h-6 w-6 text-white" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content sideOffset={5} align="start" className="mt-2 bg-white rounded-md shadow-lg py-2 min-w-[150px] z-50">
            <DropdownMenu.Item asChild>
              <Link href="/hours" className="block px-4 py-2 text-primary hover:bg-primary/10">
                HOURS
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link href="/story" className="block px-4 py-2 text-primary hover:bg-primary/10">
                OUR STORY
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link href="/order" className="block px-4 py-2 text-primary hover:bg-primary/10">
                ORDER NOW
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      {/* Logo */}
      <Link
        href="/"
        className="sharp-text text-white text-sm tracking-[0.2em] font-medium relative after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full"
      >
        PIZZA MONSTER
      </Link>

      {/* Instagram */}
      <div className="absolute right-4">
        <Link
          href="http://instagram.com/iamapizzamonster"
          className="group relative p-2 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="absolute inset-0 bg-primary/0 rounded-full transition-all duration-300 group-hover:bg-primary/10"></div>
          <div className="relative">
            <Instagram className="h-5 w-5 md:h-6 md:w-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
            <div className="absolute inset-0 border border-white/0 rounded-full transition-all duration-300 group-hover:border-white/20 group-hover:scale-125"></div>
          </div>
          <span className="sr-only">Instagram</span>
        </Link>
      </div>
    </nav>
  );
}
