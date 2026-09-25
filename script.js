// ==================== PROJECT DATA ARRAY (ORDERED: LIVE DEPLOYMENTS FIRST) ====================
const projectsData = [
  {
    id: "marketing-platform",
    title: "AI Creator Marketplace & Marketing Platform",
    badge: "🟢 Live Production Platform",
    subtitle: "Influencer Discovery, Campaign Analytics & Escrow Infrastructure",
    role: "Full Stack Web Developer",
    period: "Live Production App",
    liveUrl: "https://marketing-sandy-pi.vercel.app/",
    tech: ["Next.js 15", "React.js", "TypeScript", "Tailwind CSS", "PGVector AI", "Vercel"],
    impact: "Live operating system for influencer marketing with AI creator matchmaking, verified social analytics, and cryptographic escrow payments.",
    description: "An advanced influencer marketing engine designed to connect global brands with high-impact content creators. Features 1536-dimensional vector embedding AI creator discovery, verified real-time YouTube/Instagram engagement metrics, and milestone-based escrow billing.",
    features: [
      "Mathematical AI Creator Discovery powered by PGVector cosine similarity matching",
      "Cryptographically secured payment escrow with milestone-based payout release",
      "Real-time social analytics ingestion from YouTube and Instagram APIs",
      "Modern dark/light mode UI with interactive 3D spatial analytics cards",
      "Comprehensive creator profiles, media kits, authenticity scoring, and audience demographics",
      "Production deployment on Vercel with server-side rendering and edge optimization"
    ],
    architecture: "Engineered with Next.js App Router, React Server Components, TypeScript, Tailwind CSS, and vector similarity matchmaking algorithms."
  },
  {
    id: "wedding-films",
    title: "Luxury Wedding Films & Photography Website",
    badge: "🟢 Live Client Website",
    subtitle: "Cinematic Videography, Booking System & Visual Storytelling",
    role: "Frontend & Web Developer",
    period: "Live Client Website",
    liveUrl: "https://websidewedding-nine.vercel.app/",
    tech: ["Next.js", "React.js", "Tailwind CSS", "Lucide Icons", "Vercel"],
    impact: "Live luxury wedding photography and cinematic videography studio portal featuring immersive media showcases and client booking pipelines.",
    description: "A high-end, responsive wedding cinematography and photography platform engineered for visual elegance. Showcases curated couple film reels, responsive image galleries, client testimonial sliders, inquiry booking workflows, and WhatsApp integration.",
    features: [
      "Cinematic hero layout with high-resolution image preload and smooth typography",
      "Interactive video & photography portfolio galleries with hover reveal transitions",
      "Custom multi-step client booking inquiry and service package breakdown",
      "Direct WhatsApp and call integration for instantaneous client reservations",
      "Optimized Next.js image pipeline with lazy loading and instant page loads",
      "Tailored luxury warm aesthetics with custom typography and mobile navigation"
    ],
    architecture: "Built with Next.js and Tailwind CSS, featuring optimized asset delivery and deployed globally on Vercel CDN."
  },
  {
    id: "bhumicred-portal",
    title: "Bhumi Cred — Real Estate & Credit Web Platform",
    badge: "🟢 Live Fintech Portal",
    subtitle: "Property Credit Evaluation, Land Loans & Verification Workflows",
    role: "Full Stack Developer",
    period: "Live Fintech App",
    liveUrl: "https://bhumicredweb-qbama8yrk-divyayadav12s-projects.vercel.app/",
    tech: ["React.js", "TypeScript", "Node.js", "Tailwind CSS", "Vercel"],
    impact: "Streamlines property credit assessments, land loan eligibility checks, and secure document verification workflows.",
    description: "A specialized fintech portal created for land credit scoring and property financing. Facilitates user credit profile checks, loan calculation estimators, property document upload and verification, and role-based portal access.",
    features: [
      "Interactive Credit Score & Loan Eligibility Assessment calculator",
      "Property document verification and intake management system",
      "Secure user authentication, session persistence, and profile management",
      "Intuitive dashboard with loan status tracking and visual milestone indicators",
      "Responsive financial data tables with dynamic filtering and sorting",
      "Clean fintech design system engineered with React and Tailwind CSS"
    ],
    architecture: "React SPA with component-driven state architecture, TypeScript type safety, and responsive CSS grid system deployed on Vercel."
  },
  {
    id: "ca-final-reality",
    title: "CA Final Prep & Reality Check Dashboard",
    badge: "🟢 Live EdTech Preparation Platform",
    subtitle: "Interactive Exam Readiness, Syllabus Tracker & Study Analytics",
    role: "Frontend & Full Stack Developer",
    period: "Live Student Web App",
    liveUrl: "https://ca-final-web.vercel.app/",
    tech: ["React.js", "Vite", "Tailwind CSS", "LocalStorage State", "Vercel"],
    impact: "Empowers Chartered Accountancy candidates with structured revision tracking, exam countdowns, and realistic mock scoring.",
    description: "A dedicated exam preparation and syllabus milestone tracking platform for CA Final candidates. Provides topic-wise completion meters, daily target timers, revision cycle calculators, and visual performance graphs.",
    features: [
      "Subject-wise and group-wise CA Final syllabus completion tracker",
      "Live exam countdown target timer with daily hour study tracking",
      "Realistic mock test score input and percentile progress visualizer",
      "Local storage synchronization for private, instant client-side data persistence",
      "Distraction-free dark mode interface engineered for long study sessions",
      "Ultra-fast loading compiled with Vite and deployed on Vercel"
    ],
    architecture: "Modern React.js application compiled with Vite, styled with Tailwind CSS, utilizing custom hooks for state persistence."
  },
  {
    id: "fast-hrm",
    title: "FAST HRM — Employee & Work Management System",
    badge: "⭐ Flagship Production Application",
    subtitle: "Real-World Employee, Attendance, Work Status & Admin Platform",
    role: "Full Stack Developer (FAST)",
    period: "2026 – Present",
    liveUrl: null,
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
    liveUrl: null,
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
    liveUrl: null,
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
    liveUrl: null,
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
    id: "workpulse",
    title: "WorkPulse — Staff Work Tracking & Live Project Management",
    badge: "Staff Productivity & Analytics",
    subtitle: "Real-Time Project Status, Activity History & Managerial Dashboards",
    role: "Full Stack Developer",
    period: "Productivity Platform",
    liveUrl: null,
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


// ==================== DOM READY INITIALIZER ====================
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  init3DAvatar();
  initScrollAnimations();
  initSpotlight();
  initMobileMenu();
  initProjectFiltering();
  initProjectModal();
  initCopyButtons();
  initContactForm();
  initNavbarScroll();
  initCardStackScroll();
});


