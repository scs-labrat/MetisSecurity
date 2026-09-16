// Single source of truth for Asymmetric's site identity, contact, and footer.
// Replace placeholder values with verified business details before launch.

export const siteConfig = {
  name: "Asymmetric",
  discipline: "Offensive Security",
  tagline: "We test the real attack paths that matter — and help you decide what to fix.",
  // IANA time zone for the header clock. Adjust to the firm's operating time zone.
  timezone: "Australia/Sydney",
  location: "Sydney, Australia",
  // Contact recipient + delivery handler. Until `deliveryConfigured` is true,
  // the enquiry form shows an honest demo/unconfigured state and does not
  // claim a delivered submission.
  contact: {
    deliveryConfigured: false,
    email: "hello@asymmetric.security", // placeholder — replace before launch
    phone: "", // optional
  },
  social: [
    { label: "GitHub", href: "https://github.com" }, // placeholder
    { label: "LinkedIn", href: "https://linkedin.com" }, // placeholder
    { label: "X", href: "https://x.com" }, // placeholder
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} Asymmetric. All rights reserved.`,
    note: "Boutique offensive security consultancy.",
  },
};

export const primaryCta = {
  label: "Discuss an engagement",
  href: "/contact",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];