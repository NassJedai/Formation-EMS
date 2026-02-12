import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MentorSection from './components/MentorSection';
import ProgramSection from './components/ProgramSection';
import FaqSection from './components/FaqSection';
import TestimonialsSection from './components/TestimonialsSection';
import CheckoutSection from './components/CheckoutSection';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { useScrollReveal } from './hooks/useScrollReveal';

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
        <div className="font-sans antialiased text-white selection:bg-[#00f0ff] selection:text-black min-h-screen bg-[#050505]">
            <SEO />
            <div className="scanline" />

            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

            <main>
                <Hero scrollToSection={scrollToSection} />
                <MentorSection />
                <ProgramSection />
                <TestimonialsSection />
                <FaqSection />
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/5 blur-[150px] pointer-events-none"></div>
                    <CheckoutSection />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;
