import type {
  Service,
  Testimonial,
  HeroStat,
  TrustItem,
  ProcessStep,
  BlogArticle,
  NavLink,
} from "@/types";

export const BUSINESS = {
  name: "Five Star STR Cleaning",
  phone: "(702) 555-0199",
  email: "info@fivestarstrcleaning.com",
  address: "Las Vegas, NV",
  license: "NV Business License #XXXXX",
  url: "https://fivestarstrcleaning.com",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Areas", href: "#areas" },
  { label: "Blog", href: "#blog" },
];

export const HERO_STATS: HeroStat[] = [
  { value: "500+", label: "Properties Cleaned" },
  { value: "4.9", label: "Average Rating" },
];

export const TRUST_ITEMS: TrustItem[] = [
  {
    icon: "Shield",
    text: "Licensed & Insured",
    highlight: "Fully covered",
  },
  {
    icon: "Camera",
    text: "Photo Documentation",
    highlight: "Every clean",
  },
  {
    icon: "Clock",
    text: "On-Time Guarantee",
    highlight: "100% reliable",
  },
  {
    icon: "CheckCircle",
    text: "Background Checked",
    highlight: "Trusted team",
  },
];

export const SERVICES: Service[] = [
  {
    icon: "RefreshCw",
    title: "Turnover Cleaning",
    description:
      "Fast, thorough cleaning between guests. We handle everything so your property is guest-ready within hours of checkout.",
  },
  {
    icon: "Sparkles",
    title: "Deep Cleaning",
    description:
      "Comprehensive top-to-bottom cleaning for properties that need extra attention. Ideal for quarterly refreshes.",
  },
  {
    icon: "WashingMachine",
    title: "Linen & Laundry",
    description:
      "Fresh linens, perfectly folded towels, and hotel-quality bed making. We supply or launder your existing linens.",
  },
  {
    icon: "ClipboardCheck",
    title: "Inspection-Ready",
    description:
      "Pre-guest inspection with detailed checklists. Every corner checked, every surface spotless, every amenity stocked.",
  },
  {
    icon: "Waves",
    title: "Pool & Outdoor",
    description:
      "Pool skimming, patio cleaning, hot tub maintenance, and outdoor furniture care. The desert is tough on exteriors.",
  },
  {
    icon: "Package",
    title: "Restocking",
    description:
      "Toiletries, coffee, kitchen essentials — we restock all guest supplies so you never get a complaint about missing basics.",
  },
];

export const WHY_US = [
  {
    icon: "Star",
    title: "Five-Star Standards",
    description: "We clean to hotel standards because your reviews depend on it.",
  },
  {
    icon: "Zap",
    title: "Same-Day Turnovers",
    description: "Back-to-back bookings? No problem. We work on your schedule.",
  },
  {
    icon: "Camera",
    title: "Photo Reports",
    description: "Every clean documented with photos sent directly to you.",
  },
  {
    icon: "Heart",
    title: "STR Specialists",
    description:
      "We only clean short-term rentals. We know what guests and platforms expect.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Book Online",
    description: "Schedule your cleaning in under 60 seconds. Pick your date, property, and service type.",
  },
  {
    step: "02",
    title: "We Clean",
    description: "Our trained team arrives on time with all supplies. Every surface cleaned, every detail checked.",
  },
  {
    step: "03",
    title: "Photo Report",
    description: "Receive a photo walkthrough of your spotless property. Verify everything before your guest arrives.",
  },
  {
    step: "04",
    title: "5-Star Review",
    description: "Your guest checks in to a perfect space. Cleanliness complaints? Those are a thing of the past.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Superhost · 3 Properties",
    text: "Five Star transformed my turnover process. I went from stressing about every checkout to simply getting a photo report that everything's perfect. My ratings jumped from 4.6 to 4.9 in two months.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Property Manager · 12 Units",
    text: "Managing a dozen STRs in Vegas is chaos without a reliable cleaning team. Five Star handles all my turnovers and I haven't had a single cleanliness complaint in six months.",
    rating: 5,
  },
  {
    name: "Jessica L.",
    role: "Airbnb Host · Downtown",
    text: "The photo documentation is a game-changer. I can verify my property is guest-ready from anywhere. Plus their restocking service means I never run out of essentials.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "VRBO Host · Summerlin",
    text: "Same-day turnovers used to be my nightmare. Now I just book Five Star and they handle everything — cleaning, linens, restocking. My guests consistently mention how clean the place is.",
    rating: 5,
  },
  {
    name: "Rachel & Tom W.",
    role: "Superhosts · Henderson",
    text: "We tried three different cleaning services before finding Five Star. The difference is night and day. They actually understand what Airbnb guests expect.",
    rating: 5,
  },
  {
    name: "Alex P.",
    role: "Investor · 8 Properties",
    text: "ROI on professional STR cleaning is insane. Better reviews mean higher nightly rates. Five Star pays for themselves ten times over.",
    rating: 5,
  },
];

export const SERVICE_AREAS = [
  "The Strip & Convention Center",
  "Downtown / Fremont",
  "Summerlin",
  "Henderson",
  "North Las Vegas",
  "Spring Valley",
  "Paradise",
  "Enterprise",
  "Green Valley",
  "Boulder City",
  "Lake Las Vegas",
  "Southern Highlands",
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    title: "Ultimate Airbnb Turnover Cleaning Checklist for Las Vegas Hosts",
    category: "Guides",
    readTime: "8 min read",
    excerpt:
      "The complete room-by-room checklist that professional STR cleaners use to ensure five-star reviews every time.",
    featured: true,
  },
  {
    title: "How Cleanliness Affects Your Airbnb Star Rating (And Revenue)",
    category: "Insights",
    readTime: "5 min read",
    excerpt:
      "Data shows that cleanliness is the #1 factor in guest reviews. Here's exactly how much a dirty property costs you.",
  },
  {
    title: "Desert Cleaning: What Las Vegas Heat Does to Your STR Property",
    category: "Las Vegas",
    readTime: "6 min read",
    excerpt:
      "Dust, hard water, sun damage — Vegas properties face unique cleaning challenges. Here's how to handle them.",
  },
  {
    title: "Pool, Patio & Hot Tub: Outdoor Cleaning for Vegas STR Hosts",
    category: "Guides",
    readTime: "7 min read",
    excerpt:
      "Your outdoor space is a selling point. Keep it pristine with this maintenance and cleaning guide.",
  },
  {
    title: "Why Every STR Turnover Should End With a Photo Report",
    category: "Best Practices",
    readTime: "4 min read",
    excerpt:
      "Photo documentation protects you from damage claims and gives you peace of mind between guests.",
  },
  {
    title: "5 Staging Tricks That Turn Good Cleaning Into Five-Star Reviews",
    category: "Tips",
    readTime: "5 min read",
    excerpt:
      "It's not just about clean — it's about presentation. Small staging details that guests notice and love.",
  },
];
