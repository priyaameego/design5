import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Workflow,
  Briefcase,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Send,
  Check,
  Play,
  Pause,
  Factory,
  ShoppingBag,
  Flame,
  Sprout,
  Component,
  Pill,
  Database,
  Cloud,
  Lock,
  Compass,
  Lightbulb,
  CheckCircle,
  Plus,
  Minus,
  Star,
  Quote,
  FileText,
  BarChart3,
  Bot,
  Globe2,
  Network,
  Award,
  BookOpen,
  Headphones,
  Laptop,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO, INDUSTRIES, SERVICES } from '../../data/siteData';

// High-performance Reveal Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

// Word-by-word Reveal Heading
export const PlatinumHeading: React.FC<{
  text: string;
  className?: string;
  highlightWord?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}> = ({ text, className = '', highlightWord, as = 'h2' }) => {
  const words = text.split(' ');
  const Tag = as;

  return (
    <Tag className={className}>
      {words.map((word, index) => {
        const isHighlight =
          highlightWord &&
          word.toLowerCase().replace(/[^a-z0-9]/g, '').includes(highlightWord.toLowerCase());
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.035, ease: 'easeOut' }}
            className={`inline-block mr-[0.25em] ${
              isHighlight ? 'text-[#A9C7C2] font-extrabold drop-shadow-sm' : ''
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </Tag>
  );
};

// 4 Cinematic Enterprise SAP & IT Technology Hero Slides
const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=85',
    category: 'SAP ENTERPRISE SOLUTIONS',
    headline: 'Transforming Businesses Through SAP & Technology',
    highlight: 'Technology',
    description:
      'Expert SAP consulting and IT services designed to simplify operations, drive innovation, and accelerate business growth.',
    statNumber: '100%',
    statLabel: 'Enterprise Governance'
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85',
    category: 'DIGITAL TRANSFORMATION & ERP',
    headline: 'Engineering Scalable S/4HANA Architectures',
    highlight: 'Architectures',
    description:
      'Seamless multi-entity rollouts, localized statutory compliance, and resilient clean-core ERP transformations.',
    statNumber: '24/7',
    statLabel: 'Continuous AMS Support'
  },
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=85',
    category: 'ENTERPRISE IT CONSULTING',
    headline: 'Bridging Business Vision With Technology Execution',
    highlight: 'Execution',
    description:
      'End-to-end strategic advisory aligning mission-critical workflows with robust digital infrastructures.',
    statNumber: '6 Sectors',
    statLabel: 'Deep Vertical Mastery'
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85',
    category: 'CLOUD INTEGRATION & BUSINESS TECHNOLOGY',
    headline: 'Connected Digital Ecosystems & Smart Automation',
    highlight: 'Automation',
    description:
      'Harmonizing SAP BTP, bank rails, e-invoicing gateways, and third-party platforms with zero operational friction.',
    statNumber: 'Modern API',
    statLabel: 'Unified Cloud Fabric'
  }
];

// High-quality imagery for all 12 services
const SERVICE_IMAGES: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80', // SAP Rollout
  2: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80', // SAP Custom Solutions
  3: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80', // SAP Support
  4: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80', // SAP Integration
  5: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80', // SAP Consulting
  6: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80', // SAP E-Invoice & E-Way Bill
  7: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1000&q=80', // SAP AI
  8: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80', // CRM / ERP Solutions
  9: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1000&q=80', // E-commerce Solutions
  10: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80', // HRMS Solutions
  11: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1000&q=80', // Digital Marketing & Growth
  12: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80' // App & Web Development
};

// Original Skills & Percentages
const SKILLS_DATA = [
  { id: '01', name: 'SAP Expertise', percentage: 90, icon: Layers },
  { id: '02', name: 'System Integration', percentage: 70, icon: Network },
  { id: '03', name: 'SAP Training Excellence', percentage: 80, icon: BookOpen },
  { id: '04', name: 'IT & Digital Solutions', percentage: 95, icon: Laptop },
  { id: '05', name: 'Business Transformation', percentage: 75, icon: TrendingUp }
];

// Original Verified Testimonials (Reviews Of Experts)
const TESTIMONIALS = [
  {
    quote: 'ZisanTech Solutions delivered exceptional SAP consulting services.',
    author: 'Rahul Sharma',
    role: 'IT Manager',
    rating: 5
  },
  {
    quote: 'Reliable IT partner with scalable enterprise solutions.',
    author: 'Amit Singh',
    role: 'Operations Head',
    rating: 5
  },
  {
    quote: 'Training program exceeded expectations with practical sessions.',
    author: 'Anjali Verma',
    role: 'SAP Consultant',
    rating: 5
  },
  {
    quote: 'HRMS solution simplified employee management and payroll.',
    author: 'Priya Mehta',
    role: 'HR Manager',
    rating: 5
  },
  {
    quote: 'Improved reporting and analytics significantly.',
    author: 'Vikram Patel',
    role: 'Business Analyst',
    rating: 5
  },
  {
    quote: 'Digital marketing boosted our online presence.',
    author: 'Neha Kapoor',
    role: 'Marketing Lead',
    rating: 5
  }
];

// Original 10 FAQs & Answers
const FAQ_DATA = [
  {
    question: 'What Services Do You Offer?',
    answer:
      'We offer comprehensive SAP consulting, S/4HANA rollout, custom ABAP & Fiori development, continuous SAP AMS support, system integration (E-Invoice, E-Way Bill, weighing bridge, banks), enterprise AI, and customized digital IT solutions (CRM, ERP, E-commerce, HRMS, and App/Web development).'
  },
  {
    question: 'How Can Your Firm Help Improve Our Business?',
    answer:
      'We streamline core operational workflows, eliminate fragmented manual spreadsheets, automate statutory compliance, and integrate cross-functional departments into a single source of enterprise truth.'
  },
  {
    question: 'What Experience Do You Have In Our Industry?',
    answer:
      'Our team holds extensive implementation and support experience across six major industry sectors: Manufacturing, Retail & Textile, Oil & Gas, Agro Chemical, Steel, and Pharma.'
  },
  {
    question: 'What Is Your Approach Or Methodology?',
    answer:
      'We follow a disciplined 4-stage lifecycle: Analyze → Design → Deploy → Support. This ensures systematic requirements mapping, clean-core configuration, rigorous UAT testing, and smooth hyper-care go-lives.'
  },
  {
    question: 'Can You Provide References Or Case Studies?',
    answer:
      'Yes, we provide enterprise references, modular implementation benchmarks, and detailed project case briefs during structured consultation discovery discussions.'
  },
  {
    question: 'How Do You Determine The Cost Of Services?',
    answer:
      'Pricing is transparent and structured based on project scope, module complexity, integration landscape, deployment timelines, and chosen support SLA tiers without hidden overheads.'
  },
  {
    question: 'What Sets Your Firm Apart From Competitors?',
    answer:
      'Our blend of deep hands-on SAP functional expertise, clean-core customization capabilities, practical business-first approach, and dedicated client hyper-care sets us distinctly apart.'
  },
  {
    question: 'How Long Does Consulting Engagement Last?',
    answer:
      'Engagements vary by business objective: targeted integration or audit sprints typically span 4–8 weeks, full S/4HANA implementations span 3–9 months, and AMS support contracts operate on flexible multi-year SLA terms.'
  },
  {
    question: "Can You Explain Your Team's Expertise?",
    answer:
      'Our consultants possess extensive cross-functional and technical expertise across core SAP modules (FICO, MM, SD, PP, QM, PM, HCM, LE, TM), ABAP on HANA, SAP BTP, and modern cloud architectures.'
  },
  {
    question: 'How You Measure The Success Of Your Service?',
    answer:
      'We measure success through tangible operational KPIs: system uptime, reduction in monthly closing cycles, inventory accuracy, zero-defect statutory compliance, and end-user adoption metrics.'
  }
];

export const ConceptLuxuryViolet: React.FC = () => {
  // Hero slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Active Service Tab ('all', 'sap', 'other')
  const [activeServiceTab, setActiveServiceTab] = useState<'all' | 'sap' | 'other'>('all');

  // Active FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form submission feedback state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SAP Consulting',
    message: ''
  });

  // Hero auto-slider (6.5s interval with pause on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Touch swipe support for hero slider
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (deltaX > 40) {
      // Swiped right -> previous slide
      setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    } else if (deltaX < -40) {
      // Swiped left -> next slide
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }
    touchStartXRef.current = null;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'SAP Consulting',
        message: ''
      });
    }, 4500);
  };

  // Filtered Services list
  const filteredServices = SERVICES.filter((srv) => {
    if (activeServiceTab === 'all') return true;
    return srv.type === activeServiceTab;
  });

  return (
    <div className="w-full bg-[#F4F7F6] text-[#253331] selection:bg-[#073B3A] selection:text-[#F4F7F6]">
      {/* =========================================================================
          SECTION 1: HERO BANNER – 4-SLIDE PREMIUM CINEMATIC IMAGE SLIDER
          Autoplay with pause on hover, touch/swipe support, Ken Burns zoom & animated text
         ========================================================================= */}
      <section
        id="top"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#073B3A] text-[#F4F7F6] pt-24 lg:pt-28 pb-16"
      >
        {/* Full-width Image Slider Background with Ken Burns Zoom & Smooth Crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.10 }}
              animate={{ opacity: 1, scale: 1.02 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
            />
          </AnimatePresence>

          {/* Luxury Deep Teal Gradation Overlay for Crisp Enterprise Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#031D1C]/92 via-[#073B3A]/80 to-[#052A29]/88 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#073B3A] via-transparent to-black/50"></div>

          {/* Platinum Mint Technical Grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#A9C7C2 1px, transparent 1px), linear-gradient(to right, #A9C7C2 1px, transparent 1px)`,
              backgroundSize: '48px 48px'
            }}
          ></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Dynamic Slide Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`slide-content-${currentSlide}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#052A29]/80 border border-[#A9C7C2]/40 text-xs font-mono tracking-wider uppercase text-[#DFE7E5] backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#A9C7C2] animate-pulse"></span>
                    <span>{HERO_SLIDES[currentSlide].category}</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#F4F7F6] leading-[1.12]">
                    {HERO_SLIDES[currentSlide].headline}
                  </h1>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-[#DFE7E5]/90 font-normal leading-relaxed max-w-2xl">
                    {HERO_SLIDES[currentSlide].description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <span className="px-7 py-3.5 rounded-xl bg-[#A9C7C2] text-[#052A29] text-sm font-bold tracking-wide transition-all shadow-xl shadow-[#073B3A]/40 flex items-center gap-2 cursor-default select-none border border-[#C1DCD7]">
                      <span>Our Services →</span>
                      <ArrowRight className="w-4 h-4 text-[#052A29]" />
                    </span>

                    <span className="px-7 py-3.5 rounded-xl bg-transparent text-[#F4F7F6] text-sm font-bold tracking-wide transition-all border border-[#A9C7C2]/50 flex items-center gap-2 cursor-default select-none">
                      <span>Get Consultation</span>
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Enterprise Assurance Metrics */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
                <div>
                  <div className="text-xl font-bold font-heading text-[#F4F7F6]">
                    {HERO_SLIDES[currentSlide].statNumber}
                  </div>
                  <div className="text-xs text-[#CAD5D2] uppercase tracking-wider font-mono">
                    {HERO_SLIDES[currentSlide].statLabel}
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold font-heading text-[#A9C7C2]">Practical</div>
                  <div className="text-xs text-[#CAD5D2] uppercase tracking-wider font-mono">
                    Expert Training
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold font-heading text-[#F4F7F6]">Continuous</div>
                  <div className="text-xs text-[#CAD5D2] uppercase tracking-wider font-mono">
                    System Support
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Architectural Technology Dashboard (4 Cols) */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative rounded-3xl bg-[#052A29]/85 border border-[#A9C7C2]/35 p-6 backdrop-blur-xl shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A9C7C2]"></span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#DFE7E5] font-semibold">
                      Enterprise Architecture
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A9C7C2]">SYSTEM MATRIX</span>
                </div>

                <div className="space-y-3.5">
                  {[
                    { label: 'SAP S/4HANA & Rollout Core', status: 'SYNCHRONIZED', icon: Database },
                    { label: 'System Integration & APIs', status: 'ACTIVE', icon: Network },
                    { label: 'Cloud Infrastructure & Security', status: 'PROTECTED', icon: Lock },
                    { label: 'Custom ABAP & Smart Analytics', status: 'OPTIMIZED', icon: Cpu }
                  ].map((layer, idx) => {
                    const Icon = layer.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#073B3A] flex items-center justify-center border border-[#A9C7C2]/30">
                            <Icon className="w-4 h-4 text-[#A9C7C2]" />
                          </div>
                          <span className="text-xs font-medium text-[#F4F7F6]">{layer.label}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#A9C7C2] bg-[#A9C7C2]/15 px-2 py-0.5 rounded border border-[#A9C7C2]/20">
                          {layer.status}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#CAD5D2]">
                  <span>Operational Governance</span>
                  <span className="font-mono text-[#F4F7F6]">ZisanTech Standard</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Slider Indicators, Controls & Slide Counter */}
          <div className="mt-12 flex items-center justify-between pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-10 bg-[#A9C7C2]' : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
              <span className="text-xs font-mono text-[#CAD5D2] ml-2">
                0{currentSlide + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#DFE7E5] transition-colors"
                title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() =>
                  setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
                }
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#DFE7E5] transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#DFE7E5] transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT – "Know Our Story"
          Pearl White background with complete original 4 paragraphs in editable HTML
         ========================================================================= */}
      <section id="about" className="py-24 lg:py-32 bg-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Asymmetric Enterprise Architecture Composition (5 cols) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
              className="lg:col-span-5 relative space-y-6"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#A9C7C2]/40 shadow-2xl bg-[#073B3A] group">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                  alt="Enterprise SAP Consulting Architecture"
                  className="w-full h-[480px] object-cover contrast-110 opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#073B3A] via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#052A29]/95 border border-[#A9C7C2]/30 backdrop-blur-md text-[#F4F7F6]">
                  <div className="text-[11px] font-mono text-[#A9C7C2] uppercase tracking-wider mb-1 font-semibold">
                    Core Philosophy
                  </div>
                  <div className="text-xs font-medium text-[#DFE7E5] leading-relaxed">
                    Aligning technology with genuine business objectives to deliver measurable clarity, operational efficiency, and long-term value.
                  </div>
                </div>
              </div>

              {/* Secondary Supporting Visual Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#A9C7C2]/40 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#073B3A] text-[#A9C7C2] flex items-center justify-center flex-shrink-0 shadow-inner">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#073B3A] font-heading">
                    Practical & Scalable Delivery
                  </h4>
                  <p className="text-xs text-[#364845] leading-relaxed">
                    Technically sound solutions engineered to fit seamlessly into existing workflows.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Editorial Narrative with ALL FOUR original paragraphs (7 cols) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#073B3A] font-bold">
                  ABOUT ZISANTECH SOLUTIONS
                </span>
              </motion.div>

              {/* Exact Original Heading */}
              <PlatinumHeading
                text="Know Our Story"
                as="h2"
                highlightWord="Story"
                className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#073B3A] leading-tight"
              />

              {/* Complete Original 4 Paragraphs in Editable HTML */}
              <motion.div variants={fadeInUp} className="space-y-4 text-sm sm:text-base text-[#253331] leading-relaxed">
                <p>
                  <strong className="text-[#073B3A]">ZisanTech Solutions</strong> is dedicated to helping businesses embrace digital transformation through intelligent SAP solutions and modern IT services. Our focus is on aligning technology with real business objectives to improve efficiency, visibility, and decision-making.
                </p>
                <p>
                  With a strong foundation in SAP consulting and training, we enable organizations to build capable teams while implementing systems that deliver long-term value. Our approach emphasizes clarity, adaptability, and measurable outcomes in every project we undertake.
                </p>
                <p>
                  We believe successful digital transformation goes beyond technology—it requires the right strategy, expertise, and continuous support. By combining industry knowledge with a client-focused approach, we help businesses adapt confidently to evolving technology and market demands. Our goal is to build lasting partnerships and empower organizations with solutions that support sustainable growth and long-term success.
                </p>
                <p>
                  What sets us apart is our commitment to delivering solutions that are not only technically sound but also practical and scalable. We work closely with clients to understand their workflows, challenges, and growth plans, ensuring every solution fits seamlessly into their ecosystem.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-4">
                <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#073B3A] text-[#F4F7F6] text-xs font-bold tracking-wider uppercase shadow-md border border-[#A9C7C2]/40 cursor-default select-none">
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A9C7C2]" />
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INNOVATIVE SAP SOLUTIONS
          Deep Teal luxury background with Platinum Mint accents
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#073B3A] text-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A9C7C2] font-semibold">
                  CONNECTED ARCHITECTURE
                </span>
              </div>

              {/* Exact Original Heading */}
              <PlatinumHeading
                text="Innovative SAP Solutions"
                as="h2"
                highlightWord="Solutions"
                className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F4F7F6] leading-tight"
              />

              {/* Exact Original Supporting Description */}
              <p className="text-base sm:text-lg text-[#DFE7E5]/90 leading-relaxed max-w-2xl">
                Driving smarter operations and connected experiences with flexible, future-ready SAP solutions.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-end">
              <div className="p-6 rounded-2xl bg-[#052A29] border border-[#A9C7C2]/35 max-w-md w-full shadow-xl">
                <div className="flex items-center gap-3 mb-3 text-[#A9C7C2]">
                  <Workflow className="w-6 h-6" />
                  <span className="text-xs font-mono uppercase tracking-widest font-semibold">
                    Flexible & Future-Ready
                  </span>
                </div>
                <p className="text-xs text-[#CAD5D2] leading-relaxed">
                  Engineered to unify core ERP transactions with real-time operational interfaces, eliminating friction between enterprise departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR WORK IS FOR YOUR SUCCESS
          Contrasting Pearl White section with all 3 original subsections
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#073B3A] font-bold">
                CLIENT-CENTRIC VALUE
              </span>
            </div>

            {/* Exact Original Heading */}
            <PlatinumHeading
              text="Our Work Is For Your Success"
              as="h2"
              highlightWord="Success"
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#073B3A] leading-tight mb-4"
            />

            {/* Exact Original Description */}
            <p className="text-sm sm:text-base text-[#253331] leading-relaxed">
              Our commitment centers on empowering your journey to success. Whether you’re an organization seeking to enhance operational efficiency or an individual aspiring to establish a career in SAP. Leveraging deep SAP expertise and modern IT solutions, we help you stay ahead in a rapidly evolving digital world. With a strong foundation in SAP technologies and innovative IT strategies, we empower businesses to adapt, grow, and succeed in today’s fast-changing digital landscape.
            </p>
          </div>

          {/* All Three Original Subsections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Subsection 1 */}
            <div className="rounded-3xl bg-white border border-[#A9C7C2]/35 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#073B3A] text-[#A9C7C2] flex items-center justify-center mb-6 shadow-inner">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#073B3A] mb-3">
                  Driving Business Success
                </h3>
                <p className="text-xs sm:text-sm text-[#364845] leading-relaxed mb-6">
                  We collaborate with companies to enhance workflows, boost productivity, and fuel expansion by offering:
                </p>
                <ul className="space-y-2.5 text-xs text-[#253331]">
                  {[
                    'Comprehensive SAP Consulting and Deployment',
                    'Smooth Integration Across Systems',
                    'Dependable Support and Continuous Improvement Services'
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#073B3A] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subsection 2 */}
            <div className="rounded-3xl bg-white border border-[#A9C7C2]/35 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#073B3A] text-[#A9C7C2] flex items-center justify-center mb-6 shadow-inner">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#073B3A] mb-3">
                  Empowering Aspiring SAP Experts
                </h3>
                <p className="text-xs sm:text-sm text-[#364845] leading-relaxed mb-6">
                  We believe that well-developed skills create lasting opportunities. Our programs offer:
                </p>
                <ul className="space-y-2.5 text-xs text-[#253331]">
                  {[
                    'Simulated project experiences for practical learning',
                    'Interactive system training sessions',
                    'Industry-aligned educational content',
                    'Career-centric teaching methods'
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#073B3A] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#495F5C] pt-4 mt-4 border-t border-slate-100">
                  We focus on equipping you with the SAP expertise necessary for real-world achievement.
                </p>
              </div>
            </div>

            {/* Subsection 3 */}
            <div className="rounded-3xl bg-white border border-[#A9C7C2]/35 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#073B3A] text-[#A9C7C2] flex items-center justify-center mb-6 shadow-inner">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#073B3A] mb-3">
                  Delivering Smart IT Solutions
                </h3>
                <p className="text-xs sm:text-sm text-[#364845] leading-relaxed mb-6">
                  Whether integrating with external platforms such as Gate Management, Weighbridge, E-commerce, HRMS, and Bank Integration, or offering tailored IT services, we guarantee smooth and efficient technology collaboration across your systems.
                </p>
                <div className="pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#073B3A] mb-2 font-bold">
                    Supported Integrations
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Gate Management', 'Weighbridge', 'E-commerce', 'HRMS', 'Bank Integration'].map(
                      (item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-[#E9EFEF] text-[11px] font-medium text-[#073B3A] border border-[#CAD5D2]"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WE'RE A DIGITAL SAP & IT SOLUTIONS AGENCY
          Deep Teal section with 6 capability blocks
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#073B3A] text-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A9C7C2] font-semibold">
                FULL-SERVICE PRACTICE
              </span>
            </div>

            {/* Exact Original Heading */}
            <PlatinumHeading
              text="We’re A Digital SAP & IT Solutions Agency"
              as="h2"
              highlightWord="Agency"
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F4F7F6] leading-tight mb-4"
            />

            {/* Exact Original Paragraphs */}
            <p className="text-sm sm:text-base text-[#DFE7E5]/90 leading-relaxed">
              Transforming Businesses and Careers with Smart SAP Solutions, Practical Training & Innovative IT Services. We deliver results that fuel your success. Whether you’re scaling your business or advancing your SAP career, we help you grow smarter and stronger.
            </p>
          </div>

          {/* Exactly 6 Original Capability Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'SAP Consulting',
                desc: 'Expert guidance on SAP S/4HANA deployment, system integration, and business process optimization.',
                icon: Globe2
              },
              {
                title: 'SAP Training',
                desc: 'Hands-on live projects, SAP system access, and career-focused mentorship programs.',
                icon: BookOpen
              },
              {
                title: 'IT Solutions',
                desc: 'Seamless integration across HRMS, E-commerce, banking, and enterprise systems.',
                icon: Laptop
              },
              {
                title: 'Our Approach',
                desc: 'Analyze → Design → Deploy → Support with real-world impact.',
                icon: Workflow
              },
              {
                title: 'Data Security',
                desc: 'Robust data protection strategies ensuring secure transactions and compliance with industry standards.',
                icon: Lock
              },
              {
                title: 'Cloud Integration',
                desc: 'Scalable cloud solutions enabling flexible, cost-effective, and future-ready business operations.',
                icon: Cloud
              }
            ].map((block, idx) => {
              const Icon = block.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#052A29] border border-[#A9C7C2]/20 hover:border-[#A9C7C2]/60 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#073B3A] border border-[#A9C7C2]/30 flex items-center justify-center text-[#A9C7C2] group-hover:bg-[#A9C7C2] group-hover:text-[#052A29] transition-colors mb-6 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#F4F7F6] mb-3 group-hover:text-[#A9C7C2] transition-colors">
                    {block.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CAD5D2] leading-relaxed">
                    {block.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR SKILLS
          Contrasting Pearl White section with animated progress indicators
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#073B3A] font-bold">
                  BENCHMARKED PROFICIENCY
                </span>
              </div>

              {/* Exact Original Heading */}
              <PlatinumHeading
                text="Our Skills"
                as="h2"
                highlightWord="Skills"
                className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#073B3A] leading-tight"
              />

              <h3 className="text-lg font-semibold text-[#073B3A]">
                We’ve skilled in wide range of web and other digital market tools.
              </h3>

              <p className="text-sm text-[#253331] leading-relaxed">
                We combine advanced technical skills, real-world project experience, and a strong understanding of business needs to create impactful, tailored solutions.
              </p>
            </div>

            {/* Animated Progress Indicators */}
            <div className="lg:col-span-7 space-y-6">
              {SKILLS_DATA.map((skill) => (
                <div key={skill.id} className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-bold font-heading text-[#073B3A]">
                    <span className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#495F5C]">{skill.id} —</span>
                      <span>{skill.name}</span>
                    </span>
                    <span className="font-mono text-[#073B3A]">{skill.percentage}%</span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-[#DFE7E5] overflow-hidden p-0.5 border border-[#CAD5D2]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full rounded-full bg-[#073B3A]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: OUR SERVICES – UPGRADED WITH PREMIUM IMAGE CARDS
          Every service card features a prominent relevant image, smooth hover zoom,
          gradient overlays, text lift, and animated arrow icons.
         ========================================================================= */}
      <section id="services" className="py-24 lg:py-32 bg-[#073B3A] text-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A9C7C2] font-semibold">
                  PORTFOLIO ARCHITECTURE
                </span>
              </div>

              {/* Exact Original Heading */}
              <PlatinumHeading
                text="Our Services"
                as="h2"
                highlightWord="Services"
                className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F4F7F6] leading-tight"
              />
            </div>

            {/* Filter Tabs */}
            <div className="inline-flex p-1.5 rounded-2xl bg-[#052A29] border border-[#A9C7C2]/30">
              <button
                type="button"
                onClick={() => setActiveServiceTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeServiceTab === 'all'
                    ? 'bg-[#A9C7C2] text-[#052A29] shadow'
                    : 'text-[#DFE7E5] hover:text-[#FFFFFF]'
                }`}
              >
                All Services ({SERVICES.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveServiceTab('sap')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeServiceTab === 'sap'
                    ? 'bg-[#A9C7C2] text-[#052A29] shadow'
                    : 'text-[#DFE7E5] hover:text-[#FFFFFF]'
                }`}
              >
                SAP Services (7)
              </button>
              <button
                type="button"
                onClick={() => setActiveServiceTab('other')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeServiceTab === 'other'
                    ? 'bg-[#A9C7C2] text-[#052A29] shadow'
                    : 'text-[#DFE7E5] hover:text-[#FFFFFF]'
                }`}
              >
                Other IT Services (5)
              </button>
            </div>
          </div>

          {/* Upgraded Service Cards Grid with Prominent Image Composition */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const serviceImage = SERVICE_IMAGES[service.id] || service.image;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
                  className="group relative rounded-3xl bg-[#052A29] border border-[#A9C7C2]/25 hover:border-[#A9C7C2]/70 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#031D1C]/60 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
                >
                  {/* Top Image Composition with Overlay & Hover Zoom */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#031D1C]">
                    <img
                      src={serviceImage}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.8] group-hover:brightness-95"
                    />
                    {/* Gradient Overlay for Text Readability & Mood */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052A29] via-[#052A29]/40 to-transparent"></div>

                    {/* Category & Counter Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#052A29] font-bold bg-[#A9C7C2] px-3 py-1 rounded-full shadow-md">
                        {service.category}
                      </span>
                      <span className="text-xs font-mono text-[#F4F7F6] bg-[#031D1C]/80 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                        {service.id < 10 ? `0${service.id}` : service.id}
                      </span>
                    </div>
                  </div>

                  {/* Body Content with Upward Lift & Highlight on Hover */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-[#F4F7F6] mb-3 group-hover:text-[#A9C7C2] transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#CAD5D2] leading-relaxed mb-6 group-hover:text-[#DFE7E5] transition-colors duration-300">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#DFE7E5]">
                      <span className="font-semibold text-[#CAD5D2] group-hover:text-[#A9C7C2] transition-colors">
                        Enterprise Capability
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#073B3A] border border-[#A9C7C2]/30 flex items-center justify-center text-[#A9C7C2] group-hover:bg-[#A9C7C2] group-hover:text-[#052A29] transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: WHAT WE BRING TO YOUR BUSINESS
          Contrasting Pearl White section with all 6 original sections
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#073B3A] font-bold">
                ENDURING VALUE
              </span>
            </div>

            {/* Exact Original Heading */}
            <PlatinumHeading
              text="What We Bring to Your Business"
              as="h2"
              highlightWord="Business"
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#073B3A] leading-tight mb-4"
            />

            {/* Exact Original Narrative */}
            <p className="text-sm sm:text-base text-[#253331] leading-relaxed">
              At ZisanTech Solutions, we provide dependable, business-focused solutions designed to simplify your operations and support sustainable growth. Our blend of SAP expertise and IT innovation ensures your business runs efficiently and adapts to changing needs.
            </p>
          </div>

          {/* Exactly 6 Original Sections in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Process Optimization',
                desc: 'We analyze your existing workflows and identify inefficiencies, then design streamlined, standardized processes that boost productivity and reduce operational friction.',
                icon: Zap
              },
              {
                title: 'Tailored SAP Implementation & Support',
                desc: 'Our team customizes SAP solutions to fit your specific business requirements, ensuring seamless integration and maximum value from your technology investment.',
                icon: Layers
              },
              {
                title: 'Quality Assurance & Continuous Improvement',
                desc: 'Through rigorous testing and ongoing monitoring, we maintain high standards for all solutions, ensuring reliability, accuracy, and performance over time.',
                icon: ShieldCheck
              },
              {
                title: 'Workforce Enablement',
                desc: 'We empower your HR and operations teams by integrating SAP and digital tools that simplify employee management, improve communication, and enhance overall productivity.',
                icon: Users
              },
              {
                title: 'Scalable Digital Transformation',
                desc: 'We develop flexible, future-ready IT frameworks that grow with your business, enabling you to adapt quickly to market changes and new opportunities.',
                icon: TrendingUp
              },
              {
                title: 'Strategic IT Consulting',
                desc: 'We provide expert guidance to align your technology roadmap with business goals, helping you make informed decisions and achieve long-term success.',
                icon: Compass
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-[#A9C7C2]/35 shadow-sm hover:border-[#A9C7C2] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#073B3A] text-[#A9C7C2] flex items-center justify-center mb-6 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#073B3A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#364845] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: REVIEWS OF EXPERTS
          Deep Teal luxury section with expert testimonials
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#073B3A] text-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A9C7C2] font-semibold">
                CLIENT SAY
              </span>
            </div>

            {/* Exact Original Heading */}
            <PlatinumHeading
              text="Reviews Of Experts"
              as="h2"
              highlightWord="Experts"
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F4F7F6] leading-tight"
            />
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#052A29] border border-[#A9C7C2]/20 hover:border-[#A9C7C2]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#A9C7C2]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm text-[#DFE7E5] italic leading-relaxed">
                    “ {review.quote}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <div className="text-base font-bold font-heading text-[#F4F7F6]">
                    {review.author}
                  </div>
                  <div className="text-xs font-mono text-[#CAD5D2]">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: WHY CHOOSE ZISANTECH SOLUTIONS?
          Contrasting Pearl White section with 4 pillars and 4 descriptive metrics
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#073B3A] font-bold">
                TRUSTED PARTNERSHIP
              </span>
            </div>

            {/* Exact Original Heading */}
            <PlatinumHeading
              text="Why Choose ZisanTech Solutions?"
              as="h2"
              highlightWord="ZisanTech"
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#073B3A] leading-tight mb-2"
            />

            {/* Exact Original Subtitle */}
            <h3 className="text-lg font-bold text-[#364845]">
              Focused on Delivering Value Through SAP & IT Solutions
            </h3>
          </div>

          {/* All Four Original Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Experienced SAP Consultants',
                desc: 'Certified professionals with live project expertise ensure your SAP initiatives are executed with precision and insight.',
                icon: Award
              },
              {
                title: 'Holistic SAP Services',
                desc: 'From initial consultation to full-scale implementation and support, we deliver scalable solutions tailored to your unique challenges.',
                icon: Layers
              },
              {
                title: 'Business-Centric Technology Approach',
                desc: 'We prioritize solutions that enhance your business processes and drive tangible results.',
                icon: TrendingUp
              },
              {
                title: 'Interactive SAP Training Programs',
                desc: 'Our training emphasizes practical learning through real-time projects, enabling you to apply knowledge confidently.',
                icon: BookOpen
              }
            ].map((col, idx) => {
              const Icon = col.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-[#A9C7C2]/35 shadow-sm hover:border-[#A9C7C2] hover:-translate-y-1 transition-all flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#073B3A] text-[#A9C7C2] flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-heading text-[#073B3A] mb-2">
                      {col.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#364845] leading-relaxed">{col.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Original 4 Metric Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Clients Served', desc: 'Enterprise Organizations Across Verticals' },
              { title: 'Projects Delivered', desc: 'S/4HANA Deployments & Custom Modules' },
              { title: 'Professionals Trained', desc: 'Certified Functional & Technical Experts' },
              { title: 'Support & Consulting', desc: 'Comprehensive AMS & Process Advisory' }
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#073B3A] text-[#F4F7F6] border border-[#A9C7C2]/30 text-center space-y-1 shadow-md hover:-translate-y-1 transition-transform"
              >
                <div className="text-base font-bold font-heading text-[#A9C7C2]">
                  {stat.title}
                </div>
                <div className="text-xs text-[#CAD5D2] font-mono">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: INDUSTRIES WE SERVE (EXACT SIX SECTORS)
          Deep Teal section with six industry vertical cards
         ========================================================================= */}
      <section id="industries" className="py-24 lg:py-32 bg-[#073B3A] text-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A9C7C2] font-semibold">
                DOMAIN EXCELLENCE
              </span>
            </div>

            <PlatinumHeading
              text="Industries We Serve"
              as="h2"
              highlightWord="Serve"
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F4F7F6] leading-tight mb-4"
            />

            <p className="text-sm sm:text-base text-[#DFE7E5]/80 leading-relaxed">
              Specialized domain expertise tailored to the operational intricacies of six core international industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, index) => (
              <div
                key={ind.id}
                className="group relative rounded-3xl overflow-hidden bg-[#052A29] border border-[#A9C7C2]/20 hover:border-[#A9C7C2]/60 shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[360px]"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.35]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031D1C] via-[#052A29]/70 to-transparent"></div>
                </div>

                <div className="relative z-10 p-6 flex justify-between items-center border-b border-white/10">
                  <span className="text-xs font-mono text-[#A9C7C2]">0{index + 1} / 06</span>
                  <span className="text-[10px] font-mono text-[#CAD5D2] uppercase tracking-wider">
                    {ind.id}
                  </span>
                </div>

                <div className="relative z-10 p-6 space-y-2">
                  <h3 className="text-2xl font-bold font-heading text-[#F4F7F6] group-hover:text-[#A9C7C2] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#DFE7E5]/90 line-clamp-3 leading-relaxed">
                    {ind.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: MOST ASKED QUESTIONS (ALL 10 FAQS)
          Contrasting Pearl White section with animated accordion
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#073B3A] font-bold">
                COMMON QUERIES
              </span>
            </div>

            {/* Exact Original Heading */}
            <PlatinumHeading
              text="Most Asked Question To Us"
              as="h2"
              highlightWord="Question"
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#073B3A] leading-tight mb-4"
            />

            <p className="text-sm sm:text-base text-[#253331] leading-relaxed">
              If you haven’t found the answer you’re looking for, we’re here to help. Reach out to our advisory team directly.
            </p>
          </div>

          {/* 10 FAQs in clean 2-column accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#A9C7C2]/35 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold font-heading text-[#073B3A] hover:text-[#052A29] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <span className="w-8 h-8 rounded-full bg-[#E9EFEF] flex items-center justify-center flex-shrink-0 text-[#073B3A]">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#364845] leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: CONTACT US
          Deep Teal section with genuine contact details & consultation form
         ========================================================================= */}
      <section id="contact" className="py-24 lg:py-32 bg-[#052A29] text-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#A9C7C2]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A9C7C2] font-semibold">
                  CONTACT DETAILS
                </span>
              </div>

              {/* Exact Original Heading */}
              <PlatinumHeading
                text="Contact Us"
                as="h2"
                highlightWord="Contact"
                className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F4F7F6] leading-tight"
              />

              {/* Exact Original Narrative */}
              <p className="text-sm sm:text-base text-[#DFE7E5]/80 leading-relaxed">
                Ready to transform your business with innovative technology solutions? Contact ZisanTech Solutions today and let our experts help you achieve your goals.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#A9C7C2]/30 flex items-center justify-center text-[#A9C7C2] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#CAD5D2] uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-[#F4F7F6]">Delhi, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#A9C7C2]/30 flex items-center justify-center text-[#A9C7C2] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#CAD5D2] uppercase tracking-wider">
                      Phone Number
                    </div>
                    <span className="text-sm font-semibold text-[#F4F7F6] cursor-default select-none">
                      +91 87978 18499
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#A9C7C2]/30 flex items-center justify-center text-[#A9C7C2] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#CAD5D2] uppercase tracking-wider">
                      Email Address
                    </div>
                    <span className="text-sm font-semibold text-[#F4F7F6] cursor-default select-none">
                      info@zisantech.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: In-page Consultation Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#073B3A] border border-[#A9C7C2]/35 p-8 sm:p-10 shadow-2xl">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                  <h3 className="text-xl font-bold font-heading text-[#F4F7F6]">
                    Send Us A Message
                  </h3>
                  <span className="text-[10px] font-mono text-[#A9C7C2] tracking-wider uppercase">
                    DIRECT ADVISORY
                  </span>
                </div>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-[#052A29] border border-[#A9C7C2] text-center space-y-3"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#A9C7C2]/20 text-[#A9C7C2] flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-[#F4F7F6]">Message Dispatched</h4>
                    <p className="text-xs text-[#CAD5D2] max-w-sm mx-auto">
                      Thank you. An advisory consultant from ZisanTech Solutions will reach out to you within 24 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[#CAD5D2] uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Full Name"
                          className="w-full px-4 py-3 rounded-xl bg-[#052A29] border border-white/10 text-sm text-[#F4F7F6] focus:outline-none focus:border-[#A9C7C2] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#CAD5D2] uppercase tracking-wider mb-1.5">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#052A29] border border-white/10 text-sm text-[#F4F7F6] focus:outline-none focus:border-[#A9C7C2] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[#CAD5D2] uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91..."
                          className="w-full px-4 py-3 rounded-xl bg-[#052A29] border border-white/10 text-sm text-[#F4F7F6] focus:outline-none focus:border-[#A9C7C2] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#CAD5D2] uppercase tracking-wider mb-1.5">
                          Interested Service
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#052A29] border border-white/10 text-sm text-[#F4F7F6] focus:outline-none focus:border-[#A9C7C2] transition-colors"
                        >
                          <option value="SAP Consulting">SAP Consulting</option>
                          <option value="SAP Rollout">SAP Rollout</option>
                          <option value="SAP Custom Solutions">SAP Custom Solutions</option>
                          <option value="SAP Support">SAP Support</option>
                          <option value="SAP Integration">SAP Integration</option>
                          <option value="SAP Training">SAP Training</option>
                          <option value="CRM / ERP Solutions">CRM / ERP Solutions</option>
                          <option value="Other IT Services">Other IT Services</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#CAD5D2] uppercase tracking-wider mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help your business succeed?"
                        className="w-full px-4 py-3 rounded-xl bg-[#052A29] border border-white/10 text-sm text-[#F4F7F6] focus:outline-none focus:border-[#A9C7C2] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#A9C7C2] text-[#052A29] hover:bg-[#C1DCD7] font-bold text-sm tracking-wider uppercase transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};