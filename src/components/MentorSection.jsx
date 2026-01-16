import React from 'react';
import { Trophy, Globe } from 'lucide-react';

const MentorSection = () => {
    return (
        <section id="daniel" className="py-24 bg-[#121212] relative overflow-hidden">
            <div className="absolute -left-40 top-20 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[100px]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 animate-on-scroll delay-200">
                        <div className="relative group">
                            <div className="absolute inset-0 border-2 border-[#00f0ff] transform translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900 neon-box">
                                <img
                                    src="/src/assets/daniel-camus.jpg"
                                    alt="Daniel Camus - Expert EMS et Fondateur Body Training Studio"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    loading="lazy"
                                    width="600"
                                    height="800"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                />
                                <div className="hidden w-full h-full flex items-center justify-center flex-col p-6 text-center text-gray-500 bg-gray-800">
                                    <p>Image non disponible</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 animate-on-scroll">
                        <h2 className="text-[#00f0ff] font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-[#00f0ff]"></span>
                            VOTRE MENTOR
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">DANIEL CAMUS</h3>
                        <article className="prose prose-invert lg:prose-xl">
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed font-light">
                                Comment passer du football professionnel à l'entrepreneuriat à succès ? <strong>Daniel Camus</strong> partage son expérience unique.
                            </p>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
                                Fondateur de <strong>Body Training Studio</strong>, il dirige un réseau de franchises en pleine expansion en <span className="text-[#00f0ff]">Belgique</span>, <span className="text-[#00f0ff]">Pays-Bas</span> et <span className="text-[#00f0ff]">Espagne</span>. Cette formation n'est pas seulement technique, elle est stratégique.
                            </p>
                        </article>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-[#0a0a0a] p-6 rounded-xl border border-gray-800 hover:border-[#00f0ff]/50 transition-colors group">
                                <Trophy className="text-[#00f0ff] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                                <div className="font-bold text-white text-lg">Ex-Pro Football</div>
                                <div className="text-sm text-gray-500 mt-1">Discipline & Performance</div>
                            </div>
                            <div className="bg-[#0a0a0a] p-6 rounded-xl border border-gray-800 hover:border-[#00f0ff]/50 transition-colors group">
                                <Globe className="text-[#00f0ff] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                                <div className="font-bold text-white text-lg">Franchiseur</div>
                                <div className="text-sm text-gray-500 mt-1">Leader Européen EMS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorSection;
