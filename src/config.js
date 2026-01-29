
export const config = {
    // META
    meta: {
        title: "Subodh Kudle - Portfolio",
        description: "Computer Engineering Student Portfolio",
        themeColor: "#050505",
    },

    // PERSONAL IDENTITY
    identity: {
        firstName: "Subodh",
        lastName: "Kudle",
        logoText: "Subodh.K", // Used in Navbar
        tagline: "Engineering Ideas Into Digital Experiences",
        shortIntro: "Computer Engineering student passionate about building cinematic websites, AI-powered tools, and real-world full stack projects using modern technologies.",
        heroIntros: {
            small: "Hey, I’m",
            // The large name is derived from firstName + lastName, but can be customized here if needed.
        },
        skillIndicators: [
            { id: "#01", label: "Full Stack Development" },
            { id: "#02", label: "AI Web Experiences" },
            { id: "#03", label: "Automation & Tools" },
            { id: "#04", label: "Creative Frontend" },
        ],
    },

    // THEME
    theme: {
        accent: "#646cff", // User can change this color code
        bg: "#050505",
        text: "#ffffff",
    },

    // SOCIAL LINKS
    social: {
        linkedin: "https://www.linkedin.com/in/subodh-kudle-3b2589331/?trk=public-profile-join-page",
        github: "https://github.com/subz-lab",
        instagram: "https://www.instagram.com/suuboddh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },

    // HERO
    hero: {
        headline: "Building Modern Web Apps, AI Tools & Animated Experiences",
        subtext: "Computer Engineering student passionate about building cinematic websites, AI-powered tools, and real-world full stack projects using modern technologies.",
    },

    // SECTIONS
    about: {
        title: "Engineering Ideas Into Digital Experiences",
        bio: "I am a Computer Engineering student with a deep passion for building software that solves real-world problems. My journey started with simple scripts and has evolved into full-stack web applications and AI tools. I love bridging the gap between improved logic and beautiful design.",
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
            title: "Project Alpha",
            description: "A full-stack AI platform helper.",
            tech: ["React", "Node.js", "OpenAI API"],
            details: {
                problem: "Traditional task management tools lacks AI-driven prioritization, leading to user overwhelm.",
                solution: "Developed an intelligent layer that analyzes task deadlines and complexity using LLMs to suggest the most optimal workflow.",
                result: "Increased reported user productivity by 40% and reduced 'decision fatigue' for project managers.",
                gallery: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c", "https://images.unsplash.com/photo-1551288049-bebda4e38f71"]
            },
            links: {
                demo: "#",
                github: "#",
            },
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        },
        {
            title: "Project Beta",
            description: "Automated workflow tool for students.",
            tech: ["Python", "n8n", "AWS"],
            details: {
                problem: "Students spend hours manually syncing assignments from multiple LMS platforms into their calendars.",
                solution: "Built a serverless automation engine using n8n that scrapes and pushes homework schedules into a unified Notion dashboard.",
                result: "Saved an average of 3 hours per week for 200+ beta testers during the initial pilot.",
                gallery: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f", "https://images.unsplash.com/photo-1504868584819-f8e90526354c"]
            },
            links: {
                demo: "#",
                github: "#",
            },
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        },
        {
            title: "Portfolio V1",
            description: "My first personal website.",
            tech: ["HTML", "CSS", "JS"],
            details: {
                problem: "Needed a digital identity to showcase engineering skills beyond a simple PDF resume.",
                solution: "Created a lightweight, zero-dependency site focusing on performance and clean, accessible typography.",
                result: "Lighthouse audit score of 100/100 and served as my primary networking tool during my freshman year.",
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
