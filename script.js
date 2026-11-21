/* ============ EDIT YOUR CONTENT HERE (everything below renders automatically) ============ */
/* THEMES: add a new line here + a matching [data-theme=name] block in style.css */
const DEFAULT_THEME = "dark";
const THEMES = [["dark","Dark (default)","#1f6fb2"],["light","Light","#e2e8f0"],["purple","Purple","#a78bfa"],["sunset","Sunset","#fb923c"],["forest","Forest","#34d399"]];
const EMAIL = "raselurrahman1@gmail.com";
const DATA = {
  roles: ["Full Stack Web Developer", "Django Developer", "Software Developer", "Cybersecurity Enthusiast"],
  social: [["github","https://github.com/raselurrahman0","GitHub"],["linkedin","https://www.linkedin.com/in/raselurrahman","LinkedIn"],["mail","mailto:"+EMAIL,"Email"]],
  stats: [["5","Projects built"],["1400","International chess rating"],["5.00","GPA in SSC & HSC"]],
  skills: [
    ["code","Web Development",["Python","Django","JavaScript","React","HTML","CSS","PHP (Basic)","Laravel"]],
    ["terminal","Backend & APIs",["Django REST Framework","FastAPI","REST API","JWT Auth","Google OAuth","RTK Query"]],
    ["layers","Tools & Technologies",["MySQL","Git","GitHub","VS Code","MATLAB/Simulink","Node.js","Express.js","MongoDB"]],
    ["shield","Networking & Linux",["TCP/IP","OSI Model","DNS & DHCP","VLAN","Routing","Linux (Ubuntu)","Shell Scripting"]],
    ["cpu","Hardware & Signals",["Electronic Circuits","Digital Logic","Microcontrollers","FFT"]],
    ["users","Soft Skills",["Communication","Teamwork","Critical Thinking","Time Management"]]
  ],
  experience: [
    ["layers","Full-Stack Development","Web applications",`Built web applications end to end: designed REST APIs with Django REST Framework and FastAPI, implemented JWT authentication, Google OAuth and two-factor authentication, connected a React front end using RTK Query, and stored data in MySQL.`],
    ["code","Hackathon Development","AI Launchpad Hackathon",`Built a Medical Report Analyzer web application during the AI Launchpad Hackathon within the event time limit.`],
    ["network","Networking & Linux","Academic labs",`Configured small networks (IP addressing, subnetting, VLANs, UTP cabling, static and dynamic routing) and managed files, permissions and basic shell scripts in Ubuntu.`],
    ["lock","Enterprise RAG Privacy Research","Thesis · In progress",`Exploring privacy risks and privacy-preserving approaches in Retrieval-Augmented Generation systems.`]
  ],
  projects: [
    ["web","globe","Devport","A responsive web application where students can buy courses online by making payments, and teachers can offer their own courses.",["Web App","Payments","Responsive"]],
    ["web","activity","Medical Report Analyzer","A web application built during the AI Launchpad Hackathon to analyze medical reports.",["Web App","Hackathon"]],
    ["security","lock","Full-Stack User Management System","Registration, login, Google OAuth, password recovery, two-factor authentication and account deletion.",["Django REST Framework","React","RTK Query","2FA"]],
    ["web","layers","Portfolio Website","A personal portfolio website to showcase my projects, skills and resume.",["HTML","CSS","JavaScript"],"https://github.com/raselurrahman0/Protfolio-website"],
    ["signals","activity","FFT-Based Bridge Vibration Analyzer","MATLAB/Simulink system that uses FFT, low-pass filtering and spectrum analysis to identify dominant bridge vibration frequencies.",["MATLAB","Simulink","FFT"]],
    ["web","terminal","Calculator & Weather Apps","A responsive calculator, and a weather app that shows real-time reports through API integration.",["HTML","CSS","JavaScript","API"]]
  ],
  filters: [["all","All"],["web","Web"],["security","Security"],["signals","Signals"]],
  services: [
    ["layers","Full-Stack Web Development","End-to-end web apps with Django and React, from planning to deployment."],
    ["terminal","Backend & REST APIs","Django REST Framework and FastAPI APIs with JWT and OAuth authentication."],
    ["globe","Frontend Development","Responsive, user-friendly interfaces with React, HTML, CSS and JavaScript."],
    ["shield","Secure Web Practices","Authentication, two-factor login and security-minded development."]
  ],
  education: [
    ["graduation","B.Sc. in Computer Science & Engineering","Varendra University","Expected June 2027 · Final year"],
    ["book","HSC, Science","Rajshahi Govt. Model School & College","2022 · GPA 5.00"],
    ["book","SSC, Science","Ujalkhalshi High School","2020 · GPA 5.00"]
  ],
  certs: [
    ["award","Full Stack Web Development","Ostad","Completed 2026"],
    ["code","AI Launchpad Hackathon","Hackathon","Participated"],
    ["mic","Tech Debate 4.0","Debate competition","Participated"]
  ],
  activities: [
    ["network","Founding Member","Varendra University Networking & Cyber Security Club (VUNC)"],
    ["book","Member","Varendra University Research Club (VURC)"],
    ["chess","Chess Player","Achieved an international chess rating of 1400."]
  ],
  contact: [["mail","Email",EMAIL,"mailto:"+EMAIL],["phone","Phone","+8801742767562","tel:+8801742767562"],["pin","Location","Rajshahi, Bangladesh",""],["linkedin","LinkedIn","linkedin.com/in/raselurrahman","https://www.linkedin.com/in/raselurrahman"]]
};
/* ================================ ENGINE ================================ */
const P = {
 code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
 shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
 award:'<circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/>',
 mic:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
 cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
 users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
 book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
 network:'<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11l-6 6M12 11l6 6"/>',
 chess:'<path d="M12 2v4M10 4h4"/><path d="M8 22h8M9 22l1-8h4l1 8"/><path d="M7 14h10c0-3-2-5-5-5s-5 2-5 5z"/>',
 graduation:'<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
 database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.7-4 3-9 3s-9-1.3-9-3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/>',
 terminal:'<polyline points="4 17 10 11 4 5"/><path d="M12 19h8"/>',
 activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
 lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
 layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
 globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
 download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><path d="M12 15V3"/>',
 mail:'<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/>',
 phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
 pin:'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
 send:'<path d="M22 2 11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
 sun:'<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
 github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5.1 5.1 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5.1 5.1 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22"/>',
 linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
 palette:'<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2a10 10 0 0 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.3-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4a5 5 0 0 0 5-5C22 6 17.5 2 12 2z"/>',
 file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8M16 17H8M10 9H8"/>',
 eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
 up:'<polyline points="18 15 12 9 6 15"/>', menu:'<path d="M3 6h18M3 12h18M3 18h18"/>', x:'<path d="M18 6 6 18M6 6l12 12"/>', ext:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><path d="M10 14 21 3"/>'
};
const ic = n => `<svg viewBox="0 0 24 24" aria-hidden="true">${P[n]||""}</svg>`;
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const put = (id, html) => $("#" + id).innerHTML = html;
const rv = 'class="card reveal"';
const tags = a => `<div class="tags">${a.map(t => `<span>${t}</span>`).join("")}</div>`;

