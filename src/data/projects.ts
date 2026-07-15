// Mock project data — replace with real project info.
// Drives both the editorial index (/projects) and the detail pages
// (/projects/[slug]). Swap `image` with a real screenshot path in
// /public/projects when you have one; `accent` is the fallback color.

export type Result = { metric: string; label: string };

// Canonical category slugs used across projects (and, later, filtering).
export type Category =
  | "ecommerce"
  | "cms"
  | "institutional"
  | "tech-blog"
  | "saas"
  | "personal";

// Human-readable labels for display (index + detail pages).
export const CATEGORY_LABELS: Record<Category, string> = {
  ecommerce: "E-Commerce",
  cms: "CMS",
  institutional: "Institutional",
  "tech-blog": "Tech Blog",
  saas: "SaaS",
  personal: "Personal",
};

export type Project = {
  slug: string;
  title: string;
  category: Category;
  year: string;
  role: string;
  description: string; // short — shown in the index
  overview: string; // longer intro — shown on the detail page
  contributions: string[]; // what you did
  results: Result[]; // outcome metrics
  tags: string[];
  accent: string; // fallback gradient color for previews/hero
  image?: string; // e.g. "/projects/nimbus.jpg"
  gallery?: { src: string; label: string; href?: string }[]; // extra shots
  links: {
    live?: string;
    source?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "breeze",
    title: "Breeze ChMS",
    category: "saas",
    year: "2024–26",
    role: "Full-stack Engineer",
    description:
      "Full-stack feature work on Breeze, a church management platform, across a Vue 3 frontend and a PHP backend.",
    overview:
      "Breeze is a church management system used by churches to manage their people, giving, events, forms and communication. I worked full-stack across the modern Vue 3 frontend and the PHP application that renders it — shipping features end-to-end, from UI and API to tests, inside a fast-moving product team.",
    contributions: [
      "Built and hardened People-management features — email-validation guards, the Merge-People → Update-People flow, and new-people email templates (Vue UI + PHP API).",
      "Shipped Email History filtering by date sent and recipient, spanning the Vue frontend and the PHP API.",
      "Implemented the in-app apps/bundle purchase flow, including member-role creation and Terms-of-Service gating.",
      "Added a Send Password Reset Link action and a set of lifecycle notification templates (birthday, anniversary, follow-up).",
    ],
    // NOTE: placeholder facts derived from the repos — swap for real impact
    // metrics (e.g. churches served, load time, adoption) when you have them.
    results: [
      { metric: "300+", label: "commits shipped" },
      { metric: "2024–26", label: "on the product" },
      { metric: "2", label: "repos · full-stack" },
    ],
    tags: [
      "Vue 3",
      "React",
      "TypeScript",
      "PHP",
      "Laravel",
      "Pinia",
      "TanStack Query",
      "Tailwind",
    ],
    accent: "#1a6fb5",
    image: "/projects/breeze.png",
    links: { live: "https://www.breezechms.com" },
  },
  {
    slug: "ruth",
    title: "Ruth Platform",
    category: "institutional",
    year: "2026",
    role: "Frontend & Design Systems Engineer",
    description:
      "Design-system and frontend work on Ruth, a two-sided marketplace connecting Jewish families with vetted spiritual practitioners.",
    overview:
      "Ruth — “The Future of Tradition” — is a two-sided marketplace and Jim Joseph Foundation initiative connecting Jewish families with verified rabbis, cantors and educators for life's significant moments, from B'nai Mitzvahs to weddings. The platform spans four repositories: a Next.js 15 app, a shared design system, its Storybook, and a Supabase backend.",
    contributions: [
      "Built and maintained the shared design system — components and branded Pro Blocks (header, feature and stats sections), typography and theming on Tailwind v4 + shadcn/ui.",
      "Authored the Storybook that documents the system — component stories, blocks, navigation and logo.",
      "Shipped features in the Next.js 15 / React 19 app — an Algolia practitioner search, the multi-step service-request wizard, and the not-found page.",
      "Contributed Supabase schema and migrations for the independently-deployed backend, including onboarding-session tables.",
    ],
    // NOTE: verifiable facts from the repos — swap for real impact metrics when available.
    results: [
      { metric: "4", label: "repos · one platform" },
      { metric: "110+", label: "commits shipped" },
      { metric: "20+", label: "components & blocks" },
    ],
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "shadcn/ui",
      "Storybook",
      "Supabase",
    ],
    accent: "#232178",
    image: "/projects/ruth.png",
    links: { live: "https://beta.ruthis.org" },
  },
  {
    slug: "pytorch",
    title: "PyTorch.org",
    category: "tech-blog",
    year: "2021–22",
    role: "Frontend Developer",
    description:
      "Front-end and content work on pytorch.org — the website for the PyTorch ML framework.",
    overview:
      "PyTorch.org is the website for PyTorch, one of the most widely used open-source machine-learning frameworks. I contributed to the site — a static build in Jekyll and Bootstrap — publishing technical blog posts, building out the PyTorch Community Voices video series, and refining the front-end, with Netlify deploy previews for content review.",
    contributions: [
      "Published technical blog posts to pytorch.org — CUDA Graphs, FX-based feature extraction and tensor memory format — building post layouts, tables and imagery.",
      "Built out the PyTorch Community Voices episodes/webinars section — episode ordering, video links and Watch CTAs.",
      "Fixed front-end styling across posts and pages in Bootstrap and SCSS.",
      "Set up Netlify deploy previews (base URL and asset handling) so content could be reviewed before publish.",
    ],
    // NOTE: verifiable facts — swap for real impact metrics (traffic, etc.) if available.
    results: [
      { metric: "3+", label: "blog posts still live" },
      { metric: "50+", label: "commits shipped" },
      { metric: "2021–22", label: "on pytorch.org" },
    ],
    tags: ["Jekyll", "Bootstrap", "SCSS", "Liquid", "JavaScript", "Netlify"],
    accent: "#ee4c2c",
    image: "/projects/pytorch.png",
    links: { live: "https://pytorch.org" },
  },
  {
    slug: "the-jewish-museum",
    title: "The Jewish Museum",
    category: "institutional",
    year: "2021–26",
    role: "Full-stack Engineer",
    description:
      "A five-year, full-stack engagement on The Jewish Museum's online collection — from a Ruby DAM middleware to the new Next.js collection site.",
    overview:
      "The Jewish Museum's online collection makes roughly 6,000 works searchable to the public. Over five years I worked across the whole stack: the Ruby middleware that syncs and serves data from the museum's digital asset manager (originally Piction, now NetX) into Elasticsearch-backed search, a React app embedded in the legacy ExpressionEngine (PHP) site, and — most recently — the ground-up rebuild of the collection as a modern Next.js application.",
    contributions: [
      "Top contributor to the DAM middleware (Ruby) — the API that ingests DAM data into Elasticsearch and serves collection and asset data to every front-end.",
      "Built features in the React collection app embedded in the legacy ExpressionEngine (PHP) site.",
      "Co-led the new Next.js collection site — search, sorting (accession date, newly added, relevance), alternate views, navigation and artist pages.",
      "Worked within a Dockerized AWS deployment — EC2 instances, S3 asset buckets and Elasticsearch — plus image/thumbnail delivery across the collection grid.",
      "Managed Google Analytics for the collection — tracking and reporting on how visitors search and explore the works online.",
    ],
    // NOTE: works-count is real (live site); swap the rest for firmer numbers if you have them.
    results: [
      { metric: "5,800+", label: "works searchable online" },
      { metric: "450+", label: "commits across 3 repos" },
      { metric: "2021–26", label: "engagement" },
    ],
    tags: [
      "Ruby",
      "PHP",
      "Next.js",
      "React",
      "TypeScript",
      "Elasticsearch",
      "Docker",
      "AWS",
      "NetX DAM",
      "ACME Ticketing",
      "Google Analytics",
      "Tailwind",
    ],
    accent: "#2a2fb8",
    image: "/projects/tjm.png",
    links: { live: "https://collections.thejewishmuseum.org" },
  },
  {
    slug: "fora-travel",
    title: "Fora Travel",
    category: "cms",
    year: "2021–26",
    role: "Senior Frontend Engineer",
    description:
      "Core frontend engineer on foratravel.com — the marketing and content platform for Fora, a modern travel-advisor company — over four-plus years.",
    overview:
      "Fora is a modern travel company that pairs travelers with expert advisors. foratravel.com is its public marketing and content platform: a Next.js site powered by Contentful, with Algolia search and Cloudinary media. Over four-plus years I was a core contributor (~1,600 commits), building and maintaining a large, editorial, conversion-focused site — advisor resources, case studies, articles and listicles, forms and CTAs, plus continuous responsive refinement.",
    contributions: [
      "Built and maintained a large content-driven site in Next.js + Contentful — advisor resources, case studies, articles, listicles and events.",
      "Implemented conversion surfaces — lead and contact forms, CTAs and advisor-profile integrations — with Segment analytics and Eppo experimentation.",
      "Integrated Algolia search and Cloudinary image/video media across the site.",
      "Drove ongoing responsive (tablet/mobile) design work and rendering/performance fixes; also built the related Fora Centrum site.",
    ],
    // NOTE: $1B+/40k+/150+ are Fora's own company figures (shown on the site); the commit count is yours.
    results: [
      { metric: "$1B+", label: "travel booked worldwide" },
      { metric: "1,600+", label: "commits · 4+ years" },
      { metric: "150+", label: "countries served" },
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Contentful",
      "Algolia",
      "Cloudinary",
      "Vercel",
    ],
    accent: "#7a1e1e",
    image: "/projects/fora.png",
    links: { live: "https://foratravel.com" },
  },
  {
    slug: "pulip",
    title: "Pulip & E-commerce",
    category: "ecommerce",
    year: "2020–22",
    role: "Full-stack Developer",
    description:
      "Large-scale e-commerce platforms behind LATAM's biggest online sale events — HotSale, CyberMonday and Black Friday — powered by Pulip: a Kotlin/Spring Boot API, a Vue SSR storefront and a React admin.",
    overview:
      "I architected and operated large-scale e-commerce platforms behind some of LATAM's biggest online shopping events — HotSale, CyberMonday and Black Friday — serving millions of shoppers. The engineering through-line was Pulip (Flex Market Sale): a configurable, scalable marketplace builder that lets organizations, brands and stores spin up and run their own online discount events. It's a service-oriented platform — a Kotlin/Spring Boot API backed by MySQL, Redis and Elasticsearch on AWS, a server-rendered Vue storefront whose per-event template system makes each sale its own site, and a React admin back-office to run promotions, brands and inscriptions — all Dockerized and built to stay fast under massive, tightly concentrated traffic peaks.",
    contributions: [
      "Worked across a service-oriented platform: a Kotlin/Spring Boot REST API (Spring Security + JWT, JPA/MySQL, Redis caching, Elasticsearch product search) using AWS SES, SQS, S3 and DynamoDB.",
      "Built and operated the configurable storefront (Pulip Web): a server-rendered Vue app whose per-event template system lets each HotSale/CyberMonday/Black Friday event run as its own themed site.",
      "Contributed to the React + Redux admin back-office (CoreUI) for managing promotions, brands, banners, inscriptions and Excel exports across events.",
      "Ran production through peak sale events — Dockerized services with CI/CD (AWS CodePipeline, GCP Cloud Build), holding ~99.9% uptime and smooth checkout under concentrated traffic.",
    ],
    // NOTE: "millions" and "99.9%" come from your CV; "2,000+" is Pulip's own
    // marketing figure (getpulip.com). Swap for firmer numbers if you have them.
    results: [
      { metric: "Millions", label: "shoppers served in LATAM" },
      { metric: "99.9%", label: "uptime at peak sale events" },
      { metric: "2,000+", label: "merchants on Pulip" },
    ],
    tags: [
      "Kotlin",
      "Spring Boot",
      "Vue",
      "React",
      "Elasticsearch",
      "Redis",
      "MySQL",
      "AWS",
      "Docker",
    ],
    accent: "#6d28d9",
    image: "/projects/pulip.png",
    gallery: [
      {
        src: "/projects/hotsale-co.png",
        label: "HotSale Colombia",
        href: "https://www.hotsale.com.co/",
      },
      {
        src: "/projects/blackfriday-co.png",
        label: "Black Friday Colombia",
        href: "https://www.blackfridaycol.com/",
      },
      {
        src: "/projects/cybermonday.png",
        label: "CyberMonday Argentina",
        href: "https://www.cybermonday.com.ar/",
      },
    ],
    links: { live: "https://getpulip.com" },
  },
  {
    slug: "body-health",
    title: "Body Health",
    category: "saas",
    year: "2022–23",
    role: "Front End Engineer",
    description:
      "Front-end engineering for Body Health, an aesthetic-medicine platform — a Vue 2 + Quasar app (with a Cordova mobile build) over a PHP/CodeIgniter microservices backend.",
    overview:
      "Body Health is an aesthetic-medicine company whose platform helps clinics and medical professionals manage treatments, clients and payments. I worked as a front-end engineer building reusable Vue 2 + Quasar components across the back-office — dashboards, data tables, forms, scheduling and charts — packaged for web and, via Cordova, mobile. Behind it sat a set of PHP/CodeIgniter microservices (auth, backend, payments, email) on MySQL, all Dockerized and covered by PHPUnit and Cypress tests.",
    contributions: [
      "Built reusable Vue 2 + Quasar components across the back-office — dashboards, data tables, forms, scheduling and charts (ApexCharts/ECharts) — with i18n and Vuelidate validation.",
      "Integrated Stripe checkout in the client-facing flow and wired the SPA to the PHP/CodeIgniter auth, backend and payment microservices.",
      "Contributed to the PHP side — CMS features for medical professionals and SQL queries — and helped package the app for mobile with Cordova.",
      "Kept quality up with PHPUnit unit tests and Cypress end-to-end tests.",
    ],
    // Private product — these describe the build, not production impact.
    results: [
      { metric: "Vue + Quasar", label: "reusable component library" },
      { metric: "Microservices", label: "auth · backend · payments · email" },
      { metric: "Web + mobile", label: "one codebase via Cordova" },
    ],
    tags: [
      "Vue 2",
      "Quasar",
      "JavaScript",
      "PHP",
      "CodeIgniter",
      "Stripe",
      "MySQL",
      "Cypress",
      "Docker",
    ],
    accent: "#a86a6d",
    image: "/projects/body-health.png",
    links: {},
  },
  {
    slug: "payments-webhook",
    title: "Payment Webhooks",
    category: "personal",
    year: "2026",
    role: "Full-stack Engineer",
    description:
      "A personal project: an idempotent payment-webhook processing system — Laravel API, Nuxt admin dashboard and a mock payment gateway.",
    overview:
      "A self-directed system that models how a real payment integration ingests provider webhooks safely. A Laravel API receives webhook events and processes them through a strict layered architecture (Controller → Service → Repository interface → Eloquent), with a Nuxt 3 admin dashboard to inspect payments and their full audit trail, and a small mock gateway to drive the flow. The core idea is idempotency: every event is written to an immutable log keyed by a unique event_id, so duplicate deliveries are silently ignored while the provider still receives a 200 and stops retrying.",
    contributions: [
      "Designed the backend around a decoupled, testable architecture — FormRequest validation, a Service layer, and Repository interfaces bound to Eloquent implementations so business logic never touches the ORM directly.",
      "Implemented idempotent webhook intake: an immutable event_logs table with a unique event_id, catching the duplicate-entry exception to safely no-op repeat deliveries before mutating payment state.",
      "Built a Nuxt 3 + Pinia SPA dashboard with Sanctum auth — filterable/paginated payments table, per-payment audit-trail timeline and a simulate-refund action.",
      "Added a mock payment gateway to tokenize cards and emit webhooks, so the checkout → webhook → confirmation flow can be exercised end-to-end.",
    ],
    // Personal project — these describe the build, not production impact.
    results: [
      { metric: "3", label: "services · API · dashboard · gateway" },
      { metric: "Idempotent", label: "duplicate-safe webhook intake" },
      { metric: "Layered", label: "controller → service → repository" },
    ],
    tags: [
      "Laravel",
      "PHP",
      "Sanctum",
      "Nuxt 3",
      "Vue",
      "Pinia",
      "SQLite",
      "REST",
    ],
    accent: "#2563eb",
    image: "/projects/payments-webhook.png",
    links: {
      source: "https://github.com/arielmoguillansky/payments-webhook-app",
    },
  },
  {
    slug: "lego-battlegame",
    title: "LEGO Battlegame",
    category: "personal",
    year: "2019",
    role: "Full-stack Developer",
    description:
      "A Battleship-style multiplayer game built in an advanced web-dev course — a Java Spring Boot backend (JPA, Data REST, Security) serving a jQuery front-end, themed around LEGO Marvel's Avengers.",
    overview:
      "LEGO Battlegame is a Battleship-style (“Salvo”) multiplayer game I built during an advanced full-stack web-development course. A Java Spring Boot backend models the domain with JPA — games, players, ships, salvoes and scores — exposes it over a REST API plus Spring Data REST, and secures it with Spring Security form login on an H2 database. A jQuery/HTML/CSS front-end, themed around LEGO Marvel's Avengers, handles login/signup, a games lobby with an all-time leaderboard, and the turn-based battle grid. It's now live — sign up to play, or jump in with the demo account j.bauer@ctu.gov / 24.",
    contributions: [
      "Modeled the game domain in Java with JPA entities and repositories — games, players, ships, salvoes and scores — on an H2 database.",
      "Exposed it over a REST API plus Spring Data REST, secured with Spring Security form-based auth and delegating password hashing.",
      "Built the jQuery/HTML/CSS front-end — login/signup, a games lobby with an all-time scorers leaderboard, and the turn-based battle grid.",
      "Themed the whole experience around LEGO Marvel's Avengers.",
    ],
    // Course project — these describe the build, not production impact.
    results: [
      { metric: "Spring Boot", label: "JPA · Data REST · Security" },
      { metric: "Battleship", label: "turn-based multiplayer game" },
      { metric: "2019", label: "Advanced Fullstack Development certification · MindHub" },
    ],
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA / Hibernate",
      "Spring Data REST",
      "H2",
      "jQuery",
      "JavaScript",
    ],
    accent: "#12203a",
    image: "/projects/lego-battlegame.png",
    links: {
      live: "https://lego-battlegame.onrender.com/",
    },
  },
];
