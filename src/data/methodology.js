// The Metis Unified Model: one ontology for offensive security.
// Content drawn from the Metis Unified Model document.
// The estate is one graph; a finding is a proven path through it.

export const methodology = {
  intro:
    "Metis is a security assessment paradigm that sees the enterprise estate as one whole, not as a set of technology silos. It replaces previous technology-specific methodology sets with one model of compromise — expressed in a fixed vocabulary of seven nouns and nine verbs.",
  graphParadigm:
    "The estate is one graph. A finding is a proven path through that graph, from a realistic starting identity to a business consequence the client is paying to prevent. Severity is a property of the path, not the flaw. Remediation is the cheapest edge to cut.",
  nouns: [
    {
      name: "Site",
      definition: "A boundary of ownership or control. The largest container on the map.",
      description:
        "A cloud account or project, a directory forest, a service tenant, a business unit, a physical location.",
    },
    {
      name: "Zone",
      definition: "A boundary of trust or segmentation inside or between sites. Where a boundary is meant to hold.",
      description:
        "A network segment, a virtual network, a production tier, a device-posture class, a security domain.",
    },
    {
      name: "Asset",
      definition: "A system or store that has value or does work.",
      description:
        "A host, a database, an object store, an application, an API, a managed device, a model or ML service, a pipeline.",
    },
    {
      name: "Principal",
      definition: "An identity that can act.",
      description:
        "An employee, a contractor, a service account, a workload identity, an application role, an AI agent.",
    },
    {
      name: "Conduit",
      definition: "A channel through which access or influence flows between things.",
      description:
        "An integration, an identity federation, a trust relationship, an overlay network, a deployment pipeline, a tool an agent can call, an event trigger.",
    },
    {
      name: "Weakness",
      definition: "A flaw that permits a connection that should not exist, or removes a boundary that should hold.",
      description:
        "A misconfiguration, a vulnerability, an over-broad permission, a missing approval, a stale posture signal, an injectable input.",
    },
    {
      name: "Consequence",
      definition: "The business outcome the client is paying to prevent. The reason the map exists.",
      description:
        "One customer reaching another's data, a workload reaching production secrets, an untrusted contribution reaching a release, regulated data leaving its boundary.",
    },
  ],
  verbs: [
    { name: "RUNS_AS", definition: "An asset acts with a principal's authority." },
    { name: "MEMBER_OF", definition: "A principal inherits authority from a group or role." },
    { name: "HAS_ACCESS_TO", definition: "A principal can reach or use an asset." },
    { name: "HOLDS_CREDENTIAL_FOR", definition: "A principal or asset holds a secret that authenticates as another principal or for another asset." },
    { name: "REACHABLE_FROM", definition: "One asset or zone can reach another over the network or topology." },
    { name: "CAN_INFLUENCE", definition: "One thing can change another's behaviour without controlling it outright." },
    { name: "SAME_AS", definition: "Two identities observed in different systems are the same real actor." },
    { name: "EXPOSES", definition: "A weakness on an asset or conduit opens an unintended edge." },
    { name: "LEADS_TO", definition: "A proven step of movement or escalation: this state enables the next." },
  ],
  principles: [
    "One ontology for offensive security.",
    "The estate is one graph.",
    "A finding is a proven path through that graph, from a realistic starting identity to a business consequence the client is paying to prevent.",
    "Severity is a property of the path.",
    "Remediation is the cheapest edge to cut.",
    "No guide is organised by technology, because attackers are not.",
    "A claim is a hypothesis until evidence proves it, and no tool's or model's confidence score changes that.",
    "A human owns every finding that ships.",
    "The vocabulary makes claims comparable; the proof standard makes them true.",
  ],
  stages: [
    { step: "01", title: "Confirm", description: "Confirm the environment and baseline. Agree the subgraph in scope and the hard boundary around it." },
    { step: "02", title: "Map", description: "Map the nouns and candidate edges — sites, zones, assets, principals, and conduits — and the trust relationships between them." },
    { step: "03", title: "Prove", description: "Prove the prioritised edges. A claim is a hypothesis until evidence proves it; collection is a lead, proof is a separate act." },
    { step: "04", title: "Demonstrate", description: "Demonstrate the path — from a realistic starting identity to the business consequence, with every step justified by evidence." },
    { step: "05", title: "Assess", description: "Assess visibility and response. Read detection from the same map: where the attacker is seen, and where they are not." },
    { step: "06", title: "Report", description: "Report and verify improvement. Remediation is the cheapest edge to cut; the work is comparable over time and across the estate." },
  ],
};