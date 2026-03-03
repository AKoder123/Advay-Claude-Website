/* ─── Advay Kumar Portfolio · app.js ─── */

let slides = [];
let current = 0;
let isScrolling = false;

// ─── Icon map ───
const ICONS = {
  email: '✉',
  phone: '✆',
  linkedin: '◈',
  github: '⌥',
  website: '⌘',
};

// ─── Slide renderers ───
function renderTitle(slide, idx) {
  return `
    <div class="slide-inner slide-title">
      <div class="kicker" data-animate data-delay="1">Portfolio · ${new Date().getFullYear()}</div>
      <h1 class="headline" data-animate data-delay="2">
        <span class="grad">${slide.headline}</span>
      </h1>
      <p class="subheadline" data-animate data-delay="3">${slide.subheadline || ''}</p>
      ${slide.note ? `<div class="note" data-animate data-delay="4">${slide.note}</div>` : ''}
      <div class="scroll-hint" data-animate data-delay="5">Space or ↓ to navigate</div>
    </div>
    <div class="corner-deco">
      E/CE ENG<br>B.COM<br>MONASH
    </div>
  `;
}

function renderSection(slide, idx) {
  return `
    <div class="slide-inner">
      <div class="label" data-animate data-delay="1">— ${String(idx).padStart(2,'0')}</div>
      <h2 class="headline" data-animate data-delay="2">${slide.headline}</h2>
      <p class="subheadline" data-animate data-delay="3">${slide.subheadline || ''}</p>
      ${slide.bullets ? `
        <ul class="bullets">
          ${slide.bullets.map((b, i) => `
            <li data-animate data-delay="${4 + i}">${b}</li>
          `).join('')}
        </ul>
      ` : ''}
    </div>
    <div class="slide-section__number">${String(idx).padStart(2,'0')}</div>
  `;
}

function renderContent(slide, idx) {
  return `
    <div class="slide-inner">
      <div class="label" data-animate data-delay="1">— ${String(idx).padStart(2,'0')}</div>
      <h2 class="headline" data-animate data-delay="2">${slide.headline}</h2>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3">${slide.subheadline}</p>` : ''}
      ${slide.bullets ? `
        <ul class="bullets">
          ${slide.bullets.map((b, i) => `
            <li data-animate data-delay="${4 + i}">${b}</li>
          `).join('')}
        </ul>
      ` : ''}
    </div>
  `;
}

function renderBeforeAfter(slide, idx) {
  return `
    <div class="slide-inner">
      <div class="label" data-animate data-delay="1">— ${String(idx).padStart(2,'0')}</div>
      <h2 class="headline" data-animate data-delay="2">${slide.headline}</h2>
      <div class="split-grid">
        <div class="split-card" data-animate data-delay="3">
          <div class="card-title">${slide.left?.title || ''}</div>
          <ul class="bullets">
            ${(slide.left?.bullets || []).map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
        <div class="split-card" data-animate data-delay="4">
          <div class="card-title">${slide.right?.title || ''}</div>
          <ul class="bullets">
            ${(slide.right?.bullets || []).map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function renderClosing(slide, idx) {
  const linkMeta = [
    { icon: ICONS.email, href: `mailto:${slide.bullets[0]}`, text: slide.bullets[0] },
    { icon: ICONS.phone, href: `tel:${slide.bullets[1]}`, text: slide.bullets[1] },
    { icon: ICONS.linkedin, href: `https://linkedin.com/in/advay-kumar`, text: slide.bullets[2] },
    { icon: ICONS.github, href: `https://github.com/AKoder123`, text: slide.bullets[3] },
  ];
  return `
    <div class="slide-inner">
      <div class="label" data-animate data-delay="1">— get in touch</div>
      <h2 class="headline" data-animate data-delay="2"><span class="grad">${slide.headline}</span></h2>
      <p class="subheadline" data-animate data-delay="3">${slide.subheadline || ''}</p>
      <div class="closing-links">
        ${linkMeta.map((l, i) => `
          <a class="closing-link" href="${l.href}" data-animate data-delay="${4+i}" target="_blank" rel="noopener">
            <span class="cl-icon">${l.icon}</span>
            ${l.text}
          </a>
        `).join('')}
      </div>
      ${slide.note ? `
        <div class="closing-note" data-animate data-delay="8">
          Website: <a href="${slide.note}" target="_blank" rel="noopener">${slide.note}</a>
        </div>
      ` : ''}
    </div>
  `;
}

const RENDERERS = {
  title: renderTitle,
  section: renderSection,
  content: renderContent,
  beforeAfter: renderBeforeAfter,
  closing: renderClosing,
};

// ─── Build deck ───
function buildDeck(data) {
  slides = data.slides;
  const deck = document.getElementById('deck');
  const total = slides.length;

  deck.innerHTML = slides.map((slide, i) => {
    const renderer = RENDERERS[slide.type] || renderContent;
    const cls = ['slide', `slide-${slide.type}`, slide.type === 'section' ? 'slide-section' : ''].filter(Boolean).join(' ');
    return `
      <section class="${cls}" id="slide-${i}" data-index="${i}">
        ${renderer(slide, i + 1)}
      </section>
    `;
  }).join('');

  document.getElementById('slideCounter').textContent = `01 / ${String(total).padStart(2,'0')}`;

  // Update logo with name from data
  document.querySelector('.logo').textContent = data.meta?.title || 'Portfolio';
  document.title = data.meta?.title || 'Portfolio';

  initObserver(total);
  initKeyboard();
  initScroll();
  initNavbarOffset();
  setupPdfExport(data);
}

// ─── IntersectionObserver ───
function initObserver(total) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
        const idx = parseInt(entry.target.dataset.index, 10);
        current = idx;
        updateCounter(idx + 1, total);
        updateProgress(idx + 1, total);
      }
    });
  }, { threshold: 0.55 });

  document.querySelectorAll('.slide').forEach(s => observer.observe(s));
}

