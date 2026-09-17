import { Project, EducationItem, ExperienceItem, SkillCategory, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Dhruviksinh Parmar',
  role: 'Full-Stack Engineer',
  focus: 'AI-Augmented MERN / DSA',
  tagline: 'FULL-STACK ENGINEER BUILDING AI-AUGMENTED DIGITAL PRODUCTS.',
  statement:
    'Skilled in Data Structures & Algorithms and full-stack development, with production-style experience across AI travel planning, personalized learning systems, and explainable AI.',
  email: 'dhruvikparmar26@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/dhruviksinh-parmar-68311a304',
  githubUrl: 'https://github.com/dhruvikparmar26-hub',
  leetcodeLabel: 'LeetCode (550+ Problems)',
  codolioLabel: 'Codolio',
  educationSummary: {
    degree: 'B.Tech — Computer Science & Engineering',
    minor: 'Adaptive AI',
    cgpa: '8.65 / 10',
    dsa: '550+ Problems Solved',
  },
};

export const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'Momentum',
    subtitle: 'Personalized Learning Management System',
    category: 'Full-Stack & Real-Time Systems',
    date: 'May 2026 – Jun 2026',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vite', 'Socket.io', 'Python'],
    liveUrl: 'https://plms-black.vercel.app',
    architectureType: 'realtime',
    highlights: [
      'Role-Based Access Control (RBAC) at API layer',
      'Event-driven live Socket.io communication',
      'Asynchronous background Python microservice',
    ],
    description: [
      'Shipped core modules including virtual study rooms and a mentor-call booking calendar used across the platform’s student and mentor tracks.',
      'Enforced Role-Based Access Control (RBAC) at the API layer via Express middleware, giving students, mentors, and admins distinct data boundaries enforced server-side rather than only hidden in the UI.',
      'Replaced polling with an event-driven Socket.io layer so live notifications, quiz state, and analytics dashboards update instantly without a client-side refresh.',
      'Kept API response times stable under concurrent load by offloading certificate generation and report parsing to background Python services (PyMuPDF, ReportLab), decoupling that workload from the main Node.js request cycle.',
      'Root-caused and fixed a recurring sidebar scroll-jump bug across every course page and standardized quiz rendering format across all courses, removing layout inconsistencies reported by multiple users.',
    ],
  },
  {
    number: '02',
    title: 'Journeys',
    subtitle: 'AI Travel & Trip Planner',
    category: 'Multi-Agent AI Architecture',
    date: 'Apr 2026 – May 2026',
    stack: ['React 19', 'Node.js', 'Express', 'MongoDB', 'LangGraph', 'Claude API', 'Argon2id', 'SSE'],
    githubUrl: 'https://github.com/dhruvikparmar26-hub/JOURNEYS-project',
    architectureType: 'agent-orchestration',
    highlights: [
      'LangGraph StateGraph multi-agent orchestration',
      'Server-Sent Events (SSE) incremental streaming',
      'Hardened Argon2id + TOTP MFA + dual JWT rotation',
    ],
    description: [
      'Cut effective planning latency by replacing single-agent prompting with a LangGraph (StateGraph) multi-agent orchestrator over the Anthropic Claude API, decomposing itinerary generation (flights, stays, packing, budget) into coordinated, independently-executing sub-agents instead of one large blocking prompt.',
      'Streamed each agent’s planning steps to the client via Server-Sent Events (SSE), cutting time-to-first-visible-result from a single blocking multi-second call to near-instant incremental progress during multi-step AI planning.',
      'Closed common session-hijacking and replay-attack vectors by choosing Argon2id over bcrypt for password hashing and pairing it with TOTP-based MFA, Google OAuth 2.0, and dual-token JWT rotation via HttpOnly cookies.',
    ],
  },
  {
    number: '03',
    title: 'VisionCaption AI',
    subtitle: 'Image Captioning & Visual Attention',
    category: 'Computer Vision & Explainable AI',
    date: 'Feb 2026 – Mar 2026',
    stack: ['FastAPI', 'PyTorch', 'InceptionV3', 'Hugging Face', 'NLP', 'Canvas Heatmaps', 'SSE'],
    githubUrl: 'https://github.com/dhruvikparmar26-hub/Img-to-Caption',
    architectureType: 'vision-attention',
    highlights: [
      'Transformer (BLIP) vs. InceptionV3 + Bahdanau Attention benchmark',
      'Fluency-vs-diversity decoding evaluation (Beam, Greedy, Nucleus)',
      'Real-time spatial attention heatmap visualizer per token',
    ],
    description: [
      'Benchmarked a foundation-model approach against a from-scratch architecture by pairing a pretrained Salesforce BLIP (Vision Transformer) model against a custom InceptionV3 CNN + Bahdanau Attention + GRU pipeline on the same captioning task.',
      'Quantified fluency-vs-diversity tradeoffs across three decoding strategies — Beam Search, Greedy Search with n-gram repetition penalties, and Nucleus (Top-p) Sampling — through systematic benchmarking.',
      'Built an explainability layer for the caption model with an asynchronous FastAPI backend streaming captions word-by-word via SSE, rendered against an HTML5 Canvas overlay showing the model’s spatial attention heatmap per generated word.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Nirma University – Institute of Technology',
    degree: 'B.Tech, Computer Science & Engineering',
    location: 'Ahmedabad, Gujarat',
    duration: 'Aug 2023 – Jun 2027',
    score: 'CGPA: 8.65 / 10',
    minor: 'Minor: Adaptive AI',
    badge: 'Undergraduate',
  },
  {
    institution: 'Gyanmanjari Vidhyapith, Bhavnagar',
    degree: '12th (GSEB Higher Secondary)',
    location: 'Bhavnagar, Gujarat',
    duration: '2023',
    score: '78.62%',
    badge: 'HSC',
  },
  {
    institution: 'Nalanda School, Godhra',
    degree: '10th (GSEB Secondary)',
    location: 'Godhra, Gujarat',
    duration: '2021',
    score: '97.17%',
    badge: 'SSC',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Engineer Intern',
    company: 'Ecliptix Solutions',
    location: 'Remote',
    type: 'Internship',
    duration: 'May 2026 – Jul 2026',
    summary: 'Full-stack development, adaptive Personalized Learning Management System (PLMS).',
    technologies: ['React.js', 'Node.js', 'WebSockets', 'MongoDB', 'Express.js', 'REST APIs'],
    achievements: [
      'Root-caused and fixed a recurring sidebar scroll-jump bug affecting navigation across every course page, restoring consistent navigation for all users.',
      'Standardized the quiz module’s rendering format across all courses, removing a layout inconsistency reported by multiple users.',
      'Built core features of an adaptive Personalized Learning Management System (PLMS) as a full-stack developer, including virtual study rooms and a mentor-call booking calendar.',
      'Designed a progress-tracking dashboard and added a live, event-driven notification system for student actions using WebSockets, replacing manual page refreshes with instant updates.',
      'Debugged a recurring sidebar scroll-jump issue affecting navigation stability, and standardized the quiz module’s format across all courses for consistent rendering.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Tailwind CSS', 'LangChain/LangGraph'],
  },
  {
    category: 'Databases & Tools',
    skills: ['MongoDB', 'Mongoose', 'Docker', 'Git', 'GitHub', 'Socket.io', 'JWT', 'WebSockets'],
  },
  {
    category: 'Core CS Pillars',
    skills: [
      'Data Structures & Algorithms',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'OOP',
    ],
  },
  {
    category: 'Areas of Interest',
    skills: ['Competitive Programming', 'Natural Language Processing', 'Soft Computing'],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    metric: '550+',
    label: 'DSA Problems Solved',
    detail: 'Solved across LeetCode, Codeforces, and GeeksforGeeks with emphasis on complex algorithms and optimization.',
    subtext: 'Competitive Programming',
  },
  {
    metric: '98.61',
    label: 'JEE Mains Percentile',
    detail: 'Top percentile national ranking demonstrating high analytical rigor and mathematical foundation.',
    subtext: 'National Entrance',
  },
  {
    metric: '99.86',
    label: 'SSC Percentile',
    detail: 'Exceptional academic distinction at secondary school certification examination.',
    subtext: 'Board Examination',
  },
  {
    metric: '95.86',
    label: 'HSC Percentile',
    detail: 'High distinction academic ranking in higher secondary science education.',
    subtext: 'Board Examination',
  },
];
