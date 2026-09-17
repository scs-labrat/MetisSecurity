// Three service-detail pages. Content is proposed/draft copy — replace with
// Applied Computing's verified engagement terms, durations, and deliverables.
// Each page reuses one template: intro → facts → blocks → related → enquiry.

import { capabilities, getCapabilityHref } from "./capabilities";

const portraitCover = "https://media.base44.com/images/public/6aaafc141cc6e903236d3845/e33fa5d9f_generated_469f52f3.jpg";

export const services = [
  {
    slug: "penetration-testing",
    route: "/services/penetration-testing",
    title: "Penetration Testing",
    question: "Where can an attacker compromise our applications, infrastructure, or identities?",
    summary:
      "Hands-on testing of the systems you depend on. We find the paths an attacker would actually take, then help you decide what to fix first.",
    enquiryLabel: "Scope a penetration test",
    facts: [
      { label: "Environments", value: "Web, API, cloud, identity, internal, endpoint" },
      { label: "Focus", value: "Exploitable attack paths, not checklist findings" },
      { label: "Deliverables", value: "Findings, evidence, remediation guidance, debrief" },
      { label: "Format", value: "Time-boxed engagement, scoped to your risk" },
    ],
    blocks: [
      {
        type: "text",
        label: "Introduction",
        heading: "We test the way a determined attacker moves through your stack.",
        paragraphs: [
          "Most assessments stop at a list of weaknesses. We go further — chaining them into the routes that actually reach something worth protecting. The result is a short list of the things that matter, ranked by real impact, with enough evidence to act on.",
          "Every engagement is scoped to your environment and the decisions you need to make. You leave with findings you can prioritise, not a report that lives in a drawer.",
        ],
      },
      {
        type: "text",
        id: "web-api",
        label: "Scope block",
        heading: "Web & API Security",
        paragraphs: [
          "Authorization and access control, business logic, exposed data, and the trust boundaries between your services. We test the places where a small mistake becomes a serious one — broken object-level authorization, logic flaws, and APIs that leak more than they should.",
        ],
      },
      {
        type: "text",
        id: "cloud-identity",
        label: "Scope block",
        heading: "Cloud & Identity Security",
        paragraphs: [
          "Permissions and configuration across your cloud accounts, workload identities, and the paths from a low-value foothold to sensitive resources. We look for the over-permissive roles, exposed secrets, and trust relationships that turn a minor compromise into a major one.",
        ],
      },
      {
        type: "text",
        id: "internal-endpoint",
        label: "Scope block",
        heading: "Internal & Endpoint Security",
        paragraphs: [
          "Internal access and identity infrastructure, managed endpoints, and the trust your network extends to devices. Where your environment includes managed platforms — for example macOS fleets under tools like Kandji, or networks joined with Tailscale — we test them as part of the real attack surface, not as a separate checkbox.",
        ],
      },
      {
        type: "list",
        heading: "Methodology",
        items: [
          "Scoping call to map the systems, trust boundaries, and the decisions you need to support.",
          "Threat modelling to focus effort where the impact is highest.",
          "Manual, attacker-led testing with evidence captured at every step.",
          "Clear, prioritised findings with reproduction steps and remediation guidance.",
          "A working session to walk your team through what we found and what to do next.",
        ],
      },
      {
        type: "text",
        label: "Outputs",
        heading: "Findings you can act on, not a wall of text.",
        paragraphs: [
          "You receive a prioritised set of findings, each with the evidence to reproduce it and concrete remediation guidance. We close with a debrief so your engineers can ask questions in real time — and we remain available for follow-up while you fix.",
        ],
      },
      {
        type: "text",
        label: "Scoping inputs",
        heading: "What we need to scope your test.",
        paragraphs: [
          "A short conversation about the systems in scope, the environments they run in, and the outcomes you want. Detailed scoping follows the enquiry — you don't need a complete brief to start.",
        ],
      },
    ],
    relatedSlugs: ["adversary-simulation", "ai-security"],
  },
  {
    slug: "adversary-simulation",
    route: "/services/adversary-simulation",
    title: "Adversary Simulation",
    question: "Can an attacker reach a critical business objective across our controls?",
    summary:
      "A goal-oriented exercise that tests whether your detection and response can stop a determined attacker reaching something that matters.",
    enquiryLabel: "Discuss a simulation",
    facts: [
      { label: "Environments", value: "Across applications, identity, cloud, endpoints, integrations" },
      { label: "Focus", value: "Business objectives, detection, and response" },
      { label: "Deliverables", value: "Attack narrative, detection gaps, response evaluation, debrief" },
      { label: "Format", value: "Coordinated, objective-led engagement with clear boundaries" },
    ],
    blocks: [
      {
        type: "text",
        label: "Introduction",
        heading: "We don't test controls in isolation. We test whether they stop an attacker who means it.",
        paragraphs: [
          "Adversary simulation is built around a business objective — the thing a real attacker would actually want. We agree the starting assumptions, then work the real paths from there to the objective, across whatever systems are in the way.",
          "The point isn't to break in for its own sake. It's to find out, with evidence, where your detection sees us, where it doesn't, and how your response holds up under pressure.",
        ],
      },
      {
        type: "text",
        label: "Objectives",
        heading: "Business objectives and starting assumptions.",
        paragraphs: [
          "We begin with the objective that matters most to you — a crown-jewel system, a financial action, an administrative takeover. Then we define the starting point: what an attacker would plausibly have, and what's out of bounds.",
        ],
      },
      {
        type: "text",
        id: "connected-systems",
        label: "Scenarios",
        heading: "Attack-path and connected-system scenarios.",
        paragraphs: [
          "Real attackers don't respect team boundaries. They move from an exposed application to an identity, from a cloud misconfiguration to an endpoint, from a third-party integration to something you didn't realise was reachable. We trace those connected paths — across applications, identity, cloud, endpoints, and integrations — and show you where the seams are.",
        ],
      },
      {
        type: "list",
        heading: "What we evaluate",
        items: [
          "Detection: where does your telemetry actually see the attacker?",
          "Response: how quickly and effectively does the team react?",
          "Containment: can the attacker be stopped before the objective?",
          "Gaps: the blind spots an attacker would rely on.",
        ],
      },
      {
        type: "text",
        label: "Coordination",
        heading: "Engagement coordination and boundaries.",
        paragraphs: [
          "A simulation only works with trust. We coordinate closely with your team, agree clear rules of engagement and stop conditions, and keep a live channel open throughout. Nothing happens by surprise — except, ideally, the attacker's success.",
        ],
      },
      {
        type: "text",
        label: "Outputs",
        heading: "An attack narrative and a clear picture of your detection and response.",
        paragraphs: [
          "You receive the full attack narrative — every step, the evidence, and where each control did or didn't engage — alongside a prioritised view of detection and response gaps. We debrief with both engineering and security operations, so the lessons land where they're useful.",
        ],
      },
      {
        type: "text",
        label: "Scoping inputs",
        heading: "What we need to scope a simulation.",
        paragraphs: [
          "The objective you want to protect, the environments it depends on, and the starting assumptions you want to test. We'll shape the rest together.",
        ],
      },
    ],
    relatedSlugs: ["penetration-testing", "ai-security"],
  },
  {
    slug: "ai-security",
    route: "/services/ai-security",
    title: "AI Security",
    question: "How could our AI-enabled product or workflow be abused?",
    summary:
      "Testing for the abuse paths in AI applications, retrieval systems, agents, and the tools they're connected to.",
    enquiryLabel: "Assess an AI system",
    facts: [
      { label: "Environments", value: "LLM applications, retrieval systems, agents, connected tools" },
      { label: "Focus", value: "Abuse paths, data exposure, agent permissions, workflow integrity" },
      { label: "Deliverables", value: "Abuse cases, evidence, remediation guidance, debrief" },
      { label: "Format", value: "Scoped to your AI surface and risk tolerance" },
    ],
    blocks: [
      {
        type: "text",
        label: "Introduction",
        heading: "AI changes the attack surface. We test the new ways it can be turned against you.",
        paragraphs: [
          "An AI-enabled product or workflow introduces abuse paths that traditional testing doesn't catch — prompts that reframe the model, retrieval that surfaces things it shouldn't, agents that take actions their users didn't intend. We test those paths directly.",
          "The goal is the same as everywhere else: a short, prioritised list of the things that matter, with the evidence to act on them.",
        ],
      },
      {
        type: "text",
        label: "Scope",
        heading: "AI and LLM application scope.",
        paragraphs: [
          "We map the surface — the model, the prompts and system instructions, the retrieval and data sources, the tools and APIs the agent can call, and the workflows that wrap them. Then we test the seams between them.",
        ],
      },
      {
        type: "list",
        heading: "What we test for",
        items: [
          "Prompt injection and instruction override — direct and indirect.",
          "Retrieval and data exposure across documents and tenants.",
          "Agent and tool permissions — what an agent can be coerced into doing.",
          "Workflow abuse — where a helpful feature becomes an attack path.",
        ],
      },
      {
        type: "text",
        label: "Methodology",
        heading: "Attacker-led testing, tuned to AI failure modes.",
        paragraphs: [
          "We combine manual, attacker-led testing with targeted automation for the repetitive abuse cases. Every finding is reproduced and documented with the evidence your team needs to fix it — not just a category label.",
        ],
      },
      {
        type: "text",
        label: "Outputs",
        heading: "Findings and remediation options, in plain language.",
        paragraphs: [
          "You receive prioritised findings with reproduction steps and remediation guidance — covering model behaviour, retrieval design, agent guardrails, and the workflow controls around them. We debrief with the team that built it, so the fixes are practical.",
        ],
      },
      {
        type: "text",
        label: "Scoping inputs",
        heading: "What we need to assess your AI system.",
        paragraphs: [
          "A description of the product or workflow, the model and retrieval sources in use, and any tools or actions the system can take. Detailed scoping follows the enquiry.",
        ],
      },
    ],
    relatedSlugs: ["penetration-testing", "adversary-simulation"],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service) {
  return (service.relatedSlugs || [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);
}

export { portraitCover };