function updateCounter(n, total) {
  document.getElementById('slideCounter').textContent =
    `${String(n).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
}

function updateProgress(n, total) {
  const pct = ((n - 1) / (total - 1)) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
}

// ─── Keyboard navigation ───
function initKeyboard() {
  document.addEventListener('keydown', e => {
    const next = ['ArrowDown','ArrowRight','Space','PageDown'].includes(e.code);
    const prev = ['ArrowUp','ArrowLeft','PageUp'].includes(e.code);
    if (next || prev) {
      e.preventDefault();
      goToSlide(next ? current + 1 : current - 1);
    }
  });
}

function goToSlide(idx) {
  const total = slides.length;
  if (idx < 0 || idx >= total) return;
  const el = document.getElementById(`slide-${idx}`);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ─── Scroll tracking ───
function initScroll() {
  const deck = document.getElementById('deck');
  deck.addEventListener('scroll', () => {}, { passive: true });
}

// ─── Navbar height CSS var ───
function initNavbarOffset() {
  const nav = document.getElementById('navbar');
  const update = () => {
    const h = nav.offsetHeight;
    document.documentElement.style.setProperty('--topOffset', h + 'px');
  };
  update();
  new ResizeObserver(update).observe(nav);
}

// ─── PDF Export ───
function setupPdfExport(data) {
  const btn = document.getElementById('exportPdfBtn');
  btn.addEventListener('click', async () => {
    btn.disabled = true;
    btn.textContent = 'Exporting…';

    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
    } catch {
      alert('Could not load export libraries. Please ensure cdnjs.cloudflare.com is accessible.');
      btn.disabled = false;
      btn.textContent = 'Export PDF';
      return;
    }

    document.body.classList.add('exportingPdf');

    // Force all slides visible
    document.querySelectorAll('.slide').forEach(s => s.classList.add('is-active'));
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1920, 1080] });
    const bgEl = document.querySelector('.bg');

    for (let i = 0; i < slides.length; i++) {
      const sourceSlide = document.getElementById(`slide-${i}`);
      const stage = document.createElement('div');
      stage.id = 'pdfStage';

      // Clone background
      if (bgEl) stage.appendChild(bgEl.cloneNode(true));

      // Clone slide
      const slideClone = sourceSlide.cloneNode(true);
      slideClone.classList.add('is-active');
      slideClone.querySelectorAll('[data-animate]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.transition = 'none';
      });
      stage.appendChild(slideClone);
      document.body.appendChild(stage);

      const canvas = await html2canvas(stage, {
        backgroundColor: '#050911',
        scale: 2,
        useCORS: true,
        width: 1920,
        height: 1080,
        windowWidth: 1920,
        windowHeight: 1080,
      });

      const imgData = canvas.toDataURL('image/png');
      if (i > 0) pdf.addPage([1920, 1080], 'landscape');
      pdf.addImage(imgData, 'PNG', 0, 0, 1920, 1080);
      document.body.removeChild(stage);
    }

    pdf.save('advay-kumar-portfolio.pdf');

    document.body.classList.remove('exportingPdf');
    btn.disabled = false;
    btn.textContent = 'Export PDF';
  });
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// ─── Boot ───
async function init() {
  try {
    const res = await fetch('./content.json');
    const data = await res.json();
    buildDeck(data);
    // Activate first slide
    setTimeout(() => {
      const first = document.getElementById('slide-0');
      if (first) first.classList.add('is-active');
    }, 100);
  } catch (e) {
    console.error('Failed to load content.json', e);
    document.body.innerHTML = `<div style="color:#fff;padding:40px;font-family:monospace">Error loading content.json: ${e.message}</div>`;
  }
}

document.addEventListener('DOMContentLoaded', init);
