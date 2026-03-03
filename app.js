/* ─── Advay Kumar Portfolio · app.js ─── */

let slides = [];
let current = 0;

// ─── Slide renderers ───

function renderTitle(slide, idx) {
  return `
    <div class="slide-inner slide-title">
      <div class="title-badge" data-animate data-delay="1">
        <span class="badge-dot"></span>
        Available for Graduate Roles · 2026
      </div>
      <h1 class="headline" data-animate data-delay="2">
        <span class="grad">${slide.headline}</span>
      </h1>
      <p class="subheadline" data-animate data-delay="3">${slide.subheadline || ''}</p>

      <div class="title-stats" data-animate data-delay="4">
        <div class="stat-chip">
          <span class="stat-num" data-count="3.906" data-decimals="3">0</span>
          <span class="stat-label">GPA / 4.00</span>
        </div>
        <div class="stat-chip">
          <span class="stat-num" data-count="3" data-decimals="0">0</span>
          <span class="stat-label">Dean's Honours</span>
        </div>
        <div class="stat-chip">
          <span class="stat-num" data-count="85" data-decimals="0">0</span>
          <span class="stat-label">WAM %</span>
        </div>
        <div class="stat-chip">
          <span class="stat-num" data-count="1" data-decimals="0">0</span>
          <span class="stat-label">ACM Paper</span>
        </div>
      </div>

      <div class="title-tags" data-animate data-delay="5">
        <span class="tag">AI / ML</span>
        <span class="tag">Robotics</span>
        <span class="tag">Full-Stack</span>
        <span class="tag">Enterprise Arch</span>
        <span class="tag">Research</span>
        <span class="tag">Deep Learning</span>
      </div>

      <div class="scroll-hint" data-animate data-delay="6">Space or ↓ to advance</div>
    </div>
    <div class="title-deco" aria-hidden="true">
      <div class="deco-ring ring-1"></div>
      <div class="deco-ring ring-2"></div>
      <div class="deco-ring ring-3"></div>
    </div>
  `;
}

