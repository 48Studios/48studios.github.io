"use client"

import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { Button } from "@app/components/ui/button";
import { motion } from "motion/react"

const Hero = () => {
    return (
        <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/50 dark:to-black/30 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col"
                    >
            <span className="text-coral text-sm font-medium tracking-wider uppercase mb-3">
              Innovation meets craftsmanship
            </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Turning <span className="apple-text-gradient">Ideas</span> Into <br className="hidden md:block" />
                            Digital Reality
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                            We craft innovative solutions through software development, IoT engineering,
                            3D printing, and design excellence for the modern world.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/products">
                                <Button size="lg" className="bg-coral hover:bg-coral-dark text-white">
                                    Explore Products
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button size="lg" variant="outline" className="border-coral text-coral hover:bg-coral/5">
                                    Our Services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-black/5 to-black/20 dark:from-black/40 dark:to-black/80 p-4">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-full relative">
                                    {/* Abstract 3D shape representing technology */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64">
                                        <motion.div
                                            className="w-full h-full rounded-full bg-gradient-to-r from-coral-light via-coral to-coral-dark opacity-70 blur-xl"
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 5, repeat: Infinity }}
                                        />
                                    </div>

                                    {/* Decorative elements */}
                                    <motion.div
                                        className="absolute top-1/4 right-1/4 w-24 h-24 md:w-32 md:h-32 rounded-lg bg-gradient-to-tl from-white/10 to-white/20 backdrop-blur-md border border-white/20"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />

                                    <motion.div
                                        className="absolute bottom-1/4 left-1/3 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-coral/50 to-coral-dark/50 backdrop-blur-md"
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />

                                    <motion.div
                                        className="absolute top-1/3 left-1/4 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-coral/30"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full py-3 px-8 shadow-lg"
                        >
                            <p className="text-sm font-medium">Crafting Perfection, Delivering Brilliance</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex justify-center mt-12"
            >
                <motion.div
                    className="w-2 h-12 border-l border-r border-coral/30"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </motion.div>
        </section>
    );
};
export default Hero;
