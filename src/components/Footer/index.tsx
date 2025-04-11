import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Github, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, SOCIALS } from '@app/constants';
import { Button } from '@app/components/ui/button';
import { Input } from '@app/components/ui/input';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Top Section with Newsletter */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">Stay in the loop</h2>
              <p className="mb-0 text-gray-400">
                Get updates on our latest products and DIY guides
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-white/20 bg-white/10 text-white placeholder:text-gray-500 focus-visible:ring-coral"
              />
              <Button className="whitespace-nowrap bg-coral text-white hover:bg-coral/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Logo and Social Links */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Image src="/logo-landscape.svg" alt="48 Studios" width={200} height={100} />
            </Link>
            <p className="mb-6 max-w-md text-gray-400">
              We craft innovative solutions through software development, IoT engineering, 3D
              printing, and design excellence for the modern world.
            </p>
            <div className="flex space-x-5">
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-coral"
                aria-label="LinkedIn"
              >
                <Facebook size={20} />
              </a>
              <Link
                href={SOCIALS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-coral"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-coral"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-coral"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/software"
                  className="text-sm text-gray-400 transition-colors hover:text-coral"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/iot"
                  className="text-sm text-gray-400 transition-colors hover:text-coral"
                >
                  IoT Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/3d-printing"
                  className="text-sm text-gray-400 transition-colors hover:text-coral"
                >
                  3D Printing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/3d-design"
                  className="text-sm text-gray-400 transition-colors hover:text-coral"
                >
                  3D Design
                </Link>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources/guides"
                  className="text-sm text-gray-400 transition-colors hover:text-coral"
                >
                  Guides
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/48studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-coral"
                >
                  GitHub
                  <Github className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link
                  href="/resources/documentation"
                  className="text-sm text-gray-400 transition-colors hover:text-coral"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 transition-colors hover:text-coral"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-0.5 h-5 w-5 text-coral" />
                <Link
                  href={SOCIALS.map}
                  target="_blank"
                  className="text-sm text-gray-400 transition-colors hover:text-coral"
                >
                  {CONTACT_INFO.address}
                </Link>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-coral" />
                <Link
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm text-gray-400 transition-colors hover:text-coral"
                >
                  {CONTACT_INFO.phone}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-coral" />
                <Link
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-gray-400 transition-colors hover:text-coral"
                >
                  {CONTACT_INFO.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-500 md:mb-0">
              &copy; {currentYear} 48 Studios. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <Link
                href="/terms"
                className="text-sm text-gray-500 transition-colors hover:text-coral"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-500 transition-colors hover:text-coral"
              >
                Privacy Policy
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-gray-500 transition-colors hover:text-coral"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
