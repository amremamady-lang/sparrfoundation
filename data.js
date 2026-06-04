/* ============================================================
   SPARR FOUNDATION, data layer (global)
   STRICTLY based on real content from sparrfoundation.company.site
   Grammar cleaned, but NO invented facts / stats / prices.
   ============================================================ */
window.SF = window.SF || {};

/* Real donation link + contact details from the live site */
SF.donateUrl = "https://square.link/u/AZ4QPApS";
SF.contact = {
  place: "Niagara Falls, Ontario, Canada",
  phone: "+1 416 888 5935",
  phoneHref: "tel:+14168885935",
  email: "mail@sparrtours.com",
  hours: [
    { d: "Sunday", h: "9:30 AM to 12:00 AM" },
    { d: "Monday – Saturday", h: "11:00 AM to 12:00 AM" },
  ],
  facebook: "https://facebook.com/sparrfoundation",
  instagram: "https://instagram.com/sf",
  twitter: "https://twitter.com/sf",
  youtube: "https://www.youtube.com/@YourSuperChannel",
};

/* The foundation's stated aims (from the Welcome / mission copy).
   These are the real focus areas, described, not quantified. */
SF.programs = [
  {
    id: "jamaica",
    name: "Jamaica Relief",
    tag: "Active appeal",
    accent: "clay",
    blurb: "Storm Melissa devastated many families, leaving many homeless. Build a strong foundation with us for Love & Humanity, watch the video and make a one-time contribution.",
    ph: "ph--clay", phLabel: "video: families after Storm Melissa",
    img: "assets/jamaica.png",
  },
  {
    id: "provisions",
    name: "Living Without Provisions",
    tag: "Our mission",
    accent: "forest",
    blurb: "Our goal is to help those who are economically deprived around the world, people living without the provisions they need to get by.",
    ph: "ph--forest", phLabel: "photo: community support",
    img: "assets/provisions.png",
  },
  {
    id: "families",
    name: "Families & War",
    tag: "Our mission",
    accent: "ink",
    blurb: "We stand with individuals who have lost their children or family to war, meeting them with dignity, and with Love & Humanity.",
    ph: "ph--ink", phLabel: "photo: family support",
    img: "assets/families.png",
  },
];

/* Two real reviews from the site (grammar tidied, meaning kept) */
SF.testimonials = [
  { q: "Home is always where the heart is, a new generation of philanthropy. The volunteers at the Foundation are at their best: warm and filled with humanity.", name: "Sonia C.", role: "Volunteer", ph: "ph--ochre" },
  { q: "We came here for the first time almost five years ago. The volunteers at the Foundation are warm and filled with humanity.", name: "Farishta N.", role: "Vice President", ph: "ph--clay" },
];

/* The one named person on the site */
SF.team = [
  { name: "Farishta N.", role: "Vice President", ph: "ph--clay",
    bio: "Meet Farishta, Niagara Falls' famous VP. Since the opening of Sparr Foundation in 2011, she has developed a unique way of helping others around the world. \u201CLove & Humanity.\u201D" },
];

/* Real shop items (the \u201CGallo\u201D collection) with real CAD prices.
   No invented descriptions, categories or \u201Cimpact\u201D claims. */
SF.products = [
  { id: "union",    name: "Union",            price: 601.00,  ph: "ph--clay" },
  { id: "newi",     name: "Newi",             price: 161.00,  ph: "ph--ink" },
  { id: "thress",   name: "Thress",           price: 201.00,  ph: "ph--forest" },
  { id: "flow",     name: "Flow",             price: 61.40,   ph: "ph--ochre" },
  { id: "duke",     name: "Duke",             price: 1861.00, ph: "ph--ink" },
  { id: "sea",      name: "Sea",              price: 761.00,  ph: "ph--forest" },
  { id: "asiete",   name: "Asiete",           price: 821.00,  ph: "ph--clay" },
  { id: "ocho",     name: "Ocho",             price: 181.00,  ph: "ph--ochre" },
  { id: "asawaves", name: "Asawaves",         price: 1561.40, ph: "ph--forest" },
  { id: "shades",   name: "SF Cool Shades",   price: 180.00,  ph: "ph--ink" },
];

/* Currency helper, the live store prices are in Canadian dollars */
SF.money = (n) => "C$" + Number(n).toLocaleString("en-CA", {
  minimumFractionDigits: n % 1 ? 2 : 0,
  maximumFractionDigits: 2,
});
