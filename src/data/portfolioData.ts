export interface Project {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  role: string;
  period: string;
  category: 'featured' | 'saas' | 'realtime' | 'frontend';
  tech: string[];
  impact: string;
  description: string;
  features: string[];
  architecture: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "fast-hrm",
    title: "FAST HRM — Employee & Work Management System",
    badge: "⭐ Flagship Production Application",
    subtitle: "Real-World Employee, Attendance, Work Status & Admin Platform",
    role: "Full Stack Developer (FAST)",
    period: "2026 – Present",
    category: "featured",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "Nginx"],
    impact: "Actively deployed and utilized daily in real office operations for employee workflows, time calculation, and staff operations.",
    description: "A comprehensive, production-grade HRM platform designed to centralize and automate internal office workflows. Includes employee portal, attendance tracking, leave requests, live work logging, forgot/restart timer logic, and admin supervision.",
    features: [
      "Employee & Administrator Authentication with secure role-based access (RBAC)",
      "Real-time attendance logging & leave request workflow with approval engine",
      "Task and active work-status management with dynamic time calculations",
      "Forgot/Restart work timer functionality to ensure accurate payroll records",
      "Employee activity history, daily work logs & administrative review dashboards",
      "RESTful API architecture with robust MongoDB schema indexing and validation",
      "Configured for production deployment with Nginx reverse proxy"
    ],
    architecture: "Frontend built with React.js & TypeScript consuming REST APIs. Backend powered by Node.js/Express with MongoDB data persistence, JWT validation, and RBAC middleware."
  },
  {
    id: "fast-career",
    title: "FAST Career Website — Recruitment Management Platform",
    badge: "Recruitment & Candidate Assessment",
    subtitle: "Job Listing, Candidate Applications & Automated Resume Pipelines",
    role: "Full Stack Developer (FAST)",
    period: "2026 – Present",
    category: "featured",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    impact: "Streamlines end-to-end recruitment, automated candidate filtering, and online test assessments for corporate hiring.",
    description: "A dual-facing recruitment platform combining a modern public-facing career portal with an administrative candidate tracking system (ATS) and built-in skill assessment testing engine.",
    features: [
      "Dynamic job listings with filtering by department, experience level, and location",
      "Multi-step candidate registration, experienced candidate form & portfolio intake",
      "Resume upload with automated parsing & data extraction pipeline",
      "Integrated candidate online assessment test with automated answer recording",
      "Admin candidate management board with evaluation scoring and status updates",
      "Protected admin routes & candidate review workflows"
    ],
    architecture: "React + TypeScript frontend integrated with Express.js REST APIs for multipart resume uploads, test timer synchronization, and MongoDB assessment schemas."
  },
  {
    id: "propeter-saas",
    title: "Propeter — Property Management SaaS Platform",
    badge: "Enterprise SaaS & Multi-Tier Access",
    subtitle: "Privilege-Based Property Operations & Route-Guarded Admin Suite",
    role: "MERN Stack Developer (Ideas2Goal Technologies)",
    period: "Sep 2025 – Apr 2026",
    category: "saas",
    tech: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Nginx"],
    impact: "Delivered scalable administrative infrastructure for commercial property management with zero-trust privilege boundaries.",
    description: "A robust multi-tenant property management SaaS platform engineered with strict privilege-based access control, route protection, and PostgreSQL relational data schemas.",
    features: [
      "Multi-level administrative hierarchy (TENANT_ADMIN, PROPERTY_ADMIN, SUPERADMIN)",
      "Dynamic privilege-based UI component rendering based on granular permission bits",
      "Protected frontend route guards and backend authorization middleware",
      "API payload sanitization, structured relational joins, and error handling",
      "Property listings, unit tenant assignments, and operational maintenance logs"
    ],
    architecture: "Single Page Application (SPA) in React & TypeScript with PostgreSQL relational backend, connection pooling, and Nginx production deployment."
  },
  {
    id: "xero-integration",
    title: "Xero Accounting & Webhook Integration Engine",
    badge: "Financial API & Real-Time Sync",
    subtitle: "Automated Invoice Generation, Payment Tracking & Webhook Listeners",
    role: "Full Stack Developer (Ideas2Goal Technologies)",
    period: "Sep 2025 – Apr 2026",
    category: "realtime",
    tech: ["Node.js", "React.js", "TypeScript", "Xero API", "Webhooks", "REST APIs"],
    impact: "Automated recurring billing cycles and synchronized real-time payment reconciliation between SaaS and Xero ledger.",
    description: "An enterprise integration module connecting business applications with Xero cloud accounting, automating invoice generation, invoice status tracking, and processing real-time webhook events.",
    features: [
      "OAuth 2.0 authentication flow with automatic token refreshing",
      "Automated invoice creation and PDF generation via Xero REST endpoints",
      "Secure webhook listener endpoints verifying cryptographic signatures",
      "Real-time event processing for paid, voided, or overdue invoices",
      "Resilient error handling and background retry synchronization"
    ],
    architecture: "Node.js webhook consumer microservice handling Xero signature validation, dispatching status updates to application databases."
  },
  {
    id: "enterprise-email",
    title: "Enterprise Email Platform",
    badge: "Real-Time Collaboration",
    subtitle: "Conversational Email Threading, Inbox Management & Instant Notifications",
    role: "Full Stack Developer",
    period: "Featured Project",
    category: "saas",
    tech: ["React.js", "Node.js", "MongoDB", "WebSockets", "Tailwind CSS"],
    impact: "Empowers enterprise teams with fast, unified inbox communication with sub-second message dispatch.",
    description: "A business-oriented email platform with threaded conversation views, rich filtering, label management, full-text search, and real-time push alerts via WebSockets.",
    features: [
      "Threaded conversation view with collapse/expand and markdown support",
      "Fast email search across subjects, senders, and body content",
      "Custom organization labels, stars, folders, and read/unread counters",
      "WebSocket integration for instant incoming mail notifications and unread badges",
      "Optimized pagination and lazy loading for large message archives"
    ],
    architecture: "React frontend with WebSocket listener client; Node.js backend managing Socket channels and MongoDB compound indexed mail documents."
  },
  {
    id: "hozify-admin",
    title: "Hozify Admin Panel",
    badge: "Platform Oversight & Analytics",
    subtitle: "Platform Administration, Content Moderation & Redux State Architecture",
    role: "Full Stack Developer",
    period: "Featured Project",
    category: "saas",
    tech: ["React.js", "TypeScript", "Redux Toolkit", "Node.js", "Tailwind CSS"],
    impact: "Centralized platform control dashboard for rapid content moderation and administrative analytics.",
    description: "A full-featured administrative control suite providing platform-wide user management, content moderation queues, metrics visualization, and predictable Redux state flows.",
    features: [
      "User registry with status management, ban/unban, and activity timelines",
      "Content moderation review dashboard with approve/reject action queues",
      "Redux Toolkit centralized store for predictable state caching",
      "Virtual table rendering for smooth scrolling over large dataset rows",
      "Exportable analytics reports and platform metric cards"
    ],
    architecture: "TypeScript React SPA with Redux Toolkit slice architecture, Axios interceptors, and reusable PrimeReact/Tailwind component systems."
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat & Video Calling Application",
    badge: "WebSockets & WebRTC",
    subtitle: "Bi-Directional Messaging, Typing Indicators & P2P Video Channels",
    role: "Full Stack Developer",
    period: "Featured Project",
    category: "realtime",
    tech: ["React.js", "Node.js", "Express.js", "Socket.IO", "WebRTC", "Tailwind CSS"],
    impact: "Enables instant peer-to-peer audio/video calling and encrypted live chat conversations.",
    description: "A real-time communication platform supporting instantaneous text chat, media sharing, user presence detection, typing indicators, and WebRTC peer video calling.",
    features: [
      "One-on-one direct messaging with instant Socket.IO broadcast",
      "Peer-to-peer low-latency WebRTC audio and video streaming",
      "Online/offline user status indicators and real-time typing events",
      "Chat history persistence with MongoDB and message delivery checkmarks",
      "Clean responsive dark/light UI with smooth audio call notification rings"
    ],
    architecture: "Socket.IO signaling server built on Node.js/Express, coordinating WebRTC ICE candidates and SDP offers/answers between browser peers."
  },
  {
    id: "macbook-3d",
    title: "MacBook 3D Landing Page",
    badge: "Three.js & WebGL Experience",
    subtitle: "Interactive 3D Product Presentation with React Three Fiber",
    role: "Frontend Developer",
    period: "Frontend Showcase",
    category: "frontend",
    tech: ["React.js", "Vite", "Three.js", "React Three Fiber", "GLTF", "Tailwind CSS"],
    impact: "Demonstrates advanced 3D spatial web capabilities and high-fidelity rendering performance.",
    description: "An immersive 3D product showcase page featuring a photorealistic Apple MacBook model, dynamic lighting controls, 360-degree orbit controls, and scroll-linked animations.",
    features: [
      "High-polygon GLTF 3D model loading with optimized PBR materials",
      "Interactive 360-degree orbit camera controls and smooth damping",
      "Scroll-triggered camera transitions and dynamic screen texture rendering",
      "Optimized canvas render loops ensuring steady 60 FPS performance",
      "Fully responsive layout with mobile touch gestures support"
    ],
    architecture: "Built with React Three Fiber (R3F) and @react-three/drei on top of Three.js and Vite for ultra-fast compilation."
  },
  {
    id: "workpulse",
    title: "WorkPulse — Staff Work Tracking & Live Project Management",
    badge: "Staff Productivity & Analytics",
    subtitle: "Real-Time Project Status, Activity History & Managerial Dashboards",
    role: "Full Stack Developer",
    period: "Productivity Platform",
    category: "realtime",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Socket.IO", "JWT", "Recharts"],
    impact: "Increases team transparency and eliminates manual status report meetings for project teams.",
    description: "A staff productivity and real-time project status management platform where employees broadcast their active work items and managers monitor live project health and productivity metrics.",
    features: [
      "Manager and employee dashboards with distinct permissions",
      "Live task updates and automatic activity log timestamps",
      "Socket.IO real-time work status broadcast to all connected managers",
      "Visual productivity charts and sprint completion graphs via Recharts",
      "JWT authentication and automated daily report generation"
    ],
    architecture: "Node.js backend with Socket.IO room subscriptions, connected to React client with Recharts visualizer and Redux Toolkit store."
  }
];
