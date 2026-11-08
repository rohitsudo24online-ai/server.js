/**
 * Toronto Emergency Plumber — 24/7
 * Single-file Node.js server + 3D Three.js website
 * Run: node server.js  →  http://localhost:3000
 * Emergency: 1-877-470-8966
 */
const http = require("http");

const PORT = process.env.PORT || 3000;
const PHONE = "1-877-470-8966";
const PHONE_TEL = "+18774708966";

/* ============================================================
   HTML
   ============================================================ */
const HTML = `<!DOCTYPE html>
<html lang="en-CA">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>24/7 Emergency Plumber Toronto | Call ${PHONE}</title>
  <meta name="description" content="24 hour emergency plumber Toronto. Burst pipe, flooded basement, water leak, emergency drain cleaning. Call ${PHONE} for urgent same-day plumbing repair in Toronto & GTA." />
  <meta name="keywords" content="emergency plumber Toronto, 24 hour emergency plumber Toronto, emergency plumbing services Toronto, 24/7 plumber Toronto, urgent plumber Toronto, same day plumber Toronto, emergency plumbing repair Toronto, after hours plumber Toronto, weekend emergency plumber Toronto, emergency plumbing near me, burst pipe emergency plumber Toronto, flooded basement plumber Toronto, water leak emergency plumber Toronto, emergency drain cleaning Toronto" />
  <link rel="canonical" href="https://example.com/" />
  <meta property="og:title" content="24/7 Emergency Plumber Toronto | Call ${PHONE}" />
  <meta property="og:description" content="Fast emergency plumbing in Toronto. Burst pipes, leaks, floods, blocked drains. Call ${PHONE}." />
  <meta property="og:type" content="website" />

  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
  <link rel="stylesheet" href="/style.css" />

  <script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js"
    }
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "Toronto Emergency Plumber",
    "telephone": "${PHONE_TEL}",
    "url": "https://example.com/",
    "description": "24/7 emergency plumber in Toronto for burst pipes, flooded basements, water leaks and emergency drain cleaning.",
    "areaServed": ["Toronto","Etobicoke","Scarborough","North York","Mississauga","Vaughan","Markham","Richmond Hill"],
    "address": { "@type":"PostalAddress","addressLocality":"Toronto","addressRegion":"ON","addressCountry":"CA" },
    "openingHoursSpecification": [{
      "@type":"OpeningHoursSpecification",
      "dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens":"00:00","closes":"23:59"
    }]
  }
  </script>
</head>

<body>
  <div class="topbar">
    24/7 Emergency Plumbing Toronto — <a href="tel:${PHONE_TEL}">Call ${PHONE}</a>
  </div>

  <header>
    <div class="container nav">
      <a href="#" class="logo">Toronto <span>Emergency Plumber</span></a>
      <nav>
        <a href="#services">Services</a>
        <a href="#why">Why Us</a>
        <a href="#areas">Areas</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="tel:${PHONE_TEL}" class="btn">📞 Call Now</a>
    </div>
  </header>

  <main>
    <section class="hero" id="hero">
      <canvas id="bg3d" aria-hidden="true"></canvas>
      <div class="hero-overlay"></div>

      <div class="container hero-content">
        <div class="badge">24/7 EMERGENCY • TORONTO &amp; GTA</div>
        <h1>Emergency Plumber Toronto — <span>Fast 3D-Driven Service</span></h1>
        <p>
          Burst pipe, flooded basement, water leak, blocked drain? Call
          <a href="tel:${PHONE_TEL}">${PHONE}</a>
          for 24 hour emergency plumber Toronto, after hours plumber, weekend emergency plumber, and same-day plumbing repair.
        </p>
        <div class="hero-actions">
          <a href="tel:${PHONE_TEL}" class="btn pulse">📞 Call ${PHONE}</a>
          <a href="#contact" class="btn secondary">Request Callback</a>
        </div>
        <ul class="trust">
          <li>24/7 Emergency</li>
          <li>Same-Day Toronto</li>
          <li>Burst Pipe Repair</li>
          <li>GTA Coverage</li>
        </ul>
      </div>

      <div class="scroll-hint">Scroll ↓</div>
    </section>

    <section id="services">
      <div class="container">
        <h2 class="section-title">Emergency Plumbing Services Toronto</h2>
        <p class="section-sub">Urgent plumber Toronto ke liye call karein. Emergency repair, leak, flood, aur drain cleaning handle karte hain.</p>

        <div class="cards">
          <div class="card tilt"><h3>Burst Pipe Emergency</h3><p>Fast pipe repair + water shut-off guidance + damage control.</p></div>
          <div class="card tilt"><h3>Flooded Basement</h3><p>Sump pump issues, backwater valves, emergency water removal.</p></div>
          <div class="card tilt"><h3>Water Leak Emergency</h3><p>Leaking pipes, faucets, toilets, water heaters, hidden leaks.</p></div>
          <div class="card tilt"><h3>Emergency Drain Cleaning</h3><p>Blocked drains, clogged toilets, sewer backups.</p></div>
          <div class="card tilt"><h3>After Hours Plumber</h3><p>Evening &amp; overnight emergency calls when others are closed.</p></div>
          <div class="card tilt"><h3>Weekend Emergency</h3><p>Sat/Sun emergency plumbing repair across Toronto.</p></div>
        </div>
      </div>
    </section>

    <section id="why" class="dark-strip">
      <div class="container why-grid">
        <div>
          <h2 class="section-title">Why Choose Us?</h2>
          <p class="section-sub">Emergency plumbing near me search kar rahe hain? Fast response, upfront pricing, no surprises.</p>
          <ul class="why-list">
            <li>✓ 24/7 plumber Toronto — day, night, weekend</li>
            <li>✓ Same-day plumber Toronto availability</li>
            <li>✓ Burst pipe, leak, flood &amp; drain emergencies</li>
            <li>✓ Upfront pricing before work starts</li>
            <li>✓ Local Toronto &amp; GTA coverage</li>
          </ul>
        </div>
        <div class="call-card">
          <h3>Plumbing Emergency?</h3>
          <p>Abhi call karein — fastest response.</p>
          <a href="tel:${PHONE_TEL}" class="big-phone">${PHONE}</a>
          <p class="small">24 Hour Emergency Plumber Toronto</p>
        </div>
      </div>
    </section>

    <section id="areas">
      <div class="container">
        <h2 class="section-title">Serving Toronto &amp; GTA</h2>
        <div class="areas">
          <span>Toronto</span><span>Etobicoke</span><span>Scarborough</span><span>North York</span>
          <span>Downtown</span><span>Mississauga</span><span>Vaughan</span><span>Markham</span>
          <span>Richmond Hill</span><span>Brampton</span>
        </div>
      </div>
    </section>

    <section id="faq">
      <div class="container">
        <h2 class="section-title">FAQ</h2>
        <div class="faq">
          <details><summary>Do you offer 24 hour emergency plumber Toronto?</summary><p>Yes. Call ${PHONE} any time — 24/7 coverage.</p></details>
          <details><summary>Can you help with a burst pipe?</summary><p>Yes — shut the main valve and call ${PHONE} immediately.</p></details>
          <details><summary>Do you handle flooded basements?</summary><p>Yes — sump pump, backwater valves, and flood response.</p></details>
          <details><summary>Is same-day service available?</summary><p>Depends on location &amp; time. Call to confirm fastest window.</p></details>
          <details><summary>Emergency drain cleaning?</summary><p>Yes — blocked drains, sewer backups, clogged toilets.</p></details>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <div class="container contact-wrap">
        <div>
          <h2 class="section-title light">Call Now: ${PHONE}</h2>
          <p class="muted">Fastest help — phone pe call karein. Ya form se callback request karein.</p>
          <a href="tel:${PHONE_TEL}" class="btn pulse">📞 Call 24/7 Emergency Plumber</a>
        </div>

        <form id="callbackForm" class="form" novalidate>
          <h3>Request Emergency Callback</h3>
          <input type="text"  name="name"    placeholder="Your Name" required />
          <input type="tel"   name="phone"   placeholder="Phone Number" required />
          <select name="service" required>
            <option value="">Select Emergency Type</option>
            <option>Burst Pipe</option>
            <option>Flooded Basement</option>
            <option>Water Leak</option>
            <option>Emergency Drain Cleaning</option>
            <option>After Hours / Weekend</option>
            <option>Other</option>
          </select>
          <textarea name="message" placeholder="Briefly describe the emergency"></textarea>
          <button type="submit" class="btn">Request Callback</button>
          <p id="formMsg" class="form-msg"></p>
        </form>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p><strong>Toronto Emergency Plumber</strong> — 24/7 Emergency Plumbing Services</p>
      <p>Call: <a href="tel:${PHONE_TEL}">${PHONE}</a></p>
      <p class="seo-line">
        Emergency plumber Toronto • 24 hour emergency plumber Toronto • emergency plumbing services Toronto • 24/7 plumber Toronto • urgent plumber Toronto • same day plumber Toronto • emergency plumbing repair Toronto • after hours plumber Toronto • weekend emergency plumber Toronto • emergency plumbing near me • burst pipe emergency plumber Toronto • flooded basement plumber Toronto • water leak emergency plumber Toronto • emergency drain cleaning Toronto
      </p>
      <p>© <span id="year"></span> Toronto Emergency Plumber. All rights reserved.</p>
    </div>
  </footer>

  <a class="sticky-call" href="tel:${PHONE_TEL}">📞 Call 24/7: ${PHONE}</a>

  <script type="module" src="/main.js"></script>
</body>
</html>`;

