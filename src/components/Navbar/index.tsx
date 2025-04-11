'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@app/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md dark:bg-black/90' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-landscape.svg" alt="48 Studios" width={200} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors hover:text-coral ${
                pathname === '/services' ? 'text-coral' : ''
              }`}
            >
              Services
            </Link>
            <Link
              href="/products"
              className={`text-sm font-medium transition-colors hover:text-coral ${
                pathname === '/products' || pathname.includes('/products/') ? 'text-coral' : ''
              }`}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-coral ${
                pathname === '/about' ? 'text-coral' : ''
              }`}
            >
              About
            </Link>
            <Link href="/contact">
              <Button
                variant={pathname === '/contact' ? 'default' : 'outline'}
                className={
                  pathname === '/contact'
                    ? 'bg-coral hover:bg-coral/90'
                    : 'hover:border-coral hover:text-coral'
                }
              >
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="focus:outline-none md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container mx-auto flex flex-col space-y-4 px-4 py-4">
            <Link
              href="/services"
              className={`py-2 text-sm font-medium transition-colors hover:text-coral ${
                pathname === '/services' ? 'text-coral' : ''
              }`}
            >
              Services
            </Link>
            <Link
              href="/products"
              className={`py-2 text-sm font-medium transition-colors hover:text-coral ${
                pathname === '/products' || pathname.includes('/products/') ? 'text-coral' : ''
              }`}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={`py-2 text-sm font-medium transition-colors hover:text-coral ${
                pathname === '/about' ? 'text-coral' : ''
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`py-2 text-sm font-medium transition-colors hover:text-coral ${
                pathname === '/contact' ? 'text-coral' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
