// ==================== PROJECT DATA ARRAY (ALL 9 PROJECTS) ====================
const projectsData = [
  {
    id: "fast-hrm",
    title: "FAST HRM — Employee & Work Management System",
    badge: "⭐ Flagship Production Application",
    subtitle: "Real-World Employee, Attendance, Work Status & Admin Platform",
    role: "Full Stack Developer (FAST)",
    period: "2026 – Present",
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

  // 1. Initialize 3D Rotating & Scroll-interactive Image
  init3DAvatar();

  // 2. Initialize Scroll-triggered Animations (Intersection Observer)
  initScrollAnimations();

  // 3. Initialize Interactive Spotlight Cursor
  initSpotlight();

  // 4. Mobile Menu Drawer
  initMobileMenu();

  // 5. Project Filtering
  initProjectFiltering();

  // 6. Project Modal Details
  initProjectModal();

  // 7. Copy Buttons
  initCopyButtons();

  // 8. Contact Form
  initContactForm();

  // 9. Header Scroll Effect
  initNavbarScroll();
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

  // Mouse Interaction: 3D Tilt on Hover
  wrapper.addEventListener('mousemove', (e) => {
    isHovered = true;
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate tilt angles
    mouseTiltY = (x / (rect.width / 2)) * 25; // max 25 deg
    mouseTiltX = -(y / (rect.height / 2)) * 20; // max 20 deg
  });

  wrapper.addEventListener('mouseleave', () => {
    isHovered = false;
    mouseTiltX = 0;
    mouseTiltY = 0;
  });

  // Scroll Interaction: Spin dynamically on scroll
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;
    baseRotation += scrollDelta * 0.45; // rotate proportionally to scroll
    lastScrollY = currentScrollY;
  }, { passive: true });

  // Continuous Subtle Rotation Animation Loop (60 FPS)
  function render3DLoop() {
    // If not hovering, continuously spin slowly
    if (!isHovered) {
      baseRotation += 0.35; // continuous elegant round-round rotation
    }

    // Smooth interpolation towards current angle
    targetRotation += (baseRotation + mouseTiltY - targetRotation) * 0.08;

    // Apply 3D Matrix
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
        // Stagger entrance delay
        setTimeout(() => {
          entry.target.classList.add('is-revealed');
        }, (idx % 3) * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}


// ==================== 3. INTERACTIVE SPOTLIGHT GLOW ====================
function initSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight) return;

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(13, 242, 201, 0.04), transparent 80%)`;
  }, { passive: true });
}


// ==================== 4. MOBILE MENU ====================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}


// ==================== 5. HEADER SCROLL SHADOW ====================
function initNavbarScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
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
        b.classList.add('bg-[#151821]', 'text-slate-300', 'border', 'border-white/[0.08]');
      });

      btn.classList.add('active', 'bg-white', 'text-black', 'shadow-lg');
      btn.classList.remove('bg-[#151821]', 'text-slate-300');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card, index) => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.classList.add('is-revealed');
          }, index * 40);
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

          <!-- Title -->
          <div>
            <h3 class="text-2xl font-bold text-white">${proj.title}</h3>
            <p class="text-xs font-semibold text-slate-300 mt-1">${proj.subtitle}</p>
          </div>

          <!-- Role & Impact Box -->
          <div class="p-4 rounded-2xl bg-[#1b1f2b] border border-white/15 space-y-1.5">
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
          <div class="p-3.5 rounded-xl bg-[#181b24] text-xs text-slate-300 border border-white/10 font-mono">
            <span class="text-white font-bold">System Architecture:</span> ${proj.architecture}
          </div>

          <!-- Tech Stack -->
          <div class="pt-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
            <div class="flex flex-wrap gap-1.5">
              ${proj.tech.map(t => `<span class="px-2.5 py-1 rounded-full text-xs font-mono bg-[#181b24] border border-white/10 text-slate-300">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      if (window.lucide) window.lucide.createIcons();
    });
  });

  const closeModal = () => {
    modal.classList.add('hidden');
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


// ==================== 8. COPY BUTTONS ====================
function initCopyButtons() {
  const emailBtn = document.getElementById('copy-email-btn');
  const phoneBtn = document.getElementById('copy-phone-btn');

  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('divyayadav141203@gmail.com').then(() => {
        showToast('Email address copied to clipboard! 📋');
      });
    });
  }

  if (phoneBtn) {
    phoneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('+918839250427').then(() => {
        showToast('Phone number copied to clipboard! 📱');
      });
    });
  }
}


// ==================== 9. CONTACT FORM ====================
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim() || 'Portfolio Inquiry';
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    const mailtoUrl = `mailto:divyayadav141203@gmail.com?subject=${encodeURIComponent(subject + ' - From ' + name)}&body=${encodeURIComponent("Sender Name: " + name + "\nSender Email: " + email + "\n\nMessage:\n" + message)}`;

    if (feedback) {
      feedback.classList.remove('hidden');
      feedback.classList.add('glass-card', 'border', 'border-[#0df2c9]/40', 'text-[#0df2c9]');
      feedback.innerHTML = `✅ Thank you, ${name}! Opening your email client...`;
    }

    showToast('Message ready! Opening email client... ✉️');

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);

    form.reset();
  });
}


// ==================== TOAST UTILITY ====================
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500);
}
