import React from 'react';
import { Trophy, Globe } from 'lucide-react';
import danielImage from '../assets/daniel-camus.jpg';

const MentorSection = () => {
    return (
        <section id="daniel" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute -left-40 top-20 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px]"></div>
            <div className="absolute -right-40 bottom-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 animate-on-scroll delay-200">
                        <div className="relative group">
                            <div className="absolute inset-x-4 -inset-y-4 bg-[#00f0ff]/20 blur-2xl group-hover:bg-[#00f0ff]/40 transition-all duration-700 opacity-50"></div>
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#050505] border-2 border-white/10 group-hover:border-[#00f0ff]/50 transition-colors duration-500">
                                <img
                                    src={danielImage}
                                    alt="Daniel Camus"
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                                    <div className="text-[#00f0ff] font-display font-black text-2xl">DANIEL CAMUS</div>
                                    <div className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase mt-1">Fondateur en 2013</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 animate-on-scroll">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
                            <span className="text-xs font-bold text-gray-300 tracking-widest uppercase">Expert Daniel Camus Academy</span>
                        </div>

                        <h3 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter leading-none">
                            L'EXPÉRIENCE DU <span className="text-[#00f0ff]">SUCCÈS</span>
                        </h3>

                        <article className="prose prose-invert lg:prose-xl max-w-none">
                            <p className="text-gray-400 text-xl mb-8 leading-relaxed font-light">
                                Avec <strong className="text-white">15 ans d'expérience</strong>, <strong className="text-white">Daniel Camus</strong>, ancien footballeur professionnel, a transposé la rigueur du haut niveau dans le monde du fitness tech.
                            </p>
                            <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light">
                                Fondateur de <strong className="text-white">Body Training Studio</strong>, il dirige l'un des réseaux les plus dynamiques d'Europe. Sa formation n'est pas qu'un diplôme, c'est un <span className="text-[#00f0ff] font-bold">accélérateur de business</span>.
                            </p>
                        </article>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { icon: Trophy, title: "EX-PRO ATHLETE", sub: "Discipline de fer" },
                                { icon: Globe, title: "INTERNATIONAL", sub: "Leader EMS Europe" }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#00f0ff]/30 transition-all group">
                                    <item.icon className="text-[#00f0ff] w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                    <div className="font-display font-black text-white text-lg tracking-tight">{item.title}</div>
                                    <div className="text-sm text-gray-500 mt-2 font-medium uppercase tracking-widest">{item.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorSection;
