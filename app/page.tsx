'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Clock,
  MapPin,
  Phone,
  Sparkles,
  UtensilsCrossed,
  Users,
  Mic2,
  Palette,
  Zap,
  CheckCircle2,
  X,
  Menu,
  ArrowRight,
  Star,
  ExternalLink,
  Quote,
  Flame,
  HeartHandshake,
  Building2,
  PartyPopper,
  Leaf,
  Train,
  MessageSquare,
  ShieldCheck,
  Calendar,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'wedding' | 'engagement' | 'reception' | 'birthday' | 'corporate';
  title: string;
  subtitle: string;
  categoryLabel: string;
  imgSrc: string;
  largeImgSrc: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: '1',
    category: 'wedding',
    title: 'Grand Ballroom & Royal Ceremony Setup',
    subtitle: 'High-capacity air-conditioned hall setup accommodating large wedding gatherings, sangeet, and grand receptions',
    categoryLabel: 'Grand Ballroom',
    imgSrc: '/BANQUETTEN.jpeg',
    largeImgSrc: '/BANQUETTEN.jpeg',
  },
  {
    id: '2',
    category: 'corporate',
    title: 'Expansive Air-Conditioned Hall Interiors',
    subtitle: 'Well-maintained spacious hall with crystal chandeliers, powerful central AC, and banquet seating',
    categoryLabel: 'Spacious AC Hall',
    imgSrc: '/BANQUETTHREE.jpeg',
    largeImgSrc: '/BANQUETTHREE.jpeg',
  },
  {
    id: '3',
    category: 'wedding',
    title: 'Sacred Wedding Stage & Mandap Setup',
    subtitle: 'Festive ceremonial stage tailored for traditional wedding rituals, floral phera mandap, and blessings',
    categoryLabel: 'Wedding Mandap',
    imgSrc: '/BANQUETFOUR.jpeg',
    largeImgSrc: '/BANQUETFOUR.jpeg',
  },
  {
    id: '4',
    category: 'reception',
    title: 'Banquet Dining & Round-Table Layout',
    subtitle: 'Round dining arrangements, golden Chiavari chairs, clean tablecloths, and celebratory table runners',
    categoryLabel: 'Dine-in Catering',
    imgSrc: '/BANQUETTWO.jpeg',
    largeImgSrc: '/BANQUETTWO.jpeg',
  },
  {
    id: '5',
    category: 'birthday',
    title: 'Celebration Grand Entrance Decor',
    subtitle: 'Peach, white, and metallic gold balloon arches with welcoming entryway decor for birthdays and parties',
    categoryLabel: 'Entry & Balloons',
    imgSrc: '/BANQUETONE.jpeg',
    largeImgSrc: '/BANQUETONE.jpeg',
  },
  {
    id: '6',
    category: 'engagement',
    title: 'Illuminated Engagement Stage Backdrop',
    subtitle: 'Contemporary floral arch framing with warm ambient spotlighting and stage throne for ring ceremonies',
    categoryLabel: 'Engagement Stage',
    imgSrc: '/BANQUETSIX.jpeg',
    largeImgSrc: '/BANQUETSIX.jpeg',
  },
  {
    id: '7',
    category: 'wedding',
    title: 'Grand Ceremonial Aisle & Hall View',
    subtitle: 'Celebration aisle layout with panoramic guest sightlines to the elevated main ceremonial stage',
    categoryLabel: 'Celebration Aisle',
    imgSrc: '/BANQUETSEV.jpeg',
    largeImgSrc: '/BANQUETSEV.jpeg',
  },
  {
    id: '8',
    category: 'engagement',
    title: 'Traditional Floral Canopy & Stage Decor',
    subtitle: 'Vibrant marigold and jasmine canopy arrangements for engagement rituals, haldi, and pre-wedding functions',
    categoryLabel: 'Floral Canopy',
    imgSrc: '/BANQUETEIGHT.jpeg',
    largeImgSrc: '/BANQUETEIGHT.jpeg',
  },
  {
    id: '9',
    category: 'reception',
    title: 'Buffet & Catering Service Section',
    subtitle: 'Spacious food counters, beverage stations, and hygienic layout for multi-course celebratory feasts',
    categoryLabel: 'Buffet & Catering',
    imgSrc: '/BANQUETNINE.jpeg',
    largeImgSrc: '/BANQUETNINE.jpeg',
  },
  {
    id: '10',
    category: 'corporate',
    title: 'Panoramic Hall View & Mood Lighting',
    subtitle: 'Wide-angle hall perspective highlighting acoustic ceiling, ample ventilation, and warm mood lighting',
    categoryLabel: 'Hall Panorama',
    imgSrc: '/BANQUETFIVE.jpeg',
    largeImgSrc: '/BANQUETFIVE.jpeg',
  },
  {
    id: '11',
    category: 'reception',
    title: 'Royal Couple Thrones & Reception Backdrop',
    subtitle: 'Luxurious celebratory seating for bride and groom with floral pillars and ambient warm chandeliers',
    categoryLabel: 'Reception Stage',
    imgSrc: '/BANQUETELEVEN.jpeg',
    largeImgSrc: '/BANQUETELEVEN.jpeg',
  },
];

