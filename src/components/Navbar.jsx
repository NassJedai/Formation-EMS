import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Zap } from 'lucide-react';
import { NAV_ITEMS } from '../data/constants';
import logo from '../assets/logo-body-training.jpg';

const Navbar = ({ activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (id) => {
        setIsMenuOpen(false);
        scrollToSection(id);
    };

    return (
        <nav className="fixed w-full z-50 bg-[#050505]/95 backdrop-blur-xl border-b border-[#00f0ff]/10 transition-all duration-300" role="navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="relative">
                            <div className="absolute -inset-1 bg-[#00f0ff] rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity"></div>
                            <img
                                src={logo}
                                alt="Logo Body Training Studio"
                                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                width="180"
                                height="48"
                            />
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-10">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleScroll(item.id)}
                                    className={`text-xs font-bold transition-all hover:text-[#00f0ff] uppercase tracking-[0.2em] relative group ${activeSection === item.id ? 'text-[#00f0ff]' : 'text-gray-400'
                                        }`}
                                >
                                    {item.label}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f0ff] transition-all duration-300 group-hover:w-full ${activeSection === item.id ? 'w-full' : ''}`}></span>
                                </button>
                            ))}
                            <button
                                onClick={() => handleScroll('inscription')}
                                className="neon-button text-black font-black px-8 py-2.5 rounded-full text-sm flex items-center gap-2"
                            >
                                <Zap className="w-4 h-4 fill-current" />
                                BOOSTER
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-[#00f0ff] hover:bg-white/5 transition-colors"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-[#050505] border-b border-[#00f0ff]/10 animate-in slide-in-from-top-5">
                    <div className="px-4 pt-4 pb-8 space-y-4">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className="text-gray-400 hover:text-[#00f0ff] block py-3 text-lg font-display font-black uppercase tracking-tighter w-full text-left"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button onClick={() => handleScroll('inscription')} className="w-full neon-button py-4 rounded-xl text-black font-black text-center mt-6">
                            ACHETER LA FORMATION
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
