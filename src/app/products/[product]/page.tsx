"use client"

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Github, FileCode, ListChecks, ShoppingCart, CheckCircle2, ArrowRight, PlusCircle } from 'lucide-react';
import { Button } from "@app/components/ui/button";
import { Badge } from "@app/components/ui/badge";
import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';
import { motion } from 'framer-motion';

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    price: number;
    available: boolean;
    features?: string[];
    longDescription?: string;
    specs?: Record<string, string>;
    githubLink?: string;
    buildGuideLink?: string;
    purchaseLink?: string;
}

const products: Record<string, Product> = {
    'smart-sensor': {
        id: 'smart-sensor',
        name: 'Smart Environmental Sensor',
        description: 'Monitor temperature, humidity, air quality, and more with this compact IoT sensor hub.',
        longDescription: 'Our Smart Environmental Sensor is a versatile IoT device that provides accurate monitoring of various environmental parameters. With seamless connectivity options and an open-source firmware, this device can be integrated with other smart home systems or used as a standalone monitor. The compact design allows for discrete placement in any room, while the long-lasting battery ensures continuous operation for months before needing a recharge.',
        image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 89.99,
        available: true,
        features: ['Temperature monitoring', 'Humidity sensing', 'Air quality analysis', 'WiFi connectivity', 'Open source firmware'],
        specs: {
            'Dimensions': '70mm x 50mm x 20mm',
            'Power': 'USB-C or 3.7V LiPo battery',
            'Connectivity': 'WiFi 2.4GHz, Bluetooth 5.0',
            'Sensors': 'BME680, SHT31, BH1750',
            'Microcontroller': 'ESP32-WROOM-32',
            'Battery Life': 'Up to 6 months on standby',
        },
        githubLink: 'https://github.com/48studios/smart-sensor',
        buildGuideLink: '/guides/smart-sensor-build',
        purchaseLink: '/shop/smart-sensor',
    },
    'plant-monitor': {
        id: 'plant-monitor',
        name: 'Connected Plant Monitor',
        description: 'Keep your plants thriving with automated soil moisture, light, and nutrient monitoring.',
        longDescription: 'The Connected Plant Monitor is designed to take the guesswork out of plant care. By continuously monitoring soil moisture, light levels, and estimating nutrient levels, it provides actionable insights to keep your plants healthy. The waterproof probe can be inserted directly into the soil, while the wireless display unit shows real-time data and can send alerts to your phone when attention is needed. Perfect for both novice gardeners and plant enthusiasts.',
        image: 'https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 49.99,
        available: true,
        features: ['Soil moisture detection', 'Light level monitoring', 'Nutrient tracking', 'Plant health alerts', 'Companion app'],
        specs: {
            'Dimensions': '60mm x 40mm x 15mm',
            'Power': 'CR2032 battery',
            'Connectivity': 'Bluetooth 4.2',
            'Sensors': 'Capacitive soil moisture, LDR, Temperature',
            'Microcontroller': 'ESP32-C3',
            'Battery Life': 'Up to 1 year',
        },
        githubLink: 'https://github.com/48studios/plant-monitor',
        buildGuideLink: '/guides/plant-monitor-build',
        purchaseLink: '/shop/plant-monitor',
    },
    'motion-sensor': {
        id: 'motion-sensor',
        name: 'Wireless Motion Detector',
        description: 'Secure your space with this precision motion sensor that connects to your smart home.',
        longDescription: 'Our Wireless Motion Detector provides reliable motion detection for security or automation purposes. Using a high-quality PIR sensor with adjustable sensitivity, it can detect motion up to 7 meters away with a 110° field of view. The energy-efficient design allows for years of operation on a single battery, and it integrates seamlessly with most smart home platforms including HomeKit, SmartThings, and Home Assistant.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 39.99,
        available: true,
        features: ['PIR motion sensing', 'Wireless connectivity', 'Low power consumption', 'Smart home integration', 'Customizable alerts'],
        specs: {
            'Dimensions': '80mm x 80mm x 25mm',
            'Power': '2x AAA batteries',
            'Connectivity': 'Zigbee 3.0',
            'Sensors': 'HC-SR501 PIR',
            'Range': 'Up to 7m / 110°',
            'Battery Life': '2+ years',
        },
        githubLink: 'https://github.com/48studios/motion-sensor',
        buildGuideLink: '/guides/motion-sensor-build',
        purchaseLink: '/shop/motion-sensor',
    },
    'smart-switch': {
        id: 'smart-switch',
        name: 'Programmable Smart Switch',
        description: 'Control any device remotely with this customizable switch and power monitoring system.',
        longDescription: 'The Programmable Smart Switch allows for intelligent control of any electrical device while monitoring power consumption in real-time. With support for scenes and automation, it can be programmed to respond to various triggers like time, other device states, or environmental conditions. The built-in power metering provides insights into energy usage patterns, helping to identify energy-hungry devices and optimize consumption.',
        image: 'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 29.99,
        available: false,
        features: ['Remote control', 'Power monitoring', 'Scheduling', 'Voice assistant compatible', 'Energy usage reports'],
        specs: {
            'Dimensions': '86mm x 86mm x 32mm',
            'Power': 'AC 100-240V',
            'Connectivity': 'WiFi 2.4GHz',
            'Max Load': '10A, 2200W',
            'Energy Monitoring': 'Yes',
            'Certifications': 'CE, RoHS',
        },
        githubLink: 'https://github.com/48studios/smart-switch',
        buildGuideLink: '/guides/smart-switch-build',
        purchaseLink: '/shop/smart-switch',
    },
    'environment-tracker': {
        id: 'environment-tracker',
        name: 'Environmental Data Logger',
        description: 'Long-term monitoring solution for scientific and agricultural applications with extended battery life.',
        image: 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 119.99,
        available: true,
        features: ['Extended battery life', 'Data logging', 'SD card storage', 'Weather resistant', 'Multiple sensor inputs'],
        specs: {
            'Dimensions': '120mm x 80mm x 30mm',
            'Power': '18650 Li-ion battery or solar panel',
            'Connectivity': 'LoRaWAN, WiFi (optional)',
            'Sensors': 'Configurable, up to 5 external sensors',
            'Storage': 'microSD up to 32GB',
            'Battery Life': 'Up to 2 years or indefinite with solar',
        },
        githubLink: 'https://github.com/48studios/environment-tracker',
        buildGuideLink: '/guides/environment-tracker-build',
        purchaseLink: '/shop/environment-tracker',
    },
    'water-quality': {
        id: 'water-quality',
        name: 'Water Quality Monitor',
        description: 'Track pH, TDS, temperature and more for aquariums, pools, or hydroponics setups.',
        image: 'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
        category: 'iot',
        price: 69.99,
        available: true,
        features: ['pH monitoring', 'TDS measurement', 'Temperature tracking', 'Wireless alerts', 'Historical data analysis'],
        specs: {
            'Dimensions': '90mm x 60mm x 25mm',
            'Power': 'USB-C or 3.7V LiPo battery',
            'Connectivity': 'WiFi 2.4GHz, Bluetooth 5.0',
            'Sensors': 'pH probe, TDS probe, DS18B20',
            'Probe Cable Length': '1m (extensible)',
            'Battery Life': '2 weeks on battery',
        },
        githubLink: 'https://github.com/48studios/water-quality',
        buildGuideLink: '/guides/water-quality-build',
        purchaseLink: '/shop/water-quality',
    }
};

