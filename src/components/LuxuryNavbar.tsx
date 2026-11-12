import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Layers,
  Cpu,
  Workflow,
  Sparkles,
  BookOpen,
  Laptop,
  Globe2,
  Factory,
  ShoppingBag,
  Flame,
  Sprout,
  Component,
  Pill
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const LuxuryNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const toggleMobileSubmenu = (menuName: string) => {
    setMobileExpanded((prev) => (prev === menuName ? null : menuName));
  };

  const scrollToSection = (id: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Ribbon in Deep Teal */}
      <div className="bg-[#052A29] text-[#DFE7E5] text-xs border-b border-[#A9C7C2]/20 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#F4F7F6] font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#A9C7C2] inline-block mr-2 animate-pulse"></span>
              Global Enterprise SAP Consulting & Technology Advisory
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[#A9C7C2] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#A9C7C2]" />
              New Delhi • International Delivery Capability
            </span>
          </div>

          <div className="flex items-center space-x-5 font-mono text-xs">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 text-[#DFE7E5] hover:text-[#A9C7C2] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#A9C7C2]" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`mailto:${COMPANY_INFO.primaryEmail}`}
              className="flex items-center gap-1.5 text-[#DFE7E5] hover:text-[#A9C7C2] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#A9C7C2]" />
              <span>{COMPANY_INFO.primaryEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Light Navbar with Dark Typography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2.5 sm:pt-3">
        <nav
          className={`rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-[#F4F7F6]/95 backdrop-blur-xl shadow-xl shadow-[#073B3A]/10 border border-[#A9C7C2]/50 py-2.5 px-4 sm:px-6'
              : 'bg-[#F4F7F6]/90 backdrop-blur-md shadow-md border border-[#CAD5D2] py-3 px-4 sm:px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo: Polished 3D ZisanTech Brand Logo */}
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              className="flex items-center cursor-pointer group py-0.5 focus:outline-none"
            >
              <img
                src="/zisantech_brand_logo_transparent.png"
                alt="ZisanTech - Innovate • Develop • Grow"
                className="h-11 sm:h-13 lg:h-15 w-auto object-contain filter drop-shadow-md group-hover:scale-[1.03] transition-transform duration-300"
              />
            </button>

            {/* Desktop Navigation Links with Interactive Dropdowns */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* Home */}
              <button
                type="button"
                onClick={() => scrollToSection('top')}
                className="px-3 py-2 text-sm font-semibold text-[#073B3A] hover:bg-[#073B3A]/5 rounded-lg cursor-pointer transition-colors"
              >
                Home
              </button>

              {/* About Us ▼ */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#253331] hover:text-[#073B3A] hover:bg-[#073B3A]/5 rounded-lg transition-colors cursor-pointer group"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#495F5C] group-hover:text-[#073B3A] transition-transform duration-200 ${
                      activeDropdown === 'about' ? 'rotate-180 text-[#073B3A]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2.5 w-72 rounded-2xl bg-[#052A29] text-[#F4F7F6] border border-[#A9C7C2]/35 shadow-2xl p-4 backdrop-blur-xl z-50 pointer-events-auto"
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#A9C7C2] mb-2 px-2.5 font-bold">
                        Company Architecture
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: 'Corporate Overview', desc: 'Global enterprise consulting foundation' },
                          { title: 'Leadership & Vision', desc: 'Strategic technology governance' },
                          { title: 'Core Philosophy', desc: 'Process-first business alignment' },
                          { title: 'Global Delivery Model', desc: 'Onsite & offshore capabilities' }
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => scrollToSection('about')}
                            className="px-3 py-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            <div className="text-xs font-semibold text-[#F4F7F6]">{item.title}</div>
                            <div className="text-[11px] text-[#CAD5D2]">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Our Services ▼ */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('services')}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#253331] hover:text-[#073B3A] hover:bg-[#073B3A]/5 rounded-lg transition-colors cursor-pointer group"
                >
                  <span>Our Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#495F5C] group-hover:text-[#073B3A] transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'rotate-180 text-[#073B3A]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2.5 w-80 rounded-2xl bg-[#052A29] text-[#F4F7F6] border border-[#A9C7C2]/35 shadow-2xl p-4 backdrop-blur-xl z-50 pointer-events-auto"
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#A9C7C2] mb-2 px-2.5 font-bold">
                        SAP & Digital Enterprise Practice
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: 'SAP Rollout & S/4HANA', desc: 'Template adoption and cross-site rollout' },
                          { title: 'SAP Custom Solutions', desc: 'Bespoke ABAP, Fiori & BTP extensions' },
                          { title: 'SAP Support & AMS', desc: '24/7 SLA-governed system upkeep' },
                          { title: 'SAP Integration & APIs', desc: 'E-Invoice, E-Way Bill & banking rails' },
                          { title: 'SAP Consulting & Strategy', desc: 'Process re-engineering & IT roadmap' },
                          { title: 'CRM / ERP & Cloud IT', desc: 'Custom enterprise software engines' }
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => scrollToSection('services')}
                            className="px-3 py-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            <div className="text-xs font-semibold text-[#F4F7F6]">{item.title}</div>
                            <div className="text-[11px] text-[#CAD5D2]">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries ▼ */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('industries')}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#253331] hover:text-[#073B3A] hover:bg-[#073B3A]/5 rounded-lg transition-colors cursor-pointer group"
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#495F5C] group-hover:text-[#073B3A] transition-transform duration-200 ${
                      activeDropdown === 'industries' ? 'rotate-180 text-[#073B3A]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2.5 w-72 rounded-2xl bg-[#052A29] text-[#F4F7F6] border border-[#A9C7C2]/35 shadow-2xl p-4 backdrop-blur-xl z-50 pointer-events-auto"
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#A9C7C2] mb-2 px-2.5 font-bold">
                        Specialized Sectors (Exact 6)
                      </div>
                      <div className="space-y-1">
                        {[
                          { name: '1. Manufacturing', tag: 'Shop floor & supply chain sync' },
                          { name: '2. Retail & Textile', tag: 'Omnichannel & batch segregation' },
                          { name: '3. Oil & Gas', tag: 'Asset telemetry & refinery governance' },
                          { name: '4. Agro Chemical', tag: 'Formula compliance & distribution' },
                          { name: '5. Steel', tag: 'Continuous casting & coil tracking' },
                          { name: '6. Pharma', tag: '21 CFR Part 11 validation' }
                        ].map((ind, idx) => (
                          <div
                            key={idx}
                            onClick={() => scrollToSection('industries')}
                            className="px-3 py-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            <div className="text-xs font-semibold text-[#F4F7F6]">{ind.name}</div>
                            <div className="text-[10px] text-[#A9C7C2]">{ind.tag}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SAP Training ▼ */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('training')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('skills')}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#253331] hover:text-[#073B3A] hover:bg-[#073B3A]/5 rounded-lg transition-colors cursor-pointer group"
                >
                  <span>SAP Training</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#495F5C] group-hover:text-[#073B3A] transition-transform duration-200 ${
                      activeDropdown === 'training' ? 'rotate-180 text-[#073B3A]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'training' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2.5 w-76 rounded-2xl bg-[#052A29] text-[#F4F7F6] border border-[#A9C7C2]/35 shadow-2xl p-4 backdrop-blur-xl z-50 pointer-events-auto"
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#A9C7C2] mb-2 px-2.5 font-bold">
                        Corporate Academy Modules
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: 'Functional Tracks', desc: 'FICO, MM, SD, PP, QM, PM, HCM' },
                          { title: 'Technical Core', desc: 'ABAP on HANA, SAP Fiori / UI5' },
                          { title: 'Simulated Projects', desc: 'Hands-on live enterprise scenarios' }
                        ].map((track, idx) => (
                          <div
                            key={idx}
                            onClick={() => scrollToSection('skills')}
                            className="px-3 py-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            <div className="text-xs font-semibold text-[#F4F7F6]">{track.title}</div>
                            <div className="text-[11px] text-[#CAD5D2]">{track.desc}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Us */}
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="px-3 py-2 text-sm font-semibold text-[#253331] hover:text-[#073B3A] hover:bg-[#073B3A]/5 rounded-lg cursor-pointer transition-colors"
              >
                Contact Us
              </button>
            </div>

            {/* Right Action: Get Consultation CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 rounded-xl bg-[#073B3A] text-[#F4F7F6] hover:bg-[#052A29] border border-[#A9C7C2]/50 text-xs font-bold tracking-wide transition-all shadow-md shadow-[#073B3A]/20 flex items-center gap-2 cursor-pointer group"
              >
                <span>Get Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A9C7C2] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white border border-[#CAD5D2] text-[#073B3A] hover:bg-[#E9EFEF] transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer (Responsive Navigation with In-Page Smooth Scroll) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#052A29] text-[#F4F7F6] border-b border-[#A9C7C2]/30 px-6 py-6 overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              {/* Home */}
              <button
                type="button"
                onClick={() => scrollToSection('top')}
                className="py-2 text-base font-semibold text-[#A9C7C2] text-left border-b border-white/5 cursor-pointer"
              >
                Home
              </button>

              {/* About Us (Accordion) */}
              <div className="border-b border-white/5 pb-2">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => scrollToSection('about')}
                    className="py-2 text-base font-semibold text-[#F4F7F6] hover:text-[#A9C7C2] text-left cursor-pointer flex-grow"
                  >
                    About Us
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('about')}
                    className="p-2 text-[#A9C7C2]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileExpanded === 'about' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                {mobileExpanded === 'about' && (
                  <div className="pl-3 py-2 space-y-2 text-xs text-[#CAD5D2] border-l-2 border-[#A9C7C2]/40 ml-2">
                    <div onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-[#F4F7F6]">• Corporate Overview</div>
                    <div onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-[#F4F7F6]">• Leadership & Vision</div>
                    <div onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-[#F4F7F6]">• Core Philosophy</div>
                    <div onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-[#F4F7F6]">• Global Delivery Model</div>
                  </div>
                )}
              </div>

              {/* Our Services (Accordion) */}
              <div className="border-b border-white/5 pb-2">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => scrollToSection('services')}
                    className="py-2 text-base font-semibold text-[#F4F7F6] hover:text-[#A9C7C2] text-left cursor-pointer flex-grow"
                  >
                    Our Services
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('services')}
                    className="p-2 text-[#A9C7C2]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileExpanded === 'services' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                {mobileExpanded === 'services' && (
                  <div className="pl-3 py-2 space-y-2 text-xs text-[#CAD5D2] border-l-2 border-[#A9C7C2]/40 ml-2">
                    <div onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-[#F4F7F6]">• SAP Rollout & S/4HANA</div>
                    <div onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-[#F4F7F6]">• SAP Custom Solutions</div>
                    <div onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-[#F4F7F6]">• SAP Support & AMS</div>
                    <div onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-[#F4F7F6]">• SAP Integration & APIs</div>
                    <div onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-[#F4F7F6]">• SAP Consulting & Strategy</div>
                    <div onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-[#F4F7F6]">• CRM / ERP & Cloud IT</div>
                  </div>
                )}
              </div>

              {/* Industries (Accordion) */}
              <div className="border-b border-white/5 pb-2">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => scrollToSection('industries')}
                    className="py-2 text-base font-semibold text-[#F4F7F6] hover:text-[#A9C7C2] text-left cursor-pointer flex-grow"
                  >
                    Industries
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('industries')}
                    className="p-2 text-[#A9C7C2]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileExpanded === 'industries' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                {mobileExpanded === 'industries' && (
                  <div className="pl-3 py-2 space-y-2 text-xs text-[#CAD5D2] border-l-2 border-[#A9C7C2]/40 ml-2">
                    <div onClick={() => scrollToSection('industries')} className="cursor-pointer hover:text-[#F4F7F6]">• Manufacturing</div>
                    <div onClick={() => scrollToSection('industries')} className="cursor-pointer hover:text-[#F4F7F6]">• Retail & Textile</div>
                    <div onClick={() => scrollToSection('industries')} className="cursor-pointer hover:text-[#F4F7F6]">• Oil & Gas</div>
                    <div onClick={() => scrollToSection('industries')} className="cursor-pointer hover:text-[#F4F7F6]">• Agro Chemical</div>
                    <div onClick={() => scrollToSection('industries')} className="cursor-pointer hover:text-[#F4F7F6]">• Steel</div>
                    <div onClick={() => scrollToSection('industries')} className="cursor-pointer hover:text-[#F4F7F6]">• Pharma</div>
                  </div>
                )}
              </div>

              {/* SAP Training (Accordion) */}
              <div className="border-b border-white/5 pb-2">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => scrollToSection('skills')}
                    className="py-2 text-base font-semibold text-[#F4F7F6] hover:text-[#A9C7C2] text-left cursor-pointer flex-grow"
                  >
                    SAP Training
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('training')}
                    className="p-2 text-[#A9C7C2]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileExpanded === 'training' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                {mobileExpanded === 'training' && (
                  <div className="pl-3 py-2 space-y-2 text-xs text-[#CAD5D2] border-l-2 border-[#A9C7C2]/40 ml-2">
                    <div onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-[#F4F7F6]">• Functional Tracks (FICO, MM, SD, PP)</div>
                    <div onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-[#F4F7F6]">• Technical Core (ABAP on HANA, Fiori)</div>
                    <div onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-[#F4F7F6]">• Simulated Project Sessions</div>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="py-2 text-base font-semibold text-[#F4F7F6] hover:text-[#A9C7C2] text-left cursor-pointer"
              >
                Contact Us
              </button>

              {/* Mobile CTA */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 rounded-xl bg-[#A9C7C2] hover:bg-[#C1DCD7] text-[#052A29] font-bold text-sm tracking-wide text-center cursor-pointer shadow-md transition-colors"
                >
                  Get Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};