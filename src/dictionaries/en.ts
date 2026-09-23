// Edit this file to personalize the (English) portfolio content.

export const en = {
  locale: "en",

  profile: {
    name: "Anatolii Paziuk",
    role: "Senior Front-End / UI Developer",
    lede: "Frontend developer (React / UI developer) with 6+ years of experience building high-performance web applications, eSports & iGaming platforms, and enterprise UI design systems. Expert in component-driven React architecture, modern CSS, and pixel-perfect layout engineering. Experienced team mentor and technical lead with a focus on code quality and developer experience.",
    initials: "AP",
  },

  cta: {
    viewProjects: "View projects",
    getInTouch: "Get in touch",
  },

  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    certificates: "Certificates",
  },

  pages: {
    about: {
      title: "About Me",
      paragraphs: [
        "I'm a front-end developer with 6+ years of experience, specializing in component-driven React architecture, modern CSS and pixel-perfect layout engineering — with roots in semantic HTML, BEM methodology and hand-written markup going back to the start of my career.",
        "Most of that time has been spent building for esports and iGaming: broadcast software for CS2, Valorant, PUBG/PUBG Mobile and Honor of Kings, competitive platforms used by millions of players, and enterprise UI design systems shared across white-label products. Performance optimization and interface speed have been a constant focus — the platforms I've worked on were high-load, with large numbers of concurrent users.",
        "Until recently, I led front-end development at InsulaLabs, splitting my time between shipping UI, reviewing code and mentoring the team — a role I also held for years through HTML Academy and Webnauts Academy, teaching HTML/CSS layout, adaptive design and JavaScript architecture to both beginners and experienced developers who needed a deeper dive into markup.",
        "I'm not afraid of new challenges — over the course of my career I've repeatedly had to dive into unfamiliar stacks and domains, and it's paid off every time. I value responsibility and clear communication with the team just as much as technical skill: good soft skills matter as much as code that works.",
        "At work, I'm goal-driven and responsible — I've delivered more than once under tight deadlines and in far-from-ideal conditions, and I've learned to see things through to a real result rather than just checking a box.",
        "I'm 36, married, and together with my wife we're raising our daughter — family is a big part of what keeps me motivated to keep growing. An active lifestyle and sport keep me sharp, not just fit — a workout usually clears my head before tackling a hard problem. I'm always pushing to grow, both professionally and personally, and I try to keep a healthy balance between myself, my family and my work — that balance, I've found, is where consistent results actually come from. I'm based in Ukraine and speak Ukrainian, Russian and English.",
      ],
    },
    experience: {
      title: "Experience",
      intro:
        "A closer look at where I've worked and what I actually did there — beyond the one-line summary on the home page.",
    },
    certificates: {
      title: "Certificates",
      emptyTitle: "No certificates yet",
      emptyText:
        "This page is ready to go — certificates and course completions will be added here soon.",
      items: [
        {
          title: "Professional PHP, level 1",
          issuer: "HTML Academy",
          period: "Jan 29 – Mar 6, 2019",
          image: "/certificates/php-level-1.jpg",
        },
        {
          title: "Professional JavaScript, level 3 (React)",
          issuer: "HTML Academy",
          period: "Feb 3 – Apr 8, 2020",
          image: "/certificates/javascript-level-3.jpg",
        },
        {
          title: "Vue JS and Vuex — Building a Real Project from Scratch",
          issuer: "Udemy",
          period: "Feb 26, 2021",
          image: "/certificates/vue-vuex-udemy.jpg",
        },
      ],
    },
  },

  sections: {
    skills: "Skills",
    experience: "Experience",
    mentorExperience: "Mentor Experience",
    projects: "Selected Projects",
    contact: "Contact",
  },

  skillGroups: [
    {
      title: "Core Stack",
      items: [
        "React / Next.js",
        "TypeScript",
        "JavaScript (ES6, ES5, JSON, REST API)",
        "Redux / RTK",
        "Vue",
      ],
    },
    {
      title: "Styling",
      items: [
        "CSS",
        "Sass / SCSS",
        "Less",
        "PostCSS",
        "Tailwind / Bootstrap",
      ],
    },
    {
      title: "Markup & CMS",
      items: ["HTML5", "BEM", "Pug / Jade", "WordPress (ACF, CF7, CPT)"],
    },
    {
      title: "Tooling & Design",
      items: ["Git", "Vite", "Gulp", "NPM", "Figma", "Photoshop", "Jira"],
    },
    {
      title: "AI Assistant",
      items: ["Claude Code (coding assistant)", "AI agents / MCP", "Gemini"],
    },
    {
      title: "Languages",
      items: ["Ukrainian", "Russian", "English (B1 / Intermediate)"],
    },
  ],

  experience: [
    {
      period: "2019 — 2020",
      role: "Markup Developer",
      company: "At-home studio",
      description: "Developed easy markup (HTML, CSS) templates.",
      fullDescription: [
        "Worked as a web developer's assistant — these were my first steps into web development, and they showed me it was a career where I could truly grow and realize myself.",
      ] as string[] | undefined,
    },
    {
      period: "2020 — 2021",
      role: "Frontend Developer + WordPress",
      company: "ISWD studio",
      description:
        "Developed frontend for websites, landing pages and e-commerce platforms using WordPress.",
      fullDescription: [
        "This was already fully independent work — I built layouts from Figma designs and converted them into WordPress markup, and also worked with other CMS platforms like Drupal and OpenCart.",
        "The focus was on markup and layout: landing pages, multi-page websites, online stores and CRM builds of varying complexity.",
      ] as string[] | undefined,
    },
    {
      period: "2021",
      role: "Frontend Developer",
      company: "Webuants Pro",
      description:
        "Developed responsive landing pages, e-commerce platforms and websites. Built SPA applications with Vue, Nuxt and React.",
      fullDescription: [
        "Here I worked with Vue and Nuxt as well as React and Next.js — these were small SPA applications and various kinds of websites, built both for the company itself and on outstaff engagements.",
        "I also handled markup from Figma and WordPress. Development was done alongside a backend team working in Laravel. This was also where I started communicating directly with PMs and clients.",
      ] as string[] | undefined,
    },
    {
      period: "2021 — 2024",
      role: "Frontend Developer (React / Next.js)",
      company: "Starladder (eSport)",
      description:
        "Development and implementation of UI elements and layouts using React.js. Worked on the Gamestars platform in a team with other frontend/backend devs and QA, full Kanban lifecycle.",
      fullDescription: [
        "Work here ran along two directions I was actively involved in.",
        "The first was building and maintaining the Gamestars (PUBGM) platform and the rest of Starladder's interconnected projects. This is where I got my first real taste of a full project cycle on Kanban — PM, frontend, backend, QA. A large product with an extensive component library and non-trivial logic, where the focus was on pixel-perfect markup and performance. Some of the more interesting challenges included building a shop, migrating Next.js versions, and moving the codebase from JSX to TSX.",
        "The second direction was broadcast: building titles, in-game HUDs and various software for broadcasts based on specs from the client and the broadcast team. The challenges here were different — constantly switching between game disciplines, tight deadlines as a rule, RTL markup for Arabic broadcasts, and working with a large, not always well-structured pool of game data, stats and more.",
      ] as string[] | undefined,
    },
    {
      period: "2024 — 2026",
      role: "Senior Front-End / UI Developer · Dev Lead",
      company: "InsulaLabs (iGaming)",
      description:
        "Responsive, cross-browser layout development using best practices and modern approaches. Development and implementation of UI elements. Maintenance of existing interfaces and creation of new ones. White-label projects. Code reviews, mentoring, communication with QA, PO and PDM.",
      fullDescription: [
        "This is an iGaming company under a very strict NDA, so project details are limited to a general overview.",
        "I started here as a Senior Markup Developer and later grew into a Dev Lead — besides my own development work, I led development within a team of three developers.",
        "The focus was on modern, fairly complex mobile-first markup: performance was critical, since the projects had large numbers of users and had to stay fast under load.",
        "We built new brands and supported existing ones, shipped new components and features, and kept improving performance, while staying in close communication with QA, PO, PM and designers. I really enjoyed the work, but I was let go in a layoff.",
      ] as string[] | undefined,
    },
  ],

  mentorExperience: [
    {
      period: "2019 — 2022",
      role: "Mentor, online courses",
      company: "HTML Academy",
      description:
        "HTML and CSS — professional website layout. HTML and CSS — adaptive layout and automation. JavaScript — professional web interface development.",
      fullDescription: [
        "Mentored on three HTML Academy courses at once.",
        "\"HTML and CSS: Professional Website Layout\" is the foundational course, where students learn to build expressive, accessible semantic markup from design files, build page grids, style decorative elements and text content, optimize their code and prepare a project for publishing.",
        "\"HTML and CSS: Adaptive Layout and Automation\" goes deeper — BEM methodology, SCSS preprocessors, adaptive grids, adaptive and retina graphics, and build-automation tooling for the project.",
        "\"JavaScript: Professional Web Interface Development\" is the foundational JS course — language basics and algorithmic thinking, animating static pages, form validation, working with servers via HTTP requests, and practicing typical real-world tasks.",
        "Across all three, I reviewed students' practical assignments, gave feedback, and consulted on markup and code architecture.",
      ] as string[] | undefined,
    },
    {
      period: "2021 — 2022",
      role: "Mentor, offline courses",
      company: "Webnauts Academy",
      description: "Basic frontend for beginners.",
      fullDescription: [
        "This was an interesting experience running offline courses — unlike recorded video lessons, here I had to lecture live, react to questions on the spot, and keep the pace of the class.",
        "I built the course program from scratch and prepared materials and practical projects for students, so theory would stick right away through real tasks.",
        "The course paid off for the company too — several graduates turned out to be strong specialists, and it was rewarding to watch people I'd taught actually grow into the profession.",
      ] as string[] | undefined,
    },
  ],

  projects: {
    thumbLabel: "SCREENSHOT / PREVIEW",
    readMoreLabel: "Read more",
    showLessLabel: "Show less",
    githubLabel: "GitHub",
    liveLabel: "Live site",
    videoLabel: "Watch example",
    items: [
      {
        title: "QUDE Architects",
        description:
          "Website for a Kyiv-based luxury interior design and architecture studio, built at Webnauts. Animated project galleries with Pixi.js-powered visuals and GSAP-driven scroll interactions.",
        tags: ["Nuxt", "SCSS", "BEM", "Pixi.js", "GSAP", "Axios"],
        githubUrl: undefined as string | undefined,
        liveUrl: "https://qudearchitects.com/ua" as string | undefined,
        videoUrl: undefined as string | undefined,
        images: [
          "/projects/qude-architects.jpg",
          "/projects/qude-projects.jpg",
        ] as string[],
      },
      {
        title: "Gamestars Global",
        description:
          "Global landing hub at gamestars.com that routes players to each game's dedicated platform — PUBG Mobile, Brawl Stars, Clash Royale and more. Built the branded star-shaped loading animation that plays on entry before revealing the hero screen. Same stack as the PUBG Mobile Ukraine platform.",
        tags: ["Next.js", "React", "Redux", "PostCSS", "BEM"],
        githubUrl: undefined as string | undefined,
        liveUrl: "https://gamestars.com/en/global" as string | undefined,
        videoUrl: undefined as string | undefined,
        images: [
          "/projects/gamestars-global-hero.jpg",
          "/projects/gamestars-global-loader.jpg",
        ] as string[],
      },
      {
        title: "PUBG Mobile Ukraine (Gamestars)",
        description:
          "Built pixel-perfect UI components for the PUBG Mobile Ukraine esports platform at Gamestars/Starladder, matching complex designs precisely. Worked in Next.js with a focus on rendering performance and clean data handling.",
        tags: ["Next.js", "React", "Redux", "PostCSS", "BEM"],
        githubUrl: undefined as string | undefined,
        liveUrl: "https://pubgm.gamestars.com/en/ukraine" as
          | string
          | undefined,
        videoUrl: undefined as string | undefined,
        images: [
          "/projects/pubgm-gamestars.jpg",
          "/projects/gamestars-ladders.jpg",
          "/projects/gamestars-shop.jpg",
          "/projects/gamestars-find-team.jpg",
        ] as string[],
      },
      {
        title: "Streamly — Broadcast Software",
        description:
          "Broadcast software for esports events — stream titles, lower-thirds, team stat screens, standings and map-veto scenes — built with vanilla JavaScript, jQuery, Sass and HTML.",
        tags: ["Sass", "HTML", "JavaScript", "jQuery", "GSAP", "Chart.js", "WebSocket"],
        githubUrl: undefined as string | undefined,
        liveUrl: undefined as string | undefined,
        videoUrl: "https://www.youtube.com/live/JXxqt2nm4sA?t=7309" as
          | string
          | undefined,
        images: [
          "/projects/broadcast-titles-teamstats-hok.jpg",
          "/projects/broadcast-titles-standings-hok.jpg",
          "/projects/broadcast-titles-montage-hok.jpg",
          "/projects/broadcast-titles-veto-cs2.jpg",
          "/projects/broadcast-titles-standings-compass.jpg",
        ] as string[],
      },
      {
        title: "Live Game HUD",
        description:
          "Real-time in-game HUD for CS and CS2 esports broadcasts — scoreboard with round-by-round history, team money and equipment, and live statistics overlays rendered on top of the game feed — built with vanilla JavaScript, jQuery, Sass and Pug/Jade. Ingests and processes live match data on the fly, driven by an operator control panel used to trigger updates on air.",
        tags: ["Sass", "Pug / Jade", "JavaScript", "jQuery"],
        githubUrl: undefined as string | undefined,
        liveUrl: undefined as string | undefined,
        videoUrl: undefined as string | undefined,
        images: ["/projects/broadcast-hud-scoreboard.jpg"] as string[],
      },
      {
        title: "Broadcast Scene Components",
        description:
          "Component-based scene system for esports broadcasts, built with React and BEM/SCSS — full-screen graphics like round recaps, tournament standings, intros and stat screens, built as reusable components that get restyled and reassembled per tournament branding.",
        tags: ["React", "SCSS", "BEM"],
        githubUrl: undefined as string | undefined,
        liveUrl: undefined as string | undefined,
        videoUrl: undefined as string | undefined,
        images: [
          "/projects/broadcast-scene-lineup-ence-navi.jpg",
          "/projects/broadcast-scene-lineup.jpg",
          "/projects/broadcast-scene-workspace.jpg",
        ] as string[],
      },
    ],
  },

  contact: {
    email: "antpzk7@gmail.com",
    phone: "+38 098 01 00 765",
    telegram: "@AntPzk",
    telegramUrl: "https://t.me/AntPzk",
    linkedinUrl: "https://www.linkedin.com/in/anatolii-paziuk-011436179/",
    githubUrl: "https://github.com/AntPzk90",
  },
};

export type Dictionary = typeof en;
