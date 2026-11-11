import React from 'react';
import { LuxuryNavbar } from '../components/LuxuryNavbar';
import { LuxuryFooter } from '../components/LuxuryFooter';
import { ConceptLuxuryViolet } from '../components/concepts/ConceptLuxuryViolet';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F6] text-[#253331] font-sans">
      {/* Floating Light Navbar with Dark Typography (Visual Display Only) */}
      <LuxuryNavbar />

      {/* Luxury Deep Teal & Platinum Mint Homepage Content */}
      <main className="flex-grow">
        <ConceptLuxuryViolet />
      </main>

      {/* Luxury Deep Teal Enterprise Footer */}
      <LuxuryFooter />
    </div>
  );
};