import React from 'react';
import { Rocket } from 'lucide-react';
import { PROGRAMME } from '../data/constants';

const ProgramSection = () => {
    return (
        <section id="programme" className="py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24 animate-on-scroll">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight">VOTRE PARCOURS <span className="text-[#00f0ff]">ATHLÉTIQUE</span></h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-[#00f0ff] to-blue-600 mx-auto shadow-[0_0_20px_rgba(0,240,255,0.5)]"></div>
                    <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-xl font-light">
                        Une immersion totale pour maîtriser la technologie de pointe en électrostimulation.
                    </p>
                </div>

                <div className="grid gap-10">
                    {PROGRAMME.map((jour, index) => (
                        <article
                            key={jour.day}
                            className="group relative animate-on-scroll"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff] via-blue-600 to-[#00f0ff] rounded-3xl opacity-0 group-hover:opacity-20 transition duration-700 blur-xl"></div>
                            <div className="relative bg-[#0a0a0a] p-10 rounded-3xl border border-white/5 group-hover:border-[#00f0ff]/30 transition-all duration-500 flex flex-col md:flex-row gap-10 overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="md:w-48 flex-shrink-0 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 pb-8 md:pb-0 md:pr-10">
                                    <span className="text-[#00f0ff] font-display font-black text-2xl tracking-tighter">JOUR 0{jour.day}</span>
                                    <span className="text-gray-500 text-xs uppercase font-bold tracking-[0.3em] mt-4">{jour.time}</span>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-4 transition-transform group-hover:translate-x-2">
                                        <jour.icon className="text-[#00f0ff] w-8 h-8 group-hover:animate-pulse" />
                                        {jour.title}
                                    </h3>
                                    <ul className="grid md:grid-cols-2 gap-4 mb-8">
                                        {jour.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center text-gray-400 text-lg font-light">
                                                <span className="w-2 h-2 rounded-full bg-[#00f0ff] mr-4 shadow-[0_0_10px_#00f0ff]"></span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                                        <div className="px-4 py-1.5 bg-[#00f0ff]/10 border border-[#00f0ff]/20 rounded-full text-[#00f0ff] text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                            <Rocket className="w-4 h-4" />
                                            OBJECTIF : {jour.goal}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramSection;
