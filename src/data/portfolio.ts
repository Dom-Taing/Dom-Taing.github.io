import type { Personal, Stat, SkillGroup, ExperienceEntry, Project } from '@/types'

export const personal: Personal = {
  name: 'Dom Taing',
  title: 'Full Stack Developer',
  tagline: 'I build fast, beautiful web applications — end to end.',
  location: 'Seattle, Washington',
  timezone: 'PST (UTC−8)',
  availability: 'Open to opportunities',
  email: 'dom.taing2002@gmail.com',
  github: 'https://github.com/Dom-Taing',
  linkedin: 'https://www.linkedin.com/in/keochonodom-taing/',
  resumeUrl: 'https://www.linkedin.com/in/keochonodom-taing/',
}

export const stats: Stat[] = [
  { number: '3+', label: 'Years exp.' },
  { number: '800K+', label: 'Platform users reached' },
  { number: '10+', label: 'Projects shipped' },
]

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Module Federation', 'Material UI'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'Supabase', 'FastAPI', 'REST APIs', 'Directus'],
  },
  {
    category: 'AI/ML',
    items: ['LangChain', 'Claude API', 'Python', 'PyTorch', 'pgvector', 'Whisper'],
  },
  {
    category: 'Hardware',
    items: ['ESP32', 'C++', 'CircuitPython', 'Fusion 360', '3D Printing'],
  },
  {
    category: 'Infra',
    items: ['Docker', 'GitHub Actions', 'Vercel', 'Supabase'],
  },
]

export const experience: ExperienceEntry[] = [
  {
    company: 'Walmart',
    role: 'Software Engineer III · Contract',
    period: 'Mar 2023 — Present',
    description: 'Contributed to Walmart Creator, a platform serving 800K+ creators and 50K+ storefronts. Led full-stack development across three core systems: Storefront publishing (co-led an architecture redesign that cut publish time from 30 minutes to instant), Affiliate Links (built the generation API across storefronts, collections, and shoppable posts — optimized response time from 300ms to near-zero), and the Marty AI Chatbot (designed system architecture, built the MFE-based UI with Webpack Module Federation, and implemented LangChain agents for creator Q&A).',
    tags: ['Next.js', 'Node.js', 'Directus', 'LangChain', 'Module Federation', 'REST APIs'],
  },
]