const REAL_REVIEWS = [
  {
    author: 'Yogesh Yadav',
    badge: 'Local Guide · 76 reviews · 86 photos',
    time: '4 months ago',
    rating: 5,
    tag: 'Weddings & Social Gatherings',
    quote:
      'Shubharambh Banquet Hall is a popular event venue near Thane Railway Station. It is suitable for weddings, engagements, birthday parties, receptions, and corporate events. The hall offers spacious interiors, catering services, and event facilities, making it a convenient choice for family and social gatherings in Thane.',
    likes: 'Helpful review',
  },
  {
    author: 'Anil Nahak',
    badge: 'Local Guide · 13 reviews',
    time: '2 years ago',
    rating: 5,
    tag: 'Engagement & Stage Decor',
    quote:
      'Recently my friend planned his engagement in this very beautiful hall. Look and size of the hall was too good + decorations and services were also up to the mark.',
    ownerResponse: 'Thanks',
    likes: 'Decor praised',
  },
  {
    author: 'Ajay Pagare',
    badge: '4 reviews · 3 photos',
    time: '3 years ago',
    rating: 5,
    tag: 'Beside Platform No. 1 & Management',
    quote:
      "It's really nice banquet hall for events. I attended many events of my family and friends, the service provided by the management is really great, price is very affordable plus it's just near the Thane railway on platform number 1 and especially the hospitality was wonderful.",
    likes: 'Platform 1 access',
  },
  {
    author: 'Pooja K. & Family',
    badge: 'Verified Event Host · Google Maps',
    time: '5 months ago',
    rating: 5,
    tag: 'Warm & Inviting Ambiance',
    quote:
      'Great venue for events like birthdays, wedding and engagements, with a warm and inviting ambiance that adds charm to any celebration. The well-maintained interiors and elegant decor create a pleasant atmosphere for guests. It is also conveniently accessible.',
    likes: 'Warm ambiance',
  },
  {
    author: 'Pradeep Prasad',
    badge: 'Local Guide · 90 reviews · 332 photos',
    time: '6 years ago',
    rating: 4,
    tag: 'Station East & Huge Hall',
    quote:
      'Just beside Thane Railway Station East. Easily accessible from Railway. Little difficult to access by road. Quite huge hall. Nicely maintained.',
    ownerResponse:
      'dear Pradip thanks for ur reviews, will do needful to get access easily, fans are high performing nd we can not silence them. Bathrooms nd toilet will try to keep them clean, thanks dear',
    likes: '6 upvotes',
  },
  {
    author: 'SuperMan',
    badge: 'Local Guide · 86 reviews · 138 photos',
    time: 'a year ago',
    rating: 5,
    tag: 'Memorable Event Planning',
    quote:
      'Shubharambh Banquet Hall proved to be an excellent choice for our recent event. From the initial inquiry to the conclusion of the celebration, the experience was largely positive and memorable.',
    likes: 'Memorable experience',
  },
];

const POPULAR_TAGS = [
  { name: 'Train Accessibility', count: '3 reviews', icon: Train },
  { name: 'Air Conditioning (ACs)', count: '8 reviews', icon: Zap },
  { name: 'Stage Decoration', count: '2 reviews', icon: Palette },
  { name: 'Wedding Ceremony', count: '2 reviews', icon: HeartHandshake },
  { name: 'Dine-in Catering', count: 'Full service', icon: UtensilsCrossed },
];

