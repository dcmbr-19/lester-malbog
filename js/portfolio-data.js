/**
 * OLIVE WEB AGENCY — PORTFOLIO DATA
 * ------------------------------------------------------------
 * This is the only file you need to edit to add a new build.
 * Copy an existing object inside the array below, change the
 * values, and save. Both the homepage preview and the full
 * /portfolio.html page read from this same list automatically,
 * in whichever language the visitor currently has selected.
 *
 * Fields:
 *   title       - Project or client name (kept in English/brand form
 *                  for both languages — company names aren't translated)
 *   category    - One of: "WordPress", "Elementor", "Beaver Builder",
 *                 "Divi", "GoHighLevel", "Front-End"
 *                 (used by the filter buttons on the portfolio page —
 *                 the DISPLAY label for a category is translated
 *                 automatically via js/i18n.js, so leave this value
 *                 in English exactly as listed above)
 *   summary     - One or two sentences about the build, in English
 *   summary_ja  - The same summary, in Japanese. If you leave this
 *                 blank, the English summary is shown as a fallback
 *                 when the site is switched to Japanese.
 *   image       - Path to a screenshot, e.g. "images/my-site.webp"
 *                 Leave as "" to show a placeholder tile instead.
 *   url         - Link to the live site (or "#" if none yet)
 *   featured    - true / false — featured builds show on the homepage
 * ------------------------------------------------------------
 */

