// Edit this file to personalize the (Ukrainian) portfolio content.

import type { Dictionary } from "./en";

export const uk: Dictionary = {
  locale: "uk",

  profile: {
    name: "Анатолій Пазюк",
    role: "Senior Front-End / UI розробник",
    lede: "Frontend-розробник (React / UI розробник) з 6+ роками досвіду створення високопродуктивних веб-застосунків, платформ у сферах eSports та iGaming, а також корпоративних UI дизайн-систем. Експерт у компонентній архітектурі React, сучасному CSS та піксель-перфектній верстці. Досвідчений ментор команди й технічний лідер із фокусом на якість коду та розробницький досвід.",
    initials: "АП",
  },

  cta: {
    viewProjects: "Переглянути проєкти",
    getInTouch: "Зв'язатися",
  },

  nav: {
    home: "Головна",
    about: "Про мене",
    experience: "Досвід",
    certificates: "Сертифікати",
  },

  pages: {
    about: {
      title: "Про мене",
      paragraphs: [
        "Я front-end розробник з 6+ роками досвіду, спеціалізуюся на компонентній архітектурі React, сучасному CSS та піксель-перфектній верстці — з коренями в семантичному HTML, методології BEM та ручній верстці ще з початку кар'єри.",
        "Більшу частину цього часу я створював софт для eSports та iGaming: програмне забезпечення для трансляцій CS2, Valorant, PUBG/PUBG Mobile та Honor of Kings, конкурентні платформи, якими користуються мільйони гравців, та корпоративні UI дизайн-системи для white-label продуктів. Окремий фокус — оптимізація продуктивності та швидкодія інтерфейсів, адже платформи, з якими я працював, були високонавантаженими і мали велику кількість користувачів.",
        "До нещодавнього часу я очолював front-end розробку в InsulaLabs, поєднуючи розробку UI, рев'ю коду та менторство команди — роль, яку я також роками виконував через HTML Academy та Webnauts Academy, навчаючи верстці HTML/CSS, адаптивному дизайну та архітектурі JavaScript-застосунків як новачків, так і досвідчених розробників, яким потрібне було глибше занурення у верстку.",
        "Я не боюся нових викликів — за роки кар'єри неодноразово доводилося занурюватися в незнайомі стеки та предметні області, і щоразу це давало цінний досвід. Відповідальність і вміння чітко комунікувати з командою я ціную не менше за технічні навички: хороші soft skills так само важливі, як і код, який працює.",
        "У роботі я цілеспрямований і відповідальний: доводилося не раз укладатися у стислі дедлайни та працювати в непростих умовах, і я звик доводити справу до кінця, а не просто закривати задачу для галочки.",
        "Мені 36, я одружений, і разом з дружиною ми виховуємо доньку — саме сім'я нагадує мені, заради чого варто рости далі. Активний спосіб життя та спорт тримають у формі не лише тіло, а й голову: після тренування завжди легше думається над складною задачею. Я постійно прагну розвитку — і в професії, і особисто — та намагаюся тримати баланс між собою, родиною і роботою, бо саме в цьому балансі, як на мене, і народжується стабільний результат. Я живу в Україні та розмовляю українською, російською та англійською.",
      ],
    },
    experience: {
      title: "Досвід",
      intro:
        "Детальніше про те, де я працював і чим саме займався — більше, ніж один рядок на головній сторінці.",
    },
    certificates: {
      title: "Сертифікати",
      emptyTitle: "Сертифікатів поки немає",
      emptyText:
        "Ця сторінка вже готова — сертифікати та завершені курси з'являться тут найближчим часом.",
      items: [
        {
          title: "Professional PHP, level 1",
          issuer: "HTML Academy",
          period: "29 січня – 6 березня 2019",
          image: "/certificates/php-level-1.jpg",
        },
        {
          title: "Professional JavaScript, level 3 (React)",
          issuer: "HTML Academy",
          period: "3 лютого – 8 квітня 2020",
          image: "/certificates/javascript-level-3.jpg",
        },
        {
          title: "Vue JS і Vuex — пишемо реальний проєкт з нуля",
          issuer: "Udemy",
          period: "26 лютого 2021",
          image: "/certificates/vue-vuex-udemy.jpg",
        },
      ],
    },
  },

  sections: {
    skills: "Навички",
    experience: "Досвід роботи",
    mentorExperience: "Менторський досвід",
    projects: "Обрані проєкти",
    contact: "Контакти",
  },

  skillGroups: [
    {
      title: "Основний стек",
      items: [
        "React / Next.js",
        "TypeScript",
        "JavaScript (ES6, ES5, JSON, REST API)",
        "Redux / RTK",
        "Vue",
      ],
    },
    {
      title: "Стилізація",
      items: [
        "CSS",
        "Sass / SCSS",
        "Less",
        "PostCSS",
        "Tailwind / Bootstrap",
      ],
    },
    {
      title: "Розмітка і CMS",
      items: ["HTML5", "BEM", "Pug / Jade", "WordPress (ACF, CF7, CPT)"],
    },
    {
      title: "Інструменти та дизайн",
      items: ["Git", "Vite", "Gulp", "NPM", "Figma", "Photoshop", "Jira"],
    },
    {
      title: "AI-інструменти",
      items: [
        "Claude Code (асистент для кодування)",
        "AI-агенти / MCP",
        "Gemini",
      ],
    },
    {
      title: "Мови",
      items: ["Українська", "Російська", "Англійська (B1 / Intermediate)"],
    },
  ],

  experience: [
    {
      period: "2024 — 2026",
      role: "Senior Front-End / UI розробник · Dev Lead",
      company: "InsulaLabs (iGaming)",
      description:
        "Розробка адаптивної, кросбраузерної верстки з використанням сучасних підходів і найкращих практик. Розробка та впровадження UI-елементів. Підтримка наявних інтерфейсів і створення нових. White-label проєкти. Рев'ю коду, менторство, комунікація з QA, PO та PDM.",
      fullDescription: [
        "Це iGaming-компанія з дуже суворим NDA, тому деталі проєктів обмежені загальним описом.",
        "Почав тут на позиції Senior Markup Developer, згодом виріс до Dev Lead — окрім власної розробки, очолював розробку в команді з трьох розробників.",
        "Фокус був на сучасній, доволі складній mobile-first верстці: продуктивність мала критичне значення, адже проєкти мали велику кількість користувачів і мусили тримати високий перформанс.",
        "Розробляли нові бренди й підтримували вже наявні, впроваджували нові компоненти та фічі, постійно покращували продуктивність, тісно комунікували з QA, PO, PM та дизайнерами. Робота дуже подобалася, але я потрапив під скорочення.",
      ],
    },
    {
      period: "2021 — 2024",
      role: "Frontend-розробник (React / Next.js)",
      company: "Starladder (eSport)",
      description:
        "Розробка та впровадження UI-елементів і макетів на React.js. Робота на платформі Gamestars у команді з frontend/backend-розробниками та QA, повний Kanban-цикл.",
      fullDescription: [
        "Робота велася за двома напрямками, в яких я був активно задіяний.",
        "Перший — розробка та підтримка платформи Gamestars (PUBGM) і решти проєктів Starladder, пов'язаних між собою. Тут я вперше зіткнувся з повноцінним проєктним циклом за Kanban: PM, frontend, backend, QA. Великий проєкт з розлогою бібліотекою компонентів і непростою логікою, де фокус був на піксель-перфектній верстці та продуктивності. З цікавих викликів — розробка магазину, міграція версій Next.js та перехід з JSX на TSX.",
        "Другий напрямок — бродкаст: розробка титрів, ігрових HUD та різного ПЗ для трансляцій за ТЗ від замовника і команди бродкасту. Складнощі тут були свої: доводилося швидко перемикатися з однієї ігрової дисципліни на іншу, працювати в постійно стислі терміни, верстати RTL для арабських трансляцій та мати справу з великим і не завжди структурованим пулом ігрових даних, статистикою й іншим.",
      ],
    },
    {
      period: "2021",
      role: "Frontend-розробник",
      company: "Webuants Pro",
      description:
        "Розробка адаптивних лендингів, e-commerce платформ і вебсайтів. Створення SPA-застосунків на Vue, Nuxt і React.",
      fullDescription: [
        "Тут я вже працював з Vue і Nuxt, а також React і Next.js — це були невеликі SPA-застосунки та різного роду вебсайти, які я розробляв як для компанії, так і на аутстафі.",
        "Також верстав макети з Figma та WordPress. Розробка велась у зв'язці з бекендом, який писали на Laravel. Тут вже доводилося напряму комунікувати з проєктними менеджерами та замовниками.",
      ],
    },
    {
      period: "2020 — 2021",
      role: "Frontend-розробник + WordPress",
      company: "ISWD studio",
      description:
        "Розробка frontend для вебсайтів, лендингів і e-commerce платформ з використанням WordPress.",
      fullDescription: [
        "Це вже була повноцінна самостійна робота: верстав макети з Figma та інтегрував верстку в WordPress, а також працював з іншими CMS — Drupal, OpenCart.",
        "Фокус роботи — верстка: лендинги, багатосторінкові сайти, інтернет-магазини та CRM різної складності.",
      ],
    },
    {
      period: "2019 — 2020",
      role: "Верстальник",
      company: "At-home studio",
      description: "Розробка простих HTML/CSS шаблонів верстки.",
      fullDescription: [
        "Був помічником веброзробника — це були мої перші кроки у вебі, які допомогли зрозуміти, що це чудова професія, де можна повністю самореалізуватися.",
      ],
    },
  ],

  mentorExperience: [
    {
      period: "2019 — 2022",
      role: "Ментор онлайн-курсів",
      company: "HTML Academy",
      description:
        "HTML і CSS — професійна верстка сайтів. HTML і CSS — адаптивна верстка та автоматизація. JavaScript — професійна розробка веб-інтерфейсів.",
      fullDescription: [
        "Був ментором одразу на трьох курсах HTML Academy.",
        "«HTML і CSS. Професійна верстка сайтів» — базовий курс, де студенти вчаться створювати виразну, доступну семантичну верстку за макетами, будувати сітки сторінок, стилізувати декоративні елементи та текстовий контент, оптимізувати код і готувати проєкт до публікації.",
        "«HTML і CSS. Адаптивна верстка та автоматизація» — курс глибше: BEM-методологія, препроцесори (SCSS), адаптивні сітки, робота з адаптивною та retina-графікою, інструменти автоматизації збірки проєкту.",
        "«JavaScript. Професійна розробка веб-інтерфейсів» — базовий курс з JS: основи мови та алгоритмічне мислення, анімація статичних сторінок, валідація даних форм, взаємодія з сервером через HTTP-запити, розбір типових практичних задач.",
        "На кожному курсі я перевіряв практичні роботи студентів, давав фідбек і консультував з питань верстки та архітектури коду.",
      ],
    },
    {
      period: "2021 — 2022",
      role: "Ментор офлайн-курсів",
      company: "Webnauts Academy",
      description: "Базовий frontend для початківців.",
      fullDescription: [
        "Це був цікавий досвід ведення офлайн-курсів — на відміну від запису відео, тут доводилося читати лекції наживо, реагувати на запитання одразу в аудиторії та тримати темп заняття.",
        "Розробляв програму курсу з нуля, готував матеріали та практичні проєкти для студентів, щоб теорія одразу закріплювалася на реальних задачах.",
        "За результатами курсу компанія знайшла для себе кількох хороших спеціалістів — приємно було бачити, як люди, яких навчав, справді виростали в професії.",
      ],
    },
  ],

  projects: {
    thumbLabel: "СКРІНШОТ / ПРЕВ'Ю",
    readMoreLabel: "Читати далі",
    showLessLabel: "Згорнути",
    githubLabel: "GitHub",
    liveLabel: "Live-сайт",
    videoLabel: "Приклад трансляції",
    items: [
      {
        title: "QUDE Architects",
        description:
          "Сайт київської студії дизайну інтер'єрів і архітектури преміум-класу, розроблений у Webnauts. Анімовані галереї проєктів на Pixi.js та скрол-взаємодії на GSAP.",
        tags: ["Nuxt", "SCSS", "BEM", "Pixi.js", "GSAP", "Axios"],
        githubUrl: undefined,
        liveUrl: "https://qudearchitects.com/ua",
        videoUrl: undefined,
        images: [
          "/projects/qude-architects.jpg",
          "/projects/qude-projects.jpg",
        ],
      },
      {
        title: "Gamestars Global",
        description:
          "Глобальний лендинг-хаб на gamestars.com, що спрямовує гравців на платформу кожної гри — PUBG Mobile, Brawl Stars, Clash Royale та інші. Розробив фірмову анімацію завантаження у формі зірок, яка програється при вході перед показом головного екрана. Той самий стек, що й у платформи PUBG Mobile Ukraine.",
        tags: ["Next.js", "React", "Redux", "PostCSS", "BEM"],
        githubUrl: undefined,
        liveUrl: "https://gamestars.com/en/global",
        videoUrl: undefined,
        images: [
          "/projects/gamestars-global-hero.jpg",
          "/projects/gamestars-global-loader.jpg",
        ],
      },
      {
        title: "PUBG Mobile Ukraine (Gamestars)",
        description:
          "Розробляв pixel-perfect UI-компоненти для кіберспортивної платформи PUBG Mobile Ukraine у Gamestars/Starladder, точно відповідно до дизайну. Працював на Next.js із фокусом на оптимізацію рендерингу та чисту роботу з даними.",
        tags: ["Next.js", "React", "Redux", "PostCSS", "BEM"],
        githubUrl: undefined,
        liveUrl: "https://pubgm.gamestars.com/en/ukraine",
        videoUrl: undefined,
        images: [
          "/projects/pubgm-gamestars.jpg",
          "/projects/gamestars-ladders.jpg",
          "/projects/gamestars-shop.jpg",
          "/projects/gamestars-find-team.jpg",
        ],
      },
      {
        title: "Streamly — ПЗ для трансляцій",
        description:
          "Програмне забезпечення для кіберспортивних трансляцій — титри, нижні треті, екрани командної статистики, турнірні сітки та сцени вибору карт — на vanilla JavaScript, jQuery, Sass і HTML.",
        tags: ["Sass", "HTML", "JavaScript", "jQuery", "GSAP", "Chart.js", "WebSocket"],
        githubUrl: undefined,
        liveUrl: undefined,
        videoUrl: "https://www.youtube.com/live/JXxqt2nm4sA?t=7309",
        images: [
          "/projects/broadcast-titles-teamstats-hok.jpg",
          "/projects/broadcast-titles-standings-hok.jpg",
          "/projects/broadcast-titles-montage-hok.jpg",
          "/projects/broadcast-titles-veto-cs2.jpg",
          "/projects/broadcast-titles-standings-compass.jpg",
        ],
      },
      {
        title: "Живий ігровий HUD",
        description:
          "HUD для трансляцій CS та CS2 у реальному часі — табло з історією раундів, гроші та спорядження команд, статистичні оверлеї поверх ігрового відео — на vanilla JavaScript, jQuery, Sass і Pug/Jade. Обробляє ігрові дані у реальному часі, керується панеллю оператора для запуску оновлень в ефірі.",
        tags: ["Sass", "Pug / Jade", "JavaScript", "jQuery"],
        githubUrl: undefined,
        liveUrl: undefined,
        videoUrl: undefined,
        images: ["/projects/broadcast-hud-scoreboard.jpg"],
      },
      {
        title: "Сцени для трансляцій (компоненти)",
        description:
          "Компонентна система сцен для кіберспортивних трансляцій на React та BEM/SCSS — повноекранна графіка на кшталт реєстрів раундів, турнірної сітки, інтро та екранів статистики, зібрана з перевикористовуваних компонентів, які переоформлюються під бренд кожного турніру.",
        tags: ["React", "SCSS", "BEM"],
        githubUrl: undefined,
        liveUrl: undefined,
        videoUrl: undefined,
        images: [
          "/projects/broadcast-scene-lineup-ence-navi.jpg",
          "/projects/broadcast-scene-lineup.jpg",
          "/projects/broadcast-scene-workspace.jpg",
        ],
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
