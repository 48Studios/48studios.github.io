"use client";

import Link from 'next/link';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div>
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <span className="text-2xl font-bold text-coral">48</span>
                            <span className="text-2xl font-light">Studios</span>
                        </Link>
                        <p className="text-sm text-gray-400 mb-4">
                            Crafting Perfection, Delivering Brilliance
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-coral transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-coral transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-coral transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-coral transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/software" className="text-gray-400 hover:text-coral text-sm transition-colors">
                                    Software Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/iot" className="text-gray-400 hover:text-coral text-sm transition-colors">
                                    IoT Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/3d-printing" className="text-gray-400 hover:text-coral text-sm transition-colors">
                                    3D Printing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/3d-design" className="text-gray-400 hover:text-coral text-sm transition-colors">
                                    3D Design
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/resources/guides" className="text-gray-400 hover:text-coral text-sm transition-colors">
                                    Guides
                                </Link>
                            </li>
                            <li>
                                <a href="https://github.com/48studios" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-coral text-sm transition-colors">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <Link href="/resources/documentation" className="text-gray-400 hover:text-coral text-sm transition-colors">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-coral text-sm transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400 text-sm mb-2">
                            6A/72 Mukundapur, Kolkata - 99
                        </p>
                        <p className="text-gray-400 text-sm mb-2">
                            +91 8777 5050 46
                        </p>
                        <p className="text-gray-400 text-sm mb-2">
                            reactus@48studios.in
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} 48 Studios. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/terms" className="text-gray-400 hover:text-coral text-sm transition-colors">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-gray-400 hover:text-coral text-sm transition-colors">
                            Privacy
                        </Link>
                        <Link href="/sitemap" className="text-gray-400 hover:text-coral text-sm transition-colors">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
