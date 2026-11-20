import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../sections/HeroSection';
import { CoreServicesSection } from '../sections/CoreServicesSection';
import { HowWeWorkSection } from '../sections/HowWeWorkSection';
import { IndustriesSection } from '../sections/IndustriesSection';
import { WhyReachrytSection } from '../sections/WhyReachrytSection';
import { ContactSection } from '../sections/ContactSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-deepNavy text-slate-100">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CoreServicesSection />
        <HowWeWorkSection />
        <IndustriesSection />
        <WhyReachrytSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
