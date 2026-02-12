import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FaqSection = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: "Quel diplôme faut-il pour ouvrir un studio EMS ?", a: "Aujourdhui Aucun prérequis légal strict n'est imposé pour ouvrir un studio en Belgique, mais la certification Body Training Studio DIN 395 vous assure la crédibilité, l'assurance et la compétence technique nécessaire pour réussir, quid de demain" },
        { q: "Combien coûte la formation coach EMS ?", a: "La formation complète de 5 jours avec Daniel Camus coûte 2 800 € HTVA. Des facilités de paiement sont possibles." },
        { q: "La formation est-elle reconnue ?", a: "Oui, la certification Body Training Studio est reconnue dans toute l'Europe au sein de notre réseau de franchises et par les fournisseurs d'équipements et par la fédération internationale de l'EMS." },
        { q: "Qu'est ce que le diplôme va m'apporter ?", a: "La possibilité de travailler chez Body Training Studio et d'ouvrir votre propre studio (devenir franchisé Body Training Studio)." }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-[#050505]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-on-scroll">
                    <div className="flex justify-center mb-4">
                        <HelpCircle className="text-[#00f0ff] w-12 h-12 opacity-50" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase">
                        QUESTIONS <span className="text-[#00f0ff]">FRÉQUENTES</span>
                    </h2>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="group animate-on-scroll">
                            <button
                                onClick={() => toggleFaq(idx)}
                                className={`w-full px-8 py-6 text-left flex justify-between items-center bg-[#0a0a0a] border border-white/5 transition-all duration-300 rounded-2xl group-hover:border-[#00f0ff]/30 ${openFaq === idx ? 'ring-1 ring-[#00f0ff]/50 bg-white/5' : ''}`}
                            >
                                <span className={`font-display font-bold text-lg tracking-tight ${openFaq === idx ? 'text-[#00f0ff]' : 'text-gray-200'}`}>{faq.q}</span>
                                <ChevronDown className={`text-[#00f0ff] transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                            </button>
                            {openFaq === idx && (
                                <div className="px-8 py-6 text-gray-400 text-lg font-light leading-relaxed border-x border-b border-white/5 bg-[#0a0a0a]/50 rounded-b-2xl -mt-4 animate-in slide-in-from-top-2">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