/* ============================================================
   CSS
   ============================================================ */
const CSS = `* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  color: #0f172a; line-height: 1.6; background: #f8fafc; overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
.container { width: min(1120px, 92%); margin: 0 auto; }

.topbar { background: #991b1b; color: #fff; text-align: center; padding: 8px 12px; font-size: 14px; font-weight: 700; }
.topbar a { text-decoration: underline; }

header {
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e2e8f0;
  position: sticky; top: 0; z-index: 50;
}
.nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 0; }
.logo { font-weight: 900; font-size: 20px; }
.logo span { color: #dc2626; }
nav { display: flex; gap: 18px; font-size: 15px; font-weight: 600; }
nav a:hover { color: #dc2626; }

.btn {
  display: inline-block; background: #dc2626; color: #fff;
  padding: 12px 20px; border-radius: 10px;
  font-weight: 800; border: 0; cursor: pointer;
  box-shadow: 0 8px 20px rgba(220,38,38,0.25);
  transition: transform .2s ease, background .2s ease;
}
.btn:hover { background: #b91c1c; transform: translateY(-2px); }
.btn.secondary { background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.5); box-shadow: none; color: #fff; }
.btn.secondary:hover { background: rgba(255,255,255,0.2); }

.pulse { animation: pulse 2s infinite; }
@keyframes pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(220,38,38,0.55); }
  50%     { box-shadow: 0 0 0 14px rgba(220,38,38,0); }
}

.hero {
  position: relative; min-height: 92vh;
  display: flex; align-items: center; overflow: hidden;
  background: radial-gradient(circle at 30% 20%, #1e3a8a, #0f172a 60%);
  color: #fff; padding: 60px 0;
}
#bg3d { position: absolute; inset: 0; width: 100%; height: 100%; display: block; z-index: 0; }
.hero-overlay {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background: radial-gradient(circle at center, rgba(15,23,42,0) 40%, rgba(15,23,42,0.85) 100%);
}
.hero-content { position: relative; z-index: 2; }
.badge {
  display: inline-block; background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  padding: 7px 14px; border-radius: 999px;
  font-size: 13px; font-weight: 800; letter-spacing: .5px;
  margin-bottom: 18px;
}
.hero h1 {
  font-size: clamp(34px, 5.2vw, 62px);
  line-height: 1.05; letter-spacing: -1.3px;
  max-width: 900px; margin-bottom: 20px;
}
.hero h1 span {
  background: linear-gradient(90deg,#38bdf8,#a855f7,#dc2626);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.hero p { font-size: 19px; max-width: 720px; color: #e2e8f0; margin-bottom: 28px; }
.hero p a { color: #fecaca; font-weight: 900; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 30px; }

.trust { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 820px; list-style: none; }
.trust li {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 12px; border-radius: 12px;
  font-weight: 700; font-size: 14px;
  backdrop-filter: blur(6px);
}

.scroll-hint {
  position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
  color: #cbd5e1; font-size: 13px; letter-spacing: 1px;
  z-index: 2; animation: bob 2s infinite;
}
@keyframes bob { 0%,100% { transform: translate(-50%, 0);} 50% { transform: translate(-50%, 6px);} }

section { padding: 72px 0; }
.section-title {
  font-size: clamp(28px, 3.5vw, 42px);
  line-height: 1.15; letter-spacing: -0.7px; margin-bottom: 12px;
}
.section-title.light { color: #fff; }
.section-sub { color: #475569; max-width: 760px; margin-bottom: 30px; font-size: 17px; }
.muted { color: #cbd5e1; margin-bottom: 20px; }

.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; perspective: 1000px; }
.card {
  background: #fff; border: 1px solid #e2e8f0; border-radius: 16px;
  padding: 22px; box-shadow: 0 8px 24px rgba(15,23,42,0.05);
  transition: transform .35s ease, box-shadow .35s ease;
  will-change: transform;
}
.card h3 { font-size: 20px; margin-bottom: 8px; }
.card p { color: #475569; font-size: 15px; }
.card:hover { box-shadow: 0 16px 40px rgba(15,23,42,0.12); }

.dark-strip { background: linear-gradient(135deg, #1e293b, #0f172a); color: #fff; }
.dark-strip .section-sub { color: #cbd5e1; }
.why-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 28px; align-items: start; }
.why-list { list-style: none; display: grid; gap: 14px; }
.why-list li {
  font-weight: 600; padding: 12px 16px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
}
.call-card {
  background: linear-gradient(135deg,#dc2626,#991b1b);
  border-radius: 18px; padding: 28px;
  box-shadow: 0 20px 50px rgba(220,38,38,0.35);
}
.call-card h3 { font-size: 26px; margin-bottom: 10px; }
.call-card p { color: #fee2e2; }
.call-card .small { color: #fecaca; margin-top: 12px; font-size: 14px; }
.big-phone {
  display: inline-block; font-size: 30px; font-weight: 900;
  color: #fff; margin-top: 14px; letter-spacing: -.5px;
  text-shadow: 0 3px 20px rgba(0,0,0,0.35);
}

.areas { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 6px; }
.areas span {
  background: #fff; border: 1px solid #e2e8f0;
  padding: 9px 14px; border-radius: 999px;
  font-weight: 700; font-size: 14px;
}

.faq { display: grid; gap: 12px; max-width: 900px; }
details {
  background: #fff; border: 1px solid #e2e8f0;
  border-radius: 14px; padding: 16px 18px;
}
summary { cursor: pointer; font-weight: 800; list-style: none; }
summary::-webkit-details-marker { display: none; }
summary::after { content: " +"; float: right; color: #dc2626; font-weight: 900; }
details[open] summary::after { content: " –"; }
details p { color: #475569; margin-top: 10px; }

.contact-section { background: #0f172a; }
.contact-wrap { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 24px; align-items: start; }
.form {
  background: #fff; border-radius: 18px; padding: 24px;
  display: grid; gap: 12px;
}
.form h3 { color: #0f172a; margin-bottom: 4px; }
.form input, .form select, .form textarea {
  width: 100%; padding: 13px 14px;
  border: 1px solid #cbd5e1; border-radius: 10px;
  font: inherit; background: #fff;
}
.form textarea { min-height: 100px; resize: vertical; }
.form button { width: 100%; }
.form-msg { font-size: 14px; font-weight: 700; margin-top: 6px; }
.form-msg.ok { color: #15803d; }
.form-msg.err { color: #b91c1c; }

footer { background: #020617; color: #cbd5e1; padding: 36px 0 90px; font-size: 14px; }
footer strong { color: #fff; }
footer a { color: #fca5a5; font-weight: 800; }
.seo-line { margin-top: 12px; color: #64748b; font-size: 12px; line-height: 1.7; }

.sticky-call {
  display: none; position: fixed; left: 0; right: 0; bottom: 0; z-index: 100;
  background: #dc2626; color: #fff; text-align: center;
  padding: 14px 12px; font-weight: 900; font-size: 17px;
  box-shadow: 0 -8px 24px rgba(0,0,0,0.2);
}

@media (max-width: 900px) {
  nav { display: none; }
  .cards { grid-template-columns: repeat(2, 1fr); }
  .why-grid, .contact-wrap { grid-template-columns: 1fr; }
  .trust { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .hero { min-height: 88vh; padding: 40px 0; }
  .cards { grid-template-columns: 1fr; }
  .nav .btn { padding: 10px 14px; font-size: 14px; }
  .sticky-call { display: block; }
  section { padding: 48px 0; }
  .big-phone { font-size: 24px; }
}`;

