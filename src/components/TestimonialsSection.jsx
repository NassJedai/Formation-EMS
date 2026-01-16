import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
    const testimonials = [
        { text: "L'expérience de Daniel change tout. Il ne nous apprend pas juste à coacher, il nous apprend à réussir.", author: "Marc D.", role: "Propriétaire Studio EMS" },
        { text: "5 jours intenses. La partie gestion et logiciels le jour 5 est un vrai plus pour démarrer.", author: "Julie S.", role: "Coach Indépendante" }
    ];

    return (
        <section id="temoignages" className="py-24 bg-[#121212] border-y border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-display font-bold text-white mb-16 animate-on-scroll">
                    AVIS DES COACHS CERTIFIÉS
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((avis, idx) => (
                        <div key={idx} className="bg-[#0a0a0a] p-8 rounded-2xl border-l-4 border-[#00f0ff] shadow-lg animate-on-scroll">
                            <div className="flex items-center mb-6">
                                <div className="flex text-[#00f0ff]"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                            </div>
                            <p className="text-gray-300 italic mb-6 text-lg">"{avis.text}"</p>
                            <div>
                                <div className="font-bold text-white text-lg">{avis.author}</div>
                                <div className="text-sm text-gray-500">{avis.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
