// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Aman Bhakar",
  role: "Full Stack Developer @ Sarv",
  location: "Jaipur, India",
  email: "amanbhaker@gmail.com",
  github: "https://github.com/gitaman69",
  linkedin: "https://www.linkedin.com/in/aman-bhakar/",
  roles: [
    "Full Stack Developer",
    "Conversational AI Engineer",
    "RAG & Search Builder",
    "React Native Developer",
  ],
  intro:
    "I build production AI systems and full-stack products — from RAG chatbots on Government of India tax portals to a Play Store app that maps 23,000+ EV chargers.",
};

export const stats = [
  { value: 750, suffix: "K+", label: "AI conversations / month on Govt. portals" },
  { value: 23000, suffix: "+", label: "EV charging stations in ElectricQ" },
  { value: 400, suffix: "+", label: "DSA problems solved" },
];

export const about = [
  "I'm a Full Stack Developer at Sarv, where I work on ai.sarv.com — a conversational AI platform — and crawl.sarv.com, a web-crawling and knowledge-ingestion platform.",
  "My day-to-day sits where LLMs meet real traffic: hybrid keyword + semantic search on Elasticsearch, chunking and embedding pipelines, and voice & text agents that need to be accurate, fast, and boringly reliable.",
  "I'm finishing my B.Tech in Electrical Engineering at MNIT Jaipur, and outside work I ship my own products end to end — from backend APIs to the Play Store listing.",
];

export const experience = [
  {
    company: "Sarv",
    title: "Full Stack Developer",
    period: "Jul 2026 — Present",
    location: "Jaipur, India",
    current: true,
    points: [
      <>
        Building and maintaining{" "}
        <a href="https://ai.sarv.com" target="_blank" rel="noreferrer">ai.sarv.com</a>{" "}
        (conversational AI platform, Python backend) and{" "}
        <a href="https://crawl.sarv.com" target="_blank" rel="noreferrer">crawl.sarv.com</a>{" "}
        (web crawling & knowledge ingestion).
      </>,
      <>
        Developed AI chatbots deployed on Government of India portals{" "}
        <a href="https://www.incometaxindia.gov.in" target="_blank" rel="noreferrer">Income Tax India</a>{" "}
        and <a href="https://traces.tdscpc.gov.in/" target="_blank" rel="noreferrer">TRACES</a>, handling{" "}
        <strong>750K+ conversations per month</strong>.
      </>,
      <>
        Engineered production RAG pipelines with hybrid (keyword + semantic) search on
        Elasticsearch for accurate, low-latency answers on tax queries at scale.
      </>,
    ],
    stack: ["Python", "Node.js", "Express", "React", "PostgreSQL", "Elasticsearch", "LLMs", "Embeddings"],
  },
  {
    company: "Sarv",
    title: "Software Developer Intern",
    period: "Apr 2026 — Jul 2026",
    location: "Jaipur, India",
    points: [
      <>
        Built a custom web crawler that converts single pages or entire websites to Markdown
        for knowledge ingestion — the foundation of crawl.sarv.com.
      </>,
      <>
        Developed a RAG pipeline (chunking, embeddings, hybrid search on Elasticsearch) and
        integrated it with voice and text AI agents for real-time customer support.
      </>,
    ],
    stack: ["Python", "Elasticsearch", "RAG", "Web Crawling", "Voice Agents"],
  },
];

export const featuredProjects = [
  {
    name: "ElectricQ",
    tagline: "Smart EV charging companion app",
    period: "Sep 2025 — Present",
    badge: "Live on Google Play",
    accent: "electric",
    description:
      "A published Android app that makes EV charging across India less of a guessing game — find chargers, plan trips, and get smart recommendations.",
    highlights: [
      "23,000+ EV charging stations integrated",
      "Trip planning with smart charger recommendations",
      "KYC authentication and a modern React Native UI",
    ],
    stack: ["React Native", "Express.js", "MongoDB", "Google Maps API"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.aman.electricq", primary: true },
    ],
  },
  {
    name: "BillGram",
    tagline: "Free business toolkit for small shops",
    period: "Oct 2024 — Feb 2025",
    badge: "Deployed",
    accent: "bill",
    description:
      "A full-stack startup platform giving small businesses billing, inventory tracking, sales analytics and expense management — for free.",
    highlights: [
      "Billing, inventory, sales analytics & expenses in one place",
      "Web app plus React Native mobile client",
      "SEO strategy to improve rankings and user acquisition",
    ],
    stack: ["Express", "React", "React Native", "JavaScript"],
    links: [
      { label: "Live site", href: "https://business-portal-app.onrender.com", primary: true },
      { label: "GitHub", href: "https://github.com/gitaman69/business-portal-app" },
    ],
  },
];

export const otherProjects = [
  {
    name: "City Rentals",
    description: "Accommodation finder for students and workers, with filters for budget, area and pincode.",
    stack: ["React", "Responsive UI"],
    github: "https://github.com/gitaman69/city-rentals",
    demo: "https://www.cityrentals.site/",
  },
  {
    name: "E-Commerce",
    description: "Storefront and product-management system built with React and Redux.",
    stack: ["React", "Redux"],
    github: "https://github.com/gitaman69/e-commerce",
    demo: "https://e-commerce-gamma-snowy.vercel.app/",
  },
  {
    name: "Movies Rating",
    description: "Compare movies side by side using ratings from the OMDB API.",
    stack: ["React", "OMDB API"],
    github: "https://github.com/gitaman69/movies-rating",
    demo: "https://movies-rating.onrender.com/",
  },
  {
    name: "Travels",
    description: "A clean, responsive travel and tours landing site.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/gitaman69/travels",
    demo: "https://gitaman69.github.io/travels/",
  },
];

export const skills = [
  { group: "AI / ML", items: ["RAG", "LLM Integration", "Embeddings", "Hybrid Search", "Voice & Text Agents", "Web Crawling"] },
  { group: "Languages", items: ["JavaScript", "Python", "C++", "SQL", "HTML", "CSS"] },
  { group: "Frameworks", items: ["Node.js", "Express", "React", "React Native"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "MATLAB"] },
];

export const education = [
  { degree: "B.Tech, Electrical Engineering", school: "Malaviya National Institute of Technology, Jaipur", year: "2022 — 2026" },
  { degree: "Senior Secondary (XII)", school: "CBSE", score: "93.0%", year: "2021" },
  { degree: "Secondary (X)", school: "CBSE", score: "93.0%", year: "2019" },
];

export const achievements = [
  { title: "JEE Main 2022", detail: "All India Rank 21,000" },
  { title: "400+ problems", detail: "Solved on LeetCode, GFG and Coding Ninjas" },
  {
    title: "MATLAB Onramp",
    detail: "MathWorks certification",
    href: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=83e89e6a-36d2-40e2-8c53-64bc5a39acf3&",
  },
  { title: "Blitzschlag 2022", detail: "Volunteer — Logistics team & Photography Club" },
];
