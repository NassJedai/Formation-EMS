import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqSection = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: "Quel diplôme faut-il pour ouvrir un studio EMS ?", a: "Aucun prérequis légal strict n'est imposé pour ouvrir, mais la certification Body Training Studio vous assure la crédibilité, l'assurance et la compétence technique nécessaire pour réussir." },
        { q: "Combien coûte la formation coach EMS ?", a: "La formation complète de 5 jours avec Daniel Camus coûte 2 800 € HTVA. Des facilités de paiement sont possibles." },
        { q: "La formation est-elle reconnue ?", a: "Oui, la certification Body Training Studio est reconnue dans toute l'Europe au sein de notre réseau de franchises et par les fournisseurs d'équipements." },
        { q: "Puis-je ouvrir ma franchise après la formation ?", a: "Absolument. Cette formation est la porte d'entrée idéale pour devenir franchisé Body Training Studio avec un accompagnement clé en main." }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-[#0a0a0a] border-t border-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-display font-bold text-white mb-12 animate-on-scroll">
                    QUESTIONS FRÉQUENTES (FAQ)
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-[#121212] rounded-xl border border-gray-800 overflow-hidden animate-on-scroll">
                            <button
                                onClick={() => toggleFaq(idx)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-900 transition-colors"
                            >
                                <span className="font-bold text-white">{faq.q}</span>
                                <ChevronDown className={`text-[#00f0ff] transform transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                            </button>
                            {openFaq === idx && (
                                <div className="px-6 py-4 text-gray-400 border-t border-gray-800 bg-[#0a0a0a]">
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