export const projects: Project[] = [
  {
    slug: 'speech-pipeline',
    title: 'Speech Pipeline',
    year: '2026',
    tagline: 'Real-time accent conversion pipeline for clearer communication in educational settings.',
    description: 'Real-time accent conversion pipeline that transcribes accented speech and replays it in clear American Standard English. Fine-tuned Whisper ASR on a custom dataset, cutting word error rate from 18% to 12%. Built with a modular ASR + TTS architecture (Piper TTS) for low-latency stream mode. Co-built with Lewis Liu at UW Global Innovation Exchange.',
    type: 'other',
    featured: true,
    heroVideo: '/Speech_pipeline.mp4',
    heroIllustration: 'waveform',
    tech: ['Python', 'Whisper', 'Piper TTS', 'PyTorch', 'HuggingFace', 'wav2vec2'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Dom-Taing/starting_model' },
    ],
    detail: {
      role: 'ML Engineer',
      team: 'Dom Taing\nLewis Liu',
      timeline: 'Feb 2026',
      problem: 'In diverse U.S. universities, instructors with strong regional accents often face comprehension barriers that affect student engagement and evaluation — yet no dedicated real-time accent conversion tool existed. Existing solutions like live transcription tools performed poorly on unfamiliar accents and distracted users from the experience.',
      approach: 'Built a modular ASR + TTS pipeline: audio is preprocessed with a band-pass filter and noise reduction, transcribed by a fine-tuned Whisper model, then immediately synthesized back in clear American English via Piper TTS. Fine-tuned Whisper tiny on a custom 43-minute dataset combined with the ASCEND public corpus, using a learning rate of 5e-5 after running multiple experiments across learning rates and dataset combinations.',
      pullQuote: 'Her accent hadn\'t gone anywhere. But somehow, it felt like hers now.',
      metrics: [
        { number: '12%', label: 'Word Error Rate (down from 18%)' },
        { number: '62ms', label: 'ASR latency (fine-tuned Whisper)' },
        { number: '20ms', label: 'Lowest latency model (wav2vec2)' },
      ],
      stack: [
        { layer: 'ASR', items: ['Whisper (fine-tuned)', 'wav2vec2'] },
        { layer: 'TTS', items: ['Piper TTS', 'hfc_male medium voice'] },
        { layer: 'Audio', items: ['PyTorch', 'noisereduce', 'scipy'] },
        { layer: 'Infra', items: ['HuggingFace', 'Docker'] },
      ],
      screenshots: [],
    },
  },
  {
    slug: 'clinic-management-system',
    title: 'Clinic Management System',
    year: '2024–Present',
    tagline: 'End-to-end clinic management system built from scratch — from doctor interviews to production.',
    description: 'A production-grade clinic management system actively used by medical staff in Cambodia — built end-to-end from user research with doctors through UX design and implementation. Features QR-based staff attendance, full patient and OPD records with prescriptions and diagnosis tracking, IPD workflows (admissions, discharge letters, daily observation charts), Excel/PDF reporting, automated Telegram notifications, role-based access control across multiple clinics, and a fully bilingual English/Khmer UI.',
    type: 'web',
    featured: true,
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Material UI', 'PDF Generation'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Dom-Taing/clinic-server' },
    ],
    detail: {
      role: 'Solo Developer',
      team: 'Solo',
      timeline: 'Sept 2024 — Present',
      problem: 'Clinic staff in Cambodia were managing patient records, staff attendance, and reporting entirely through Excel spreadsheets — error-prone, slow, and inaccessible for Khmer-speaking users. No off-the-shelf solution addressed the specific workflows of small multi-role clinics.',
      approach: 'Started by conducting user research with doctors to gather real requirements, then designed and built the entire system solo — from UX wireframes through to production deployment. Prioritized a bilingual interface and workflows that matched how clinic staff actually work, not how software expects them to.',
      pullQuote: 'Feedback from users: managing the clinic is much easier than manual Excel.',
      metrics: [
        { number: '3', label: 'Clinics actively using the system' },
        { number: '20+', label: 'Staff using it daily' },
      ],
      stack: [
        { layer: 'Frontend', items: ['Next.js 14 (Pages Router)', 'Material UI v7', 'TypeScript'] },
        { layer: 'Backend', items: ['Supabase', 'PostgreSQL', 'Row-Level Security'] },
        { layer: 'Features', items: ['PDF Generation', 'Telegram Bot', 'QR Code Attendance'] },
        { layer: 'i18n', items: ['English', 'Khmer (ភាសាខ្មែរ)'] },
      ],
      screenshots: [
        '/clinic/clinic_login.png',
        '/clinic/clinic_ipd.png',
        '/clinic/clinic_pdf.png',
      ],
    },
  },
  {
    slug: 'hydration-tracker',
    title: 'Hydration Tracker',
    year: '2026',
    tagline: 'Passive water intake monitoring using capacitive sensing and an analog gauge display.',
    description: 'A passive water intake tracker built from two wireless ESP32 nodes. The sensor node clamps onto a water bottle and uses capacitive copper strips to measure water level — a DSP pipeline (median filter → polynomial volume mapping → event detection) distinguishes drink events from refills with ±30mL accuracy. The display node drives an analog stepper gauge to show daily intake at a glance. Built for under $31 with 3D-printed enclosures and ~99 hours of sensor battery life.',
    type: 'other',
    featured: false,
    hidden: true,
    tech: ['ESP32', 'C++', 'Capacitive Sensing', 'DSP', '3D Printing'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Dom-Taing/Hydration-Tracker' },
    ],
    detail: {
      role: 'Hardware & Firmware Engineer',
      team: 'Solo',
      timeline: 'Feb 2026',
      problem: 'People are often unaware of how much water they consume daily. There is no simple, passive way to track intake without manual logging or phone interaction — existing smartwatches and apps all require deliberate input.',
      approach: 'Built two wireless ESP32 nodes: a sensor node (ESP32-S3) clamped to a water bottle reads water level via capacitive copper strips, and a display node (ESP32-C3) drives an analog stepper gauge. A DSP pipeline — median filter over 20 samples, cubic polynomial volume mapping, 30mL/50mL event thresholds, and a 15mL stability check — filters out noise and accurately classifies drink vs. refill events. Calibrated with 3 runs in 30mL increments, fitting a cubic polynomial trendline to the capacitance data.',
      metrics: [
        { number: '±30mL', label: 'Measurement accuracy' },
        { number: '~99hrs', label: 'Sensor battery life (1200mAh)' },
        { number: '$31', label: 'Total build cost' },
      ],
      stack: [
        { layer: 'Firmware', items: ['ESP32-S3 (sensor)', 'ESP32-C3 (display)', 'C++'] },
        { layer: 'Signal', items: ['Capacitive Sensing', 'Median Filter', 'Cubic Polynomial Fit'] },
        { layer: 'Hardware', items: ['3D Printed Enclosure', 'Custom PCB', 'Stepper Motor Gauge'] },
      ],
      screenshots: [
        '/hydration_tracker/devices.jpeg',
        '/hydration_tracker/bottle_cover.jpeg',
        '/hydration_tracker/bottle_perf_board.jpeg',
        '/hydration_tracker/display_pcb.jpeg',
      ],
      screenshotStyle: 'contain',
    },
  },
  {
    slug: 'thoth',
    title: 'Project Thoth',
    year: '2026',
    tagline: 'AI knowledge management system that captures expert knowledge and serves grounded answers.',
    description: 'An AI knowledge management system built for a T-Mobile-sponsored hackathon at UW. An LLM agent interviews subject matter experts to extract domain knowledge, ingests PDFs and documents, and synthesizes entries through a dual-approval workflow (SME + admin) before they reach users. Grounded Q&A via HNSW vector search (pgvector) attributes answers to the source expert. Intelligent routing handles ambiguous queries and escalates out-of-scope questions to the right specialist. Scored across 10 benchmark metrics against 15+ competing teams.',
    type: 'web',
    featured: true,
    tech: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'LangChain', 'Claude', 'Docker'],
    links: [],
    detail: {
      role: 'Developer & Architect',
      team: '4 engineers',
      timeline: 'April 2026 (ongoing)',
      problem: 'Organizations lose critical institutional knowledge when experts leave or are unavailable. Existing Q&A tools hallucinate answers or fail to route questions to the right person — there is no system that captures, validates, and serves expert knowledge reliably with clear attribution.',
      approach: 'Helped design the system architecture and built core features: an LLM-driven SME interview agent with focused follow-up questions, PDF/document ingestion pipeline, dual-approval workflow requiring both SME and admin sign-off before content reaches users, and HNSW vector search via pgvector for grounded Q&A. Engineered for efficiency — single LLM call per query, provider credentials encrypted at rest via pgcrypto, and atomic single-transaction knowledge approval that chunks and embeds entries with no orphaned vectors.',
      metrics: [
        { number: '10', label: 'Benchmark metrics scored' },
        { number: '15+', label: 'Competing teams' },
        { number: '4', label: 'Person team' },
      ],
      stack: [
        { layer: 'Frontend', items: ['Next.js'] },
        { layer: 'Backend', items: ['FastAPI', 'PostgreSQL', 'pgvector'] },
        { layer: 'AI', items: ['LangChain', 'Claude Haiku/Sonnet', 'OpenRouter'] },
        { layer: 'Infra', items: ['Docker', 'pgcrypto'] },
      ],
      screenshots: [],
    },
  },
  {
    slug: 'rhythm-game',
    title: 'Music Rhythm Game',
    year: '2025',
    tagline: 'A handheld 4-lane rhythm game with motion controls, built on custom hardware from scratch.',
    description: 'A handheld 4-lane music rhythm game built on custom hardware. Filled notes are hit with physical buttons; hollow notes trigger on an upward flick detected by the accelerometer — making motion a core input mechanic. Runs on an ESP32-C3 with an OLED display, NeoPixel feedback strip, and DFPlayer Mini for audio. Housed in a laser-cut wood and acrylic enclosure with custom 3D-printed keycaps.',
    type: 'other',
    featured: false,
    hidden: true,
    tech: ['ESP32', 'CircuitPython', 'OLED', 'Accelerometer', 'NeoPixel', 'Laser Cutting', '3D Printing'],
    links: [],
    detail: {
      role: 'Solo Developer & Hardware Engineer',
      team: 'Solo',
      timeline: 'Dec 2025',
      problem: 'Rhythm games exist as software, but building one from scratch in hardware — with custom enclosure, physical input, motion controls, and real audio — requires designing every layer of the stack simultaneously: firmware, game logic, signal processing, and physical form.',
      approach: 'Designed and built the complete hardware and firmware stack solo. The game runs on an ESP32-C3 driving an OLED display, with 4 mechanical keyboard switches for standard note input and an accelerometer for upward-flick gesture detection on hollow notes. Audio playback via DFPlayer Mini with a speaker. NeoPixel strip provides visual feedback on hits. Housed in a laser-cut wood and acrylic enclosure with custom 3D-printed keycaps. Game loop, note timing engine, and difficulty system all implemented in CircuitPython.',
      metrics: [],
      stack: [
        { layer: 'Firmware', items: ['ESP32-C3', 'CircuitPython'] },
        { layer: 'I/O', items: ['OLED Display', 'Accelerometer', 'NeoPixel Strip', 'DFPlayer Mini'] },
        { layer: 'Enclosure', items: ['Laser-Cut Acrylic & Wood', '3D Printed Keycaps'] },
      ],
      screenshots: [
        '/music_game/music_game.jpeg',
      ],
      screenshotStyle: 'contain',
    },
  },
  {
    slug: 'deskflex',
    title: 'DeskFlex',
    year: '2025',
    heroYouTube: 'KCg7JpEvuww',
    hidden: true,
    tagline: 'A spring-loaded retractable cable management system for modern workspaces.',
    description: 'A spring-loaded, retractable cable management system for modern desks. Features a two-piece spool with a hexagonal internal joint for synchronized rotation and a ratchet/pawl locking mechanism. Went through 9 major design iterations before a final pipe-clamp mounting solution. Built as part of TECHIN 511 at UW — contributed clamp/mounting research and enclosure fabrication.',
    type: 'other',
    featured: false,
    tech: ['Fusion 360', '3D Printing', 'Mechanical Design'],
    links: [
      { label: 'Project Page', url: 'https://anuj-nk.github.io/projects/deskflex/' },
    ],
    detail: {
      role: 'Hardware Designer',
      team: 'Veronika Sermeno Pon\nAnuj Kamasamudram\nKeochonodom Taing',
      timeline: 'Dec 2025',
      problem: 'Modern workspaces suffer from cable clutter — chargers, power bricks, and peripherals create tangled, drooping cables that are frustrating to manage. Unlike static cable trays, there was no solution that let cables extend and retract naturally while staying completely out of sight.',
      approach: 'Went through 9 major design iterations exploring spool geometry, spring mechanisms, and mounting strategies. Contributed clamp and mounting research and led enclosure fabrication. Final design uses a two-piece spool with a hexagonal internal joint for synchronized rotation, a ratchet/pawl locking system, and a pipe-clamp under-desk mounting solution. Modeled in Fusion 360 and prototyped with 3D printing.',
      metrics: [
        { number: '9', label: 'Design iterations' },
      ],
      stack: [
        { layer: 'CAD', items: ['Fusion 360'] },
        { layer: 'Fabrication', items: ['3D Printing', 'Mechanical Assembly', 'Commercial Springs'] },
      ],
      screenshots: [
        '/desk_flex/desk_flex.png',
        '/desk_flex/desk_flex1.png',
        '/desk_flex/desk_flex2.png',
      ],
      screenshotStyle: 'contain',
    },
  },
  {
    slug: 'portfolio-v2',
    title: 'Portfolio V2',
    year: '2025',
    hidden: true,
    tagline: 'A forest-green portfolio built with Next.js 16, Tailwind v4, and Framer Motion.',
    description: 'This portfolio — built with Next.js 16, Tailwind CSS v4, and Framer Motion. Japanese Forest + Amber design.',
    type: 'web',
    featured: false,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Dom-Taing/PortfolioV2' },
    ],
    detail: {
      role: 'Designer & Developer',
      team: 'Solo',
      timeline: '2025',
      problem: 'Needed a portfolio that reflected both technical depth and design sensibility — something beyond a standard template that would stand out without being gimmicky.',
      approach: 'Designed a custom Forest + Amber design system from scratch — color tokens, typography scale, spacing — then implemented it with Next.js 16, Tailwind v4, and Framer Motion. Features 3D card tilt on mousemove, hero parallax on scroll, staggered drop-in animations, a full project detail system, and static export to GitHub Pages.',
      metrics: [],
      stack: [
        { layer: 'Frontend', items: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4'] },
        { layer: 'Animation', items: ['Framer Motion'] },
        { layer: 'Deploy', items: ['GitHub Pages', 'GitHub Actions'] },
      ],
      screenshots: [],
    },
  },
]