/* ============================================================
   CLIENT JS (Three.js 3D scene + UI enhancements)
   ============================================================ */
const JS = `import * as THREE from "three";

/* ---------------- 3D Scene ---------------- */
const canvas = document.getElementById("bg3d");
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0f172a, 0.025);

const renderer = new THREE.WebGLRenderer({
  canvas, antialias: true, alpha: true, powerPreference: "high-performance"
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(0, 2, 14);

/* Lights */
scene.add(new THREE.AmbientLight(0x8899ff, 0.6));

const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
dirLight.position.set(6, 10, 8);
scene.add(dirLight);

const redLight = new THREE.PointLight(0xdc2626, 3, 40, 2);
redLight.position.set(-6, 4, 6);
scene.add(redLight);

const blueLight = new THREE.PointLight(0x38bdf8, 3, 40, 2);
blueLight.position.set(6, -2, 4);
scene.add(blueLight);

/* Glowing torus pipe */
const pipeGeo = new THREE.TorusKnotGeometry(2.4, 0.35, 220, 24, 2, 3);
const pipeMat = new THREE.MeshStandardMaterial({
  color: 0x1e40af, metalness: 0.95, roughness: 0.18,
  emissive: 0x1e3a8a, emissiveIntensity: 0.35
});
const pipe = new THREE.Mesh(pipeGeo, pipeMat);
pipe.position.set(4.2, 0.6, -2);
pipe.rotation.x = Math.PI / 3;
scene.add(pipe);

/* Wireframe overlay */
const wireMat = new THREE.MeshBasicMaterial({
  color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.18
});
const wire = new THREE.Mesh(
  new THREE.TorusKnotGeometry(2.4, 0.36, 120, 16, 2, 3),
  wireMat
);
wire.position.copy(pipe.position);
wire.rotation.copy(pipe.rotation);
scene.add(wire);

/* Central glow sphere */
const coreMat = new THREE.MeshStandardMaterial({
  color: 0x38bdf8, emissive: 0x0ea5e9, emissiveIntensity: 0.7,
  metalness: 0.6, roughness: 0.2, transparent: true, opacity: 0.85
});
const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.6, 3), coreMat);
core.position.set(-4.8, 1.2, -1);
scene.add(core);

/* Water droplets */
const DROPS = 900;
const dropGeo = new THREE.BufferGeometry();
const positions = new Float32Array(DROPS * 3);
const speeds = new Float32Array(DROPS);

for (let i = 0; i < DROPS; i++) {
  positions[i * 3]     = (Math.random() - 0.5) * 40;
  positions[i * 3 + 1] = Math.random() * 40 - 10;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
  speeds[i] = 0.02 + Math.random() * 0.08;
}
dropGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const dropMat = new THREE.PointsMaterial({
  color: 0x7dd3fc, size: 0.12, transparent: true, opacity: 0.85,
  depthWrite: false, blending: THREE.AdditiveBlending
});
const drops = new THREE.Points(dropGeo, dropMat);
scene.add(drops);

/* Floor grid */
const grid = new THREE.GridHelper(60, 40, 0x1e40af, 0x0f172a);
grid.position.y = -8;
grid.material.transparent = true;
grid.material.opacity = 0.35;
scene.add(grid);

/* Mouse parallax */
const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
window.addEventListener("pointermove", (e) => {
  mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.ty = -(e.clientY / window.innerHeight) * 2 + 1;
});

/* Resize */
window.addEventListener("resize", () => {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/* Animate */
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();

  mouse.x += (mouse.tx - mouse.x) * 0.05;
  mouse.y += (mouse.ty - mouse.y) * 0.05;

  pipe.rotation.y = t * 0.25;
  pipe.rotation.x = Math.PI / 3 + Math.sin(t * 0.4) * 0.15;
  wire.rotation.copy(pipe.rotation);
  pipe.position.y = 0.6 + Math.sin(t * 0.8) * 0.25;
  wire.position.y = pipe.position.y;

  const pulse = 1 + Math.sin(t * 2) * 0.08;
  core.scale.setScalar(pulse);
  core.rotation.y = t * 0.4;
  core.rotation.x = t * 0.2;

  redLight.position.x  = -6 + Math.cos(t * 0.7) * 2;
  blueLight.position.x =  6 + Math.sin(t * 0.6) * 2;

  const pos = drops.geometry.attributes.position.array;
  for (let i = 0; i < DROPS; i++) {
    pos[i * 3 + 1] -= speeds[i];
    if (pos[i * 3 + 1] < -10) {
      pos[i * 3 + 1] = 30;
      pos[i * 3]     = (Math.random() - 0.5) * 40;
    }
  }
  drops.geometry.attributes.position.needsUpdate = true;

  camera.position.x = mouse.x * 1.5;
  camera.position.y = 2 + mouse.y * 0.8;
  camera.lookAt(0, 0.5, 0);

  renderer.render(scene, camera);
}
animate();

/* ---------------- UI enhancements ---------------- */

/* 3D tilt cards */
document.querySelectorAll(".tilt").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const rx = ((e.clientY - cy) / r.height) * -8;
    const ry = ((e.clientX - cx) / r.width) * 8;
    card.style.transform = "rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(-4px)";
  });
  card.addEventListener("pointerleave", () => { card.style.transform = ""; });
});

/* Year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Callback form */
const form = document.getElementById("callbackForm");
const msg  = document.getElementById("formMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.textContent = "";
  msg.className = "form-msg";

  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.name || !data.phone) {
    msg.textContent = "Name and phone are required.";
    msg.classList.add("err");
    return;
  }

  try {
    const res = await fetch("/api/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    if (json.ok) {
      msg.textContent = "✅ Request received! For immediate help call 1-877-470-8966.";
      msg.classList.add("ok");
      form.reset();
    } else {
      throw new Error(json.error || "Failed");
    }
  } catch (err) {
    msg.textContent = "⚠️ Could not submit. Please call 1-877-470-8966.";
    msg.classList.add("err");
  }
});`;