put("social", DATA.social.map(([i, u, l]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${l}">${ic(i)}</a>`).join(""));
put("stats", DATA.stats.map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join(""));
put("skillsBox", DATA.skills.map(([i, t, a]) => `<div ${rv}><div class="ico">${ic(i)}</div><h5>${t}</h5>${tags(a)}</div>`).join(""));
put("expBox", DATA.experience.map(([i, t, m, d]) => `<div ${rv}><div class="ico">${ic(i)}</div><h5>${t}</h5><div class="meta">${m}</div><p>${d}</p></div>`).join(""));
put("servBox", DATA.services.map(([i, t, d]) => `<div ${rv}><div class="ico">${ic(i)}</div><h5>${t}</h5><p>${d}</p></div>`).join(""));
put("eduBox", DATA.education.map(([i, t, s, y]) => `<div ${rv}><div class="ico">${ic(i)}</div><h5>${t}</h5><div class="meta">${y}</div><p>${s}</p></div>`).join(""));
put("certBox", DATA.certs.map(([i, t, s, st]) => `<div ${rv}><div class="ico">${ic(i)}</div><h5>${t}</h5><p>${s}</p><p><span class="badge">${st}</span></p></div>`).join(""));
put("actBox", DATA.activities.map(([i, t, d]) => `<div ${rv}><div class="ico">${ic(i)}</div><h5>${t}</h5><p>${d}</p></div>`).join(""));
put("info", DATA.contact.map(([i, l, v, h]) => `<li><span class="ico">${ic(i)}</span><div><small class="muted">${l}</small><br>${h ? `<a href="${h}" target="_blank" rel="noopener"><b>${v}</b></a>` : `<b>${v}</b>`}</div></li>`).join(""));

function drawProjects(f) {
  put("projBox", DATA.projects.filter(p => f === "all" || p[0] === f).map(([c, i, t, d, tg, l]) =>
    `<div class="card reveal in"><div class="ico">${ic(i)}</div><h5>${t}</h5><p>${d}</p>${tags(tg)}${l ? `<a class="link" href="${l}" target="_blank" rel="noopener">View on GitHub ${ic("ext")}</a>` : ""}</div>`).join(""));
}
put("filters", DATA.filters.map(([k, l], n) => `<button data-f="${k}" class="${n ? "" : "on"}">${l}</button>`).join(""));
$("#filters").onclick = e => { const b = e.target.closest("button"); if (!b) return; $$("#filters button").forEach(x => x.classList.toggle("on", x === b)); drawProjects(b.dataset.f); };
drawProjects("all");

$$("[data-i]").forEach(el => el.insertAdjacentHTML("afterbegin", ic(el.dataset.i)));

/* theme */
const root = document.documentElement, tm = $("#themes");
const setTheme = t => { if (!THEMES.some(x => x[0] === t)) t = DEFAULT_THEME; root.dataset.theme = t; $$("#themes button").forEach(b => b.classList.toggle("on", b.dataset.t === t)); try { localStorage.setItem("theme", t); } catch (e) {} };
tm.innerHTML = THEMES.map(([k, n, c]) => `<button data-t="${k}" style="--c:${c}"><i></i>${n}</button>`).join("");
let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || DEFAULT_THEME);
$("#theme").onclick = e => { e.stopPropagation(); tm.classList.toggle("o"); };
tm.onclick = e => { const b = e.target.closest("button"); if (b) { setTheme(b.dataset.t); tm.classList.remove("o"); } };
document.addEventListener("click", () => tm.classList.remove("o"));

/* mobile menu, nav state, back to top */
$("#burger").onclick = () => $("#menu").classList.toggle("o");
$$("#menu a").forEach(a => a.onclick = () => $("#menu").classList.remove("o"));
const secs = $$("main section[id]");
addEventListener("scroll", () => {
  $("#nav").classList.toggle("s", scrollY > 10); $("#top").classList.toggle("s", scrollY > 600);
  let cur = ""; secs.forEach(s => { if (scrollY >= s.offsetTop - 120) cur = s.id; });
  $$("#menu a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + cur));
}, { passive: true });
$("#top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

/* reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
$$(".reveal").forEach(el => io.observe(el));

/* typing effect */
(() => { let r = 0, c = 0, del = false; const el = $("#typed");
  (function tick() { const w = DATA.roles[r]; c += del ? -1 : 1; el.textContent = w.slice(0, c);
    let d = del ? 40 : 85; if (!del && c === w.length) { del = true; d = 1400; } else if (del && c === 0) { del = false; r = (r + 1) % DATA.roles.length; d = 350; }
    setTimeout(tick, d); })(); })();

/* resume viewer */
const lb = $("#lb"); $("#viewCv").onclick = $("#cvCard").onclick = () => lb.classList.add("o");
lb.onclick = e => { if (e.target === lb || e.target.closest("#lbx")) lb.classList.remove("o"); };
addEventListener("keydown", e => e.key === "Escape" && lb.classList.remove("o"));

/* contact form -> opens Gmail compose with the message ready */
const toast = m => { const t = $("#toast"); t.textContent = m; t.classList.add("s"); setTimeout(() => t.classList.remove("s"), 3500); };
const body = f => `Hi Rasel,\n\n${f.message.value}\n\nFrom: ${f.name.value}\nEmail: ${f.email.value}`;
$("#form").onsubmit = e => { e.preventDefault(); const f = e.target;
  const u = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(f.subject.value)}&body=${encodeURIComponent(body(f))}`;
  window.open(u, "_blank", "noopener"); toast("Gmail opened. Press Send there to deliver your message."); };
$("#mailto").onclick = e => { e.preventDefault(); const f = $("#form"); if (!f.reportValidity()) return;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.subject.value)}&body=${encodeURIComponent(body(f))}`; };
