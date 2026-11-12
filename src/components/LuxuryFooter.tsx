import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  Globe2,
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

const CURRENT_YEAR = new Date().getFullYear();

export const LuxuryFooter: React.FC = () => {
  return (
    <footer className="bg-[#052A29] text-[#DFE7E5] font-sans border-t border-[#A9C7C2]/25 relative overflow-hidden">
      {/* Subtle Deep Teal and Platinum Mint lighting ambiance */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#A9C7C2]/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* 1. TOP STRIP: EXECUTIVE DIALOGUE & RFP ENQUIRY */}
      <div className="bg-[#031D1C] border-b border-[#A9C7C2]/15 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#073B3A] border border-[#A9C7C2]/40 text-[#A9C7C2] flex items-center justify-center flex-shrink-0 shadow-inner">
                <ShieldCheck className="w-6 h-6 text-[#A9C7C2]" />
              </div>
              <div>
                <h4 className="text-[#F4F7F6] font-heading font-semibold text-base">
                  Looking to Transform Your Enterprise Systems?
                </h4>
                <p className="text-[#CAD5D2] text-xs">
                  Speak directly with a senior ZisanTech SAP Enterprise Solution Architect.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 hover:border-[#A9C7C2]/60 hover:bg-white/10 transition-all text-xs font-semibold text-[#F4F7F6] cursor-default select-none">
                <Phone className="w-4 h-4 text-[#A9C7C2]" />
                <span>{COMPANY_INFO.primaryPhone}</span>
              </span>

              <span className="btn-luxury-platinum flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs font-bold cursor-default select-none shadow-lg shadow-[#073B3A]/30">
                <Mail className="w-4 h-4" />
                <span>Initiate RFP Enquiry</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center p-2 sm:p-2.5 rounded-2xl bg-[#F4F7F6] border border-[#A9C7C2]/40 shadow-xl shadow-black/20">
              <img
                src="/zisantech_logo_badge_light.png"
                alt="ZisanTech - Innovate • Develop • Grow"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-[#CAD5D2] leading-relaxed max-w-sm">
              ZisanTech delivers enterprise-grade SAP consulting, end-to-end implementation, custom architecture and managed support for complex operations across six core global industries.
            </p>

            {/* Direct Contact Points */}
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-[#F4F7F6]">
                <MapPin className="w-4 h-4 text-[#A9C7C2] mt-0.5 flex-shrink-0" />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#F4F7F6]">
                <Phone className="w-4 h-4 text-[#A9C7C2] flex-shrink-0" />
                <span>+91 87978 18499</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#F4F7F6]">
                <Mail className="w-4 h-4 text-[#A9C7C2] flex-shrink-0" />
                <span>info@zisantech.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Labels (Visual Display Only) (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A9C7C2] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#CAD5D2]">
              {[
                'Home',
                'About Us',
                'Our Services',
                'Industries',
                'SAP Training',
                'Contact Us'
              ].map((link, idx) => (
                <li key={idx}>
                  <span className="cursor-default select-none text-[#CAD5D2] flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#A9C7C2]" />
                    <span>{link}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SAP Practices (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A9C7C2] font-semibold">
              SAP Practices
            </h4>
            <ul className="space-y-2.5 text-xs text-[#CAD5D2]">
              {[
                'SAP Rollout & Deployment',
                'SAP Custom Solutions & ABAP',
                '24/7 SAP AMS Support',
                'SAP Integration & Cloud APIs',
                'SAP Strategic Consulting',
                'E-Invoice & Bank Integration'
              ].map((srv, idx) => (
                <li key={idx}>
                  <span className="cursor-default select-none text-[#CAD5D2] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A9C7C2]"></span>
                    <span>{srv}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: 6 Industry Verticals (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A9C7C2] font-semibold">
              Industry Verticals
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs">
              {[
                'Manufacturing',
                'Retail & Textile',
                'Oil & Gas',
                'Agro Chemical',
                'Steel',
                'Pharma'
              ].map((ind, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-left text-[#F4F7F6] flex items-center justify-between cursor-default select-none"
                >
                  <span>{ind}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A9C7C2]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#CAD5D2]">
          <div>
            © {CURRENT_YEAR} ZisanTech Solutions. All Rights Reserved. Engineered for Global Enterprises.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span className="text-[#A9C7C2]">Deep Teal & Platinum Mint Edition</span>
            <span>•</span>
            <span>Non-SAP Entity / Official Enterprise IT Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};