import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MentorSection from './components/MentorSection';
import ProgramSection from './components/ProgramSection';
import FaqSection from './components/FaqSection';
import TestimonialsSection from './components/TestimonialsSection';
import CheckoutSection from './components/CheckoutSection';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import { schemaData } from './data/seo';
import { CheckCircle } from 'lucide-react';

const App = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const sections = ['daniel', 'programme', 'faq', 'inscription', 'temoignages'];
    const activeSection = useScrollReveal(sections);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setShowNotification(true);
            e.target.reset();
            setTimeout(() => setShowNotification(false), 4000);
        }, 1500);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="font-sans antialiased text-white overflow-x-hidden relative">
            <div className="scanline" />
            {/* Injection des données structurées SEO */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>

            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

            <main>
                <Hero scrollToSection={scrollToSection} />
                <MentorSection />
                <ProgramSection />
                <FaqSection />
                <TestimonialsSection />
                <div className="electric-glow">
                    <CheckoutSection onSubmit={handleSubmit} isSubmitting={isSubmitting} />
                </div>
            </main>

            <Footer />

            {/* Notification Toast */}
            <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
                <div className="bg-[#00f0ff] text-black px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center gap-4">
                    <div className="bg-black/20 p-2 rounded-full"><CheckCircle className="w-6 h-6" /></div>
                    <div>
                        <h4 className="font-bold text-lg">Commande validée !</h4>
                        <p className="text-sm font-medium opacity-90">Redirection vers le paiement...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
