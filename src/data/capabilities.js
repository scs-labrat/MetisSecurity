// Six capability panels shared by Home and Services.
// Each panel links to a service page or a section anchor (see brief §2).
// Cover images are generated assets; replace with owned production media.

export const capabilities = [
  {
    id: "web-api",
    title: "Web & API Security",
    summary:
      "Authorization, business logic, exposed data, and the trust boundaries of your applications.",
    cover: "https://media.base44.com/images/public/6aaafc141cc6e903236d3845/45df48f69_generated_171e36a4.jpg",
    serviceSlug: "penetration-testing",
    sectionId: "web-api",
    cursorLabel: "View service",
  },
  {
    id: "cloud-identity",
    title: "Cloud & Identity Security",
    summary:
      "Permissions, cloud configuration, workload identities, and paths to sensitive resources.",
    cover: "https://media.base44.com/images/public/6aaafc141cc6e903236d3845/8e86ab1e7_generated_20348919.jpg",
    serviceSlug: "penetration-testing",
    sectionId: "cloud-identity",
    cursorLabel: "View service",
  },
  {
    id: "internal-endpoint",
    title: "Internal & Endpoint Security",
    summary:
      "Internal access, identity infrastructure, managed endpoints, and device/network trust.",
    cover: "https://media.base44.com/images/public/6aaafc141cc6e903236d3845/33c46de88_generated_db56fc82.jpg",
    serviceSlug: "penetration-testing",
    sectionId: "internal-endpoint",
    cursorLabel: "View service",
  },
  {
    id: "adversary-simulation",
    title: "Adversary Simulation",
    summary:
      "Realistic routes to defined business objectives, with evidence about detection and response.",
    cover: "https://media.base44.com/images/public/6aaafc141cc6e903236d3845/aabd0092f_generated_5f130ae3.jpg",
    serviceSlug: "adversary-simulation",
    sectionId: null,
    cursorLabel: "View service",
  },
  {
    id: "ai-security",
    title: "AI Security",
    summary:
      "Abuse paths in AI applications, retrieval systems, agents, and connected tools.",
    cover: "https://media.base44.com/images/public/6aaafc141cc6e903236d3845/27654913f_generated_ed6e1b3c.jpg",
    serviceSlug: "ai-security",
    sectionId: null,
    cursorLabel: "View service",
  },
  {
    id: "connected-systems",
    title: "Connected Systems",
    summary:
      "Attack paths across applications, identity, cloud, endpoints, and third-party integrations.",
    cover: "https://media.base44.com/images/public/6aaafc141cc6e903236d3845/b458e6240_generated_fa85280c.jpg",
    serviceSlug: "adversary-simulation",
    sectionId: "connected-systems",
    cursorLabel: "View service",
  },
];

export function getCapabilityHref(cap) {
  const base = `/services/${cap.serviceSlug}`;
  return cap.sectionId ? `${base}#${cap.sectionId}` : base;
}