const PORTFOLIO_ITEMS = [
  {
    title: "Elite Electrical Maintenance & Airconditioning",
    category: "Elementor",
    summary: "Lead-gen site for a Brisbane electrical, aircon and solar company, with service-area pages and a $0-call-out-fee quote flow.",
    summary_ja: "ブリスベンの電気・エアコン・太陽光発電会社向けのリード獲得サイト。エリア別サービスページと、出張費0ドルの見積もりフローを実装しました。",
    image: "images/elite-electrical.webp",
    url: "https://eliteema.com.au/",
    featured: true
  },
  {
    title: "Playdates Augusta",
    category: "Elementor",
    summary: "Booking-driven site for an indoor kids' play café, with membership pricing, waiver sign-up and gift card sales built in.",
    summary_ja: "屋内キッズプレイカフェ向けの予約重視サイト。会員料金プラン、ウェイバー登録、ギフトカード販売機能を搭載しています。",
    image: "images/playdatesaugusta.com.webp",
    url: "https://playdatesaugusta.com/",
    featured: true
  },
  {
    title: "American Roofing",
    category: "Elementor",
    summary: "Veteran-owned roofing contractor site covering residential, commercial and storm-damage services across a dozen Georgia service areas.",
    summary_ja: "退役軍人が経営する屋根工事会社のサイト。住宅・商業・暴風被害対応の各サービスを、ジョージア州内十数のエリアにわたり紹介しています。",
    image: "images/theamericanpro.com.webp",
    url: "https://theamericanpro.com/",
    featured: true
  },
  {
    title: "TapClicks",
    category: "Front-End",
    summary: "Front-end pages for an AI marketing intelligence platform, covering product tiers, industry solutions and case studies.",
    summary_ja: "AIマーケティングインテリジェンスプラットフォームのフロントエンドページ。製品プラン、業界別ソリューション、導入事例を掲載しました。",
    image: "images/tapclicks.com.webp",
    url: "https://www.tapclicks.com/",
    featured: true
  },
  {
    title: "Concept II Kitchen & Bath",
    category: "Front-End",
    summary: "Design-build studio site with a five-phase process walkthrough, product catalog and project portfolio.",
    summary_ja: "デザイン・施工一体型スタジオのサイト。5段階のプロセス紹介、製品カタログ、施工実績ポートフォリオを掲載しています。",
    image: "images/concept-kitchen.webp",
    url: "https://www.concept-ii.com/",
    featured: true
  },
  {
    title: "Leone Alato USA",
    category: "Front-End",
    summary: "Importer site for a 25+ producer Italian wine and spirits portfolio, with regional producer pages and a distributor network.",
    summary_ja: "25以上の生産者を擁するイタリアワイン・スピリッツの輸入業者向けサイト。地域生産者ページと販売代理店ネットワークを掲載しています。",
    image: "images/leonealato.webp",
    url: "https://www.leonealatousa.com/",
    featured: false
  },
  {
    title: "The Adirondack Guys",
    category: "Front-End",
    summary: "Showroom site for a poly-lumber outdoor furniture retailer, with brand catalogs, a gallery and appointment requests.",
    summary_ja: "ポリ樹脂製アウトドア家具小売店のショールームサイト。ブランドカタログ、ギャラリー、来店予約機能を搭載しています。",
    image: "images/adirondak.webp",
    url: "https://www.adirondackguys.com/",
    featured: false
  },
  {
    title: "Monroe County Sheriff's Office",
    category: "Front-End",
    summary: "Public-facing government site organizing four bureaus, community resources and public-safety information for county residents.",
    summary_ja: "地域住民向けに4つの部門、コミュニティ情報、公共安全情報をまとめた公的機関サイトです。",
    image: "images/monroecounty.webp",
    url: "https://www.monroecountysheriff-ny.gov/",
    featured: false
  },
  {
    title: "Hartleigh Monroe Beauty & Boutique",
    category: "Front-End",
    summary: "Boutique hair salon site with services, stylist profiles and gift card sales for a Pittsford, NY studio.",
    summary_ja: "ニューヨーク州ピッツフォードの美容サロン向けサイト。施術メニュー、スタイリスト紹介、ギフトカード販売を掲載しています。",
    image: "images/hartleighmonroe.webp",
    url: "https://www.hartleighmonroe.com/",
    featured: false
  },
  {
    title: "Oakes Tree Service",
    category: "Front-End",
    summary: "Local service site for a Rochester-area tree removal company, with service pages, an estimate form and 24/7 emergency messaging.",
    summary_ja: "ロチェスター地域の伐採業者向けローカルサービスサイト。サービスページ、見積もりフォーム、24時間緊急対応の案内を掲載しています。",
    image: "images/oakestree.webp",
    url: "https://www.oakestreeservice.com/",
    featured: false
  },
  {
    title: "Napora Heating Cooling Plumbing",
    category: "Front-End",
    summary: "HVAC and plumbing company site covering heating, cooling, water heaters and emergency service across the Rochester area.",
    summary_ja: "暖房・冷房・配管の会社サイト。ロチェスター地域における暖房・冷房・給湯器・緊急対応サービスを紹介しています。",
    image: "images/naporaheating.webp",
    url: "https://www.naporaheating.com/",
    featured: false
  },
  {
    title: "Tracy Riley Counseling",
    category: "Front-End",
    summary: "Practice site for a Jacksonville counseling and hypnotherapy group, with service pages for every clinician and specialty.",
    summary_ja: "ジャクソンビルのカウンセリング＆催眠療法グループのサイト。各セラピストと専門分野ごとのサービスページを掲載しています。",
    image: "images/tracyriley.webp",
    url: "https://www.tracyriley.com/",
    featured: false
  },
  {
    title: "Savoia Pastry Shoppe",
    category: "Front-End",
    summary: "E-commerce site for a Rochester bakery since 1929, with online ordering, wedding cake galleries and nationwide shipping.",
    summary_ja: "1929年創業のロチェスターのベーカリー向けECサイト。オンライン注文、ウェディングケーキギャラリー、全米配送に対応しています。",
    image: "images/savoia.webp",
    url: "https://www.savoiapastry.com/",
    featured: false
  },
  {
    title: "RMH Point of Sale",
    category: "Front-End",
    summary: "B2B software site for a retail POS platform, covering 20+ industry verticals, integrations and partner resources.",
    summary_ja: "小売POSプラットフォームのB2Bソフトウェアサイト。20以上の業界別ソリューション、連携機能、パートナー向けリソースを掲載しています。",
    image: "images/retailmanagement.webp",
    url: "https://www.rmhpos.com/",
    featured: false
  },
  {
    title: "Evolution Marketing",
    category: "Front-End",
    summary: "Agency site covering website development, digital marketing and creative services for a Rochester marketing firm.",
    summary_ja: "ロチェスターのマーケティング会社向けサイト。ウェブ開発、デジタルマーケティング、クリエイティブサービスを紹介しています。",
    image: "images/evolutionmarketing.webp",
    url: "https://www.evolutionmarketing.com/",
    featured: false
  },
  {
    title: "Brittany Woods Townhomes",
    category: "Front-End",
    summary: "Leasing site for an upscale Webster, NY townhome community, with floor plans, amenities and a photo gallery.",
    summary_ja: "ニューヨーク州ウェブスターの高級タウンホームコミュニティのリーシングサイト。間取り図、設備、フォトギャラリーを掲載しています。",
    image: "images/brittanywoods.webp",
    url: "https://www.brittanywoodstownhomes.com/",
    featured: false
  },
  {
    title: "Ivy Bridge Townhomes",
    category: "Front-End",
    summary: "Leasing site for a Gates, NY luxury townhome community, with four floor-plan options and resident portal access.",
    summary_ja: "ニューヨーク州ゲイツの高級タウンホームコミュニティのリーシングサイト。4つの間取りプランと住民ポータルへのアクセスを掲載しています。",
    image: "images/ivybridge.webp",
    url: "https://www.ivybridgetownhomes.com/",
    featured: false
  },
  {
    title: "King's Crossing Townhomes",
    category: "Front-End",
    summary: "Leasing site for a North Chili, NY townhouse community, with floor plans, amenities and a resident portal.",
    summary_ja: "ニューヨーク州ノースチリのタウンハウスコミュニティのリーシングサイト。間取り図、設備、住民ポータルを掲載しています。",
    image: "images/kingscrossing.webp",
    url: "https://www.kingscrossing-townhomes.com/",
    featured: false
  }
];

// Add new entries above this line — do not remove the export below.
if (typeof module !== "undefined") { module.exports = PORTFOLIO_ITEMS; }
