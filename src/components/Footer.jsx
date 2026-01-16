import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] border-t border-gray-900 py-16" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src="/src/assets/logo-body-training.jpg"
                        alt="Logo Body Training Studio Footer"
                        className="h-12 w-auto object-contain mb-4 opacity-80"
                        loading="lazy"
                        width="150"
                        height="48"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                    />
                    <div className="hidden text-white font-display font-bold text-lg mb-4">BODY TRAINING STUDIO</div>
                    <p className="text-gray-600 text-sm">© 2026 Body Training Studio Franchise. Tous droits réservés.</p>
                </div>
                <div className="flex space-x-8">
                    <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-[#00f0ff] transition-colors p-2 hover:bg-[#00f0ff]/10 rounded-full"><Facebook size={24} /></a>
                    <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-[#00f0ff] transition-colors p-2 hover:bg-[#00f0ff]/10 rounded-full"><Instagram size={24} /></a>
                    <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-[#00f0ff] transition-colors p-2 hover:bg-[#00f0ff]/10 rounded-full"><Linkedin size={24} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
