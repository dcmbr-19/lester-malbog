/**
 * OLIVE WEB AGENCY — PORTFOLIO DATA
 * ------------------------------------------------------------
 * This is the only file you need to edit to add a new build.
 * Copy an existing object inside the array below, change the
 * values, and save. Both the homepage preview and the full
 * /portfolio.html page read from this same list automatically.
 *
 * Fields:
 *   title    - Project or client name
 *   category - One of: "WordPress", "Elementor", "Beaver Builder",
 *              "Divi", "GoHighLevel", "Front-End"
 *              (used by the filter buttons on the portfolio page)
 *   summary  - One or two sentences about the build
 *   image    - Path to a screenshot, e.g. "assets/portfolio/my-site.jpg"
 *              Leave as "" to show a placeholder tile instead.
 *   url      - Link to the live site (or "#" if none yet)
 *   featured - true / false — featured builds show on the homepage
 * ------------------------------------------------------------
 */

const PORTFOLIO_ITEMS = [
  {
    title: "Elite Electrical Maintenance & Airconditioning",
    category: "Elementor",
    summary: "Lead-gen site for a Brisbane electrical, aircon and solar company, with service-area pages and a $0-call-out-fee quote flow.",
    image: "images/elite-electrical.png",
    url: "https://eliteema.com.au/",
    featured: true
  },
  {
    title: "Playdates Augusta",
    category: "Elementor",
    summary: "Booking-driven site for an indoor kids' play café, with membership pricing, waiver sign-up and gift card sales built in.",
    image: "images/playdatesaugusta.com.png",
    url: "https://playdatesaugusta.com/",
    featured: true
  },
  {
    title: "American Roofing",
    category: "Elementor",
    summary: "Veteran-owned roofing contractor site covering residential, commercial and storm-damage services across a dozen Georgia service areas.",
    image: "images/theamericanpro.com.png",
    url: "https://theamericanpro.com/",
    featured: true
  },
  {
    title: "TapClicks",
    category: "Front-End",
    summary: "Front-end pages for an AI marketing intelligence platform, covering product tiers, industry solutions and case studies.",
    image: "images/tapclicks.com.png",
    url: "https://www.tapclicks.com/",
    featured: true
  },
  {
    title: "Concept II Kitchen & Bath",
    category: "Front-End",
    summary: "Design-build studio site with a five-phase process walkthrough, product catalog and project portfolio.",
    image: "images/concept-kitchen.png",
    url: "https://www.concept-ii.com/",
    featured: true
  },
  {
    title: "Leone Alato USA",
    category: "Front-End",
    summary: "Importer site for a 25+ producer Italian wine and spirits portfolio, with regional producer pages and a distributor network.",
    image: "images/leonealato.png",
    url: "https://www.leonealatousa.com/",
    featured: false
  },
  {
    title: "The Adirondack Guys",
    category: "Front-End",
    summary: "Showroom site for a poly-lumber outdoor furniture retailer, with brand catalogs, a gallery and appointment requests.",
    image: "images/adirondak.png",
    url: "https://www.adirondackguys.com/",
    featured: false
  },
  {
    title: "Monroe County Sheriff's Office",
    category: "Front-End",
    summary: "Public-facing government site organizing four bureaus, community resources and public-safety information for county residents.",
    image: "images/monroecounty.png",
    url: "https://www.monroecountysheriff-ny.gov/",
    featured: false
  },
  {
    title: "Hartleigh Monroe Beauty & Boutique",
    category: "Front-End",
    summary: "Boutique hair salon site with services, stylist profiles and gift card sales for a Pittsford, NY studio.",
    image: "images/hartleighmonroe.png",
    url: "https://www.hartleighmonroe.com/",
    featured: false
  },
  {
    title: "Oakes Tree Service",
    category: "Front-End",
    summary: "Local service site for a Rochester-area tree removal company, with service pages, an estimate form and 24/7 emergency messaging.",
    image: "images/oakestree.png",
    url: "https://www.oakestreeservice.com/",
    featured: false
  },
  {
    title: "Napora Heating Cooling Plumbing",
    category: "Front-End",
    summary: "HVAC and plumbing company site covering heating, cooling, water heaters and emergency service across the Rochester area.",
    image: "images/naporaheating.png",
    url: "https://www.naporaheating.com/",
    featured: false
  },
  {
    title: "Tracy Riley Counseling",
    category: "Front-End",
    summary: "Practice site for a Jacksonville counseling and hypnotherapy group, with service pages for every clinician and specialty.",
    image: "images/tracyriley.png",
    url: "https://www.tracyriley.com/",
    featured: false
  },
  {
    title: "Savoia Pastry Shoppe",
    category: "Front-End",
    summary: "E-commerce site for a Rochester bakery since 1929, with online ordering, wedding cake galleries and nationwide shipping.",
    image: "images/savoia.png",
    url: "https://www.savoiapastry.com/",
    featured: false
  },
  {
    title: "RMH Point of Sale",
    category: "Front-End",
    summary: "B2B software site for a retail POS platform, covering 20+ industry verticals, integrations and partner resources.",
    image: "images/retailmanagement.png",
    url: "https://www.rmhpos.com/",
    featured: false
  },
  {
    title: "Evolution Marketing",
    category: "Front-End",
    summary: "Agency site covering website development, digital marketing and creative services for a Rochester marketing firm.",
    image: "images/evolutionmarketing.png",
    url: "https://www.evolutionmarketing.com/",
    featured: false
  },
  {
    title: "Brittany Woods Townhomes",
    category: "Front-End",
    summary: "Leasing site for an upscale Webster, NY townhome community, with floor plans, amenities and a photo gallery.",
    image: "images/brittanywoods.png",
    url: "https://www.brittanywoodstownhomes.com/",
    featured: false
  },
  {
    title: "Ivy Bridge Townhomes",
    category: "Front-End",
    summary: "Leasing site for a Gates, NY luxury townhome community, with four floor-plan options and resident portal access.",
    image: "images/ivybridge.png",
    url: "https://www.ivybridgetownhomes.com/",
    featured: false
  },
  {
    title: "King's Crossing Townhomes",
    category: "Front-End",
    summary: "Leasing site for a North Chili, NY townhouse community, with floor plans, amenities and a resident portal.",
    image: "images/kingscrossing.png",
    url: "https://www.kingscrossing-townhomes.com/",
    featured: false
  }
];

// Add new entries above this line — do not remove the export below.
if (typeof module !== "undefined") { module.exports = PORTFOLIO_ITEMS; }
