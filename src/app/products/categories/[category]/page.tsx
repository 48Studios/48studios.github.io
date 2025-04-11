'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Download, Play, ShoppingCart } from 'lucide-react';
import { Button } from '@app/components/ui/button';
import { Badge } from '@app/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@app/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@app/components/ui/carousel';
import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';

interface ProductLineup {
  id: string;
  name: string;
  tagline: string;
  slogan: string;
  description: string;
  longDescription: string;
  heroImage: string;
  videoThumbnail: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  gradient: string;
  isNew?: boolean;
  features: {
    title: string;
    description: string;
    image: string;
  }[];
  specs: {
    category: string;
    items: {
      name: string;
      value: string;
    }[];
  }[];
  products: Product[];
}

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  colors: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

// Data for Aura Home product lineup
const productLineups: ProductLineup[] = [
  {
    id: 'aura-home',
    name: 'Aura Home',
    tagline: 'Smarter living, simplified.',
    slogan: 'Intelligence that transforms your space.',
    description:
      'Transform your living space with intelligent monitoring and automation for comfort, security, and efficiency.',
    longDescription:
      'The Aura Home collection brings intelligence to everyday living, with thoughtfully designed devices that monitor and respond to your environment. From air quality sensors to smart switches, each product works seamlessly together to create a more comfortable, efficient, and secure home environment.',
    heroImage:
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    videoThumbnail:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    primaryColor: 'blue-600',
    secondaryColor: 'blue-100',
    backgroundColor: 'bg-blue-50',
    textColor: 'text-blue-800',
    gradient: 'from-blue-600/10 to-blue-600/5',
    isNew: true,
    features: [
      {
        title: 'Intelligent Environmental Monitoring',
        description:
          'Advanced sensors track temperature, humidity, air quality, and more, providing real-time insights into your home environment.',
        image:
          'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
      },
      {
        title: 'Seamless Integration',
        description:
          'All Aura Home devices connect effortlessly with each other and with popular smart home platforms for a unified experience.',
        image:
          'https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
      },
      {
        title: 'Privacy-First Design',
        description:
          'Local processing prioritizes privacy, with transparent data policies and industry-leading security standards.',
        image:
          'https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
      },
    ],
    specs: [
      {
        category: 'Connectivity',
        items: [
          { name: 'Wi-Fi', value: '802.11 a/b/g/n/ac (2.4GHz & 5GHz)' },
          { name: 'Bluetooth', value: '5.2 LE' },
          { name: 'Thread', value: 'Supported' },
          { name: 'Matter', value: 'Compatible' },
        ],
      },
      {
        category: 'Power',
        items: [
          { name: 'Input', value: '100-240V AC' },
          { name: 'Battery', value: 'Lithium-ion rechargeable (select models)' },
          { name: 'Battery Life', value: 'Up to 12 months (depending on usage)' },
          { name: 'Charging', value: 'USB-C' },
        ],
      },
      {
        category: 'Materials',
        items: [
          { name: 'Enclosure', value: 'Recycled aluminum & bio-plastic' },
          { name: 'Finish', value: 'Matte, fingerprint resistant' },
          { name: 'Sustainability', value: '70% recycled materials' },
        ],
      },
    ],
    products: [
      {
        id: 'smart-sensor',
        name: 'Aura Sense',
        tagline: 'The complete environmental guardian.',
        description:
          'Monitor temperature, humidity, air quality, VOCs, and more with this advanced environmental sensor hub.',
        price: 89.99,
        image:
          'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        colors: ['#E5E7EB', '#1E3A8A', '#1F2937'],
        isNew: true,
        isFeatured: true,
      },
      {
        id: 'motion-sensor',
        name: 'Aura Motion',
        tagline: 'Precision presence detection.',
        description:
          'Ultra-sensitive motion detection with customizable zones and intelligent presence recognition.',
        price: 39.99,
        image:
          'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        colors: ['#E5E7EB', '#1F2937'],
        isFeatured: true,
      },
      {
        id: 'smart-switch',
        name: 'Aura Switch',
        tagline: 'Control reimagined.',
        description:
          'Programmable smart switch with customizable functions, energy monitoring, and scene control.',
        price: 49.99,
        image:
          'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        colors: ['#E5E7EB', '#1E3A8A', '#1F2937', '#B91C1C'],
      },
      {
        id: 'hub',
        name: 'Aura Hub',
        tagline: 'The intelligent command center.',
        description:
          'Central hub that connects all your Aura devices, processes data locally, and enhances security.',
        price: 129.99,
        image:
          'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        colors: ['#E5E7EB', '#1F2937'],
      },
    ],
  },
  {
    id: 'aura-garden',
    name: 'Aura Garden',
    tagline: 'Grow with intelligence.',
    slogan: 'Perfect growing conditions, effortlessly maintained.',
    description:
      'Precision monitoring and automated care for thriving indoor and outdoor plants, powered by nature-inspired technology.',
    longDescription:
      "Aura Garden brings the intelligence of modern technology to plant care, with precise soil sensors, automated watering systems, and growing lights that adapt to your plants' needs. Designed for both novice gardeners and experts, these devices ensure optimal growing conditions with minimal effort.",
    heroImage:
      'https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    videoThumbnail:
      'https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    primaryColor: 'green-600',
    secondaryColor: 'green-100',
    backgroundColor: 'bg-green-50',
    textColor: 'text-green-800',
    gradient: 'from-green-600/10 to-green-600/5',
    features: [
      {
        title: 'Precision Soil Analysis',
        description:
          'Advanced sensors monitor moisture levels, nutrient content, and pH balance to ensure optimal growing conditions.',
        image:
          'https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
      },
      {
        title: 'Adaptive Lighting',
        description:
          'Smart grow lights that adjust spectrum and intensity based on plant type, growth stage, and natural light conditions.',
        image:
          'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
      },
      {
        title: 'Automated Care',
        description:
          'Intelligent watering systems that deliver precisely the right amount of water when your plants need it most.',
        image:
          'https://images.unsplash.com/photo-1590452224879-867e8012a828?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
      },
    ],
    specs: [
      {
        category: 'Connectivity',
        items: [
          { name: 'Wi-Fi', value: '802.11 a/b/g/n/ac (2.4GHz)' },
          { name: 'Bluetooth', value: '5.2 LE' },
          { name: 'Waterproof Rating', value: 'IP67 (outdoor sensors)' },
        ],
      },
      {
        category: 'Power',
        items: [
          { name: 'Battery', value: 'Lithium-ion rechargeable' },
          { name: 'Battery Life', value: 'Up to 6 months (soil sensors)' },
          { name: 'Solar Option', value: 'Available for outdoor units' },
        ],
      },
      {
        category: 'Materials',
        items: [
          { name: 'Enclosure', value: 'Food-safe bio-plastic' },
          { name: 'Sustainability', value: '85% recycled materials' },
        ],
      },
    ],
    products: [
      {
        id: 'plant-monitor',
        name: 'Aura Grow',
        tagline: "Your plants' best friend.",
        description:
          'Comprehensive soil sensor that monitors moisture, nutrients, pH, and temperature for optimal plant health.',
        price: 49.99,
        image:
          'https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        colors: ['#65A30D', '#1F2937'],
        isFeatured: true,
      },
      {
        id: 'auto-water',
        name: 'Aura Water',
        tagline: 'Perfect hydration, automatically.',
        description:
          'Smart watering system that delivers precisely the right amount of water based on plant needs and conditions.',
        price: 69.99,
        image:
          'https://images.unsplash.com/photo-1590452224879-867e8012a828?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        colors: ['#E5E7EB', '#65A30D'],
        isNew: true,
        isFeatured: true,
      },
      {
        id: 'grow-light',
        name: 'Aura Glow',
        tagline: 'Light perfected for growth.',
        description:
          'Adaptive grow light with customizable spectrum and intensity for any plant type and growth stage.',
        price: 89.99,
        image:
          'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        colors: ['#E5E7EB', '#1F2937'],
      },
    ],
  },
  // Additional lineups would be defined here
];