function renderEducation(slide, idx) {
  const modules = [
    { cat: 'Engineering', items: ['Computer Organization & Programming', 'Machine Learning', 'Artificial Intelligence', 'Data Structures & Algorithms'] },
    { cat: 'Systems', items: ['Circuits, Power & Energy', 'Networks', 'RISC-V Architecture', 'VHDL & Verilog'] },
    { cat: 'Commerce', items: ['Strategic Management', 'Organisational Behaviour', 'Social Issues in Organising', 'Supply Chain Fundamentals'] },
  ];
  return `
    <div class="slide-inner">
      <div class="label" data-animate data-delay="1">— Education</div>
      <h2 class="headline" data-animate data-delay="2">${slide.headline}</h2>
      <p class="subheadline" data-animate data-delay="3">${slide.subheadline || ''}</p>

      <div class="edu-grid" data-animate data-delay="4">
        ${modules.map((m, mi) => `
          <div class="edu-card">
            <div class="edu-cat">${m.cat}</div>
            <ul class="edu-items">
              ${m.items.map(it => `<li>${it}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="gpa-bar-wrap" data-animate data-delay="5">
        <div class="gpa-bar-label">
          <span>GPA Progress</span>
          <span class="gpa-val">3.906 / 4.00 &nbsp;·&nbsp; WAM 85.981 &nbsp;·&nbsp; Dean's Honours 2022, 2023 & 2024</span>
        </div>
        <div class="gpa-track">
          <div class="gpa-fill" data-width="97.65"></div>
        </div>
      </div>
    </div>
  `;
}

function renderANZ(slide, idx) {
  return `
    <div class="slide-inner slide-exp">
      <div class="exp-header">
        <div>
          <div class="label" data-animate data-delay="1">— Experience</div>
          <h2 class="headline" data-animate data-delay="2">${slide.headline}</h2>
          <p class="subheadline" data-animate data-delay="3">${slide.subheadline || ''}</p>
        </div>
        <div class="exp-badge" data-animate data-delay="2">
          <div class="exp-badge-dot"></div>
          Nov 2025 – Feb 2026
        </div>
      </div>

      <div class="timeline" data-animate data-delay="4">
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-content">
            <span class="tl-text">AI-assisted reporting with Copilot & advanced prompt engineering</span>
            <span class="tl-arrow">→</span>
            <span class="tl-result">Consistent analytics from governance data</span>
          </div>
        </div>
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-content">
            <span class="tl-text">Automated BAU processes using AI</span>
            <span class="tl-arrow">→</span>
            <span class="tl-result tl-metric">~4 hrs/week saved</span>
          </div>
        </div>
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-content">
            <span class="tl-text">Built executive-facing Confluence & SharePoint artifacts using HTML/CSS/JS macros</span>
          </div>
        </div>
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-content">
            <span class="tl-text">Led governance template enhancements with risk & total cost of ownership analysis</span>
          </div>
        </div>
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-content">
            <span class="tl-text">Presented changes at Architecture Working Group forums</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderResearch(slide, idx) {
  return `
    <div class="slide-inner">
      <div class="label" data-animate data-delay="1">— Research</div>
      <h2 class="headline" data-animate data-delay="2">${slide.headline}</h2>
      <p class="subheadline" data-animate data-delay="3">${slide.subheadline || ''}</p>

      <div class="research-grid" data-animate data-delay="4">
        <div class="pub-card">
          <div class="pub-badge">Published · HRI 2025 · ACM</div>
          <div class="pub-title">VR &amp; Mixed Reality for Remote Warehouse Error Correction</div>
          <div class="pub-meta">Amazon-Funded · Monash Robotics Lab</div>
          <a class="pub-link" href="https://dl.acm.org/doi/10.5555/3721488.3721553" target="_blank" rel="noopener">
            View on ACM dl ↗
          </a>
        </div>

        <div class="tech-stack-card">
          <div class="tech-label">Tech Stack</div>
          <div class="tech-tags">
            <span class="tech-tag">ROS</span>
            <span class="tech-tag">Unity / C#</span>
            <span class="tech-tag">Meta Quest 3</span>
            <span class="tech-tag">MoveIt</span>
            <span class="tech-tag">ROS TCP Endpoint</span>
            <span class="tech-tag">Franka Panda Arm</span>
          </div>
          <div class="tech-label" style="margin-top:20px">Key Deliverables</div>
          <div class="deliverable-list">
            <div class="deliverable">
              <div class="del-icon" style="background:rgba(0,212,255,0.12); color:var(--accent)">✓</div>
              <span>Full paper at prestigious HRI 2025 conference</span>
            </div>
            <div class="deliverable">
              <div class="del-icon" style="background:rgba(124,58,237,0.12); color:#a78bfa">✓</div>
              <span>Remote VR + MR robot arm control system</span>
            </div>
            <div class="deliverable">
              <div class="del-icon" style="background:rgba(16,185,129,0.12); color:var(--accent3)">✓</div>
              <span>Formal user study design & execution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDeepNeuron(slide, idx) {
  const roles = [
    { icon: '◉', title: 'Led AI/ML/DL projects', sub: 'Technical lead across multiple concurrent projects' },
    { icon: '◈', title: 'Recruited & mentored', sub: 'Built and supported the AI/DL team' },
    { icon: '⊕', title: 'University & industry liaison', sub: 'Coordinated with professors & corporates' },
    { icon: '◎', title: 'Evaluated new projects', sub: 'Sourced and scoped future team initiatives' },
  ];
  return `
    <div class="slide-inner">
      <div class="label" data-animate data-delay="1">— Leadership</div>
      <h2 class="headline" data-animate data-delay="2">${slide.headline}</h2>
      <p class="subheadline" data-animate data-delay="3">${slide.subheadline || ''}</p>

      <div class="role-grid" data-animate data-delay="4">
        ${roles.map((r, i) => `
          <div class="role-card">
            <div class="role-icon">${r.icon}</div>
            <div class="role-info">
              <div class="role-title">${r.title}</div>
              <div class="role-sub">${r.sub}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderResearchProjects(slide, idx) {
  return `
    <div class="slide-inner">
      <div class="label" data-animate data-delay="1">— Research Projects</div>
      <h2 class="headline" data-animate data-delay="2">${slide.headline}</h2>

      <div class="project-compare" data-animate data-delay="3">
        <div class="project-card left-project">
          <div class="proj-accent" style="background:var(--accent)"></div>
          <div class="proj-header">
            <span class="proj-tag" style="color:var(--accent); border-color:rgba(0,212,255,0.3)">Medical AI</span>
            <span class="proj-year">Jan – Jun 2023</span>
          </div>
          <div class="proj-title">${slide.left?.title || ''}</div>
          <div class="metric-row">
            <div class="metric">
              <div class="metric-val" style="color:var(--accent)">90%</div>
              <div class="metric-label">Accuracy</div>
            </div>
            <div class="metric">
              <div class="metric-val" style="color:var(--accent)">2026</div>
              <div class="metric-label">Planned IVF Adoption</div>
            </div>
          </div>
          <div class="proj-desc">Optimised ResNet-34 for sperm cell selection — results may inform clinical IVF treatment at Monash IVF.</div>
        </div>

        <div class="project-divider">
          <div class="vs-line"></div>
          <div class="vs-circle">VS</div>
          <div class="vs-line"></div>
        </div>

        <div class="project-card right-project">
          <div class="proj-accent" style="background:var(--accent3)"></div>
          <div class="proj-header">
            <span class="proj-tag" style="color:var(--accent3); border-color:rgba(16,185,129,0.3)">Ecology AI</span>
            <span class="proj-year">Jun – Nov 2022</span>
          </div>
          <div class="proj-title">${slide.right?.title || ''}</div>
          <div class="metric-row">
            <div class="metric">
              <div class="metric-val" style="color:var(--accent3)">80%</div>
              <div class="metric-label">Accuracy</div>
            </div>
            <div class="metric">
              <div class="metric-val" style="color:var(--accent3)">24×</div>
              <div class="metric-label">Faster Analysis</div>
            </div>
          </div>
          <div class="proj-desc">Multi-head 2-way LSTM classifying endangered bird species — cut analysis from 12 hrs to 30 mins.</div>
        </div>
      </div>
    </div>
  `;
}

function renderAwards(slide, idx) {
  const awards = [
    { icon: '🏆', title: 'State Finalist', body: 'AIIA Innovation Awards 2022 — Computer Vision / Mask Detection', color: 'rgba(0,212,255,0.1)', border: 'rgba(0,212,255,0.25)' },
    { icon: '🛡️', title: 'ADF Future Innovators Award', body: 'Australian Defence Force 2021 — Face Mask Detection System', color: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.25)' },
    { icon: '🎓', title: 'Motorola Leader Scholarship', body: '2023 — Motorola Solutions Scholarship for Excellence', color: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' },
    { icon: '📜', title: 'Access Scholarship', body: 'Achieving & Achieving Potential 2022', color: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.25)' },
    { icon: '🏛️', title: 'Parliamentary AI Presenter', body: 'House Standing Committee on Education — GenAI Inquiry 2023', color: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.25)' },
  ];
  return `
    <div class="slide-inner">
      <div class="label" data-animate data-delay="1">— Recognition</div>
      <h2 class="headline" data-animate data-delay="2">${slide.headline}</h2>
      <p class="subheadline" data-animate data-delay="3">${slide.subheadline || ''}</p>

      <div class="awards-grid" data-animate data-delay="4">
        ${awards.map((a) => `
          <div class="award-card" style="--aw-bg:${a.color}; --aw-border:${a.border}">
            <div class="award-icon">${a.icon}</div>
            <div class="award-body">
              <div class="award-title">${a.title}</div>
              <div class="award-body-text">${a.body}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSkills(slide, idx) {
  const categories = [
    {
      name: 'Languages',
      color: 'var(--accent)',
      items: ['Python', 'C++', 'C', 'C#', 'HTML / CSS', 'SQL', 'MATLAB', 'Verilog', 'VHDL', 'R', 'Flutter / Dart', 'Assembly RISC-V']
    },
    {
      name: 'Frameworks & Tools',
      color: '#a78bfa',
      items: ['ROS', 'Unity', 'MoveIt', 'Git', 'MongoDB', 'Android Studio', 'PyCharm', 'Jupyter', 'VSCode', 'LTspice', 'Meta Quest Dev Hub']
    },
    {
      name: 'Domains',
      color: 'var(--accent3)',
      items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Robotics', 'VR / MR', 'Prompt Engineering', 'Enterprise Architecture', 'Research']
    },
    {
      name: 'Management',
      color: '#fbbf24',
      items: ['Jira', 'Confluence', 'SharePoint', 'Kanban', 'Gantt Charts', 'Architecture Working Groups']
    },
  ];
  return `
    <div class="slide-inner">
      <div class="label" data-animate data-delay="1">— Technical Stack</div>
      <h2 class="headline" data-animate data-delay="2">${slide.headline}</h2>

      <div class="skills-grid" data-animate data-delay="3">
        ${categories.map((cat) => `
          <div class="skill-category">
            <div class="cat-name" style="color:${cat.color}">${cat.name}</div>
            <div class="skill-chips">
              ${cat.items.map(item => `
                <span class="skill-chip" style="--chip-color:${cat.color}">${item}</span>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderClosing(slide, idx) {
  return `
    <div class="slide-inner slide-closing">
      <div class="label" data-animate data-delay="1">— Let's Connect</div>
      <h2 class="headline" data-animate data-delay="2"><span class="grad">${slide.headline}</span></h2>
      <p class="subheadline" data-animate data-delay="3">${slide.subheadline || ''}</p>

      <div class="contact-grid" data-animate data-delay="4">
        <a class="contact-card" href="mailto:advaykumar2004@gmail.com">
          <div class="contact-icon" style="background:rgba(0,212,255,0.1); border-color:rgba(0,212,255,0.25)">✉</div>
          <div class="contact-body">
            <div class="contact-type">Email</div>
            <div class="contact-val">advaykumar2004@gmail.com</div>
          </div>
          <div class="contact-arrow">↗</div>
        </a>
        <a class="contact-card" href="tel:+61410377289">
          <div class="contact-icon" style="background:rgba(124,58,237,0.1); border-color:rgba(124,58,237,0.25)">✆</div>
          <div class="contact-body">
            <div class="contact-type">Phone</div>
            <div class="contact-val">(+61) 410 377 289</div>
          </div>
          <div class="contact-arrow">↗</div>
        </a>
        <a class="contact-card" href="https://linkedin.com/in/advay-kumar" target="_blank" rel="noopener">
          <div class="contact-icon" style="background:rgba(16,185,129,0.1); border-color:rgba(16,185,129,0.25)">in</div>
          <div class="contact-body">
            <div class="contact-type">LinkedIn</div>
            <div class="contact-val">Advay Kumar</div>
          </div>
          <div class="contact-arrow">↗</div>
        </a>
        <a class="contact-card" href="https://github.com/AKoder123" target="_blank" rel="noopener">
          <div class="contact-icon" style="background:rgba(251,191,36,0.1); border-color:rgba(251,191,36,0.25)">⌥</div>
          <div class="contact-body">
            <div class="contact-type">GitHub</div>
            <div class="contact-val">AKoder123</div>
          </div>
          <div class="contact-arrow">↗</div>
        </a>
      </div>

      ${slide.note ? `
        <div class="website-pill" data-animate data-delay="5">
          <span class="pulse-dot"></span>
          <a href="${slide.note}" target="_blank" rel="noopener">${slide.note}</a>
        </div>
      ` : ''}
    </div>
  `;
}

// ─── Route slides ───
function renderSlide(slide, i) {
  const n = i + 1;
  if (slide.type === 'title')      return renderTitle(slide, n);
  if (slide.type === 'closing')    return renderClosing(slide, n);
  if (slide.type === 'beforeAfter') return renderResearchProjects(slide, n);
  if (slide.type === 'section')    return renderEducation(slide, n);
  // content slides routed by headline keyword
  if (slide.headline.includes('ANZ'))        return renderANZ(slide, n);
  if (slide.headline.includes('Robotics'))   return renderResearch(slide, n);
  if (slide.headline.includes('DeepNeuron')) return renderDeepNeuron(slide, n);
  if (slide.headline.includes('Awards'))     return renderAwards(slide, n);
  if (slide.headline.includes('Skills'))     return renderSkills(slide, n);
  return renderANZ(slide, n);
}

// ─── Build deck ───
function buildDeck(data) {
  slides = data.slides;
  const deck = document.getElementById('deck');
  const total = slides.length;

  deck.innerHTML = slides.map((slide, i) => `
    <section class="slide slide-${slide.type}" id="slide-${i}" data-index="${i}">
      ${renderSlide(slide, i)}
    </section>
  `).join('');

  document.querySelector('.logo').textContent = 'AK';
  document.title = data.meta?.title || 'Advay Kumar';
  document.getElementById('slideCounter').textContent = `01 / ${String(total).padStart(2,'0')}`;

  initObserver(total);
  initKeyboard();
  initNavbarOffset();
  setupPdfExport();

  setTimeout(() => {
    const first = document.getElementById('slide-0');
    if (first) { first.classList.add('is-active'); triggerEffects(first); }
  }, 120);
}

// ─── Per-slide JS effects ───
function triggerEffects(el) {
  // Stat counters
  el.querySelectorAll('[data-count]').forEach(num => {
    const target = parseFloat(num.dataset.count);
    const dec = parseInt(num.dataset.decimals || '0', 10);
    const dur = 1300;
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      num.textContent = (target * ease).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick);
    };
    setTimeout(() => requestAnimationFrame(tick), 500);
  });

  // GPA bar
  el.querySelectorAll('.gpa-fill[data-width]').forEach(bar => {
    setTimeout(() => { bar.style.width = bar.dataset.width + '%'; }, 700);
  });

  // Stagger skill chips
  el.querySelectorAll('.skill-chip').forEach((chip, i) => {
    chip.style.cssText = 'opacity:0;transform:scale(0.8)';
    setTimeout(() => {
      chip.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      chip.style.opacity = '1'; chip.style.transform = 'scale(1)';
    }, 350 + i * 38);
  });

  // Stagger awards
  el.querySelectorAll('.award-card').forEach((card, i) => {
    card.style.cssText = 'opacity:0;transform:translateX(-14px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1'; card.style.transform = 'none';
    }, 280 + i * 85);
  });

  // Stagger timeline items
  el.querySelectorAll('.tl-item').forEach((item, i) => {
    item.style.cssText = 'opacity:0;transform:translateX(-10px)';
    setTimeout(() => {
      item.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      item.style.opacity = '1'; item.style.transform = 'none';
    }, 380 + i * 80);
  });

  // Role cards
  el.querySelectorAll('.role-card').forEach((card, i) => {
    card.style.cssText = 'opacity:0;transform:translateY(10px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      card.style.opacity = '1'; card.style.transform = 'none';
    }, 350 + i * 70);
  });

  // Contact cards
  el.querySelectorAll('.contact-card').forEach((card, i) => {
    card.style.cssText = 'opacity:0;transform:translateY(10px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1'; card.style.transform = 'none';
    }, 350 + i * 80);
  });

  // Edu cards
  el.querySelectorAll('.edu-card').forEach((card, i) => {
    card.style.cssText = 'opacity:0;transform:translateY(12px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1'; card.style.transform = 'none';
    }, 350 + i * 80);
  });
}

// ─── Observer ───
function initObserver(total) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        if (!e.target.classList.contains('is-active')) {
          e.target.classList.add('is-active');
          triggerEffects(e.target);
        }
        const idx = parseInt(e.target.dataset.index, 10);
        current = idx;
        updateCounter(idx + 1, total);
        updateProgress(idx + 1, total);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.slide').forEach(s => obs.observe(s));
}

function updateCounter(n, total) {
  document.getElementById('slideCounter').textContent =
    `${String(n).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
}

function updateProgress(n, total) {
  document.getElementById('progressBar').style.width =
    `${((n - 1) / Math.max(total - 1, 1)) * 100}%`;
}

// ─── Keyboard ───
function initKeyboard() {
  document.addEventListener('keydown', e => {
    const fwd = ['ArrowDown','ArrowRight','Space','PageDown'].includes(e.code);
    const bwd = ['ArrowUp','ArrowLeft','PageUp'].includes(e.code);
    if (fwd || bwd) {
      e.preventDefault();
      const idx = fwd ? current + 1 : current - 1;
      if (idx >= 0 && idx < slides.length)
        document.getElementById(`slide-${idx}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ─── Navbar offset ───
function initNavbarOffset() {
  const nav = document.getElementById('navbar');
  const set = () => document.documentElement.style.setProperty('--topOffset', nav.offsetHeight + 'px');
  set();
  new ResizeObserver(set).observe(nav);
}

// ─── PDF Export ───
function setupPdfExport() {
  const btn = document.getElementById('exportPdfBtn');
  btn.addEventListener('click', async () => {
    btn.disabled = true; btn.textContent = 'Exporting…';
    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
    } catch {
      alert('PDF libraries failed to load. Ensure cdnjs.cloudflare.com is reachable.');
      btn.disabled = false; btn.textContent = 'Export PDF'; return;
    }
    document.body.classList.add('exportingPdf');
    document.querySelectorAll('.slide').forEach(s => s.classList.add('is-active'));
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.style.opacity = '1'; el.style.transform = 'none';
    });
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1920, 1080] });
    const bg = document.querySelector('.bg');
    for (let i = 0; i < slides.length; i++) {
      const stage = document.createElement('div'); stage.id = 'pdfStage';
      if (bg) stage.appendChild(bg.cloneNode(true));
      const clone = document.getElementById(`slide-${i}`).cloneNode(true);
      clone.classList.add('is-active');
      clone.querySelectorAll('[data-animate],[style]').forEach(el => {
        el.style.opacity = '1'; el.style.transform = 'none'; el.style.transition = 'none';
      });
      stage.appendChild(clone);
      document.body.appendChild(stage);
      const canvas = await html2canvas(stage, {
        backgroundColor: '#050911', scale: 2, useCORS: true,
        width: 1920, height: 1080, windowWidth: 1920, windowHeight: 1080,
      });
      if (i > 0) pdf.addPage([1920, 1080], 'landscape');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 1920, 1080);
      document.body.removeChild(stage);
    }
    pdf.save('advay-kumar-portfolio.pdf');
    document.body.classList.remove('exportingPdf');
    btn.disabled = false; btn.textContent = 'Export PDF';
  });
}

function loadScript(src) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) return res();
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}

// ─── Boot ───
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetch('./content.json').then(r => r.json());
    buildDeck(data);
  } catch (e) {
    document.body.innerHTML = `<div style="color:#fff;padding:40px;font-family:monospace">Error loading content.json: ${e.message}</div>`;
  }
});
