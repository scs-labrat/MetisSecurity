// About-page content for Applied Computing: company introduction, working
// principles, the Metis assessment process, and team. Company details are
// drawn from the Metis Unified Model document. Team entries are placeholders
// until verified profiles are supplied.

export const about = {
  intro:
    "Applied Computing is the Metis practice. We see the enterprise estate as one whole — not a set of technology silos — and we assess whether a realistic starting identity can reach a business consequence. The client buys one map of how access becomes consequence, in one vocabulary, instead of a stack of reports in six.",
  whatClientBuys:
    "One map of how access becomes consequence across the whole estate, in one vocabulary. Every finding is a proven path. Cross-domain paths are the primary product. Detection is read from the same map. And the work is comparable over time and across the estate.",
  principles: [
    {
      title: "One ontology for offensive security",
      description:
        "The estate is one graph. We replace technology-specific methodologies with one model of compromise, expressed in a fixed vocabulary of seven nouns and nine verbs.",
    },
    {
      title: "A finding is a proven path",
      description:
        "A finding is a proven path through the graph, from a realistic starting identity to a business consequence the client is paying to prevent — where every edge is justified by an observed weakness or trust relationship and supported by evidence.",
    },
    {
      title: "Severity is a property of the path",
      description:
        "Severity is not a property of the flaw. It is a property of the path. Remediation is the cheapest edge to cut.",
    },
    {
      title: "A claim is a hypothesis until proven",
      description:
        "An automated tool or a model proposes an edge; it does not confirm one. Collection is a lead. Proof is a separate act. No tool's or model's confidence score changes that.",
    },
    {
      title: "A human owns every finding",
      description:
        "Everything from the target is treated as untrusted data to analyse, never as instruction. Every finding is verified and owned by a human before it ships.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Confirm",
      description:
        "Confirm the environment and baseline. Agree the subgraph in scope and the hard boundary around it.",
    },
    {
      step: "02",
      title: "Map",
      description:
        "Map the nouns and candidate edges — sites, zones, assets, principals, and conduits — and the trust relationships between them.",
    },
    {
      step: "03",
      title: "Prove",
      description:
        "Prove the prioritised edges. A claim is a hypothesis until evidence proves it; collection is a lead, proof is a separate act.",
    },
    {
      step: "04",
      title: "Demonstrate",
      description:
        "Demonstrate the path — from a realistic starting identity to the business consequence, with every step justified by evidence.",
    },
    {
      step: "05",
      title: "Assess",
      description:
        "Assess visibility and response. Read detection from the same map: where the attacker is seen, and where they are not.",
    },
    {
      step: "06",
      title: "Report",
      description:
        "Report and verify improvement. Remediation is the cheapest edge to cut; the work is comparable over time and across the estate.",
    },
  ],
  // Placeholder team — replace with verified profiles before launch.
  team: [
    {
      name: "Your team here",
      role: "Metis practice",
      bio: "This is a placeholder biography. Replace it with verified experience, qualifications, and relevant research before launch. Omit any credentials, client names, or case studies that haven't been confirmed.",
    },
  ],
  company: {
    registeredName: "Applied Computing Technologies Ltd.",
    companyNumber: "15350699",
    address: "3rd floor, 86-90 Paul Street, London, EC2A 4NE",
  },
  // Optional: approved research or evidence of expertise. Leave empty until supplied.
  research: [],
};