import React from 'react';
import { BookOpen, Settings, Dumbbell, Briefcase, Laptop, Rocket } from 'lucide-react';

const ProgramSection = () => {
    const programme = [
        { day: 1, title: "Bases Scientifiques & Légales", icon: BookOpen, details: ["Principes physiologiques EMS", "Sécurité et contre-indications", "Cadre légal du coach"], goal: "Sécurité & Théorie", time: "Théorie" },
        { day: 2, title: "Maîtrise Technique Miha Bodytec", icon: Settings, details: ["Réglages fréquences/impulsions", "Protocoles d'entraînement", "Positionnement électrodes"], goal: "Technique Pure", time: "Pratique I" },
        { day: 3, title: "Coaching & Pédagogie", icon: Dumbbell, details: ["Scénarios perte de poids", "Scénarios prise de masse", "Correction posturale en direct"], goal: "Pédagogie", time: "Pratique II" },
        { day: 4, title: "Business & Rentabilité", icon: Briefcase, details: ["Vendre des abonnements EMS", "Marketing digital local", "Fidélisation client"], goal: "Business Model", time: "Gestion" },
        { day: 5, title: "Certification & Logiciels", icon: Laptop, details: ["Test pratique final", "Utilisation CRM Body Training", "Remise des diplômes"], goal: "Certification", time: "Examen" }
    ];

    return (
        <section id="programme" className="py-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-on-scroll">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">PROGRAMME DE FORMATION</h2>
                    <div className="w-24 h-1 bg-[#00f0ff] mx-auto shadow-[0_0_10px_#00f0ff]"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
                        40 heures d'immersion totale pour maîtriser la technologie Miha Bodytec et la gestion de studio.
                    </p>
                </div>

                <div className="space-y-8">
                    {programme.map((jour, index) => (
                        <article
                            key={jour.day}
                            className="group relative animate-on-scroll"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00f0ff] to-blue-600 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500 blur-md"></div>
                            <div className="relative bg-[#121212] p-8 rounded-2xl border border-gray-800 hover:border-[#00f0ff]/30 transition-all flex flex-col md:flex-row gap-8">
                                <div className="md:w-40 flex-shrink-0 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-800 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-[#00f0ff] font-display font-bold text-xl">JOUR {jour.day}</span>
                                    <span className="text-white font-black text-5xl my-2">8h</span>
                                    <span className="text-gray-500 text-xs uppercase font-bold tracking-widest">{jour.time}</span>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <jour.icon className="text-[#00f0ff] w-6 h-6" />
                                        {jour.title}
                                    </h3>
                                    <ul className="grid md:grid-cols-2 gap-3 mb-4">
                                        {jour.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start text-gray-400 text-sm">
                                                <span className="mr-2 text-[#00f0ff]">•</span> {detail}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-4 pt-4 border-t border-gray-800 text-[#00f0ff] text-sm font-medium flex items-center gap-2">
                                        <Rocket className="w-4 h-4" />
                                        Objectif : {jour.goal}
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
