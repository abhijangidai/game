/*
 * Builds the static SEO game pages in /play and the sitemap.
 * Run: node scripts/build-seo-pages.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE = "https://gamealltime.com/";

const PAGES = [
  {
    slug: "road-fury",
    name: "Road Fury",
    category: "Racing",
    rating: "4.9",
    plays: "125K",
    metaTitle: "Road Fury — Free 3D Car Action Game | Gamealltime",
    metaDesc: "Play Road Fury free in your browser. Survive the 3-minute road, dodge obstacles, smash barriers and unlock 8 cars across 100 action-packed stages.",
    lead: "A three-minute dash through traffic, barriers and chaos. Road Fury is a free 3D browser driving game with 100 stages and eight unlockable cars.",
    about: [
      "Road Fury turns the endless-runner idea into a high-speed road chase. Every stage gives you three minutes to reach the finish, but the route is packed with traffic, roadblocks and hazards. Weaving through cleanly keeps your run alive; hitting obstacles costs time and vehicle health.",
      "Between runs you unlock new cars, each with its own feel, and push deeper into the 100-stage campaign. The controls take seconds to learn, yet the later roads demand quick lane changes and smart use of your attack, block and skill."
    ],
    howto: [
      "Use WASD or the arrow keys to steer between lanes.",
      "Press Space to attack, Shift to block and E to trigger your car skill.",
      "Watch the timer and health bar — grab repair kits before the damage adds up.",
      "Reach the finish line inside three minutes to clear the stage and unlock the next one."
    ],
    controls: ["WASD / Arrows — drive", "Space — attack", "Shift — block", "E — skill"],
    features: [
      "100 stages with a three-minute time limit on every road",
      "8 unlockable cars with different handling and abilities",
      "Traffic, barriers and repairable vehicle damage",
      "Attack, block and skill mechanics for escaping tight spots",
      "Runs directly in the browser with no download"
    ],
    faq: [
      { q: "Is Road Fury free to play?", a: "Yes. Road Fury is completely free to play in your browser on desktop and mobile." },
      { q: "Do I need to download Road Fury?", a: "No download or install is required. Open the page, press play and the 3D game starts instantly." },
      { q: "How many stages are in Road Fury?", a: "The campaign contains 100 stages, and you can unlock and drive eight different cars along the way." }
    ],
    related: ["neon-rush-3d", "dead-zone-3d", "cricket-league-3d"]
  },
  {
    slug: "block-drop-3d",
    name: "Block Drop 3D",
    category: "Puzzle",
    rating: "4.8",
    plays: "24K",
    metaTitle: "Block Drop 3D — Free Neon Puzzle Game | Gamealltime",
    metaDesc: "Play Block Drop 3D free online. Drop neon blocks, clear rows and columns, chain combos, trigger Prism Fever x2 and use bombs, hammers and shuffles. Climb ranks and unlock achievements.",
    lead: "A neon block puzzle with 3D pieces, combo chains, Prism Fever and three game-changing power-ups. No timer, no download — just one more run.",
    about: [
      "Block Drop 3D is a modern take on the falling-block puzzle. Drag pieces onto the board, fill complete rows or columns and keep the stack under control. Chain clears and multi-line drops build the Next Fever meter; every 10 lines ignites Prism Fever, which doubles all points for 20 seconds.",
      "Clear lines to earn bomb, hammer and shuffle charges — one power-up every five lines, up to three of each. Every run feeds a persistent rank ladder from Spark to Prism Master, with XP awarded for score, lines, combos and Fevers. Ten achievements track milestones such as Perfect Clears, five-time combos and 100 lifetime lines.",
      "The game is built to run smoothly at 60 frames per second and supports mouse, touch and keyboard controls. There is no timer and no download, so you can play at your own pace, chase a new high score and restart instantly. Progress is saved locally in your browser."
    ],
    howto: [
      "Drag a 3D piece from the tray onto the grid.",
      "Fill an entire row or column to clear it and open up space.",
      "Chain clears without breaking your run to build the Next Fever meter — every 10 lines triggers Prism Fever x2.",
      "Spend charges earned from line clears: press 1 to bomb a 3×3 area, 2 to hammer one block, or 3 to shuffle the tray.",
      "Empty the whole board for a Perfect Clear bonus, and use Esc to pause or M to mute."
    ],
    controls: ["Mouse / touch — drag pieces", "1 — bomb (then tap a cell)", "2 — hammer (then tap a block)", "3 — shuffle tray", "Esc — pause / cancel targeting", "M — mute"],
    features: [
      "Smooth 3D blocks with a neon arcade look",
      "Row and column clears with chain scoring",
      "Prism Fever x2 every 10 lines, with a live Next Fever meter",
      "Bomb, hammer and shuffle power-ups earned every 5 lines",
      "Perfect Clear bonuses and 10 unlockable achievements",
      "Seven ranks from Spark to Prism Master with persistent XP",
      "Mouse, touch and keyboard controls — no timer or download"
    ],
    faq: [
      { q: "Is Block Drop 3D free?", a: "Yes. The full puzzle game is free to play in your browser with no account required." },
      { q: "Can I play Block Drop 3D on a phone?", a: "Yes. Pieces are dragged with a finger, power-ups are tapped on screen, and the interface adapts to smaller screens." },
      { q: "What is Prism Fever?", a: "Prism Fever is a x2 scoring mode that activates every time you clear 10 lines. It lasts 20 seconds, and the Next Fever meter shows how close you are." },
      { q: "How do power-ups work?", a: "You earn one bomb, hammer or shuffle charge for every 5 lines cleared, up to three of each. Bomb clears a 3×3 area, hammer removes a single block, and shuffle rerolls the piece tray. Press 1, 2 or 3, or tap the buttons at the top right." },
      { q: "Is my progress saved?", a: "Yes. Your best score, total lines, XP, rank and unlocked achievements are saved automatically in your browser's local storage. No account is needed." }
    ],
    related: ["neon-rush-3d", "road-fury", "shadow-hunter"]
  },
  {
    slug: "shadow-hunter",
    name: "Shadow Hunter",
    category: "Action",
    rating: "4.9",
    plays: "38K",
    metaTitle: "Shadow Hunter — Free Stealth Game | Gamealltime",
    metaDesc: "Play Shadow Hunter free. Sneak past vision cones, strike from the shadows and clear 500 stealth stages with five unlockable assassins.",
    lead: "Read the patrol, stay out of the light and strike before anyone raises the alarm. Shadow Hunter is a free top-down stealth game with 500 stages.",
    about: [
      "Shadow Hunter is a stealth-action game played from a top-down view. Every stage is a small puzzle: guards sweep the floor with vision cones, hunters track movement and snipers cover long lanes. One wrong step can end the run.",
      "Use walls, crates and shadow to stay out of sight, then close the distance and strike. The 500-stage campaign expands the maps and mixes in tougher enemy types, while five assassins offer different playstyles and reasons to replay earlier stages."
    ],
    howto: [
      "Move with WASD, the arrow keys or by dragging anywhere on screen.",
      "Stay outside the coloured vision cones and use cover to break line of sight.",
      "Press Space or tap to strike when you are close to a target.",
      "Press Esc at any time to pause the stage."
    ],
    controls: ["WASD / Arrows — move", "Drag — steer", "Space / tap — strike", "Esc — pause"],
    features: [
      "500 hand-built stealth stages with expanding maps",
      "Five unlockable assassins",
      "Guards, hunters, snipers and heavy brutes",
      "Vision cones and cover-based movement",
      "Instant browser play with saved progress"
    ],
    faq: [
      { q: "Is Shadow Hunter free?", a: "Yes. Shadow Hunter is free to play in your browser and needs no download." },
      { q: "How many stages does Shadow Hunter have?", a: "There are 500 stages in the campaign, with difficulty and map size increasing as you progress." },
      { q: "Can I play Shadow Hunter on mobile?", a: "Yes. Drag anywhere on the screen to move and tap to strike." }
    ],
    related: ["shadow-hunter-elite", "dead-zone-3d", "neon-rush-3d"]
  },
  {
    slug: "shadow-hunter-elite",
    name: "Shadow Hunter: Elite",
    category: "Action",
    rating: "5.0",
    plays: "12K",
    metaTitle: "Shadow Hunter: Elite — Free 3D Stealth Game | Gamealltime",
    metaDesc: "Play Shadow Hunter: Elite free. A 3D stealth action game with five assassins, four weapons, smoke bombs, shadow dashes and 500 stages of bosses.",
    lead: "The 3D stealth upgrade: real-time combat, five assassins, four weapons and 500 stages of escalating danger under a follow camera.",
    about: [
      "Shadow Hunter: Elite takes the stealth formula into a full 3D arena. A follow camera and minimap keep the action readable while guards, snipers and brutes patrol expanding maps. You have more tools than before, but enemies react faster and bosses punish careless play.",
      "Build your approach around the situation: sneak past a patrol, drop a smoke bomb to break line of sight, dash through a gap, or slow time and carve a path. Four weapons and five assassins give the campaign plenty of variety across its 500 stages."
    ],
    howto: [
      "Move with WASD or drag; hold Shift to move quietly.",
      "Press Space to strike and use Q for smoke when a fight goes wrong.",
      "Use E to dash through danger and R to slow time.",
      "Read the minimap, pick your moment and clear each stage without raising the alarm."
    ],
    controls: ["WASD / drag — move", "Space — strike", "Shift — sneak", "Q — smoke", "E — dash", "R — slow time"],
    features: [
      "500 stages with bosses and expanding maps",
      "Five assassins and four distinct weapons",
      "Smoke bombs, shadow dashes and time dilation",
      "Follow camera and live minimap",
      "Saved progress and instant browser play"
    ],
    faq: [
      { q: "Is Shadow Hunter: Elite free?", a: "Yes. The full 3D stealth game is free to play in your browser." },
      { q: "What makes Elite different from Shadow Hunter?", a: "Elite adds full 3D combat, a follow camera, a minimap, four weapons, smoke bombs, dashes, time slow and boss fights across 500 stages." },
      { q: "Does Shadow Hunter: Elite save progress?", a: "Yes. Unlocked stages and stars are stored locally in your browser." }
    ],
    related: ["shadow-hunter", "dead-zone-3d", "road-fury"]
  },
  {
    slug: "neon-rush-3d",
    name: "Neon Rush 3D",
    category: "Racing",
    rating: "4.8",
    plays: "18K",
    metaTitle: "Neon Rush 3D — Free Synthwave Runner | Gamealltime",
    metaDesc: "Play Neon Rush 3D free. Race through 40 synthwave levels, switch lanes, jump, slide and unlock endless mode in this fast browser runner.",
    lead: "A synthwave runner with 40 levels, neon traffic and an endless mode for score chasers. Switch lanes, jump, slide and keep the run alive.",
    about: [
      "Neon Rush 3D is a lane-based runner set on a glowing nighttime highway. Traffic, barriers and gaps come at you fast; switch lanes, jump or slide to stay alive. Boost rings and clean runs build your score and keep the speed climbing.",
      "The campaign spans 40 hand-built levels with a star rating on each. Earn stars to unlock new stages and take on the endless mode, where the road keeps getting faster until one mistake ends the run. Every level is playable in a browser with no download."
    ],
    howto: [
      "Use A and D or the left and right arrow keys to switch lanes.",
      "Press W, Up or Space to jump over low obstacles.",
      "Press S or Down to slide under high barriers.",
      "On touch screens, swipe left, right, up or down to move."
    ],
    controls: ["A / D or ← / → — switch lanes", "W / ↑ / Space — jump", "S / ↓ — slide", "Esc — pause"],
    features: [
      "40-level synthwave campaign with star ratings",
      "Endless mode with rising speed",
      "Neon traffic, barriers, gaps and boost rings",
      "Keyboard and swipe controls",
      "Instant play and saved level progress"
    ],
    faq: [
      { q: "Is Neon Rush 3D free?", a: "Yes. The full 40-level campaign and endless mode are free to play in your browser." },
      { q: "How many levels are in Neon Rush 3D?", a: "There are 40 campaign levels, each with a three-star rating, plus an endless mode." },
      { q: "Does Neon Rush 3D work on mobile?", a: "Yes. Swipe in any direction to switch lanes, jump or slide." }
    ],
    related: ["road-fury", "dead-zone-3d", "shadow-hunter-elite"]
  },
  {
    slug: "dead-zone-3d",
    name: "Dead Zone 3D",
    category: "Action",
    rating: "4.9",
    plays: "21K",
    metaTitle: "Dead Zone 3D — Free Zombie Survival Game | Gamealltime",
    metaDesc: "Play Dead Zone 3D free. Survive 24 zombie zones, five waves each, defeat bosses and upgrade your weapons in this 3D browser survival game.",
    lead: "Hold the last city against 24 zombie zones. Move, kite the horde, choose upgrades and topple a boss at the end of every zone.",
    about: [
      "Dead Zone 3D drops you into a collapsing city where the dead keep coming. Each zone is five waves, and every cleared wave lets you choose one of three upgrades. Weapons fire automatically at the nearest target, so your job is to move, manage the horde and stay alive.",
      "Boss waves close out each zone and hit much harder. Upgrade choices shape each run: more damage, faster fire, extra armour, piercing shots or lifesteal. Clear the 24-zone campaign, then see how long you last in endless survival."
    ],
    howto: [
      "Move with WASD, the arrow keys or by dragging on screen.",
      "Your weapon auto-aims and fires — focus on positioning and dodging.",
      "Collect green health drops and pick one of three upgrades after each wave.",
      "Survive five waves to reach the zone boss and unlock the next area."
    ],
    controls: ["WASD / Arrows — move", "Drag — move on touch", "Esc — pause", "M — mute"],
    features: [
      "24-zone campaign with five waves per zone",
      "Boss encounter at the end of every zone",
      "Six upgrade paths including damage, fire rate, armour, pierce and lifesteal",
      "Endless survival mode after the campaign",
      "Auto-fire combat designed for keyboard and touch"
    ],
    faq: [
      { q: "Is Dead Zone 3D free?", a: "Yes. The campaign and endless mode are free to play in your browser." },
      { q: "How many zones are in Dead Zone 3D?", a: "There are 24 zones. Each zone contains five waves and ends with a boss fight." },
      { q: "Do weapons fire automatically?", a: "Yes. Your weapon automatically targets the nearest zombie, so you can concentrate on movement and upgrades." }
    ],
    related: ["shadow-hunter-elite", "neon-rush-3d", "road-fury"]
  },
  {
    slug: "cricket-league-3d",
    name: "Cricket League 3D",
    category: "Sports",
    rating: "4.9",
    plays: "16K",
    metaTitle: "Cricket League 3D — Free Run Chase Game | Gamealltime",
    metaDesc: "Play Cricket League 3D free. Chase 24 targets, time your swing, pick your gap and win with wickets in hand in this 3D browser cricket game.",
    lead: "Twenty-four run chases under the lights. Time the ball, pick your gap and finish with wickets in hand to earn three stars.",
    about: [
      "Cricket League 3D is a browser cricket game built around the chase. You bat from a behind-the-batsman view, aim leg side, straight or off side, and swing as the ball arrives. Timing is everything: a perfect connection clears the rope, a great hit finds the boundary, and a mistimed shot can end up in a fielder's hands.",
      "Each of the 24 matches gives you a target and a limited number of overs. The in-world scoreboard tracks runs, wickets, overs used, required rate and balls left, while the HUD keeps the last six balls and your boundary streak in view. Win with wickets in hand to earn three stars and unlock the next chase."
    ],
    howto: [
      "Use A and D or the left and right arrow keys to aim leg side, straight or off side.",
      "Press Space or tap the screen to swing the bat.",
      "Meet the ball in the green timing window for the cleanest contact.",
      "Mix sixes, fours and quick singles to keep the required rate under control."
    ],
    controls: ["A / D or ← / → — aim", "Space / tap — swing", "Esc — pause"],
    features: [
      "24 run-chase matches with rising targets",
      "In-world scoreboard with overs, target, need and required rate",
      "Timing-based sixes, fours, singles and caught risks",
      "Last six balls and boundary streak tracking",
      "Three-star ratings and saved league progress"
    ],
    faq: [
      { q: "Is Cricket League 3D free?", a: "Yes. All 24 run-chase matches are free to play in your browser." },
      { q: "How does the chase work?", a: "Each match gives you a target and an over limit. Score the target before you run out of balls or lose three wickets." },
      { q: "How do I earn three stars?", a: "Win the chase without losing any wickets. One or two wickets lost awards two or one star." }
    ],
    related: ["road-fury", "neon-rush-3d", "shadow-hunter"]
  }
];

const bySlug = Object.fromEntries(PAGES.map(p => [p.slug, p]));

// Thumbnail files on disk keep the short game names.
const THUMBS = {
  "road-fury": "road-fury-thumb.svg",
  "block-drop-3d": "block-drop-thumb.svg",
  "shadow-hunter": "shadow-hunter-thumb.svg",
  "shadow-hunter-elite": "shadow-hunter-elite-thumb.svg",
  "neon-rush-3d": "neon-rush-thumb.svg",
  "dead-zone-3d": "dead-zone-thumb.svg",
  "cricket-league-3d": "cricket-league-thumb.svg"
};

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function list(items, cls) {
  return items.map(item => `<li>${esc(item)}</li>`).join("");
}

function buildJsonLd(page, pageUrl, thumbUrl) {
  const graph = [
    {
      "@type": "VideoGame",
      "@id": pageUrl + "#game",
      name: page.name,
      url: pageUrl,
      image: thumbUrl,
      description: page.metaDesc,
      genre: page.category,
      gamePlatform: ["Web browser", "PC", "Mobile"],
      applicationCategory: "Game",
      operatingSystem: "Any",
      playMode: "SinglePlayer",
      inLanguage: "en",
      publisher: { "@type": "Organization", name: "Gamealltime", url: SITE },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Games", item: SITE + "#games" },
        { "@type": "ListItem", position: 3, name: page.name, item: pageUrl }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: page.faq.map(item => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a }
      }))
    }
  ];
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
}

function footer() {
  const links = PAGES.map(p => `<a href="../play/${p.slug}.html">Play ${esc(p.name)}</a>`).join("\n        ");
  return `<footer class="footer">
  <div class="footer-inner">
    <div>
      <div class="logo" style="margin-bottom:8px">
        <div class="logo-mark logo-mark--footer"><img src="../assets/img/logo.svg" alt="Gamealltime logo"></div>
        <div><div class="logo-text" style="font-size:18px">Game<span>alltime</span></div><div class="logo-sub">PLAY ANYTIME</div></div>
      </div>
      <p>Free 3D browser games — race, solve, sneak, survive and chase glory. No downloads, instant play.</p>
      <p style="margin-top:10px">© 2026 Gamealltime. Made for players.</p>
    </div>
    <div>
      <h3>Explore</h3>
      <div class="footer-links">
        <a href="../index.html">Home</a>
        <a href="../index.html#games">All Games</a>
        ${links}
      </div>
    </div>
    <div>
      <h3>About</h3>
      <div class="footer-links">
        <a href="../index.html#about">About Gamealltime</a>
        <p>Gamealltime is a free browser game portal. Progress is saved locally in your browser.</p>
      </div>
    </div>
  </div>
  <div class="copy">Gamealltime • New free games added regularly.</div>
</footer>`;
}

function buildPage(page) {
  const pageUrl = `${SITE}play/${page.slug}.html`;
  const gameUrl = `../games/${page.slug}/index.html`;
  const thumbUrl = `${SITE}assets/img/${THUMBS[page.slug]}`;
  const related = page.related.map(slug => {
    const g = bySlug[slug];
    return `<a href="../play/${g.slug}.html"><img class="mini" src="../assets/img/${THUMBS[g.slug]}" alt="" width="34" height="26" loading="lazy"> ${esc(g.name)}</a>`;
  }).join("\n          ");
  const tags = [page.category, "3D", "Free", "Browser"].map(t => `<span class="tag">${esc(t)}</span>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.metaTitle)}</title>
<meta name="description" content="${esc(page.metaDesc)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${pageUrl}">
<meta name="theme-color" content="#ff5a36">
<link rel="icon" type="image/svg+xml" href="../assets/img/logo.svg">

<meta property="og:type" content="website">
<meta property="og:site_name" content="Gamealltime">
<meta property="og:title" content="${esc(page.metaTitle)}">
<meta property="og:description" content="${esc(page.metaDesc)}">
<meta property="og:url" content="${pageUrl}">
<meta property="og:image" content="${thumbUrl}">
<meta property="og:image:alt" content="${esc(page.name)} game thumbnail">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.metaTitle)}">
<meta name="twitter:description" content="${esc(page.metaDesc)}">
<meta name="twitter:image" content="${thumbUrl}">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/css/style.css?v=7">
<link rel="stylesheet" href="../assets/css/seo.css?v=7">
<script type="application/ld+json">
${buildJsonLd(page, pageUrl, thumbUrl)}
</script>
</head>
<body>
<div class="bg"></div>

<header class="header">
  <div class="header-inner">
    <a href="../index.html" class="logo">
      <div class="logo-mark"><img src="../assets/img/logo.svg" alt="Gamealltime logo"></div>
      <div><div class="logo-text">Game<span>alltime</span></div><div class="logo-sub">PLAY ANYTIME</div></div>
    </a>
    <nav class="nav" aria-label="Main navigation">
      <a href="../index.html">Home</a>
      <a href="../index.html#games" class="active">All Games</a>
      <a href="../index.html#about">About</a>
    </nav>
    <div class="actions">
      <a class="btn btn-primary" href="${gameUrl}">⛶ Full Screen</a>
    </div>
  </div>
</header>

<main class="container">
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <a href="../index.html">Home</a><span class="sep">/</span>
    <a href="../index.html#games">Games</a><span class="sep">/</span>
    <span aria-current="page">${esc(page.name)}</span>
  </nav>

  <section class="seo-hero">
    <div class="seo-eyebrow">${esc(page.category)}<span class="dot"></span>3D<span class="dot"></span>Free browser game</div>
    <h1>${esc(page.name)}</h1>
    <p class="seo-lead">${esc(page.lead)}</p>
    <div class="seo-meta">
      <span class="pill strong">★ ${esc(page.rating)} rating</span>
      <span class="pill">${esc(page.plays)} plays</span>
      <span class="pill">Free • No download</span>
      <span class="pill">Plays on desktop &amp; mobile</span>
    </div>
  </section>

  <div class="seo-game-wrap">
    <div class="seo-frame-bar">
      <div><strong>${esc(page.name)}</strong><small>Progress saves automatically in your browser</small></div>
      <div class="seo-frame-actions">
        <a class="btn btn-ghost" href="${gameUrl}" target="_blank" rel="noopener">Open in new tab</a>
      </div>
    </div>
    <iframe class="game-frame" src="${gameUrl}" title="Play ${esc(page.name)} free online" allow="fullscreen; autoplay; gamepad" allowfullscreen loading="eager"></iframe>
  </div>

  <div class="seo-grid">
    <article class="seo-copy">
      <h2>About ${esc(page.name)}</h2>
      <p>${esc(page.about[0])}</p>
      <p>${esc(page.about[1])}</p>

      <h2>How to play ${esc(page.name)}</h2>
      <ul>${list(page.howto)}</ul>

      <h2>Game features</h2>
      <ul>${list(page.features)}</ul>

      <h2>Frequently asked questions</h2>
      <div class="faq">
        ${page.faq.map(item => `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join("\n        ")}
      </div>

      <p class="note">${esc(page.name)} is free to play online at Gamealltime. No install, no account and no download — just open the page and start playing.</p>
    </article>

    <aside class="seo-side" aria-label="Game information">
      <section class="seo-card">
        <h2>Game details</h2>
        <dl class="game-facts">
          <div><dt>Genre</dt><dd>${esc(page.category)}</dd></div>
          <div><dt>Platform</dt><dd>Web browser</dd></div>
          <div><dt>Price</dt><dd>Free</dd></div>
          <div><dt>Download</dt><dd>Not required</dd></div>
          <div><dt>Controls</dt><dd>Keyboard &amp; touch</dd></div>
        </dl>
        <div class="tag-row">${tags}</div>
      </section>

      <section class="seo-card">
        <h2>Controls</h2>
        <div class="howto">
          <h3>Keyboard</h3>
          <ul>${list(page.controls)}</ul>
        </div>
        <div class="seo-play-cta" style="margin-top:12px">
          <a class="btn btn-primary" href="${gameUrl}">▶ Play ${esc(page.name)}</a>
        </div>
      </section>

      <section class="seo-card">
        <h2>More free games</h2>
        <div class="related-list">
          ${related}
          <a href="../index.html#games">Browse all games →</a>
        </div>
      </section>
    </aside>
  </div>
</main>

${footer()}
</body>
</html>
`;
}

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    `<url><loc>${SITE}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
    ...PAGES.map(p => `<url><loc>${SITE}play/${p.slug}.html</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`)
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join("\n  ")}
</urlset>
`;
}

fs.mkdirSync(path.join(ROOT, "play"), { recursive: true });
for (const page of PAGES) {
  fs.writeFileSync(path.join(ROOT, "play", `${page.slug}.html`), buildPage(page), "utf8");
}
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), buildSitemap(), "utf8");
console.log(`Built ${PAGES.length} SEO landing pages and sitemap.xml`);
