import React from 'react';
import { ShoppingCart, Calendar } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
    return (
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-grid min-h-screen flex items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a] z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-on-scroll">
                <h2 className="text-[#00f0ff] font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-6 pulse-ems">
                    Formation Certifiante EMS 2026
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white mb-8 leading-[1.1] tracking-tighter glitch-hover">
                    DEVENEZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-600 animate-flicker">COACH EMS</span><br />
                    CERTIFIÉ
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                    Lancez votre carrière dans l'électrostimulation avec la méthode <strong className="whitespace-nowrap">Body Training Studio</strong>. Formation technique, commercial et gestion.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                    <button onClick={() => scrollToSection('inscription')} className="neon-button text-black font-extrabold text-lg px-8 py-4 rounded-full flex items-center justify-center gap-2 group vibration">
                        <ShoppingCart className="h-5 w-5 stroke-2 group-hover:scale-110 transition-transform" />
                        ACHETER LA FORMATION
                    </button>
                    <button onClick={() => scrollToSection('programme')} className="border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 font-bold text-lg px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 vibration">
                        <Calendar className="h-5 w-5" />
                        PROGRAMME 2026
                    </button>
                </div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-10">
                    {[
                        { val: '5 Jours', label: 'Formation Intensive & Immersion' },
                        { val: '+300%', label: 'Croissance Marché' },
                        { val: 'Certifié', label: 'Diplôme DIN EU' },
                        { val: 'Expert', label: 'Daniel Camus Academy' }
                    ].map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <span className="text-3xl font-display font-bold text-white">{stat.val}</span>
                            <span className="text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Hero;
