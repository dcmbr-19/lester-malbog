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

  /* ---- Portfolio rendering (language-aware) ---- */
  const previewGrid = document.querySelector('[data-portfolio-preview]');
  const fullGrid = document.querySelector('[data-portfolio-full]');
  const filterRow = document.querySelector('[data-portfolio-filters]');

  if (typeof PORTFOLIO_ITEMS === 'undefined') return;

  // Current filter is tracked outside the render functions so switching
  // language mid-filter doesn't reset the visitor back to "All".
  let activeFilter = 'All';

  // Falls back to owaGetLang()/owaT() from js/i18n.js when present, so
  // this file still works standalone (e.g. before i18n.js is added).
  const lang = () => (typeof owaGetLang === 'function' ? owaGetLang() : 'en');
  const t = (key) => (typeof owaT === 'function' ? owaT(key, lang()) : key);

  const categoryLabel = (category) => {
    if (lang() === 'ja') {
      return t('portfolio.category.' + category) !== 'portfolio.category.' + category
        ? t('portfolio.category.' + category)
        : category;
    }
    return category;
  };

  const cardHTML = (item) => {
    const summary = (lang() === 'ja' && item.summary_ja) ? item.summary_ja : item.summary;
    return `
    <article class="portfolio-card reveal in">
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
        <span class="portfolio-tag">${categoryLabel(item.category)}</span>
        <h3>${item.title}</h3>
        <p>${summary}</p>
        <a class="portfolio-link" href="${item.url}" target="_blank" rel="noopener">
          ${t('portfolio.card.viewBuild')} <span class="arrow">&rarr;</span>
        </a>
      </div>
    </article>`;
  };

  const renderPreview = () => {
    if (!previewGrid) return;
    const featured = PORTFOLIO_ITEMS.filter(i => i.featured).slice(0, 5);
    const items = featured.length ? featured : PORTFOLIO_ITEMS.slice(0, 5);
    previewGrid.innerHTML = items.map(cardHTML).join('');
  };

  const renderFull = (list) => {
    if (!fullGrid) return;
    fullGrid.innerHTML = list.length
      ? list.map(cardHTML).join('')
      : `<div class="portfolio-empty">${t('portfolio.card.empty')}</div>`;
  };

  const renderFilters = () => {
    if (!filterRow) return;
    const categories = ['All', ...new Set(PORTFOLIO_ITEMS.map(i => i.category))];
    filterRow.innerHTML = categories.map((c) => {
      const label = c === 'All' ? t('portfolio.filter.all') : categoryLabel(c);
      const isActive = c === activeFilter ? ' active' : '';
      return `<button class="filter-btn${isActive}" data-filter="${c}">${label}</button>`;
    }).join('');
  };

  const renderPortfolio = () => {
    renderPreview();
    renderFilters();
    renderFull(activeFilter === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(i => i.category === activeFilter));
  };

  if (filterRow) {
    filterRow.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      renderPortfolio();
    });
  }

  // Initial render (language may already be resolved by i18n.js's own
  // DOMContentLoaded listener — script order in the HTML guarantees
  // js/i18n.js runs first, so owaGetLang() is accurate here).
  renderPortfolio();

  // Re-render with translated summaries/labels whenever the visitor
  // flips the EN/JA toggle.
  document.addEventListener('owa:langchange', renderPortfolio);
});