// ==================== 1. 3D ROTATING & SCROLL-DRIVEN AVATAR ====================
function init3DAvatar() {
  const card = document.getElementById('avatar-3d-card');
  const wrapper = document.getElementById('avatar-3d-wrapper');
  if (!card || !wrapper) return;

  let baseRotation = 0;
  let targetRotation = 0;
  let mouseTiltX = 0;
  let mouseTiltY = 0;
  let lastScrollY = window.scrollY;
  let isHovered = false;

  wrapper.addEventListener('mousemove', (e) => {
    isHovered = true;
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseTiltY = (x / (rect.width / 2)) * 25;
    mouseTiltX = -(y / (rect.height / 2)) * 20;
  });

  wrapper.addEventListener('mouseleave', () => {
    isHovered = false;
    mouseTiltX = 0;
    mouseTiltY = 0;
  });

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;
    baseRotation += scrollDelta * 0.45;
    lastScrollY = currentScrollY;
  }, { passive: true });

  function render3DLoop() {
    if (!isHovered) {
      baseRotation += 0.35;
    }

    targetRotation += (baseRotation + mouseTiltY - targetRotation) * 0.08;
    card.style.transform = `rotateX(${mouseTiltX}deg) rotateY(${targetRotation}deg) translateZ(10px)`;
    requestAnimationFrame(render3DLoop);
  }

  render3DLoop();
}


// ==================== 2. SCROLL REVEAL (INTERSECTION OBSERVER) ====================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('is-revealed');
        }, (idx % 3) * 80);
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}


// ==================== 3. INTERACTIVE SPOTLIGHT GLOW ====================
function initSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight) return;

  window.addEventListener('mousemove', (e) => {
    spotlight.style.opacity = '1';
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    spotlight.style.opacity = '0';
  });
}


// ==================== 4. MOBILE MENU ====================
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-link');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}


// ==================== 5. NAVBAR SCROLL EFFECT ====================
function initNavbarScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('border-white/15', 'shadow-2xl');
    } else {
      header.classList.remove('border-white/15', 'shadow-2xl');
    }
  }, { passive: true });
}


// ==================== 6. PROJECT FILTERING ====================
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-white', 'text-black', 'shadow-lg');
        b.classList.add('bg-[#111111]', 'text-slate-300', 'border', 'border-white/[0.08]');
      });

      btn.classList.add('active', 'bg-white', 'text-black', 'shadow-lg');
      btn.classList.remove('bg-[#111111]', 'text-slate-300');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'grid';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}


