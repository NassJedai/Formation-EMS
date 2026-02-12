import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
    const testimonials = [
        { text: "L'expérience de Daniel change tout. Il ne nous apprend pas juste à coacher, il nous apprend à réussir.", author: "Marc D.", role: "Propriétaire Studio EMS" },
        { text: "5 jours intenses. La partie gestion et logiciels le jour 5 est un vrai plus pour démarrer.", author: "Julie S.", role: "Coach Indépendante" }
    ];

    return (
        <section id="temoignages" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase">
                        AVIS DES <span className="text-[#00f0ff]">ATHLÈTES</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {testimonials.map((avis, idx) => (
                        <div key={idx} className="relative group animate-on-scroll">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff]/0 to-[#00f0ff]/0 group-hover:from-[#00f0ff]/10 group-hover:to-blue-600/10 rounded-3xl transition-all duration-500"></div>
                            <div className="relative bg-[#111] p-10 rounded-3xl border border-white/5 group-hover:border-[#00f0ff]/30 transition-all duration-500 h-full flex flex-col">
                                <Quote className="text-[#00f0ff] w-10 h-10 mb-6 opacity-20 group-hover:opacity-100 transition-opacity" />
                                <p className="text-gray-300 text-xl font-light leading-relaxed mb-8 flex-grow italic">
                                    "{avis.text}"
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <div>
                                        <div className="font-display font-black text-white text-lg tracking-tight uppercase">{avis.author}</div>
                                        <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mt-1">{avis.role}</div>
                                    </div>
                                    <div className="flex text-[#00f0ff]">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
