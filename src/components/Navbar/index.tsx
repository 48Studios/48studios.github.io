"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from "@app/components/ui/button";
import Link from 'next/link';

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-coral">48</span>
                        <span className="text-2xl font-light">Studios</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/services"
                            className={`text-sm font-medium hover:text-coral transition-colors ${
                                pathname === '/services' ? 'text-coral' : ''
                            }`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/products"
                            className={`text-sm font-medium hover:text-coral transition-colors ${
                                pathname === '/products' || pathname.includes('/products/') ? 'text-coral' : ''
                            }`}
                        >
                            Products
                        </Link>
                        <Link
                            href="/about"
                            className={`text-sm font-medium hover:text-coral transition-colors ${
                                pathname === '/about' ? 'text-coral' : ''
                            }`}
                        >
                            About
                        </Link>
                        <Link href="/contact">
                            <Button
                                variant={pathname === '/contact' ? "default" : "outline"}
                                className={pathname === '/contact' ? "bg-coral hover:bg-coral/90" : "hover:text-coral hover:border-coral"}
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-background border-t">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <Link
                            href="/services"
                            className={`text-sm font-medium py-2 hover:text-coral transition-colors ${
                                pathname === '/services' ? 'text-coral' : ''
                            }`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/products"
                            className={`text-sm font-medium py-2 hover:text-coral transition-colors ${
                                pathname === '/products' || pathname.includes('/products/') ? 'text-coral' : ''
                            }`}
                        >
                            Products
                        </Link>
                        <Link
                            href="/about"
                            className={`text-sm font-medium py-2 hover:text-coral transition-colors ${
                                pathname === '/about' ? 'text-coral' : ''
                            }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`text-sm font-medium py-2 hover:text-coral transition-colors ${
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