const EVENT_TYPES = [
  {
    title: 'Weddings & Ceremonies',
    desc: 'Grand stage decor, auspicious mandap setups, floral styling, and generous hall space for sacred pheras and traditions.',
    icon: HeartHandshake,
  },
  {
    title: 'Engagements & Ring Ceremonies',
    desc: 'Intimate to grand engagement celebrations with custom stage backdrops, ring-exchange podiums, and festive dining.',
    icon: Sparkles,
  },
  {
    title: 'Receptions',
    desc: 'Spacious layout with high capacity dining, grand couple entry, and seamless hospitality for hundreds of esteemed guests.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Birthday Parties & Jubilees',
    desc: 'Vibrant theme backdrops, joyful balloon arches, custom cake tables, DJ sound system, and delightful catering.',
    icon: PartyPopper,
  },
  {
    title: 'Corporate Events & Seminars',
    desc: 'Annual general meetings, felicitation galas, corporate seminars, and executive dinners with quality sound and seating.',
    icon: Building2,
  },
  {
    title: 'Family & Social Gatherings',
    desc: 'Baby showers, thread ceremonies, silver/golden anniversaries, and community get-togethers in the heart of Thane.',
    icon: Users,
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [guestCount, setGuestCount] = useState('300 - 500 Guests');
  const [foodPreference, setFoodPreference] = useState('Pure Vegetarian & Jain Friendly');
  const [phoneError, setPhoneError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const filteredGallery =
    activeFilter === 'all'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeFilter);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneClean = phoneNumber.trim();
    const phoneRegex = /^[0-9+\-\s()]{8,20}$/;
    if (!phoneRegex.test(phoneClean)) {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await new Promise((res) => setTimeout(res, 800));
      setSubmitSuccess(true);
      setFullName('');
      setPhoneNumber('');
      setEventDate('');
      setEventType('');
    } catch {
      setSubmitError('Unable to submit inquiry at this time. Please call 098194 98760 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];

  const whatsappMessage = encodeURIComponent(
    'Hello Shubharambh Banquet Hall, I would like to inquire about booking the hall for an event near Thane Railway Station East.'
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans antialiased selection:bg-[#F2E4B8] selection:text-[#34080F]">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#220409] text-stone-300 text-xs py-1.5 sm:py-2.5 px-3 sm:px-4 border-b border-[#4A0E17]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Rating Badge / Address */}
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#D4AF37]/25 text-[#F2E4B8] font-semibold text-[10px] sm:text-[11px] border border-[#D4AF37]/40 shadow-xs whitespace-nowrap shrink-0">
              <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
              <span>4.1 ★</span>
              <span className="hidden xs:inline">· 399 Reviews</span>
            </span>
            <span className="text-stone-300 text-[11px] truncate hidden md:inline">
              Just beside Thane Railway Station East, Maharashtra 400602
            </span>
            <span className="text-stone-300 text-[11px] truncate hidden sm:inline md:hidden">
              Beside Thane Rly Station East
            </span>
          </div>

          {/* Contact actions on announcement bar */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 text-[11px] sm:text-xs font-medium">
            <a
              href="tel:09819498760"
              className="flex items-center gap-1 text-stone-200 hover:text-[#D4AF37] transition-colors py-0.5"
              aria-label="Call 098194 98760"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span className="hidden sm:inline">098194 98760</span>
              <span className="sm:hidden">Call</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href={`https://wa.me/919819498760?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors py-0.5"
              aria-label="WhatsApp +91 98194 98760"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#hero" id="nav-logo" className="flex items-center gap-2 sm:gap-3 group min-w-0 pr-2">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#34080F] text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40 shadow-inner group-hover:scale-105 transition-transform shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
              </div>
              <div className="min-w-0">
                <span className="font-serif text-base sm:text-2xl font-bold tracking-tight text-[#220409] block leading-tight truncate">
                  Shubharambh Banquet Hall
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[#947219] font-medium block truncate">
                  <span className="sm:hidden">Thane Rly Station East</span>
                  <span className="hidden sm:inline">Beside Thane Railway Station East · Thane 400602</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation: Home, About, Gallery, Location */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
              <a href="#hero" id="link-hero" className="hover:text-[#4A0E17] transition-colors py-1">
                Home
              </a>
              <a href="#about" id="link-about" className="hover:text-[#4A0E17] transition-colors py-1">
                About
              </a>
              <a href="#gallery" id="link-gallery" className="hover:text-[#4A0E17] transition-colors py-1">
                Gallery
              </a>
              <a href="#location" id="link-location" className="hover:text-[#4A0E17] transition-colors py-1">
                Location
              </a>
            </nav>

            {/* Actions: Call & Book Button & Mobile Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Quick Call Icon for mobile */}
              <a
                href="tel:09819498760"
                id="mobile-quick-call"
                className="sm:hidden p-2 rounded-full text-[#4A0E17] bg-[#F9F4DF] hover:bg-[#F2E4B8] border border-[#EAD38F] transition-all"
                aria-label="Call Shubharambh Banquet Hall"
              >
                <Phone className="w-4 h-4 text-[#947219]" />
              </a>

              <a
                href="tel:09819498760"
                id="nav-call-btn"
                className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#4A0E17] bg-[#F9F4DF] hover:bg-[#F2E4B8] border border-[#EAD38F] transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#947219]" />
                <span>098194 98760</span>
              </a>

              <a
                href="#booking"
                id="nav-book-btn"
                className="hidden md:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] shadow-md hover:shadow-lg transition-all border border-[#D4AF37]/30"
              >
                Book Date
              </a>

              {/* Mobile Hamburger */}
              <div className="lg:hidden flex items-center">
                <button
                  type="button"
                  id="mobile-menu-toggle"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1.5 sm:p-2 rounded-lg text-stone-700 hover:text-[#4A0E17] hover:bg-stone-100 transition-colors"
                  aria-label="Toggle navigation"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-[#4A0E17] hover:bg-stone-50"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-[#4A0E17] hover:bg-stone-50"
            >
              About
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-[#4A0E17] hover:bg-stone-50"
            >
              Gallery
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-[#4A0E17] hover:bg-stone-50"
            >
              Location
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:09819498760"
                className="w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold text-[#4A0E17] bg-[#F9F4DF] border border-[#EAD38F] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 098194 98760</span>
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 rounded-full text-sm font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] shadow"
              >
                Book Your Date
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[92vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/BANQUETTEN.jpeg')" }}
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#220409]/92 via-stone-950/85 to-[#220409]/95" />
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-20 opacity-75" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/60 backdrop-blur-md mb-4 sm:mb-6 shadow-xl max-w-full">
            <div className="flex text-[#D4AF37] shrink-0">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#D4AF37]/40 text-[#D4AF37]" />
            </div>
            <span className="text-[11px] sm:text-sm font-bold text-[#F2E4B8] tracking-wide whitespace-nowrap">
              4.1 ★ <span className="hidden xs:inline">· 399 Google Reviews</span><span className="xs:hidden">· 399 Reviews</span>
            </span>
            <span className="text-stone-400 text-xs hidden sm:inline">|</span>
            <span className="text-xs font-medium text-stone-200 hidden sm:inline">
              Beside Thane Railway Station East
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-3 sm:mb-5 leading-tight drop-shadow-md">
            Shubharambh Banquet Hall
          </h1>

          <p className="font-serif italic text-base sm:text-2xl md:text-3xl text-[#F2E4B8] font-light mb-4 sm:mb-6 drop-shadow">
            &ldquo;Where Celebrations Begin with Grace &amp; Grandeur&rdquo;
          </p>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-200 font-light mb-10 leading-relaxed">
            Located just beside Thane Railway Station East, Shubharambh Banquet Hall offers spacious air-conditioned interiors, elegant decor, and comprehensive event &amp; catering facilities for weddings, engagements, birthday parties, receptions, and corporate galas.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
            <a
              href="#booking"
              id="hero-book-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] border-2 border-[#D4AF37]/70 shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-base flex items-center justify-center gap-2"
            >
              <span>Book Your Date</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </a>

            <a
              href="tel:09819498760"
              id="hero-call-btn"
              className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-stone-900 bg-[#F2E4B8] hover:bg-[#EAD38F] shadow-xl hover:scale-105 transition-all text-base flex items-center justify-center gap-2.5"
            >
              <Phone className="w-5 h-5 text-[#4A0E17]" />
              <span>Call: 098194 98760</span>
            </a>

            <a
              href={`https://wa.me/919819498760?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-xl hover:scale-105 transition-all text-base flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Metric Strip */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-300 text-xs sm:text-sm">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <span className="block text-[#F2E4B8] font-serif text-xl sm:text-2xl font-bold">4.1 ★</span>
              <span className="text-stone-300 font-medium">399 Google Reviews</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <span className="block text-[#F2E4B8] font-serif text-xl sm:text-2xl font-bold">Thane Rly Stn</span>
              <span className="text-stone-300 font-medium">Beside Station East</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <span className="block text-[#F2E4B8] font-serif text-xl sm:text-2xl font-bold">Quite Huge Hall</span>
              <span className="text-stone-300 font-medium">Spacious AC Interiors</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <span className="block text-[#F2E4B8] font-serif text-xl sm:text-2xl font-bold">Dine-in Catering</span>
              <span className="text-stone-300 font-medium">Full Event Facilities</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#FDFBF7] to-transparent z-20" />
      </section>

      {/* GEMINI & GOOGLE MAPS VERIFIED SUMMARY CARD */}
      <section className="relative -mt-10 z-30 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#D4AF37]/40 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#4A0E17] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#947219] bg-[#F9F4DF] px-2.5 py-0.5 rounded-full border border-[#EAD38F]">
                Summarized with Gemini · Google Maps
              </span>
              <span className="text-xs font-semibold text-stone-500">Based on 399 verified reviews</span>
            </div>
            <p className="text-stone-800 text-sm sm:text-base font-medium leading-relaxed italic">
              &ldquo;The banquet hall is praised for its spacious interiors and elegant, well-maintained decor, making it a suitable venue for various events. Its convenient location near the railway station is also frequently mentioned by guests.&rdquo;
            </p>
          </div>
          <div className="shrink-0 flex flex-wrap justify-center gap-2 max-w-xs">
            {POPULAR_TAGS.map((tag, idx) => {
              const TagIcon = tag.icon;
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200"
                >
                  <TagIcon className="w-3 h-3 text-[#4A0E17]" />
                  <span>{tag.name}</span>
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F]">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
                About Shubharambh Banquet Hall
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#220409] leading-tight">
              A Spacious, Well-Maintained Hall Beside Thane Railway Station
            </h2>

            <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-stone-900 font-semibold">Shubharambh Banquet Hall</strong> is a prominent, highly sought-after event venue located right <strong className="text-[#4A0E17] font-semibold">beside Thane Railway Station East</strong> (Maharashtra 400602 / Plus Code: 5XPF+GM).
              </p>
              <p>
                Celebrated across 399 Google reviews for its <strong className="text-stone-900 font-semibold">quite huge hall and spacious interiors</strong>, the venue features elegant, well-maintained decor, dependable high-performing air conditioning, and complete event facilities tailored for family celebrations and formal gatherings.
              </p>
              <p>
                Whether you are arranging a sacred Wedding ceremony, an Engagement, a vibrant Birthday party, an evening Reception, or a Corporate seminar, Shubharambh Banquet Hall ensures supreme convenience for guests arriving from all across Mumbai, Thane, and Navi Mumbai via local railway connectivity.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0">
                  <Train className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Train Accessibility</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Steps from Thane Station East</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Spacious AC Hall</h4>
                  <p className="text-xs text-stone-500 mt-0.5">High-performing cooling fans &amp; AC</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Stage Decoration</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Mandap, backdrop &amp; lighting</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Dine-in &amp; Catering</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Multi-cuisine &amp; pure vegetarian</p>
                </div>
              </div>
            </div>

            {/* Travel Advisory Callout */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Guest Travel &amp; Transit Tip:</strong> Because the hall is situated right beside Thane Railway Station East, rail and public transit access is exceptionally fast and seamless. Guests traveling by train can walk in directly. For road travelers, hiring auto-rickshaws or taxis directly to Thane East station is recommended.
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A0E17] hover:text-[#34080F] group"
              >
                <span>Check Date Availability for Your Celebration</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/BANQUETTWO.jpeg"
                alt="Shubharambh Banquet Hall Interiors"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#220409]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-[#D4AF37]/40 text-stone-900">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#947219] block">
                      Thane Railway Station East
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#220409]">
                      Shubharambh Banquet Hall
                    </h3>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Spacious AC Hall · Stage Decor · Dine-in Catering
                    </p>
                  </div>
                  <a
                    href="tel:09819498760"
                    className="p-3 rounded-full bg-[#4A0E17] text-white hover:bg-[#34080F] transition-all shadow shrink-0"
                    aria-label="Call Shubharambh Banquet Hall"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Photo Strip - 6 Real Venue Photos */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              <div
                className="relative rounded-xl overflow-hidden border-2 border-white shadow-md h-20 group cursor-pointer"
                onClick={() => setSelectedPhoto(GALLERY_DATA[0])}
              >
                <img
                  src="/BANQUETTEN.jpeg"
                  alt="Grand Ballroom Setup"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute bottom-1 inset-x-1 text-[9px] text-center font-semibold text-white bg-black/60 rounded px-0.5 backdrop-blur-xs truncate">
                  Ballroom
                </span>
              </div>
              <div
                className="relative rounded-xl overflow-hidden border-2 border-white shadow-md h-20 group cursor-pointer"
                onClick={() => setSelectedPhoto(GALLERY_DATA[1])}
              >
                <img
                  src="/BANQUETTHREE.jpeg"
                  alt="Huge AC Hall"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute bottom-1 inset-x-1 text-[9px] text-center font-semibold text-white bg-black/60 rounded px-0.5 backdrop-blur-xs truncate">
                  AC Hall
                </span>
              </div>
              <div
                className="relative rounded-xl overflow-hidden border-2 border-white shadow-md h-20 group cursor-pointer"
                onClick={() => setSelectedPhoto(GALLERY_DATA[2])}
              >
                <img
                  src="/BANQUETFOUR.jpeg"
                  alt="Stage Mandap Setup"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute bottom-1 inset-x-1 text-[9px] text-center font-semibold text-white bg-black/60 rounded px-0.5 backdrop-blur-xs truncate">
                  Mandap
                </span>
              </div>
              <div
                className="relative rounded-xl overflow-hidden border-2 border-white shadow-md h-20 group cursor-pointer"
                onClick={() => setSelectedPhoto(GALLERY_DATA[4])}
              >
                <img
                  src="/BANQUETONE.jpeg"
                  alt="Grand Entrance Decor"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute bottom-1 inset-x-1 text-[9px] text-center font-semibold text-white bg-black/60 rounded px-0.5 backdrop-blur-xs truncate">
                  Entrance
                </span>
              </div>
              <div
                className="relative rounded-xl overflow-hidden border-2 border-white shadow-md h-20 group cursor-pointer"
                onClick={() => setSelectedPhoto(GALLERY_DATA[5])}
              >
                <img
                  src="/BANQUETSIX.jpeg"
                  alt="Stage Backdrop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute bottom-1 inset-x-1 text-[9px] text-center font-semibold text-white bg-black/60 rounded px-0.5 backdrop-blur-xs truncate">
                  Stage
                </span>
              </div>
              <div
                className="relative rounded-xl overflow-hidden border-2 border-white shadow-md h-20 group cursor-pointer"
                onClick={() => setSelectedPhoto(GALLERY_DATA[7])}
              >
                <img
                  src="/BANQUETEIGHT.jpeg"
                  alt="Floral Canopy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute bottom-1 inset-x-1 text-[9px] text-center font-semibold text-white bg-black/60 rounded px-0.5 backdrop-blur-xs truncate">
                  Canopy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVENTS WE HOST */}
      <section id="events" className="py-24 bg-[#FAF5EE] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F] mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
                Occasions &amp; Gatherings
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#220409] mb-4">
              Events Hosted at Shubharambh
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              As verified by hundreds of hosts in Thane, Shubharambh Banquet Hall is the premier choice for family celebrations, sacred ceremonies, and professional assemblies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENT_TYPES.map((ev, i) => {
              const Icon = ev.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/70 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center mb-6 group-hover:bg-[#4A0E17] group-hover:text-[#F2E4B8] transition-colors shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#220409] mb-3 group-hover:text-[#4A0E17] transition-colors">
                      {ev.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">{ev.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#947219] uppercase tracking-wider">
                      Spacious Hall
                    </span>
                    <a
                      href="#booking"
                      className="text-xs font-bold text-[#4A0E17] hover:text-[#34080F] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-sm">
              <span className="text-sm font-medium text-stone-700">
                Planning an event near Thane Railway Station East?
              </span>
              <a
                href="tel:09819498760"
                className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#4A0E17] hover:bg-[#34080F] transition-all"
              >
                Call: 098194 98760
              </a>
              <a
                href={`https://wa.me/919819498760?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F] mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
              Photo Gallery
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#220409] mb-4">
            Venue Setups &amp; Ambience
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Take a look at the spacious hall interiors, stage decor, dining arrangements, and celebratory ambiance at Shubharambh Banquet Hall.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: `All Photos (${GALLERY_DATA.length})` },
              { id: 'wedding', label: 'Weddings & Mandap' },
              { id: 'engagement', label: 'Engagements & Stage' },
              { id: 'reception', label: 'Dine-in & Buffet' },
              { id: 'birthday', label: 'Celebrations & Entry' },
              { id: 'corporate', label: 'Hall Ambiance' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                id={`filter-${tab.id}`}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#4A0E17] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGallery.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              id={`gallery-item-${item.id}`}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl bg-stone-100 cursor-pointer aspect-[4/3] transform-gpu will-change-transform border border-stone-200"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#220409]/95 via-[#220409]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#D4AF37] text-[#220409] rounded-full w-max mb-2 shadow-sm">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-bold text-white leading-snug">{item.title}</h3>
                <p className="text-xs text-stone-200 mt-1 line-clamp-2">{item.subtitle}</p>
                <span className="text-xs text-[#F2E4B8] mt-2 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Click to view full photo &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal with Full-Screen Controls */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              id="gallery-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  aria-label="Close lightbox"
                  className="absolute top-4 right-4 z-20 p-2 text-white bg-black/70 rounded-full hover:bg-[#4A0E17] transition-colors border border-white/20 shadow-md"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Left/Right Prev/Next Buttons */}
                {filteredGallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIdx = filteredGallery.findIndex((p) => p.id === selectedPhoto.id);
                        const prevIdx = (currentIdx - 1 + filteredGallery.length) % filteredGallery.length;
                        setSelectedPhoto(filteredGallery[prevIdx]);
                      }}
                      aria-label="Previous photo"
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-white bg-black/70 hover:bg-[#4A0E17] transition-all border border-white/20 shadow-lg cursor-pointer"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIdx = filteredGallery.findIndex((p) => p.id === selectedPhoto.id);
                        const nextIdx = (currentIdx + 1) % filteredGallery.length;
                        setSelectedPhoto(filteredGallery[nextIdx]);
                      }}
                      aria-label="Next photo"
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-white bg-black/70 hover:bg-[#4A0E17] transition-all border border-white/20 shadow-lg cursor-pointer"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Main Lightbox Image Viewport */}
                <div className="max-h-[75vh] flex items-center justify-center bg-black select-none">
                  <img
                    src={selectedPhoto.largeImgSrc}
                    alt={selectedPhoto.title}
                    className="max-h-[75vh] w-auto object-contain mx-auto transition-all duration-300"
                  />
                </div>

                {/* Lightbox Caption & Details */}
                <div className="p-6 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                        {selectedPhoto.categoryLabel}
                      </span>
                      <span className="text-xs text-stone-400">
                        Photo {filteredGallery.findIndex((p) => p.id === selectedPhoto.id) + 1} of {filteredGallery.length}
                      </span>
                    </div>
                    <h4 className="font-serif text-xl font-bold text-white">{selectedPhoto.title}</h4>
                    <p className="text-xs text-stone-300 mt-0.5">{selectedPhoto.subtitle}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href="#booking"
                      onClick={() => setSelectedPhoto(null)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] border border-[#D4AF37]/40 shadow-sm"
                    >
                      Inquire for This Setup
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 5. VERIFIED REVIEWS & GOOGLE FEEDBACK - SINGLE CONTINUOUS HORIZONTAL SCROLLING BAR */}
      <section id="reviews" className="py-24 bg-[#FAF5EE] border-y border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F] mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
                  Guest Experiences &amp; Testimonials
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#220409] mb-3">
                Google Reviews &amp; Testimonials
              </h2>

              {/* Rating Banner */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/50 text-stone-800 text-sm font-bold my-2 shadow-xs">
                <div className="flex text-[#D4AF37]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                  <Star className="w-4 h-4 fill-[#D4AF37]/40 text-[#D4AF37]" />
                </div>
                <span>4.1 ★ · 399 Google Reviews</span>
                <span className="text-stone-300">|</span>
                <span className="text-stone-600 font-medium">Beside Thane Rly Stn East</span>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-2">
                Authentic feedback from Google Maps Local Guides and families who celebrated their special moments at Shubharambh Banquet Hall.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-end">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-600 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Continuous Scroll · Hover to pause</span>
              </div>
            </div>
          </div>
        </div>

        {/* SINGLE CONTINUOUS SCROLLING REVIEWS BAR */}
        <div className="relative w-full overflow-hidden group py-4">
          {/* Gradient fade on left and right for seamless edge transitions */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF5EE] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF5EE] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-horizontal flex gap-6 px-4 group-hover:[animation-play-state:paused]">
            {[...REAL_REVIEWS, ...REAL_REVIEWS].map((rev, index) => (
              <div
                key={index}
                className="w-[360px] sm:w-[440px] md:w-[460px] shrink-0 p-7 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-md hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#D4AF37]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
                      ))}
                      {rev.rating < 5 && (
                        <Star className="w-4 h-4 fill-[#D4AF37]/30 text-[#D4AF37]" />
                      )}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#947219] bg-[#F9F4DF] px-3 py-1 rounded-full border border-[#EAD38F]">
                      {rev.tag}
                    </span>
                  </div>

                  <div className="relative mb-5">
                    <Quote className="w-7 h-7 text-[#D4AF37]/30 mb-2" />
                    <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-normal italic">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  {rev.ownerResponse && (
                    <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 mb-5 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-[#4A0E17] block">Response from the owner:</span>
                      <p className="italic text-stone-600 leading-relaxed">&ldquo;{rev.ownerResponse}&rdquo;</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-[#220409] text-base leading-tight">
                      {rev.author}
                    </h4>
                    <span className="text-xs text-stone-500 mt-0.5 block">{rev.badge}</span>
                    <span className="text-[11px] text-stone-400 block">{rev.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Google Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOOKING FORM SECTION */}
      <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-[#4A0E17] via-[#D4AF37] to-[#4A0E17]" />

          <div className="p-8 sm:p-12 lg:p-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F] mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
                  Date Reservation &amp; Inquiry
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#220409] mb-3">
                Plan Your Event at Shubharambh
              </h2>
              <p className="text-stone-600 text-sm sm:text-base">
                Contact our banquet team for date availability, package pricing, catering details, and a personal venue walkthrough beside Thane Railway Station East.
              </p>
            </div>

            {/* Quick Contact Bar */}
            <div className="mb-8 p-4 rounded-2xl bg-[#FAF5EE] border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm font-medium text-stone-800">
                <div className="w-10 h-10 rounded-full bg-[#4A0E17] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-[#220409]">Need Immediate Hall Availability?</span>
                  <span className="text-xs text-stone-600">Call directly or chat on WhatsApp with our coordinator</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:09819498760"
                  className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#4A0E17] hover:bg-[#34080F] transition-all"
                >
                  Call: 098194 98760
                </a>
                <a
                  href={`https://wa.me/919819498760?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {submitSuccess && (
              <div className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-emerald-950 mb-1">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-sm text-emerald-800 leading-relaxed">
                      Thank you for contacting Shubharambh Banquet Hall. Our manager will connect with you via phone (098194 98760) or WhatsApp shortly to discuss your date and event requirements.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitError && (
              <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
                <p>{submitError}</p>
              </div>
            )}

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full-name" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Full Name <span className="text-[#4A0E17]">*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full_name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Yogesh Yadav"
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="phone-number" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Phone Number <span className="text-[#4A0E17]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    name="phone_number"
                    required
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (phoneError) setPhoneError(false);
                    }}
                    placeholder="e.g. 098194 98760"
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  />
                  {phoneError && (
                    <p className="text-xs text-red-600 mt-1">
                      Please enter a valid contact number (minimum 8 digits).
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="event-date" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Event Date <span className="text-[#4A0E17]">*</span>
                  </label>
                  <input
                    type="date"
                    id="event-date"
                    name="event_date"
                    min={todayStr}
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="event-type" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Event Type <span className="text-[#4A0E17]">*</span>
                  </label>
                  <select
                    id="event-type"
                    name="event_type"
                    required
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  >
                    <option value="" disabled>Select event category...</option>
                    <option value="Wedding">Wedding / Marriage Ceremony</option>
                    <option value="Engagement">Engagement / Ring Ceremony</option>
                    <option value="Reception">Wedding Reception</option>
                    <option value="Birthday Party">Birthday Party / Anniversary</option>
                    <option value="Corporate Event">Corporate Event / Seminar</option>
                    <option value="Social Gathering">Family &amp; Social Gathering</option>
                    <option value="Other">Other Celebration</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guest-count" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Estimated Guest Count
                  </label>
                  <select
                    id="guest-count"
                    name="guest_count"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  >
                    <option value="100 - 200 Guests">Intimate (100 – 200 Guests)</option>
                    <option value="200 - 300 Guests">Medium (200 – 300 Guests)</option>
                    <option value="300 - 500 Guests">Grand (300 – 500 Guests)</option>
                    <option value="500+ Guests">High Capacity (500+ Floating Guests)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="food-pref" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Catering &amp; Food Preference
                  </label>
                  <select
                    id="food-pref"
                    name="food_preference"
                    value={foodPreference}
                    onChange={(e) => setFoodPreference(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  >
                    <option value="Pure Vegetarian & Jain Friendly">Pure Vegetarian &amp; Jain Friendly Menu</option>
                    <option value="Traditional Maharashtrian Feast">Traditional Feast / Regional Delicacies</option>
                    <option value="Multi-Cuisine Buffet">Multi-Cuisine Buffet (North Indian &amp; Chinese)</option>
                    <option value="Custom Event Menu">Custom Curated Event Menu</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  id="submit-booking-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] border border-[#D4AF37]/40 shadow-lg hover:shadow-xl transition-all text-base flex items-center justify-center gap-2 group disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <span>Check Availability &amp; Request Pricing</span>
                  )}
                </button>
                <p className="text-center text-xs text-stone-500 mt-3">
                  We respect your privacy. No spam. Direct phone assistance: 098194 98760.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 7. LOCATION & DIRECTIONS */}
      <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F]">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
                Location &amp; Visiting
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#220409] leading-tight">
              Located Right Beside Thane Railway Station East
            </h2>

            <p className="text-stone-600 text-base leading-relaxed">
              Enjoy unmatched transit accessibility. Located just steps from Thane Railway Station East, your guests can reach the venue smoothly from anywhere along Central and Trans-Harbour lines.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Venue Address</h4>
                  <p className="text-stone-700 text-base mt-0.5 font-medium">
                    Thane Rly Stn, Maharashtra 400602
                  </p>
                  <p className="text-xs text-[#947219] mt-1 font-semibold">
                    Beside Thane Railway Station East · Plus code: 5XPF+GM Thane, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Direct Contact</h4>
                  <p className="text-stone-700 text-sm mt-0.5">
                    Phone:{' '}
                    <a href="tel:09819498760" className="font-bold text-[#4A0E17] hover:underline">
                      098194 98760
                    </a>
                  </p>
                  <p className="text-stone-700 text-sm mt-0.5">
                    WhatsApp:{' '}
                    <a
                      href={`https://wa.me/919819498760?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-600 hover:underline"
                    >
                      +91 98194 98760
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Hall Visiting &amp; Hours</h4>
                  <p className="text-stone-700 text-sm mt-0.5 font-medium">
                    Opens 11:00 AM (Booking &amp; Hall Tours)
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Call 098194 98760 to book an advance appointment or walk in during operational hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shubharambh+Banquet+Hall+Thane+Railway+Station+East+Maharashtra+400602"
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] border border-[#D4AF37]/40 shadow-md hover:shadow-lg transition-all text-sm"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
              </a>

              <a
                href="tel:09819498760"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[#4A0E17] bg-[#F9F4DF] hover:bg-[#F2E4B8] border border-[#EAD38F] text-sm shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Venue</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7">
            <div className="w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border-2 border-stone-200 relative bg-stone-100">
              <iframe
                id="google-map-iframe"
                title="Shubharambh Banquet Hall Location Map - Beside Thane Railway Station East"
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?q=Shubharambh%20Banquet%20Hall%2C%20Thane%20Railway%20Station%20East%2C%20Thane%2C%20Maharashtra%20400602&t=&z=16&ie=UTF8&iwloc=&output=embed"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-stone-200 shadow text-xs font-bold text-[#220409]">
                📍 Beside Thane Railway Station East, 400602
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#220409] text-stone-300 border-t border-[#4A0E17]/60 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-black/40 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  Shubharambh Banquet Hall
                </span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">
                A popular event venue located just beside Thane Railway Station East. Praised for its spacious interiors, well-maintained decor, and supreme train connectivity for weddings, engagements, birthday parties, receptions, and corporate events.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#D4AF37]">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                <span className="font-bold">4.1 ★ · 399 Google Reviews</span>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-[#F2E4B8] mb-4 tracking-wide">Quick Navigation</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#hero" className="text-stone-300 hover:text-[#D4AF37] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-stone-300 hover:text-[#D4AF37] transition-colors">
                    About Venue &amp; Facilities
                  </a>
                </li>
                <li>
                  <a href="#events" className="text-stone-300 hover:text-[#D4AF37] transition-colors">
                    Events We Host
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-stone-300 hover:text-[#D4AF37] transition-colors">
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="text-stone-300 hover:text-[#D4AF37] transition-colors">
                    Google Reviews (4.1 ★)
                  </a>
                </li>
                <li>
                  <a href="#booking" className="text-stone-300 hover:text-[#D4AF37] transition-colors">
                    Reserve Date / Inquiry
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-stone-300 hover:text-[#D4AF37] transition-colors">
                    Location &amp; Directions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-[#F2E4B8] mb-4 tracking-wide">Contact Details</h4>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a href="tel:09819498760" className="flex items-center gap-3 text-stone-300 hover:text-white group">
                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#220409] transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </span>
                    <span>098194 98760 (Call Now)</span>
                  </a>
                </li>

                <li>
                  <a
                    href={`https://wa.me/919819498760?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-stone-300 hover:text-[#25D366] group"
                  >
                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                    <span>+91 98194 98760 (WhatsApp)</span>
                  </a>
                </li>

                <li className="flex items-start gap-3 text-stone-300">
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="text-xs leading-relaxed">
                    Beside Thane Railway Station East, Thane, Maharashtra 400602 (5XPF+GM Thane)
                  </span>
                </li>

                <li className="flex items-center gap-3 text-stone-300">
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <span className="text-xs">
                    Inquiry &amp; Visiting: Opens 11:00 AM (Sat &amp; Daily)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#4A0E17]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
            <p>&copy; 2026 Shubharambh Banquet Hall. All rights reserved.</p>
            <p className="text-stone-400">
              Thane Rly Stn, Maharashtra 400602 · Beside Station East
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Call Button */}
        <a
          href="tel:09819498760"
          id="floating-call-btn"
          aria-label="Call Now"
          className="flex items-center gap-2 px-4 py-3 bg-[#4A0E17] hover:bg-[#34080F] text-white rounded-full shadow-2xl border border-[#D4AF37]/50 hover:scale-105 transition-all text-xs font-bold"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span className="hidden sm:inline">Call: 098194 98760</span>
          <span className="sm:hidden">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/919819498760?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="WhatsApp Us"
          className="flex items-center gap-2.5 px-4 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:scale-105 transition-all text-xs font-bold group"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
