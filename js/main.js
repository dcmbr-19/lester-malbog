// Olive Web Agency — shared behavior

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Nav: blur border on scroll ---- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 8) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const isOpen = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---- Portfolio rendering ---- */
  const previewGrid = document.querySelector('[data-portfolio-preview]');
  const fullGrid = document.querySelector('[data-portfolio-full]');
  const filterRow = document.querySelector('[data-portfolio-filters]');

  if (typeof PORTFOLIO_ITEMS === 'undefined') return;

  const cardHTML = (item) => `
    <article class="portfolio-card reveal">
      <div class="portfolio-thumb">
        ${item.image
          ? `<img src="${item.image}" alt="${item.title} screenshot" loading="lazy">`
          : `<span class="placeholder-mark">
               <svg width="46" height="46" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="32" cy="34" r="19" stroke="#4A5D29" stroke-width="7"/>
               </svg>
             </span>`}
      </div>
      <div class="portfolio-body">
        <span class="portfolio-tag">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <a class="portfolio-link" href="${item.url}" target="_blank" rel="noopener">
          View build <span class="arrow">&rarr;</span>
        </a>
      </div>
    </article>`;

  if (previewGrid) {
    const featured = PORTFOLIO_ITEMS.filter(i => i.featured).slice(0, 3);
    const items = featured.length ? featured : PORTFOLIO_ITEMS.slice(0, 3);
    previewGrid.innerHTML = items.map(cardHTML).join('');
  }

  if (fullGrid) {
    const renderFull = (list) => {
      fullGrid.innerHTML = list.length
        ? list.map(cardHTML).join('')
        : `<div class="portfolio-empty">No builds in this category yet — add one in <code>js/portfolio-data.js</code>.</div>`;
      fullGrid.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    };

    renderFull(PORTFOLIO_ITEMS);

    if (filterRow) {
      const categories = ['All', ...new Set(PORTFOLIO_ITEMS.map(i => i.category))];
      filterRow.innerHTML = categories.map((c, i) =>
        `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${c}">${c}</button>`
      ).join('');

      filterRow.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filterRow.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        renderFull(f === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(i => i.category === f));
      });
    }
  }
});
