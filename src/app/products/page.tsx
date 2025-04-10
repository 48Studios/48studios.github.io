"use client"

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Grid, List, Search, Tag } from 'lucide-react';
import { Button } from "@app/components/ui/button";
import { Badge } from "@app/components/ui/badge";
import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@app/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@app/components/ui/pagination";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@app/components/ui/carousel";

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    price: number;
    available: boolean;
    features?: string[];
}

const products: Product[] = [
    {
        id: 'smart-sensor',
        name: 'Smart Environmental Sensor',
        description: 'Monitor temperature, humidity, air quality, and more with this compact IoT sensor hub.',
        image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 89.99,
        available: true,
        features: ['Temperature monitoring', 'Humidity sensing', 'Air quality analysis', 'WiFi connectivity', 'Open source firmware']
    },
    {
        id: 'plant-monitor',
        name: 'Connected Plant Monitor',
        description: 'Keep your plants thriving with automated soil moisture, light, and nutrient monitoring.',
        image: 'https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 49.99,
        available: true,
        features: ['Soil moisture detection', 'Light level monitoring', 'Nutrient tracking', 'Plant health alerts', 'Companion app']
    },
    {
        id: 'motion-sensor',
        name: 'Wireless Motion Detector',
        description: 'Secure your space with this precision motion sensor that connects to your smart home.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 39.99,
        available: true,
        features: ['PIR motion sensing', 'Wireless connectivity', 'Low power consumption', 'Smart home integration', 'Customizable alerts']
    },
    {
        id: 'smart-switch',
        name: 'Programmable Smart Switch',
        description: 'Control any device remotely with this customizable switch and power monitoring system.',
        image: 'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 29.99,
        available: false,
        features: ['Remote control', 'Power monitoring', 'Scheduling', 'Voice assistant compatible', 'Energy usage reports']
    },
    {
        id: 'environment-tracker',
        name: 'Environmental Data Logger',
        description: 'Long-term monitoring solution for scientific and agricultural applications with extended battery life.',
        image: 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 119.99,
        available: true,
        features: ['Extended battery life', 'Data logging', 'SD card storage', 'Weather resistant', 'Multiple sensor inputs']
    },
    {
        id: 'water-quality',
        name: 'Water Quality Monitor',
        description: 'Track pH, TDS, temperature and more for aquariums, pools, or hydroponics setups.',
        image: 'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 69.99,
        available: true,
        features: ['pH monitoring', 'TDS measurement', 'Temperature tracking', 'Wireless alerts', 'Historical data analysis']
    }
];

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 border border-border/50 hover:border-coral/30 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
            <div className="absolute top-3 right-3 z-10">
                <Badge variant={product.available ? "outline" : "secondary"} className="text-xs font-medium">
                    {product.available ? `$${product.price}` : "Coming Soon"}
                </Badge>
            </div>

            <div className="aspect-video overflow-hidden bg-black/5 relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-medium text-lg mb-2 group-hover:text-coral transition-colors">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{product.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                    {product.features?.slice(0, 3).map((feature, index) => (
                        <span key={index} className="inline-flex text-xs bg-secondary/50 rounded-full px-2 py-1">
              {feature}
            </span>
                    ))}
                    {product.features && product.features.length > 3 && (
                        <span className="inline-flex text-xs bg-secondary/50 rounded-full px-2 py-1">
              +{product.features.length - 3} more
            </span>
                    )}
                </div>

                <div className="mt-auto pt-3 border-t border-border/30">
                    <Link href={`/products/${product.id}`}>
                        <Button variant="default" className="w-full bg-coral hover:bg-coral-dark flex items-center justify-center">
                            View Details
                            <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Products = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(product => activeTab === 'all' || product.category === activeTab);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-coral/5 to-coral/10">
                    <div className="absolute inset-0 opacity-15">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="hero-pattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
                                    <rect width="100%" height="100%" fill="transparent" />
                                    <path d="M0 20 L40 20" stroke="currentColor" strokeWidth="0.5" className="text-coral/20" />
                                    <path d="M20 0 L20 40" stroke="currentColor" strokeWidth="0.5" className="text-coral/20" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="max-w-xl">
                                <div className="animate-fade-up">
                                    <Badge variant="outline" className="text-coral mb-4 border-coral/30">Our Products</Badge>
                                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-coral to-coral-dark">
                      Innovative IoT
                    </span>
                                        <span> Solutions</span>
                                    </h1>
                                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                        Discover our range of precision-engineered IoT devices designed to solve real-world problems
                                        with elegance and reliability.
                                    </p>

                                    <div className="flex flex-wrap gap-3 mb-8">
                                        <div className="flex items-center text-sm bg-background/80 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-sm border border-border/50">
                                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                            <span>Open Source Firmware</span>
                                        </div>
                                        <div className="flex items-center text-sm bg-background/80 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-sm border border-border/50">
                                            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                                            <span>Seamless Integration</span>
                                        </div>
                                        <div className="flex items-center text-sm bg-background/80 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-sm border border-border/50">
                                            <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                                            <span>Extensive Documentation</span>
                                        </div>
                                        <div className="flex items-center text-sm bg-background/80 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-sm border border-border/50">
                                            <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                                            <span>Community Support</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <Button
                                            className="bg-coral hover:bg-coral-dark text-white"
                                            onClick={() => document.getElementById('product-listing')?.scrollIntoView({ behavior: 'smooth' })}
                                        >
                                            Browse Products
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" className="border-coral/50 text-coral hover:bg-coral/5">
                                            View Documentation
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="relative animate-fade-in animate-delay-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-coral/5 rounded-xl blur-3xl opacity-50"></div>
                                <div className="relative bg-background/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl">
                                    <h3 className="text-xl font-medium mb-4">Featured Products</h3>
                                    <Carousel className="w-full">
                                        <CarouselContent>
                                            {products.filter(p => p.available).slice(0, 4).map((product) => (
                                                <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3">
                                                    <Link href={`/products/${product.id}`} className="block h-full">
                                                        <div className="p-1 h-full">
                                                            <div className="rounded-lg overflow-hidden bg-background/50 h-full border border-border/50 hover:border-coral/30 transition-all duration-300 flex flex-col group">
                                                                <div className="aspect-video overflow-hidden bg-black/5">
                                                                    <img
                                                                        src={product.image}
                                                                        alt={product.name}
                                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                                    />
                                                                </div>
                                                                <div className="p-4 flex-1 flex flex-col">
                                                                    <h4 className="font-medium line-clamp-1 group-hover:text-coral transition-colors">{product.name}</h4>
                                                                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2 flex-1">{product.description}</p>
                                                                    <div className="flex justify-between items-center mt-3 pt-2 border-t border-border/30">
                                                                        <Badge variant="outline" className="text-xs">${product.price}</Badge>
                                                                        <span className="text-xs text-coral group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                                      View Details <ArrowRight className="h-3 w-3 ml-1" />
                                    </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <div className="flex justify-center gap-2 mt-4">
                                            <CarouselPrevious className="relative static transform-none translate-y-0 h-8 w-8 bg-background/80 backdrop-blur-sm border-border/50 text-foreground hover:bg-background hover:text-coral" />
                                            <CarouselNext className="relative static transform-none translate-y-0 h-8 w-8 bg-background/80 backdrop-blur-sm border-border/50 text-foreground hover:bg-background hover:text-coral" />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="product-listing" className="py-16 bg-gray-50 dark:bg-gray-900/30">
                    <div className="container mx-auto px-4">
                        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="relative max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="pl-10 pr-4 py-2 w-full rounded-lg border border-border bg-background"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex items-center gap-2 bg-background border border-border rounded-lg p-1">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-coral text-white' : 'hover:bg-muted'}`}
                                    >
                                        <Grid className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-coral text-white' : 'hover:bg-muted'}`}
                                    >
                                        <List className="h-4 w-4" />
                                    </button>
                                </div>

                                <div className="hidden md:flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">Filter:</span>
                                    <Button
                                        variant={activeTab === 'all' ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setActiveTab('all')}
                                        className={activeTab === 'all' ? 'bg-coral hover:bg-coral-dark' : ''}
                                    >
                                        All Products
                                    </Button>
                                    <Button
                                        variant={activeTab === 'iot' ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setActiveTab('iot')}
                                        className={activeTab === 'iot' ? 'bg-coral hover:bg-coral-dark' : ''}
                                    >
                                        IoT Devices
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden mb-6 flex overflow-x-auto pb-2 gap-2">
                            <Button
                                variant={activeTab === 'all' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setActiveTab('all')}
                                className={activeTab === 'all' ? 'bg-coral hover:bg-coral-dark whitespace-nowrap' : 'whitespace-nowrap'}
                            >
                                All Products
                            </Button>
                            <Button
                                variant={activeTab === 'iot' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setActiveTab('iot')}
                                className={activeTab === 'iot' ? 'bg-coral hover:bg-coral-dark whitespace-nowrap' : 'whitespace-nowrap'}
                            >
                                IoT Devices
                            </Button>
                        </div>

                        {viewMode === 'grid' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-12">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                                            <Tag className="h-8 w-8 text-muted-foreground" />
                                        </div>
                                        <h3 className="text-lg font-medium mb-2">No products found</h3>
                                        <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-card rounded-lg border border-border overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[80px]">Image</TableHead>
                                            <TableHead>Product</TableHead>
                                            <TableHead>Features</TableHead>
                                            <TableHead className="text-right">Price</TableHead>
                                            <TableHead className="w-[100px]">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredProducts.length > 0 ? (
                                            filteredProducts.map((product) => (
                                                <TableRow key={product.id}>
                                                    <TableCell>
                                                        <div className="w-16 h-16 rounded-md overflow-hidden">
                                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div>
                                                            <h3 className="font-medium">{product.name}</h3>
                                                            <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex flex-wrap gap-1">
                                                            {product.features?.slice(0, 2).map((feature, index) => (
                                                                <span key={index} className="inline-flex text-xs bg-secondary/50 rounded-full px-2 py-1">
                                  {feature}
                                </span>
                                                            ))}
                                                            {product.features && product.features.length > 2 && (
                                                                <span className="inline-flex text-xs bg-secondary/50 rounded-full px-2 py-1">
                                  +{product.features.length - 2}
                                </span>
                                                            )}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        {product.available ? (
                                                            <span className="font-medium">${product.price}</span>
                                                        ) : (
                                                            <span className="text-muted-foreground">Coming Soon</span>
                                                        )}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Link href={`/products/${product.id}`}>
                                                            <Button size="sm" className="bg-coral hover:bg-coral-dark w-full">
                                                                View
                                                            </Button>
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell colSpan={5} className="text-center py-8">
                                                    <div className="flex flex-col items-center">
                                                        <Tag className="h-8 w-8 text-muted-foreground mb-2" />
                                                        <p className="text-muted-foreground">No products found</p>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        )}

                        <div className="mt-8">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
export default Products;
