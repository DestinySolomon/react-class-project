export const developer = {
  name: "Destiny Okagbuo",
  title: "Front-End Developer",
  tagline: "I build precise, fast, and thoughtful web experiences.",
  location: "Lagos, Nigeria",
  email: "alex@alexmorgan.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  available: true,
};

export const about = {
  bio: [
    "I'm a front-end developer with 2 years of experience turning complex problems into clean, performant interfaces. I care deeply about the details — the ones most people never notice but everyone feels.",
    "My stack is React, TypeScript, and CSS that actually makes sense. I've shipped production apps for startups and agencies across fintech, logistics, and e-commerce.",
    "When I'm not building, I'm writing about the web, contributing to open source, or trying to convince everyone that good typography is not optional.",
  ],
};

export const skills = [
  { category: "Languages",  items: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { category: "Frameworks", items: ["React", "Next.js", "Laravel", "Node.js"] },
  { category: "Styling",    items: ["Tailwind CSS", "Sass", "CSS Modules", "Styled Components"] },
  { category: "Tools",      items: ["Git", "Figma", "Vite", "Webpack", "Vercel"] },
];

export const projects = [
  {
    id: 1,
    title: "Payd — Fintech Dashboard",
    description: "A real-time financial dashboard with transaction analytics, multi-wallet support, and role-based access. Reduced average load time by 40% through code splitting and lazy loading.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "TypeScript", "Chart.js", "REST API"],
    live: "https://example.com",
    github: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Buildx — Construction PM Tool",
    description: "Project management platform for construction firms. Features Gantt charts, contractor scheduling, and document management for teams of up to 200 users.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    tags: ["React", "Laravel", "MySQL", "Figma"],
    live: "https://example.com",
    github: "https://github.com",
    featured: false,
  },
  {
    id: 3,
    title: "NGO Connect — Volunteer Platform",
    description: "Volunteer coordination platform for a Lagos-based NGO. Handles event registration, impact tracking, and donor reporting for 3,000+ active volunteers.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    tags: ["Next.js", "Tailwind", "Supabase"],
    live: "https://example.com",
    github: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Storiq — E-commerce Storefront",
    description: "Headless e-commerce storefront with product filtering, cart persistence, and Paystack integration. Ships with a CMS-driven product catalogue.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    tags: ["Next.js", "Sanity CMS", "Paystack", "TypeScript"],
    live: "https://example.com",
    github: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Logix — Logistics Tracker",
    description: "Last-mile delivery tracking app with real-time map updates, driver assignment, and automated customer SMS notifications for a Port Harcourt logistics startup.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
    tags: ["React", "Mapbox", "Node.js", "WebSockets"],
    live: "https://example.com",
    github: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Lexis — Legal Research Tool",
    description: "AI-assisted legal research tool that surfaces relevant Nigerian case law, statutes, and commentary. Built for a legal tech startup in Abuja.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    tags: ["React", "Python", "OpenAI API", "PostgreSQL"],
    live: "https://example.com",
    github: "https://github.com",
    featured: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Tunde Adeyemi",
    role: "CTO, Payd Technologies",
    text: "Alex has an exceptional eye for detail and a rare ability to translate complex requirements into interfaces that just feel right. One of the sharpest developers we've worked with.",
    avatar: "TA",
  },
  {
    id: 2,
    name: "Chioma Okafor",
    role: "Product Manager, Buildx",
    text: "Delivered ahead of schedule, flagged issues we hadn't thought of, and wrote documentation that actually made sense. Would hire again without hesitation.",
    avatar: "CO",
  },
  {
    id: 3,
    name: "James Thornton",
    role: "Founder, Storiq",
    text: "The storefront Alex built handles thousands of daily users without breaking a sweat. Performance, design, and code quality — top marks across the board.",
    avatar: "JT",
  },
];