/* ============================================================
   HTTP SERVER
   ============================================================ */
function sendJson(res, status, obj) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(obj));
}

const server = http.createServer((req, res) => {
  const url = req.url.split("?")[0];

  /* --- API: callback POST --- */
  if (req.method === "POST" && url === "/api/callback") {
    let body = "";
    req.on("data", (c) => { body += c; if (body.length > 10000) req.destroy(); });
    req.on("end", () => {
      try {
        const data = JSON.parse(body || "{}");
        if (!data.name || !data.phone) {
          return sendJson(res, 400, { ok: false, error: "Name and phone are required." });
        }
        console.log("🚨 CALLBACK REQUEST:", {
          name: data.name,
          phone: data.phone,
          service: data.service || "-",
          message: data.message || "-",
          at: new Date().toISOString()
        });
        sendJson(res, 200, {
          ok: true,
          message: "Callback request received. For immediate help call " + PHONE + "."
        });
      } catch (e) {
        sendJson(res, 400, { ok: false, error: "Invalid JSON body." });
      }
    });
    return;
  }

  /* --- API: health --- */
  if (url === "/api/health") {
    return sendJson(res, 200, {
      ok: true,
      service: "Toronto Emergency Plumber",
      phone: PHONE,
      time: new Date().toISOString()
    });
  }

  /* --- CSS --- */
  if (url === "/style.css") {
    res.writeHead(200, {
      "Content-Type": "text/css; charset=utf-8",
      "Cache-Control": "public, max-age=86400"
    });
    return res.end(CSS);
  }

  /* --- Client JS --- */
  if (url === "/main.js") {
    res.writeHead(200, {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=86400"
    });
    return res.end(JS);
  }

  /* --- Robots --- */
  if (url === "/robots.txt") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("User-agent: *\nAllow: /\nSitemap: https://example.com/sitemap.xml\n");
  }

  /* --- SPA fallback: HTML --- */
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-cache"
  });
  res.end(HTML);
});

server.listen(PORT, () => {
  console.log("");
  console.log("  ✅ Toronto Emergency Plumber server running");
  console.log("  🌐  http://localhost:" + PORT);
  console.log("  📞  Emergency line: " + PHONE);
  console.log("");
});