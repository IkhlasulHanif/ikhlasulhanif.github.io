// ============================================
// SITE CONFIGURATION
// Edit this file to update your website content
// ============================================

const siteConfig = {
    // --- PROFILE ---
    profile: {
        bio: "I am a first-year Ph.D. student in the Natural Language Processing department at MBZUAI and part of <a href=\"https://www.kotolab-mbzuai.com\" target=\"_blank\" rel=\"noopener noreferrer\">KotoLab</a>, fortunate to be advised by Prof. Fajri Koto and Prof. Iryna Gurevych. My research interests broadly cover efficient Large Language Models, safety/security, and multilingual NLP for low-resource languages.",
        
        // OPTIONAL: Uncomment to show hobbies section
        // hobbies: {
        //     title: "Hobbies & Interests",
        //     items: [
        //         "📸 Photography (Street & Landscape)",
        //         "☕ Brewing Espresso",
        //         "🧗 Bouldering / Rock Climbing"
        //     ]
        // }
    },

    // --- YOUR NAME VARIATIONS (for auto-highlighting in author lists) ---
    myNames: [
        "Ikhlasul Akmal Hanif",
        "I. A. Hanif",
        "I.A. Hanif",
        "Ikhlasul A. Hanif"
    ],

    // --- PUBLICATION METADATA ---
    // Maps BibTeX citation keys to venue display name and category
    // Categories: "conference", "workshop", "journal", "preprint"
    publicationMeta: {
        "irawan2025visionlanguagemodelsconfused":         { venue: "CVPR Findings", category: "conference" },
        "cahyawijaya2025crowdsourcecrawlgeneratecreating": { venue: "ACL",          category: "conference" },
        "hanif-etal-2025-university":                     { venue: "SemEval @ ACL", category: "workshop" },
        "chang2025globalpiqaevaluatingphysical":          { venue: "Arxiv",         category: "preprint" },
        "tjitrahardja2025bea":                            { venue: "BEA @ ACL",     category: "workshop" },
        "choudhary2025unveilingmakeslinguisticsolympiad": { venue: "COLM",          category: "conference" },
        "aurelian-tjiaranata-etal-2025-buinus":           { venue: "IWSLT",         category: "workshop" },
        "putra2024magbert":                               { venue: "IEEE Access",   category: "journal" },
    },

    // --- EDUCATION ---
    education: [
        { 
            date: "2025 – Present", 
            degree: "Ph.D. in NLP", 
            school: "MBZUAI", 
            details: ["Advisors: Prof. Fajri Koto & Prof. Iryna Gurevych"] 
        },
        { 
            date: "2021 – 2025", 
            degree: "B. Comp. Sci.", 
            school: "Universitas Indonesia", 
            details: [
                "Cum Laude (GPA 3.80/4.00)",
                "Achievements: 3x 1st Place, 2x 2nd Place, and 2x Finalist in national AI/Data Science competitions",
                "Graduated in 3.5 years"
            ] 
        }
    ],

    // --- EXPERIENCE ---
    experience: [
        {
            date: "May 26 – Present",
            role: "Visiting Researcher",
            org: "Singapore University of Technology and Design (SUTD)",
            orgLink: "https://isakzhang.github.io/group.html",
            details: [
                "Working with Wenxuan Zhang's group on NLP and large language model research."
            ]
        },
        { 
            date: "Feb 25 – Jul 25", 
            role: "AI Coach", 
            org: "Kokocoder Group", 
            details: [
                "Taught high school students AI, guiding them through difficult topics like machine learning, computer vision, and NLP, and created a challenging curriculum and problem sets to help them build both foundational and advanced skills."
            ] 
        },
        { 
            date: "Feb 25 – Jul 25", 
            role: "AI Engineer", 
            org: "PT. Fungsitama Cipta Teknologi", 
            details: [
                "Developed a Retrieval-Augmented Generation (RAG) chatbot and an intelligent API navigation system to handle dynamic user queries and match stakeholder needs with relevant endpoints.",
                "Designed a scalable Visual Language Model (VLM)-based OCR pipeline for structured data extraction from diverse document formats."
            ] 
        },
        { 
            date: "Sep 24 – Nov 24", 
            role: "AI Engineer Intern", 
            org: "Media Kernels Indonesia", 
            details: [
                "Developed an end-to-end RAG chatbot for user inquiries from social media and news data.",
                "Experimented with embedding optimization, retrieval strategies, agentic AI, and chunking methods to improve performance."
            ] 
        },
        { 
            date: "May 24 – Jun 24", 
            role: "Research Intern", 
            org: "MBZUAI", 
            details: [
                "Researched Auto Regressive LMs on Linguistic Puzzle Problems under Prof. Monojit Choudhury.",
                "Resulted in the paper \"UNVEILING: What Makes Linguistics Olympiad Puzzles Tricky for LLMs\""
            ] 
        },
        { 
            date: "Jan 24 – Mar 24", 
            role: "Research Intern", 
            org: "JAIST", 
            details: [
                "Investigated bias mitigation in interviews using a multimodal 78-hour ETS dataset.",
                "Resulted in the paper \"MAG-BERT-ARL for Fair Automated Video Interview Assessment\"."
            ] 
        },
        { 
            date: "Jul 22 – Dec 23", 
            role: "Teaching Assistant", 
            org: "Faculty of Computer Science, UI", 
            details: [
                "Assisted in Discrete Mathematics, Statistics and Probability, and AI & Data Science Fundamentals courses.",
                "Taught students and developed accompanying lab exercises and programming tasks."
            ] 
        }
    ],

    // --- HONORS & AWARDS ---
    // Add story and/or image to make it expandable
    awards: [
        { 
            year: "2025", 
            title: "Grant: OpenAI Microgrant (MBZUAI) | USD 1,000",
            story: "test"
        },
        { 
            year: "2025", 
            title: "3rd Place BEA Shared Task @ ACL on Tutor Detection"
        },
        { 
            year: "2024", 
            title: "1st Winner Data Mining Gemastik XVI"
        },
        { 
            year: "2024", 
            title: "2nd Winner Satria Data Big Data Challenge"
        },
        { 
            year: "2024", 
            title: "Scholarship, Sakura Science Program, Japan Science and Technology Agency"
        },
        { 
            year: "2024", 
            title: "1st Winner Machine Learning Competition, Telkom Institute of Technology"
        },
        { 
            year: "2023", 
            title: "1st Winner Data Competition, Airlangga University"
        },
        { 
            year: "2023", 
            title: "2nd Winner NLP Competition, Intelligo"
        },
        { 
            year: "2023", 
            title: "Finalist Data Mining Gemastik XV"
        },
        { 
            year: "2023", 
            title: "Finalist Data Competition, Gadjah Mada University"
        },
        { 
            year: "2018", 
            title: "1st Winner Programming Competitions, Pelita Harapan University"
        }
    ]
};
