// Single source of truth for Applied Computing's site identity, contact, and footer.
// Replace placeholder values with verified business details before launch.

export const siteConfig = {
  name: "Applied Computing",
  registeredName: "Applied Computing Technologies Ltd.",
  discipline: "Metis Practice",
  tagline: "One map of how access becomes consequence across your whole estate.",
  // IANA time zone for the header clock. Adjust to the firm's operating time zone.
  timezone: "Europe/London",
  location: "London, United Kingdom",
  address: "3rd floor, 86-90 Paul Street, London, EC2A 4NE",
  companyNumber: "15350699",
  // Contact recipient + delivery handler. Until `deliveryConfigured` is true,
  // the enquiry form shows an honest demo/unconfigured state and does not
  // claim a delivered submission.
  contact: {
    deliveryConfigured: false,
    email: "hello@appliedcomputing.tech", // placeholder — replace before launch
    phone: "", // optional
  },
  social: [
    { label: "GitHub", href: "https://github.com" }, // placeholder
    { label: "LinkedIn", href: "https://linkedin.com" }, // placeholder
    { label: "X", href: "https://x.com" }, // placeholder
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} Applied Computing Technologies Ltd. All rights reserved.`,
    note: "Metis practice — offensive security.",
  },
};

export const primaryCta = {
  label: "Discuss an engagement",
  href: "/contact",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Methodology", href: "/methodology" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];