import React from 'react';
import { CheckCircle, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';

const CheckoutSection = () => {
    const STRIPE_URL = "https://buy.stripe.com/your-stripe-link"; // User should replace this

    const handlePurchase = () => {
        window.location.href = STRIPE_URL;
    };

    return (
        <section id="inscription" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#00f0ff]/5 z-0"></div>
            <div className="absolute -right-20 top-20 w-96 h-96 bg-[#00f0ff]/20 rounded-full blur-[128px]"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-on-scroll">
                <div className="grid md:grid-cols-2 card-glass rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] border border-[#00f0ff]">

                    <div className="p-10 md:p-12 bg-[#0a0a0a]/60 border-b md:border-b-0 md:border-r border-gray-800">
                        <h3 className="text-2xl font-display font-bold text-white mb-8">RÉSUMÉ DE LA COMMANDE</h3>
                        <div className="space-y-6 mb-10">
                            {[
                                { title: "Formation Coach EMS (5 Jours)", sub: "Prix Unitaire: 2 800€ HTVA" },
                                { title: "Certification Officielle", sub: "Inclus" },
                                { title: "Manuels & Accès Logiciels", sub: "Inclus" },
                                { title: "Frais de dossier", sub: "Offerts" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <CheckCircle className="text-[#00f0ff] w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block text-lg">{item.title}</strong>
                                        <span className="text-gray-400 text-sm">{item.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#00f0ff]/10 p-6 rounded-xl border border-[#00f0ff]/30">
                            <h4 className="text-[#00f0ff] font-bold mb-3 flex items-center text-sm uppercase tracking-wide">
                                <ShieldCheck className="w-5 h-5 mr-2" />
                                Garantie Satisfaction
                            </h4>
                            <p className="text-sm text-gray-300">
                                Paiement sécurisé via Stripe. Facture professionnelle délivrée automatiquement après l'achat.
                            </p>
                        </div>
                    </div>

                    <div className="p-10 md:p-12 flex flex-col justify-center bg-black/40">
                        <div className="text-center mb-10">
                            <div className="text-gray-400 text-sm uppercase tracking-widest mb-3">Total à régler</div>
                            <div className="text-5xl md:text-6xl font-display font-black text-white neon-text mb-2">2 800 €</div>
                            <span className="text-xl text-gray-500 font-sans font-normal">HTVA</span>
                            <div className="flex justify-center gap-2 mt-4 opacity-50">
                                <CreditCard className="w-6 h-6" />
                                <span className="text-xs">VISA / MASTERCARD / VIREMENT</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <button
                                onClick={handlePurchase}
                                className="w-full neon-button text-black font-black text-xl py-6 rounded-xl flex items-center justify-center gap-3 group pulse-ems vibration shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                            >
                                ACHETER LA FORMATION <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-center text-xs text-gray-500">
                                Vous allez être redirigé vers la page de paiement sécurisée Stripe.
                                <br />En continuant, vous acceptez les CGV de Body Training Studio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutSection;
