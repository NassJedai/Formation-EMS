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
    const sections = ['daniel', 'programme', 'faq', 'inscription', 'temoignages'];
    const activeSection = useScrollReveal(sections);

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
                    <CheckoutSection />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;
