/**
 * OLIVE WEB AGENCY — i18n (English / Japanese)
 * ------------------------------------------------------------
 * How it works:
 *  - Any element with data-i18n="key"       -> its textContent is swapped.
 *  - Any element with data-i18n-html="key"  -> its innerHTML is swapped
 *                                               (used where a translation
 *                                               needs a nested tag, e.g.
 *                                               <span> around a company
 *                                               name, or an &amp;).
 *  - Any element with data-i18n-attr="attr:key"
 *                                            -> that attribute's value is
 *                                               swapped (e.g. meta
 *                                               description content).
 *  - The chosen language is remembered in localStorage and re-applied
 *    on every page load, so switching on the homepage stays in effect
 *    when the visitor clicks through to /portfolio.html.
 *
 * To add a new page: add data-i18n / data-i18n-html attributes to its
 * markup, add matching keys to TRANSLATIONS.en and TRANSLATIONS.ja below,
 * and make sure this script is loaded before js/main.js.
 * ------------------------------------------------------------
 */

const OWA_LANG_KEY = 'owa-lang';

const TRANSLATIONS = {
  en: {
    'meta.title': 'Lester Malbog',
    'meta.description': "Olive Web Agency builds fast, responsive WordPress, Elementor, Divi and GoHighLevel websites — from Figma design to launch, backed by 14+ years of hands-on development.",

    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.cta': 'Start a project',

    'hero.eyebrow': 'Following JESUS and building Websites.',
    'hero.title1': 'Websites, ',
    'hero.title2': 'built right.',
    'hero.sub': "14+ years turning Figma and PSD designs into fast, responsive, SEO-ready sites in pure HTML, CSS, JS and on WordPress, Elementor, Beaver Builder, Divi and GoHighLevel.",
    'hero.cta1': 'Start a project',
    'hero.cta2': 'See the work',

    'trust.label': 'Built for teams at',

    'services.eyebrow': 'SERVICES',
    'services.title': 'Everything a site needs, one developer deep.',
    'services.lede': "From first Figma frame to a live, QA'd, search-ready page — no handoffs, no guesswork.",
    'services.1.title': 'WordPress &amp; Elementor',
    'services.1.desc': 'Custom builds and ongoing maintenance on WordPress, using Elementor for flexible, client-editable pages.',
    'services.2.title': 'Beaver Builder &amp; Divi',
    'services.2.desc': 'Page-builder sites migrated, rebuilt, or maintained with an eye on responsiveness and load speed.',
    'services.3.title': 'GoHighLevel Funnels',
    'services.3.desc': 'Full sites and marketing funnels built in GoHighLevel, extended with custom HTML, CSS and JavaScript.',
    'services.4.title': 'Front-End Development',
    'services.4.desc': "Hand-coded HTML, CSS, JavaScript and jQuery for anything a builder can't do — Bootstrap and Tailwind included.",
    'services.5.title': 'QA &amp; SEO',
    'services.5.desc': 'Cross-device, cross-browser testing and documented test cases, plus on-page SEO best practices baked in.',
    'services.6.title': 'Figma &amp; PSD to Live',
    'services.6.desc': 'Pixel-accurate conversion of Figma, PSD and AI design files into responsive, production-ready pages.',

    'track.eyebrow': 'TRACK RECORD',
    'track.title': 'Fourteen years of shipping real sites.',
    'track.stat1': 'Years in web development',
    'track.stat2': 'Agencies &amp; teams worked with',
    'track.stat3': 'CMS &amp; builder platforms',
    'track.stat4': 'Active client roles today',

    'about.eyebrow': 'ABOUT',
    'about.title': 'Where the experience comes from.',
    'about.lede': 'A working history across agencies, in-house teams, and direct client support — not just tutorials.',
    'about.tl1.when': '2026 — Present',
    'about.tl1.title': 'Website Developer, <span>Australian Institute Marketing Dynamics &amp; Marketing 1</span>',
    'about.tl1.desc': 'Building and maintaining client sites in GoHighLevel and WordPress/Elementor, from Figma design through custom post types and on-page SEO — with Claude AI woven into the build workflow.',
    'about.tl2.when': '2025 — 2026',
    'about.tl2.title': 'Senior Web Developer, <span>We Get You Leads</span>',
    'about.tl2.desc': 'Built Elementor websites from Figma designs, ran post-build QA, set up Google Analytics and applied SEO best practices across a steady stream of client projects.',
    'about.tl3.when': '2023 — 2024',
    'about.tl3.title': 'Website QA Engineer, <span>Markets.com</span>',
    'about.tl3.desc': 'Tested site and trading-platform functionality daily across web and mobile, verified multi-language content, and logged detailed test cases for dev and CMS teams.',
    'about.tl4.when': '2021 — 2023',
    'about.tl4.title': 'Front-End Web Developer, <span>Evolution Marketing</span>',
    'about.tl4.desc': 'Converted Figma, PSD and AI files into responsive pages, including e-commerce sites, and kept client blogs populated and maintained.',
    'about.tl5.when': '2010 — 2021',
    'about.tl5.title': 'Earlier roles — <span>Digital Assets, EMAPTA, Dizon Interactive &amp; more</span>',
    'about.tl5.desc': 'Landing pages, WordPress and SquareUp site management, logo and graphic design, and direct customer support — the foundation everything since has built on.',

    'toolkit.eyebrow': 'TOOLKIT',
    'toolkit.title': 'Comfortable across the whole stack.',
    'toolkit.group1': 'CMS &amp; page builders',
    'toolkit.group2': 'Front-end',
    'toolkit.group3': 'QA, SEO &amp; design',
    'toolkit.chip.qa': 'Website QA',
    'toolkit.chip.seo': 'SEO best practices',
    'toolkit.chip.support': 'Client support',

    'contact.title': 'Have a site that needs building — or fixing?',
    'contact.lede': "Whether it's a new build from Figma, a broken Elementor page, or a WordPress site that needs real attention, I can take it from here.",
    'contact.email': 'Email',
    'contact.call': 'Call',

    'footer.tagline': 'Web design and development — WordPress, Elementor, Beaver Builder, Divi and GoHighLevel — from Figma to launch.',
    'footer.site': 'Site',
    'footer.contact': 'Contact',
    'footer.address': 'San Manuel, Tarlac, Philippines',
    'footer.rights': '&copy; 2026 All rights reserved.',
    'footer.builtby': 'Designed &amp; built by Lester Malbog.',

    'portfolio.meta.title': 'Portfolio — Lester Malbog',
    'portfolio.meta.description': "A look at Olive Web Agency's recent website builds across WordPress, Elementor, Beaver Builder, Divi and GoHighLevel.",
    'portfolio.eyebrow': 'PORTFOLIO',
    'portfolio.h1': 'Builds, by platform.',
    'portfolio.lede1': 'Filter by the platform each site was built on. New builds get added here as they launch.',
    'portfolio.lede2': 'Most Websites in Front-End are assited by A.W.E.',
    'portfolio.cta.title': 'Like what you see?',
    'portfolio.cta.lede': "Let's talk about your build — new site, migration, or a fix for something that isn't working right.",

    'portfolio.card.viewBuild': 'View build',
    'portfolio.card.empty': 'No builds in this category yet — add one in js/portfolio-data.js.',
    'portfolio.filter.all': 'All',
    'portfolio.category.Front-End': 'Front-End'
  },

  ja: {
    'meta.title': 'レスター・マルボグ',
    'meta.description': 'Olive Web Agencyは、Figmaデザインから公開まで、14年以上の実務経験をもとに、高速でレスポンシブなWordPress・Elementor・Divi・GoHighLevelサイトを制作します。',

    'nav.services': 'サービス',
    'nav.about': 'プロフィール',
    'nav.portfolio': 'ポートフォリオ',
    'nav.contact': 'お問い合わせ',
    'nav.cta': 'プロジェクトを始める',

    'hero.eyebrow': 'イエス様に従い、ウェブサイトを制作しています。',
    'hero.title1': 'ウェブサイトを、',
    'hero.title2': '正しく作る。',
    'hero.sub': '14年以上にわたり、FigmaやPSDのデザインを、HTML・CSS・JSによる高速でレスポンシブ、SEOに強いサイトへ、また WordPress・Elementor・Beaver Builder・Divi・GoHighLevel 上で実装してきました。',
    'hero.cta1': 'プロジェクトを始める',
    'hero.cta2': '実績を見る',

    'trust.label': '制作実績のあるチーム',

    'services.eyebrow': 'サービス',
    'services.title': 'サイトに必要なすべてを、一人の開発者で。',
    'services.lede': 'Figmaの最初のフレームから、QA済みでSEOにも配慮した公開ページまで —— 引き継ぎも当て推量もありません。',
    'services.1.title': 'WordPress ＆ Elementor',
    'services.1.desc': 'WordPress上でのカスタム制作と継続的な保守運用を、Elementorを使ってクライアントが編集しやすい柔軟なページに仕上げます。',
    'services.2.title': 'Beaver Builder ＆ Divi',
    'services.2.desc': 'ページビルダーで構築されたサイトの移行・再構築・保守を、レスポンシブ対応と表示速度を意識して行います。',
    'services.3.title': 'GoHighLevel ファネル',
    'services.3.desc': 'GoHighLevel上でサイトやマーケティングファネルを構築し、カスタムHTML・CSS・JavaScriptで拡張します。',
    'services.4.title': 'フロントエンド開発',
    'services.4.desc': 'ページビルダーでは実現できない部分を、HTML・CSS・JavaScript・jQueryで手作業でコーディングします。BootstrapやTailwindにも対応。',
    'services.5.title': 'QA ＆ SEO',
    'services.5.desc': 'デバイスやブラウザを横断したテストとテストケースの文書化に加え、ページ内SEOのベストプラクティスを組み込みます。',
    'services.6.title': 'Figma・PSDを公開サイトへ',
    'services.6.desc': 'Figma・PSD・AIのデザインファイルを、ピクセル単位で忠実にレスポンシブな本番ページへ変換します。',

    'track.eyebrow': '実績',
    'track.title': '14年間、実際のサイトをリリースし続けてきました。',
    'track.stat1': 'ウェブ開発の経験年数',
    'track.stat2': '携わってきた制作会社・チーム数',
    'track.stat3': '対応するCMS・ビルダー数',
    'track.stat4': '現在稼働中のクライアント案件数',

    'about.eyebrow': 'プロフィール',
    'about.title': '経験を積み重ねてきた道のり。',
    'about.lede': '制作会社、インハウスチーム、クライアント直接対応まで —— チュートリアルだけでは得られない実務経験です。',
    'about.tl1.when': '2026年 — 現在',
    'about.tl1.title': 'ウェブサイト開発者、<span>Australian Institute Marketing Dynamics ＆ Marketing 1</span>',
    'about.tl1.desc': 'GoHighLevelおよびWordPress/Elementorでクライアントサイトを構築・保守。Figmaデザインからカスタム投稿タイプ、ページ内SEOまで一貫して対応し、制作フローにはClaude AIも活用しています。',
    'about.tl2.when': '2025年 — 2026年',
    'about.tl2.title': 'シニアウェブ開発者、<span>We Get You Leads</span>',
    'about.tl2.desc': 'Figmaデザインを基にElementorサイトを制作し、公開後のQA、Google Analyticsの設定、SEOベストプラクティスの適用まで、継続的に案件をこなしました。',
    'about.tl3.when': '2023年 — 2024年',
    'about.tl3.title': 'ウェブサイトQAエンジニア、<span>Markets.com</span>',
    'about.tl3.desc': 'ウェブおよびモバイルにおけるサイトと取引プラットフォームの機能を日次でテストし、多言語コンテンツの検証や、開発・CMSチーム向けの詳細なテストケースの記録を行いました。',
    'about.tl4.when': '2021年 — 2023年',
    'about.tl4.title': 'フロントエンドウェブ開発者、<span>Evolution Marketing</span>',
    'about.tl4.desc': 'Figma・PSD・AIファイルをレスポンシブページへ変換（ECサイトを含む）し、クライアントブログの更新・保守も担当しました。',
    'about.tl5.when': '2010年 — 2021年',
    'about.tl5.title': 'それ以前の経歴 —<span>Digital Assets、EMAPTA、Dizon Interactive ほか</span>',
    'about.tl5.desc': 'ランディングページ制作、WordPressおよびSquareUpサイトの管理、ロゴ・グラフィックデザイン、直接的な顧客サポートなど —— その後のすべての土台となった経験です。',

    'toolkit.eyebrow': '使用ツール',
    'toolkit.title': '幅広い技術スタックに対応。',
    'toolkit.group1': 'CMS・ページビルダー',
    'toolkit.group2': 'フロントエンド',
    'toolkit.group3': 'QA・SEO・デザイン',
    'toolkit.chip.qa': 'ウェブサイトQA',
    'toolkit.chip.seo': 'SEOベストプラクティス',
    'toolkit.chip.support': 'クライアントサポート',

    'contact.title': 'サイトの制作、または修正が必要ですか？',
    'contact.lede': 'Figmaからの新規制作でも、不具合のあるElementorページでも、しっかり手を入れる必要のあるWordPressサイトでも、ここから引き継いで対応します。',
    'contact.email': 'メール',
    'contact.call': '電話',

    'footer.tagline': 'ウェブデザイン＆開発 —— WordPress・Elementor・Beaver Builder・Divi・GoHighLevel —— Figmaから公開まで。',
    'footer.site': 'サイト',
    'footer.contact': '連絡先',
    'footer.address': 'サンマヌエル、タルラック州、フィリピン',
    'footer.rights': '&copy; 2026 無断転載を禁じます。',
    'footer.builtby': 'デザイン・制作：Lester Malbog',

    'portfolio.meta.title': 'ポートフォリオ — レスター・マルボグ',
    'portfolio.meta.description': 'Olive Web Agencyが手がけた、WordPress・Elementor・Beaver Builder・Divi・GoHighLevelによる最近のウェブサイト制作実績です。',
    'portfolio.eyebrow': 'ポートフォリオ',
    'portfolio.h1': 'プラットフォーム別の制作実績。',
    'portfolio.lede1': '各サイトが構築されたプラットフォームで絞り込めます。新しい実績は公開ごとに追加されます。',
    'portfolio.lede2': 'フロントエンドの実績の多くは、A.W.E. の支援を受けて制作されています。',
    'portfolio.cta.title': '気に入っていただけましたか？',
    'portfolio.cta.lede': 'あなたの案件について話しましょう —— 新規サイト、移行、または不具合の修正など。',

    'portfolio.card.viewBuild': 'サイトを見る',
    'portfolio.card.empty': 'このカテゴリーの実績はまだありません —— js/portfolio-data.js に追加してください。',
    'portfolio.filter.all': 'すべて',
    'portfolio.category.Front-End': 'フロントエンド'
  }
};

