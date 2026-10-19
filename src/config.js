
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
            title: "A.X.I.O.M.",
            subtitle: "Enterprise Decision Intelligence & Multi-Agent RAG",
            description: "Enterprise decision intelligence and multi-agent RAG system for automated root-cause analysis across enterprise data.",
            tech: ["Python", "LangGraph", "FastAPI", "ChromaDB", "Neo4j"],
            bullets: [
                "Developed a multi-agent AI workflow for automated root-cause analysis and information retrieval across enterprise data.",
                "Integrated vector search, knowledge graphs, and response verification to generate evidence-backed decision reports."
            ],
            details: {
                problem: "Enterprise data silos and incident response bottlenecks cause delays and lack traceable root-cause explanations across distributed architectures.",
                solution: "Developed a multi-agent AI workflow using LangGraph, integrating ChromaDB vector search and Neo4j knowledge graphs to automate root-cause analysis and information retrieval.",
                result: "Integrated multi-stage response verification pipelines to deliver verified, evidence-backed decision reports with zero hallucinations.",
                gallery: [
                    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                ]
            },
            links: {
                demo: "#",
                github: "https://github.com/subz-lab/ai-agent",
            },
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "The Noir",
            subtitle: "AI-Powered SOC Automation",
            description: "End-to-end SOC pipeline utilizing ML for threat detection, LLM incident reports, and ReAct-based SOAR playbooks.",
            tech: ["Python", "ML", "LLM", "SOAR"],
            bullets: [
                "Developed an end-to-end SOC pipeline using ML to detect and classify cyber threats from log data.",
                "Integrated LLM-generated incident reports and ReAct-based SOAR workflows to automate threat response."
            ],
            details: {
                problem: "Security Operations Centers face alert fatigue and prolonged containment windows when manually inspecting large-scale log streams.",
                solution: "Developed an end-to-end SOC pipeline using ML to detect and classify cyber threats from log data, coupled with autonomous ReAct playbooks.",
                result: "Accelerated threat mitigation with instant LLM-generated incident summaries and automated SOAR response workflows.",
                gallery: [
                    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
                ]
            },
            links: {
                demo: "#",
                github: "https://github.com/subz-lab/The-Noir",
            },
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "CampusChain",
            subtitle: "Blockchain Campus Ecosystem",
            description: "Unified campus payment platform with custom blockchain ledger, QR transactions, P2P transfers, and NFT ticketing.",
            tech: ["Next.js", "Supabase", "JWT", "QR"],
            bullets: [
                "Built a campus payment platform featuring a custom blockchain ledger, QR payments, P2P transfers, and NFT-based event ticketing.",
                "Implemented AI-driven fraud detection with severity classification and real-time transaction synchronization."
            ],
            details: {
                problem: "Traditional campus payment points and ticket distribution suffer from fraud, transaction delay, and third-party fee overhead.",
                solution: "Built a campus payment platform featuring a custom blockchain ledger, QR payments, P2P transfers, and NFT-based event ticketing with Next.js and Supabase.",
                result: "Implemented AI-driven fraud detection with severity classification and real-time transaction synchronization across campus merchants.",
                gallery: [
                    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
                ]
            },
            links: {
                demo: "#",
                github: "https://github.com/subz-lab/campuschain",
            },
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
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