// ==================== 7. PROJECT DETAILS MODAL ====================
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close-btn');
  const openButtons = document.querySelectorAll('.open-modal-btn');

  if (!modal || !modalBody || !closeBtn) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.getAttribute('data-project-index'), 10);
      const proj = projectsData[index];
      if (!proj) return;

      modalBody.innerHTML = `
        <div class="space-y-4 text-left">
          <!-- Top Tag & Period -->
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20">
              ${proj.badge}
            </span>
            <span class="text-xs font-mono text-slate-400">${proj.period}</span>
          </div>

          <!-- Title & Subtitle -->
          <div>
            <h3 class="text-2xl font-bold text-white">${proj.title}</h3>
            <p class="text-xs font-semibold text-slate-300 mt-1">${proj.subtitle}</p>
          </div>

          <!-- Live App Launch Banner (If liveUrl exists) -->
          ${proj.liveUrl ? `
            <div class="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div class="flex items-center gap-2.5">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <div>
                  <div class="text-xs font-bold text-white">Live Application Deployed</div>
                  <div class="text-[11px] text-slate-400 font-mono">${proj.liveUrl}</div>
                </div>
              </div>
              <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 shadow-md transition-all shrink-0">
                <span>Launch App</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
            </div>
          ` : ''}

          <!-- Role & Impact Box -->
          <div class="p-4 rounded-2xl bg-[#111111] border border-white/15 space-y-1.5">
            <div class="text-xs font-bold text-white">
              Role: <span class="text-slate-300 font-normal">${proj.role}</span>
            </div>
            <div class="text-xs text-slate-200">
              <strong>Real-World Impact:</strong> ${proj.impact}
            </div>
          </div>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            ${proj.description}
          </p>

          <!-- Key Features -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Architecture & Features</h4>
            <ul class="space-y-2 text-xs text-slate-300">
              ${proj.features.map(f => `
                <li class="flex items-start gap-2">
                  <i data-lucide="check" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Architecture Note -->
          <div class="p-3.5 rounded-xl bg-[#0a0a0a] text-xs text-slate-300 border border-white/10 font-mono">
            <span class="text-white font-bold">System Architecture:</span> ${proj.architecture}
          </div>

          <!-- Tech Stack -->
          <div class="pt-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
            <div class="flex flex-wrap gap-1.5">
              ${proj.tech.map(t => `<span class="px-2.5 py-1 rounded-full text-xs font-mono bg-[#111111] border border-white/10 text-slate-300">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;

      if (window.lucide) {
        window.lucide.createIcons();
      }

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}


// ==================== 8. COPY TO CLIPBOARD ====================
function initCopyButtons() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('divyayadav141203@gmail.com');
      showToast('Email address copied to clipboard!');
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('+91 8839250427');
      showToast('Phone number copied to clipboard!');
    });
  }
}


// ==================== 9. CONTACT FORM HANDLER ====================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('sender-name')?.value || 'Client';
    const email = document.getElementById('sender-email')?.value || '';
    const subject = document.getElementById('sender-subject')?.value || 'Project Inquiry';
    const message = document.getElementById('sender-message')?.value || '';

    const mailtoUrl = `mailto:divyayadav141203@gmail.com?subject=${encodeURIComponent(subject + ' — from ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
    window.location.href = mailtoUrl;

    showToast('Opening your email client to send message...');
    form.reset();
  });
}


// ==================== 10. EXACT SHERYIANS STICKY CARD STACK ON SCROLL ====================
function initCardStackScroll() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  function handleStackScroll() {
    const headerOffset = window.innerWidth < 640 ? 85 : 100;

    cards.forEach((card, i) => {
      const nextCard = cards[i + 1];

      if (nextCard && nextCard.style.display !== 'none') {
        const nextRect = nextCard.getBoundingClientRect();
        const diff = (headerOffset + card.offsetHeight) - nextRect.top;
        const progress = Math.min(1, Math.max(0, diff / card.offsetHeight));

        if (progress > 0) {
          const scale = (1 - progress * 0.05).toFixed(3);
          const brightness = (1 - progress * 0.25).toFixed(3);
          card.style.transform = `scale(${scale})`;
          card.style.filter = `brightness(${brightness})`;
        } else {
          card.style.transform = 'scale(1)';
          card.style.filter = 'brightness(1)';
        }
      } else {
        card.style.transform = 'scale(1)';
        card.style.filter = 'brightness(1)';
      }
    });
  }

  window.addEventListener('scroll', handleStackScroll, { passive: true });
  window.addEventListener('resize', handleStackScroll, { passive: true });
  handleStackScroll();
}


// ==================== HELPER: TOAST NOTIFICATION ====================
function showToast(msg) {
  let toast = document.getElementById('custom-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'custom-toast';
    toast.className = 'fixed bottom-6 left-1/2 transform -translate-x-1/2 px-5 py-3 rounded-2xl bg-white text-black font-semibold text-xs shadow-2xl z-[9999] transition-all duration-300 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');

  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 3200);
}