const Category = () => {
  const { category: lineupId } = useParams<{ category: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const videoRef = useRef<HTMLDivElement>(null);

  // Find the current product lineup
  const lineup = productLineups.find((l) => l.id === lineupId);

  // Scroll to video section when needed
  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // If lineup is not found
  if (!lineup) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center">
          <div className="p-8 text-center">
            <h1 className="mb-4 text-2xl font-bold">Product Lineup Not Found</h1>
            <p className="mb-6 text-muted-foreground">
              The product lineup you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/products">
              <Button className="bg-coral hover:bg-coral-dark">Return to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className={`relative overflow-hidden py-24 md:py-32 ${lineup.backgroundColor}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${lineup.gradient}`}></div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="w-full animate-fade-up lg:w-1/2">
                {lineup.isNew && (
                  <Badge className="mb-4 border-coral/30 bg-coral text-white">New</Badge>
                )}
                <h1 className={`mb-4 text-5xl font-bold md:text-6xl ${lineup.textColor}`}>
                  {lineup.name}
                </h1>
                <p className="mb-4 text-2xl font-medium text-coral">{lineup.tagline}</p>
                <p className="mb-8 text-xl text-muted-foreground">{lineup.slogan}</p>

                <div className="mb-8 flex flex-wrap gap-4">
                  <Button
                    className="bg-coral hover:bg-coral-dark"
                    onClick={() =>
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-coral/50 text-coral hover:bg-coral/5"
                    onClick={scrollToVideo}
                  >
                    Watch Video
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <span>From</span>
                  <span className="text-lg font-medium text-foreground">
                    ${Math.min(...lineup.products.map((p) => p.price)).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="animate-delay-300 relative w-full animate-fade-in lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl border border-black/5 shadow-2xl">
                  <img
                    src={lineup.heroImage}
                    alt={lineup.name}
                    className="aspect-[4/3] h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-16 z-30 border-b border-border/50 bg-background shadow-sm">
          <div className="container mx-auto px-4">
            <Tabs
              defaultValue="overview"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="h-16 w-full justify-start overflow-x-auto bg-transparent">
                <TabsTrigger
                  value="overview"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-coral data-[state=active]:text-coral"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-coral data-[state=active]:text-coral"
                >
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="products"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-coral data-[state=active]:text-coral"
                >
                  Products
                </TabsTrigger>
                <TabsTrigger
                  value="specs"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-coral data-[state=active]:text-coral"
                >
                  Tech Specs
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="animate-fade-up">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">{lineup.name}</h2>
                  <p className="text-xl text-muted-foreground">{lineup.longDescription}</p>
                </div>

                {/* Video Section */}
                <div ref={videoRef} className="mb-20">
                  <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-border/50 bg-black/5 shadow-lg">
                    <img
                      src={lineup.videoThumbnail}
                      alt="Product Video"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="flex h-20 w-20 items-center justify-center rounded-full bg-coral/90 text-white transition-transform hover:bg-coral group-hover:scale-110">
                        <Play className="ml-1 h-8 w-8" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-xl font-medium">Introducing {lineup.name}</h3>
                      <p className="text-white/80">See how our products transform your space</p>
                    </div>
                  </div>
                </div>

                {/* Featured Products Carousel */}
                <div className="mb-16">
                  <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {lineup.products
                        .filter((p) => p.isFeatured)
                        .map((product) => (
                          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-coral/30">
                                <div className="relative aspect-square overflow-hidden bg-black/5">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                                  {product.isNew && (
                                    <div className="absolute right-3 top-3">
                                      <Badge className="border-coral/30 bg-coral text-white">
                                        New
                                      </Badge>
                                    </div>
                                  )}
                                </div>
                                <div className="flex flex-grow flex-col p-5">
                                  <h3 className="mb-1 text-lg font-medium transition-colors group-hover:text-coral">
                                    {product.name}
                                  </h3>
                                  <p className="mb-2 text-sm text-coral">{product.tagline}</p>
                                  <p className="mb-4 flex-grow text-sm text-muted-foreground">
                                    {product.description}
                                  </p>
                                  <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-3">
                                    <span className="font-medium">${product.price}</span>
                                    <Link href={`/products/${product.id}`}>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="p-0 text-coral hover:bg-coral/5 hover:text-coral"
                                      >
                                        View Details
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                      </Button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="mt-4 flex justify-center gap-2">
                      <CarouselPrevious className="static relative h-8 w-8 translate-y-0 transform-none" />
                      <CarouselNext className="static relative h-8 w-8 translate-y-0 transform-none" />
                    </div>
                  </Carousel>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={() => setActiveTab('products')}
                    className="bg-coral hover:bg-coral-dark"
                  >
                    View All Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="animate-fade-up">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">Innovative Features</h2>
                  <p className="text-xl text-muted-foreground">
                    Discover the thoughtful innovations that make {lineup.name} products
                    exceptional.
                  </p>
                </div>

                <div className="mb-16 grid grid-cols-1 gap-24">
                  {lineup.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
                    >
                      <div className="w-full lg:w-1/2">
                        <div className="overflow-hidden rounded-2xl border border-border/50 shadow-lg">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="aspect-video h-auto w-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/2">
                        <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                        <p className="mb-6 text-muted-foreground">{feature.description}</p>

                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle2
                              className={`text-${lineup.primaryColor} mr-2 mt-0.5 h-5 w-5 flex-shrink-0`}
                            />
                            <span>Advanced sensor technology with exceptional accuracy</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2
                              className={`text-${lineup.primaryColor} mr-2 mt-0.5 h-5 w-5 flex-shrink-0`}
                            />
                            <span>Energy-efficient design with long battery life</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2
                              className={`text-${lineup.primaryColor} mr-2 mt-0.5 h-5 w-5 flex-shrink-0`}
                            />
                            <span>Seamless integration with existing smart home systems</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="animate-fade-up" id="products">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">{lineup.name} Products</h2>
                  <p className="text-xl text-muted-foreground">
                    Explore our complete collection of {lineup.name} devices designed to work
                    together seamlessly.
                  </p>
                </div>

                <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {lineup.products.map((product) => (
                    <div
                      key={product.id}
                      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:border-coral/30 hover:shadow-md"
                    >
                      <div className="relative aspect-square overflow-hidden bg-black/5">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {product.isNew && (
                          <div className="absolute right-3 top-3">
                            <Badge className="border-coral/30 bg-coral text-white">New</Badge>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-grow flex-col p-6">
                        <h3 className="mb-1 text-xl font-medium transition-colors group-hover:text-coral">
                          {product.name}
                        </h3>
                        <p className="mb-2 font-medium text-coral">{product.tagline}</p>
                        <p className="mb-4 flex-grow text-muted-foreground">
                          {product.description}
                        </p>

                        <div className="mb-4 flex items-center gap-2">
                          <span className="text-sm">Available in:</span>
                          <div className="flex gap-1">
                            {product.colors.map((color, i) => (
                              <div
                                key={i}
                                className="h-4 w-4 rounded-full border border-border/50"
                                style={{ backgroundColor: color }}
                              ></div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-3">
                          <span className="text-lg font-medium">${product.price}</span>
                          <Link href={`/products/${product.id}`}>
                            <Button className="bg-coral hover:bg-coral-dark">View Details</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Link href={`/buy/${lineup.products[0].id}`}>
                    <Button className="bg-coral hover:bg-coral-dark">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* Tech Specs Tab */}
            {activeTab === 'specs' && (
              <div className="animate-fade-up">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">Technical Specifications</h2>
                  <p className="text-xl text-muted-foreground">
                    Detailed specifications for the {lineup.name} product lineup.
                  </p>
                </div>

                <div className="mx-auto max-w-3xl">
                  {lineup.specs.map((category, i) => (
                    <div key={i} className="mb-8">
                      <h3 className="mb-4 border-b border-border/50 pb-2 text-xl font-medium">
                        {category.category}
                      </h3>
                      <div className="space-y-3">
                        {category.items.map((item, j) => (
                          <div key={j} className="grid grid-cols-2 gap-4">
                            <div className="text-muted-foreground">{item.name}</div>
                            <div>{item.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <Button variant="outline" className="border-coral/30 text-coral hover:bg-coral/5">
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Specifications
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 ${lineup.backgroundColor}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${lineup.gradient}`}></div>
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Ready to Experience {lineup.name}?</h2>
              <p className="mb-8 text-muted-foreground">
                Transform your environment with our intelligent, beautifully designed devices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-coral hover:bg-coral-dark">
                    Contact Sales
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/documentation/${lineup.id}`}>
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
export default Category;
