import React from 'react';
import { CheckCircle, ShieldCheck, CreditCard, ArrowRight, Zap } from 'lucide-react';

const CheckoutSection = () => {
    const STRIPE_URL = "https://buy.stripe.com/00w8wPdnS3FVafpajYeQM01";

    const handlePurchase = () => {
        window.location.href = STRIPE_URL;
    };

    return (
        <section id="inscription" className="py-32 relative overflow-hidden bg-[#050505]">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent"></div>
            <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-[#00f0ff]/5 rounded-full blur-[150px]"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-on-scroll">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-black tracking-[0.3em] uppercase mb-6">
                        <Zap className="w-4 h-4 fill-current" /> Inscription Immédiate
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter">PASSEZ À <span className="electric-text">L'ÉLECTRIQUE</span></h2>
                </div>

                <div className="grid lg:grid-cols-5 card-glass rounded-[40px] shadow-[0_0_80px_rgba(0,240,255,0.1)] border border-white/5 overflow-hidden">
                    <div className="lg:col-span-3 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/5">
                        <h3 className="text-2xl font-display font-black text-white mb-10 tracking-tight uppercase">DÉTAILS DU PACK ELITE</h3>
                        <div className="grid gap-8 mb-12">
                            {[
                                { title: "Formation Intensive", sub: "5 jours intensive et immersion" },
                                { title: "Certification Expert EMS", sub: "Reconnue par le réseau Body Training Studio et la fédération internationale de l'EMS" },
                                { title: "Module Business Boost", sub: "Marketing, vente et gestion de studio inclus" },
                                { title: "Kit du Manager", sub: "Manuels de formation et accès CRM offert" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mr-6 group-hover:bg-[#00f0ff]/20 transition-colors">
                                        <CheckCircle className="text-[#00f0ff] w-5 h-5" />
                                    </div>
                                    <div>
                                        <strong className="text-white block text-xl tracking-tight leading-tight">{item.title}</strong>
                                        <span className="text-gray-500 text-sm font-medium mt-1 block uppercase tracking-wider">{item.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5">
                            <ShieldCheck className="text-[#00f0ff] w-10 h-10 flex-shrink-0" />
                            <div>
                                <div className="text-white font-bold text-sm uppercase tracking-widest">Paiement 100% Sécurisé</div>
                                <div className="text-gray-500 text-xs mt-1">Transaction cryptée via Stripe. Facture auto-générée.</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 p-10 md:p-16 flex flex-col justify-center bg-[#080808] relative">
                        <div className="absolute inset-0 bg-blue-600/5 blur-[80px]"></div>
                        <div className="text-center relative z-10">
                            <div className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter mb-4">
                                2 800<span className="text-2xl font-sans font-light text-gray-500 ml-2">€</span>
                            </div>
                            <div className="text-gray-500 text-sm font-bold tracking-[0.4em] uppercase mb-12">Hors Taxes</div>

                            <button
                                onClick={handlePurchase}
                                className="w-full neon-button text-black font-black text-xl py-6 rounded-2xl flex items-center justify-center gap-4 group pulse-button"
                            >
                                JE M'INSCRIS <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="mt-10 flex flex-col items-center gap-4 opacity-40">
                                <div className="flex gap-4">
                                    <CreditCard className="w-6 h-6" />
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase mt-1">Stripe Gateway</span>
                                </div>
                                <div className="text-[9px] text-gray-600 font-medium px-4 py-1 border border-white/10 rounded-full">
                                    APPLE PAY / VISA / MASTERCARD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutSection;
