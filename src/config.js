
export const config = {
    // META
    meta: {
        title: "Subodh Kudle - Portfolio",
        description: "Computer Engineering Student Portfolio",
        themeColor: "#090e17",
    },

    // PERSONAL IDENTITY
    identity: {
        firstName: "Subodh",
        lastName: "Kudle",
        logoText: "Subodh.K", // Used in Navbar
        tagline: "Architecting Intelligent Systems & Immersive Interfaces",
        shortIntro: "Computer Engineering student specialized in constructing high-performance web platforms, automation backends, and responsive design systems.",
        heroIntros: {
            small: "Hey, I’m",
            // The large name is derived from firstName + lastName, but can be customized here if needed.
        },
        skillIndicators: [
            { id: "#01", label: "Full Stack Engineering" },
            { id: "#02", label: "Intelligent Systems" },
            { id: "#03", label: "Automation Architectures" },
            { id: "#04", label: "Premium Interactions" },
        ],
    },

    // THEME
    theme: {
        accent: "#00F0FF", // Neural Aegis Cyan
        bg: "#090e17",
        text: "#dbe6fe",
    },

    // SOCIAL LINKS
    social: {
        linkedin: "https://www.linkedin.com/in/subodh-kudle-3b2589331/?trk=public-profile-join-page",
        github: "https://github.com/subz-lab",
        instagram: "https://www.instagram.com/suuboddh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },

    // HERO
    hero: {
        headline: "Building Authoritative Web Applications & Intelligent Automation Networks",
        subtext: "Computer Engineering student designing software at the intersection of logical speed, robust scalability, and rich interface design.",
    },

    // SECTIONS
    about: {
        title: "Architecting Systems With Precision",
        bio: "I am an engineering student devoted to building software systems that bridge high-level abstraction with concrete, lightning-fast execution. My journey encompasses automated scripts, machine learning pipelines, and full-stack environments. Guided by architectural discipline and modern aesthetics, I turn complex requirements into robust and delightful products.",
        education: "B.E. in Computer Engineering",
        interests: ["Web Development", "Artificial Intelligence", "System Design", "UI/UX"],
    },

    skills: {
        title: "Skills & Tech Stack",
        icons: [
            { name: "React", type: "Frontend" },
            { name: "Next.js", type: "Frontend" },
            { name: "Node.js", type: "Backend" },
            { name: "Python", type: "Language" },
            { name: "MySQL", type: "Database" },
            { name: "PostgreSQL", type: "Database" },
            { name: "Docker", type: "DevOps" },
            { name: "AWS", type: "Cloud" },
            { name: "n8n", type: "Automation" },
            { name: "UI/UX", type: "Design" },
        ],
    },

    projects: [
        {
            title: "TrustNet AI",
            description: "Multi-model deepfake detector and decentralized media validation protocol.",
            tech: ["React", "Python", "TensorFlow", "FastAPI", "Solidity"],
            details: {
                problem: "Rapid proliferation of digital misinformation and synthetic deepfakes undermining media trust.",
                solution: "Developed a multi-stage pipeline utilizing convolutional neural networks (CNNs) for face-swap detection, coupled with a lightweight smart contract registry to index verified sources.",
                result: "Selected for Google Solution Challenge 2026; achieved 94.2% detection accuracy on synthetic test datasets.",
                gallery: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0", "https://images.unsplash.com/photo-1551288049-bebda4e38f71"]
            },
            links: {
                demo: "#",
                github: "#",
            },
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
        },
        {
            title: "CampusChain",
            description: "Decentralized academic credential ledger and cryptographic badge validation registry.",
            tech: ["Next.js", "Solidity", "Hardhat", "Ethers.js", "IPFS"],
            details: {
                problem: "Academic credential fraud and slow, manual background verification steps by employers.",
                solution: "Created a secure dApp that allows accredited universities to issue tamper-proof certificates as non-transferable soulbound tokens (SBTs) stored on IPFS.",
                result: "Reduced average verification turnaround time from days to sub-second cryptographic checks.",
                gallery: ["https://images.unsplash.com/photo-1557200134-90327ee9fafa", "https://images.unsplash.com/photo-1504868584819-f8e90526354c"]
            },
            links: {
                demo: "#",
                github: "#",
            },
            image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa",
        },
        {
            title: "NeuralTask AI",
            description: "High-throughput cognitive task scheduler utilizing custom LLM prioritization agents.",
            tech: ["React", "Node.js", "LangChain", "OpenAI"],
            details: {
                problem: "Standard priority models fail to adapt to fluid, context-dependent engineering workloads, leading to task saturation.",
                solution: "Engineered a vector-space scheduling assistant that constructs semantic weights based on user bios and upcoming sprint constraints.",
                result: "Optimized personal pipeline velocity by 35% and drastically reduced micro-task decision overhead.",
                gallery: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c", "https://images.unsplash.com/photo-1551288049-bebda4e38f71"]
            },
            links: {
                demo: "#",
                github: "#",
            },
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        },
        {
            title: "SynapseFlow",
            description: "Serverless multi-platform academic sync and calendar automation node.",
            tech: ["Python", "n8n", "Docker", "PostgreSQL"],
            details: {
                problem: "Fragmented educational and corporate portals present siloed calendars, making proactive planning manual and error-prone.",
                solution: "Designed a centralized n8n engine connected to serverless cron tasks to automatically ingest, normalize, and sync updates to Notion databases.",
                result: "Saves 4+ hours weekly with 99.8% uptime across daily scheduled automation sweeps.",
                gallery: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f", "https://images.unsplash.com/photo-1504868584819-f8e90526354c"]
            },
            links: {
                demo: "#",
                github: "#",
            },
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        },
        {
            title: "Aegis Portfolio",
            description: "Modern high-end single page application with custom canvas parallax frame-loading mechanisms.",
            tech: ["React", "Framer Motion", "Lenis", "Tailwind CSS"],
            details: {
                problem: "Standard web portfolios rely on static templates that fail to capture the premium, cinematic nature of modern interfaces.",
                solution: "Engineered a custom frame preloading hook with HTML5 Canvas animation loops, coupled with Lenis inertia scrolling.",
                result: "Achieved fluid 60FPS scroll performance and 100/100 Lighthouse metrics on desktop platforms.",
                gallery: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085", "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"]
            },
            links: {
                demo: "#",
                github: "#",
            },
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
    ],

    experience: [
        {
            year: "2023",
            role: "Web Dev Intern",
            company: "Tech Corp",
            description: "Worked on frontend modules using React.",
        },
        {
            year: "2022",
            role: "Student Volunteer",
            company: "College Club",
            description: "Organized hackathons and tech talks.",
        },
    ],

    faq: [
        { question: "Are you available for freelance?", answer: "Yes, I am open to freelance projects." },
        { question: "What is your primary stack?", answer: "I prefer the MERN stack but am flexible with Python/Django as well." },
    ],

    testimonials: [
        {
            name: "Rahul Sharma",
            role: "Senior Developer @ TechCorp",
            content: "Subodh is an exceptional talent. His ability to blend complex engineering with stunning design is rare and impressive.",
            avatar: "https://i.pravatar.cc/150?u=rahul"
        },
        {
            name: "Ananya Iyer",
            role: "Product Manager @ InnovateX",
            content: "We worked with Subodh on an automation tool, and he delivered beyond our expectations. A highly proactive engineer.",
            avatar: "https://i.pravatar.cc/150?u=ananya"
        },
        {
            name: "John Doe",
            role: "Founder @ StartupGrid",
            content: "His attention to detail in UI/UX and full-stack performance is what sets him apart from other students.",
            avatar: "https://i.pravatar.cc/150?u=john"
        },
        {
            name: "Sarah Lee",
            role: "Tech Lead @ FutureFlow",
            content: "Fast, efficient, and brilliant at communication. Subodh's AI integrations are top-notch.",
            avatar: "https://i.pravatar.cc/150?u=sarah"
        }
    ],

    blog: {
        title: "Latest Thoughts & Engineering Logs",
        posts: [
            {
                id: 1,
                title: "Building the Next-Gen Portfolio with AI",
                excerpt: "Exploring how integrated LLMs and vector search are changing the way we display professional identities online.",
                date: "Jan 24, 2026",
                readTime: "5 min read",
                category: "AI & UX",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
            },
            {
                id: 2,
                title: "Mastering Three.js Shader Effects",
                excerpt: "A deep dive into GLSL liquid distortion and why it's the secret sauce for premium digital agency websites.",
                date: "Jan 15, 2026",
                readTime: "8 min read",
                category: "Graphics",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
            },
            {
                id: 3,
                title: "Automation Workflows for Modern Students",
                excerpt: "How I use n8n and Python to save 10+ hours a week on university administrative tasks.",
                date: "Jan 05, 2026",
                readTime: "4 min read",
                category: "Productivity",
                image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a"
            }
        ]
    }
};
