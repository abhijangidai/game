// Gamealltime - Light / Simple
let query = "";

const $ = s => document.querySelector(s);
const grid = $("#grid");
const searchEl = $("#search");
const heroCard = $("#heroCard");

function toast(msg){
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("on");
  clearTimeout(t._id);
  t._id = setTimeout(()=> t.classList.remove("on"), 2600);
}
window.toast = toast;

function toggleMobile(){
  const n = document.querySelector(".nav");
  n.style.display = n.style.display==="flex" ? "none" : "flex";
  n.style.flexDirection="column"; n.style.position="absolute"; n.style.top="56px"; n.style.left="12px"; n.style.right="12px";
  n.style.background="#fff"; n.style.border="1px solid #e2e8f0"; n.style.borderRadius="16px"; n.style.padding="10px";
  n.style.boxShadow="0 8px 32px rgba(0,0,0,.08)";
}
window.toggleMobile=toggleMobile;

function buildHero(){
  const f = GAMES[0];
  heroCard.innerHTML = `
    <div class="hero-media" style="background:${f.thumb}">
      <span class="hero-badge">${f.badge || "FEATURED"} • ${f.category.toUpperCase()}</span>
      ${f.thumbImage ? `<img src="${f.thumbImage}" alt="${f.title}" class="hero-media-img">` : `<span class="hero-media-icon">${f.thumbIcon}</span>`}
    </div>
    <div class="hero-content">
      <h1>${f.title} — <span>Stages</span></h1>
      <p>${f.description}</p>
      <div class="hero-meta">
        <span class="pill">★ ${f.rating} • ${f.plays} plays</span>
        <span class="pill">${f.category}</span>
      </div>
      <div class="hero-ctas">
        <a class="btn btn-primary" href="play.html?id=${f.id}">▶ Play Now — Free</a>
        <a class="btn btn-ghost" href="play.html?id=${f.id}">Learn More</a>
      </div>
    </div>`;
}

function cardHTML(g){
  const href = `play.html?id=${g.id}`;
  return `
  <article class="card">
    <a href="${href}" style="display:block">
      <div class="card-thumb" style="background:${g.thumb}">
        ${g.badge?`<span class="card-badge" style="background:${g.badgeColor||'#ff5a36'}">${g.badge}</span>`:''}
        <span class="card-plays">▶ ${g.plays}</span>
        ${g.thumbImage ? `<img src="${g.thumbImage}" alt="${g.title}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0">` : `<span style="position:relative;z-index:1">${g.thumbIcon}</span>`}
      </div>
    </a>
    <div class="card-body">
      <h3 class="card-title">${g.title}</h3>
      <div class="card-cat">${g.category} • ${g.tags ? g.tags.join(" • ") : ""}</div>
      <div class="card-foot">
        <span class="rating">★ ${g.rating.toFixed(1)} <small>(${g.plays})</small></span>
        <a class="btn btn-primary card-btn" href="${href}">Play →</a>
      </div>
    </div>
  </article>`;
}

function getFiltered(){
  if(!query) return GAMES;
  const q = query.toLowerCase();
  return GAMES.filter(g => (g.title + g.category + g.description + (g.tags||[]).join(" ")).toLowerCase().includes(q));
}

function render(){
  const list = getFiltered();
  grid.innerHTML = list.map(cardHTML).join("") || `<div style="text-align:center;padding:40px;color:var(--muted)">No games found for "${query}"</div>`;
}

if(searchEl) searchEl.addEventListener("input", e=>{ query=e.target.value.trim(); render(); });

const yEl = document.getElementById("year");
if(yEl) yEl.textContent = new Date().getFullYear();

buildHero();
render();
