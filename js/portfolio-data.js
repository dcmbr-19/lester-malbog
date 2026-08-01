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
    title: "Coastal Realty Group",
    category: "Elementor",
    summary: "Figma-to-live rebuild for a real estate brand, with custom listing templates and on-page SEO.",
    image: "",
    url: "#",
    featured: true
  },
  {
    title: "East Coast Mental Wellness",
    category: "Divi",
    summary: "Ongoing site management on Divi — responsiveness fixes, page updates, and technical SEO upkeep.",
    image: "",
    url: "#",
    featured: true
  },
  {
    title: "AIM Dynamics Funnel",
    category: "GoHighLevel",
    summary: "Marketing funnel and site built in GoHighLevel with custom HTML/CSS/JS extensions.",
    image: "",
    url: "#",
    featured: true
  },
  {
    title: "We Get You Leads — Client Sites",
    category: "Elementor",
    summary: "Multiple lead-generation sites built from Figma design files, QA'd and connected to Google Analytics.",
    image: "",
    url: "#",
    featured: false
  },
  {
    title: "SEO for Real Estate Investors",
    category: "Beaver Builder",
    summary: "Migrated from Elementor to Beaver Builder and rebuilt for responsiveness across devices.",
    image: "",
    url: "#",
    featured: false
  },
  {
    title: "Evolution Marketing Storefront",
    category: "Front-End",
    summary: "Custom responsive e-commerce pages built from Figma, PSD and AI files using Bootstrap.",
    image: "",
    url: "#",
    featured: false
  }
];

// Add new entries above this line — do not remove the export below.
if (typeof module !== "undefined") { module.exports = PORTFOLIO_ITEMS; }
