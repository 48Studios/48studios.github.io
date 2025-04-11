'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, ChevronRight, Search, ShoppingCart } from 'lucide-react';
import { Button } from '@app/components/ui/button';
import { Badge } from '@app/components/ui/badge';
import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';

interface ProductLineup {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  products: number;
  backgroundColor: string;
  textColor: string;
  gradient?: string;
  isNew?: boolean;
}

const productLineups: ProductLineup[] = [
  {
    id: 'aura-home',
    name: 'Aura Home',
    tagline: 'Smarter living, simplified.',
    description:
      'Transform your living space with intelligent monitoring and automation for comfort, security, and efficiency.',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    products: 4,
    backgroundColor: 'bg-blue-50',
    textColor: 'text-blue-800',
    gradient: 'from-blue-500/10 to-blue-500/5',
    isNew: true,
  },
  {
    id: 'aura-garden',
    name: 'Aura Garden',
    tagline: 'Grow with intelligence.',
    description:
      'Precision monitoring and automated care for thriving indoor and outdoor plants, powered by nature-inspired technology.',
    image:
      'https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    products: 3,
    backgroundColor: 'bg-green-50',
    textColor: 'text-green-800',
    gradient: 'from-green-500/10 to-green-500/5',
  },
  {
    id: 'aura-health',
    name: 'Aura Health',
    tagline: 'Wellness, measured perfectly.',
    description:
      'Advanced sensors for monitoring air quality, sleep patterns, and environmental factors for healthier living.',
    image:
      'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    products: 2,
    backgroundColor: 'bg-purple-50',
    textColor: 'text-purple-800',
    gradient: 'from-purple-500/10 to-purple-500/5',
  },
  {
    id: 'aura-energy',
    name: 'Aura Energy',
    tagline: 'Power, perfected.',
    description:
      'Smart energy monitoring and management systems that reduce consumption and optimize efficiency.',
    image:
      'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    products: 3,
    backgroundColor: 'bg-amber-50',
    textColor: 'text-amber-800',
    gradient: 'from-amber-500/10 to-amber-500/5',
  },
  {
    id: 'nova-security',
    name: 'Nova Security',
    tagline: 'Protection reimagined.',
    description:
      'Advanced security devices with AI-powered threat detection and seamless integration with your existing systems.',
    image:
      'https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    products: 5,
    backgroundColor: 'bg-slate-50',
    textColor: 'text-slate-800',
    gradient: 'from-slate-500/10 to-slate-500/5',
    isNew: true,
  },
  {
    id: 'pulse-audio',
    name: 'Pulse Audio',
    tagline: 'Sound, perfected.',
    description:
      'Premium audio devices with adaptive noise cancellation and spatial sound technologies for immersive experiences.',
    image:
      'https://images.unsplash.com/photo-1558537348-c0f8e733989d?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    products: 4,
    backgroundColor: 'bg-red-50',
    textColor: 'text-red-800',
    gradient: 'from-red-500/10 to-red-500/5',
  },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLineups = productLineups.filter(
    (lineup) =>
      lineup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lineup.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30 py-20 md:py-28">
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="hero-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(12)"
                >
                  <rect width="100%" height="100%" fill="transparent" />
                  <path
                    d="M0 20 L40 20"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-coral/20"
                  />
                  <path
                    d="M20 0 L20 40"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-coral/20"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-pattern)" />
            </svg>
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="max-w-xl animate-fade-up">
                <Badge variant="outline" className="mb-4 border-coral/30 text-coral">
                  Product Lineups
                </Badge>
                <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                  <span className="bg-gradient-to-r from-coral to-coral-dark bg-clip-text text-transparent">
                    Our Product Lineup
                  </span>
                </h1>
                <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                  Discover our intelligent IoT ecosystem with diverse product lineups designed to
                  enhance every aspect of modern living with precision-engineered devices that blend
                  seamlessly into your life.
                </p>

                <div className="mb-8 flex flex-wrap gap-4">
                  <div className="flex items-center rounded-full border border-border/50 bg-background/80 py-1.5 pl-3 pr-4 text-sm shadow-sm backdrop-blur-sm">
                    <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Seamless Integration</span>
                  </div>
                  <div className="flex items-center rounded-full border border-border/50 bg-background/80 py-1.5 pl-3 pr-4 text-sm shadow-sm backdrop-blur-sm">
                    <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                    <span>Premium Design</span>
                  </div>
                  <div className="flex items-center rounded-full border border-border/50 bg-background/80 py-1.5 pl-3 pr-4 text-sm shadow-sm backdrop-blur-sm">
                    <span className="mr-2 h-2 w-2 rounded-full bg-purple-500"></span>
                    <span>Sustainable Materials</span>
                  </div>
                  <div className="flex items-center rounded-full border border-border/50 bg-background/80 py-1.5 pl-3 pr-4 text-sm shadow-sm backdrop-blur-sm">
                    <span className="mr-2 h-2 w-2 rounded-full bg-amber-500"></span>
                    <span>Privacy-First</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    className="bg-coral text-white hover:bg-coral-dark"
                    onClick={() =>
                      document
                        .getElementById('product-lineups')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Explore Lineups
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-coral/50 text-coral hover:bg-coral/5"
                    >
                      Our Story
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="animate-delay-300 relative animate-fade-in">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-coral/10 to-coral/5 opacity-70 blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl border border-border/40 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80"
                    alt="IoT Ecosystem"
                    className="aspect-[4/3] h-auto w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-medium text-white">IoT Ecosystem</h3>
                          <p className="mt-1 text-white/80">Intelligent living, by design</p>
                        </div>
                        <Badge className="border-white/20 bg-white/20 text-white backdrop-blur-sm">
                          Featured
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <h2 className="text-2xl font-bold">Product Lineups</h2>
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search lineups..."
                  className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Lineups */}
        <section id="product-lineups" className="py-16">
          <div className="container mx-auto px-4">
            {filteredLineups.length > 0 ? (
              <div className="grid grid-cols-1 gap-16">
                {filteredLineups.map((lineup, index) => (
                  <div
                    key={lineup.id}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
                  >
                    <div
                      className={`relative w-full overflow-hidden rounded-2xl lg:w-1/2 ${lineup.backgroundColor} animate-delay-200 group animate-fade-up`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${lineup.gradient} opacity-80`}
                      ></div>
                      <img
                        src={lineup.image}
                        alt={lineup.name}
                        className="aspect-[4/3] h-auto w-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                      />
                      {lineup.isNew && (
                        <div className="absolute right-6 top-6">
                          <Badge className="border-coral/30 bg-coral text-white">New</Badge>
                        </div>
                      )}
                    </div>

                    <div className="animate-delay-300 w-full animate-fade-up lg:w-1/2">
                      <Badge
                        variant="outline"
                        className={`mb-3 border-border/50 ${lineup.textColor}`}
                      >
                        {lineup.products} Products
                      </Badge>
                      <h2 className="mb-3 text-3xl font-bold md:text-4xl">{lineup.name}</h2>
                      <p className="mb-3 text-xl font-medium text-coral">{lineup.tagline}</p>
                      <p className="mb-6 text-muted-foreground">{lineup.description}</p>

                      <div className="mb-6 flex flex-wrap gap-3">
                        <span className="inline-flex rounded-full bg-secondary/50 px-2 py-1 text-xs">
                          Precision Sensors
                        </span>
                        <span className="inline-flex rounded-full bg-secondary/50 px-2 py-1 text-xs">
                          Cloud Connected
                        </span>
                        <span className="inline-flex rounded-full bg-secondary/50 px-2 py-1 text-xs">
                          App Control
                        </span>
                        <span className="inline-flex rounded-full bg-secondary/50 px-2 py-1 text-xs">
                          Voice Compatible
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link href={`/product-lineup/${lineup.id}`}>
                          <Button className="bg-coral hover:bg-coral-dark">
                            Explore {lineup.name}
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={`/product-lineup/${lineup.id}#products`}>
                          <Button
                            variant="outline"
                            className="border-coral/30 text-coral hover:bg-coral/5"
                          >
                            View Products
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-medium">No product lineups found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <Badge variant="outline" className="mb-4 border-coral/30 text-coral">
                Our Philosophy
              </Badge>
              <h2 className="mb-6 text-3xl font-bold">Crafted with Purpose</h2>
              <p className="text-muted-foreground">
                Every product is designed with intention, focusing on elegant design, responsible
                manufacturing, and meaningful innovation that enhances everyday life.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border/50 bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-xl font-semibold text-blue-600">01</span>
                </div>
                <h3 className="mb-3 text-xl font-medium">Thoughtful Design</h3>
                <p className="text-muted-foreground">
                  Products crafted to be beautiful objects in their own right, complementing your
                  space while serving their purpose seamlessly.
                </p>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <span className="text-xl font-semibold text-green-600">02</span>
                </div>
                <h3 className="mb-3 text-xl font-medium">Sustainable Materials</h3>
                <p className="text-muted-foreground">
                  Conscious selection of recycled and renewable materials with production processes
                  designed to minimize environmental impact.
                </p>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-xl font-semibold text-purple-600">03</span>
                </div>
                <h3 className="mb-3 text-xl font-medium">Ethical Technology</h3>
                <p className="text-muted-foreground">
                  Privacy-first approach with local processing when possible, transparent data
                  handling, and industry-leading security standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-coral/10 to-coral/5 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Ready to Explore Our Products?</h2>
              <p className="mb-8 text-muted-foreground">
                Discover our diverse product lineup and experience how intelligent, beautiful
                technology can transform your space.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-coral hover:bg-coral-dark">
                    Contact Sales
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/documentation/aura-home">
                  <Button variant="outline">View Documentation</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Products;