/**
 * Returns the currently active language ('en' or 'ja'), defaulting to
 * whatever was saved previously, or 'en' for first-time visitors.
 */
function owaGetLang() {
  return localStorage.getItem(OWA_LANG_KEY) || 'en';
}

/**
 * Looks up a single translation key for the given language, falling
 * back to English (and finally the key itself) if it's missing.
 */
function owaT(key, lang) {
  lang = lang || owaGetLang();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key])
    || TRANSLATIONS.en[key]
    || key;
}

/**
 * Applies a language across the whole page: swaps every data-i18n /
 * data-i18n-html / data-i18n-attr element, updates <html lang>, and
 * syncs the radio toggle UI. Also fires 'owa:langchange' so other
 * scripts (e.g. the portfolio renderer in main.js) can react.
 */
function owaApplyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = owaT(el.getAttribute('data-i18n'), lang);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = owaT(el.getAttribute('data-i18n-html'), lang);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
    el.setAttribute(attr, owaT(key, lang));
  });

  const enRadio = document.getElementById('lang-en');
  const jaRadio = document.getElementById('lang-ja');
  if (enRadio && jaRadio) {
    enRadio.checked = lang === 'en';
    jaRadio.checked = lang === 'ja';
  }

  document.dispatchEvent(new CustomEvent('owa:langchange', { detail: { lang } }));
}

function owaSetLang(lang) {
  localStorage.setItem(OWA_LANG_KEY, lang);
  owaApplyLang(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  owaApplyLang(owaGetLang());

  document.querySelectorAll('input[name="site-lang"]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
      if (e.target.checked) owaSetLang(e.target.value);
    });
  });
});