const ProductDetail = () => {
    const { product: productId } = useParams<{ product: string }>();
    const product = productId ? products[productId] : null;

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
                        <p className="mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
                        <Link href="/products">
                            <Button className="bg-coral hover:bg-coral-dark text-white">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Products
                            </Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section - Apple Style */}
                <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-center max-w-4xl mx-auto mb-12 lg:mb-24"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">{product.name}</h1>
                            <p className="text-xl md:text-2xl text-muted-foreground">{product.description}</p>
                            <div className="mt-8 flex justify-center">
                                <Badge variant={product.available ? "outline" : "secondary"} className="text-lg px-4 py-1 rounded-full">
                                    {product.available ? `From $${product.price}` : "Coming Soon"}
                                </Badge>
                            </div>
                        </motion.div>

                        {/* Large Product Image */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative max-w-5xl mx-auto mb-24"
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-black/5">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Product Description - Apple Style */}
                <section className="py-16 bg-muted/20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for precision.</h2>
                                <p className="text-lg text-muted-foreground mb-8">{product.longDescription || product.description}</p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    {product.available && (
                                        <Link href={`/buy/${product.id}`}>
                                            <Button size="lg" className="bg-coral hover:bg-coral-dark text-white">
                                                Buy Now
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Button>
                                        </Link>
                                    )}

                                    <Link href={`${product.id}/documentation`}>
                                        <Button size="lg" variant="outline" className="border-coral text-coral hover:bg-coral/5">
                                            <FileCode className="mr-2 h-5 w-5" />
                                            View Documentation
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="bg-card/70 rounded-2xl p-8 shadow-sm border border-border/50"
                            >
                                <h3 className="text-xl font-medium mb-6">Key Features</h3>
                                <ul className="space-y-5">
                                    {product.features?.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex gap-4"
                                        >
                      <span className="text-coral mt-1">
                        <PlusCircle className="h-5 w-5" />
                      </span>
                                            <div>
                                                <p className="font-medium">{feature}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Detailed Features - Apple Style */}
                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-center mb-16"
                        >
                            A closer look.
                        </motion.h2>

                        <div className="space-y-24">
                            {/* Feature 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                <div className="order-2 lg:order-1">
                                    <h3 className="text-2xl font-bold mb-4">Precision Engineering</h3>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        Built with high-quality components and meticulous attention to detail, each {product.name}
                                        provides reliable performance in diverse environments.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-coral mr-2 mt-0.5" />
                                            <span>Industrial-grade sensors for accurate measurements</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-coral mr-2 mt-0.5" />
                                            <span>Energy-efficient design for extended operation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-coral mr-2 mt-0.5" />
                                            <span>Compact form factor for versatile placement</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="order-1 lg:order-2 bg-muted/20 rounded-2xl overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt="Precision Engineering"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                <div className="bg-muted/20 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80"
                                        alt="Open Source"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Open Source Design</h3>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        Complete control over your device with our fully open source hardware and firmware.
                                        Modify, extend, and customize to meet your specific requirements.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-coral mr-2 mt-0.5" />
                                            <span>Complete source code and schematics available</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-coral mr-2 mt-0.5" />
                                            <span>Active community for support and ideas</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-coral mr-2 mt-0.5" />
                                            <span>Regular firmware updates and improvements</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Tech Specs - Apple Style */}
                <section className="py-20 bg-muted/20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-center mb-6"
                        >
                            Technical Specifications
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto"
                        >
                            Engineered with precision and built with high-quality components for reliable performance.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-2xl shadow-sm border border-border/50 overflow-hidden"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {product.specs && Object.entries(product.specs).map(([key, value], index) => (
                                    <div key={key} className={`p-6 ${index % 2 === 0 ? 'bg-card' : 'bg-card/70'}`}>
                                        <h3 className="font-medium text-lg mb-1">{key}</h3>
                                        <p className="text-muted-foreground">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* DIY Documentation CTA */}
                <section className="py-20 bg-muted/10">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="bg-muted/20 rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1597651590053-d4632787eac7?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80"
                                    alt="DIY Documentation"
                                    className="w-full h-auto"
                                />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4">Build It Yourself</h3>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Want to build your own {product.name}? We&apos;ve got you covered with comprehensive
                                    documentation, bill of materials, build guides, and community support.
                                </p>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <FileCode className="h-5 w-5 text-coral mr-3 mt-0.5" />
                                        <span>Detailed step-by-step build guides</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ListChecks className="h-5 w-5 text-coral mr-3 mt-0.5" />
                                        <span>Complete bill of materials with links to suppliers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Github className="h-5 w-5 text-coral mr-3 mt-0.5" />
                                        <span>Open source firmware and hardware designs</span>
                                    </li>
                                </ul>

                                <Link href={`${product.id}/documentation`}>
                                    <Button size="lg" className="bg-coral hover:bg-coral-dark text-white">
                                        View Complete Documentation
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action - Apple Style */}
                <section className="py-16 bg-gradient-to-b from-muted/10 to-muted/50">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-6"
                        >
                            {product.available ? "Ready to get started?" : "Coming soon"}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground mb-10"
                        >
                            {product.available
                                ? "Choose between building your own or getting a pre-assembled device ready to use out of the box."
                                : "This product is currently in development. Sign up to be notified when it becomes available."}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            {product.available && (
                                <Link href={`${product.id}/buy`}>
                                    <Button size="lg" className="bg-coral hover:bg-coral-dark text-white">
                                        <ShoppingCart className="mr-2 h-5 w-5" />
                                        Buy Now
                                    </Button>
                                </Link>
                            )}

                            <Link href={`${product.id}/documentation`}>
                                <Button size="lg" variant="outline">
                                    <FileCode className="mr-2 h-5 w-5" />
                                    DIY Documentation
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 text-center">You might also like</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {Object.values(products)
                                .filter(p => p.id !== product.id)
                                .slice(0, 3)
                                .map(relatedProduct => (
                                    <div key={relatedProduct.id} className="border border-border/50 rounded-lg overflow-hidden bg-card/50 hover:border-coral/30 transition-all duration-300">
                                        <div className="aspect-video overflow-hidden bg-black/5">
                                            <img
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-medium text-lg mb-2">{relatedProduct.name}</h3>
                                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{relatedProduct.description}</p>
                                            <Link href={`/products/${relatedProduct.id}`}>
                                                <Button variant="link" className="text-coral hover:text-coral-dark p-0">
                                                    Learn More
                                                    <ArrowRight className="ml-1 h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
export default ProductDetail;
