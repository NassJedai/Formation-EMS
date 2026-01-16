import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Zap } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (id) => {
        setIsMenuOpen(false);
        scrollToSection(id);
    };

    return (
        <nav className="fixed w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#00f0ff]/20 transition-all duration-300" role="navigation" aria-label="Menu principal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img
                            src="/src/assets/logo-body-training.jpg"
                            alt="Logo Body Training Studio - Formation EMS"
                            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                            width="200"
                            height="56"
                        />
                        <div className="hidden flex items-center gap-2">
                            <Zap className="text-[#00f0ff] h-8 w-8 fill-current" />
                            <span className="font-display font-bold text-xl tracking-wider text-white">BODY <span className="text-[#00f0ff]">TRAINING</span></span>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['daniel', 'programme', 'temoignages', 'faq'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleScroll(item)}
                                    className={`text-sm font-medium transition-colors hover:text-[#00f0ff] uppercase tracking-wide ${activeSection === item ? 'text-[#00f0ff]' : 'text-gray-300'
                                        }`}
                                >
                                    {item === 'daniel' ? 'Le Formateur' : item === 'temoignages' ? 'Avis' : item.toUpperCase()}
                                </button>
                            ))}
                            <button
                                onClick={() => handleScroll('inscription')}
                                className="neon-button text-black font-bold px-6 py-2 rounded-full transform hover:-translate-y-1 transition-transform flex items-center gap-2"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                ACHETER
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Ouvrir le menu"
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#00f0ff] hover:text-white focus:outline-none"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-[#0a0a0a] border-b border-[#00f0ff]/20 animate-in slide-in-from-top-5">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['daniel', 'programme', 'temoignages', 'faq'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleScroll(item)}
                                className="text-gray-300 hover:text-[#00f0ff] block px-3 py-2 rounded-md text-base font-medium w-full text-left uppercase"
                            >
                                {item === 'daniel' ? 'Le Formateur' : item}
                            </button>
                        ))}
                        <button onClick={() => handleScroll('inscription')} className="text-[#00f0ff] font-bold block px-3 py-2 rounded-md text-base w-full text-left bg-[#00f0ff]/10 mt-4">
                            ACHETER LA FORMATION
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
