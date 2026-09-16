// Six capability panels shared by Home and Services.
// Each panel links to a service page or a section anchor (see brief §2).
// Cover images are generated assets; replace with owned production media.

export const capabilities = [
  {
    id: "web-api",
    title: "Web & API Security",
    summary:
      "Authorization, business logic, exposed data, and the trust boundaries of your applications.",
    cover: "/__generating__/3dc371a2-0650-4158-9758-809ae840b1d5.png",
    serviceSlug: "penetration-testing",
    sectionId: "web-api",
    cursorLabel: "View service",
  },
  {
    id: "cloud-identity",
    title: "Cloud & Identity Security",
    summary:
      "Permissions, cloud configuration, workload identities, and paths to sensitive resources.",
    cover: "/__generating__/5d03ac6a-3ee7-475f-9c4e-3f9c9f6c3485.png",
    serviceSlug: "penetration-testing",
    sectionId: "cloud-identity",
    cursorLabel: "View service",
  },
  {
    id: "internal-endpoint",
    title: "Internal & Endpoint Security",
    summary:
      "Internal access, identity infrastructure, managed endpoints, and device/network trust.",
    cover: "/__generating__/7c4bc434-ae32-4044-8c80-afc8874cdefc.png",
    serviceSlug: "penetration-testing",
    sectionId: "internal-endpoint",
    cursorLabel: "View service",
  },
  {
    id: "adversary-simulation",
    title: "Adversary Simulation",
    summary:
      "Realistic routes to defined business objectives, with evidence about detection and response.",
    cover: "/__generating__/1e499cdd-abc9-4863-a654-64b923b1e9a5.png",
    serviceSlug: "adversary-simulation",
    sectionId: null,
    cursorLabel: "View service",
  },
  {
    id: "ai-security",
    title: "AI Security",
    summary:
      "Abuse paths in AI applications, retrieval systems, agents, and connected tools.",
    cover: "/__generating__/ef526492-d3cd-41f9-b073-357cbd75c472.png",
    serviceSlug: "ai-security",
    sectionId: null,
    cursorLabel: "View service",
  },
  {
    id: "connected-systems",
    title: "Connected Systems",
    summary:
      "Attack paths across applications, identity, cloud, endpoints, and third-party integrations.",
    cover: "/__generating__/4ff5804d-8ef2-4643-860b-751ec147e364.png",
    serviceSlug: "adversary-simulation",
    sectionId: "connected-systems",
    cursorLabel: "View service",
  },
];

export function getCapabilityHref(cap) {
  const base = `/services/${cap.serviceSlug}`;
  return cap.sectionId ? `${base}#${cap.sectionId}` : base;
}