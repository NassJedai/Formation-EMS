import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo-body-training.jpg';

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-16" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex flex-col items-center md:items-start">
                    <div className="relative group grayscale hover:grayscale-0 transition-all duration-500">
                        <img
                            src={logo}
                            alt="Logo Body Training Studio"
                            className="h-10 w-auto object-contain mb-6 opacity-60 group-hover:opacity-100 transition-opacity"
                            loading="lazy"
                        />
                    </div>
                    <p className="text-gray-600 text-xs tracking-widest uppercase font-bold">
                        © 2026 Body Training Studio Franchise. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-4">
                    {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="text-gray-500 hover:text-[#00f0ff] transition-all p-3 bg-white/5 hover:bg-[#00f0ff]/10 rounded-xl border border-white/5 hover:border-[#00f0ff]/30 group"
                        >
                            <Icon size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
