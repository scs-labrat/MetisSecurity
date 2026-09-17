// The Metis Platform: four components that share one graph and one vocabulary.
// Graph is the core; RED, Deception and Blue are the planes that read from and write back to it.

export const platformComponents = [
  {
    slug: "metis-graph",
    name: "Metis Graph",
    role: "Authoritative core",
    tagline: "The single, versioned model of the estate every component shares.",
    summary:
      "The authoritative core of the platform: the single, versioned model of the estate that every other component reads from and writes back to.",
    paragraphs: [
      "Graph is the authoritative core of the platform: the single, versioned model of the estate that every other component reads from and writes back to. It holds the nouns and verbs the seven guides describe as one connected map, with tenant, site, graph version, scope, safety class and identity correlation treated as first-class properties rather than metadata bolted on afterwards.",
      "Because it is versioned and reconciled, it carries history, root-cause analysis and consequence-ranked prioritisation, so a fix that removes an edge is visibly gone on the next assessment rather than re-litigated across a stack of reports. Graph decides where validation effort is best spent, and its responses support redaction and provenance so that sensitive detail is disclosed only where authorised. It is the shared context that keeps RED, Deception and Blue speaking one language about one estate.",
    ],
  },
  {
    slug: "metis-red",
    name: "Metis RED",
    role: "Offensive validation plane",
    tagline: "Proves or disproves the candidate edges Graph proposes, by execution.",
    summary:
      "The offensive validation plane: it takes the candidate edges Graph proposes and proves or disproves them by execution, turning hypotheses into proven paths to a named consequence.",
    paragraphs: [
      "RED is the offensive validation plane: it takes the candidate edges Graph proposes and proves or disproves them by execution, turning hypotheses into proven paths to a named consequence. It supports mission families, specialist agents, conditional workflows, approval paths and human review, so that collection can run at machine speed while a person still authorises each consequential step and owns every finding that ships.",
      "Crucially, RED is governed rather than free-running: machine-readable rules of engagement, exact targets, approved windows, safety ceilings, separation of duties, tamper-evident action receipts and an emergency stop are built into how it operates, not documented alongside it. That governance is what lets an autonomous or augmented instrument work inside a client estate as a disclosed, scoped principal, held to the same proof standard as a manual tester.",
    ],
  },
  {
    slug: "metis-deception",
    name: "Metis Deception",
    role: "Defensive feedback plane",
    tagline: "Seeds the estate with decoys and reports when something touches them.",
    summary:
      "The defensive-feedback plane: it seeds the estate with synthetic credentials and decoy artefacts, then reports when something interacts with them — closing the loop a purely offensive tool leaves open.",
    paragraphs: [
      "Deception is the defensive-feedback plane, and it closes the loop that a purely offensive tool leaves open: it seeds the estate with synthetic credentials and decoy artefacts, then reports when something interacts with them. Every interaction is signed telemetry, reconciled against the graph and revocable, so a triggered decoy is durable evidence of movement rather than an unverifiable alert.",
      "Where RED proves that a path can be traversed, Deception answers whether traversal would be seen, tying detection outcomes back to the exact edges on a proven path in the fixed vocabulary of Guide 6. Because its telemetry lands in the same graph, prevention, visibility and containment are measured against real movement instead of assumed from tooling, and its synthetic credentials are managed through a proper lifecycle of issue, reconcile and revoke.",
    ],
  },
  {
    slug: "metis-blue",
    name: "Metis Blue",
    role: "Defensive and response plane",
    tagline: "Turns proven paths into remediation the responsible owners can act on.",
    summary:
      "The defensive and response counterpart to RED: concerned with what the estate records, alerts on, and contains, and with turning proven paths into remediation owners can act on.",
    paragraphs: [
      "Blue is the defensive and response counterpart to RED: where RED asks whether a path can be walked and Deception asks whether the walk is noticed, Blue is concerned with what the estate records, alerts on, and contains, and with turning proven paths into remediation the responsible owners can act on. It correlates the engagement's own timeline against the client's telemetry across identity, endpoint, network, application, data and deployment records, so that for each traversed edge it can distinguish an action prevented, an event recorded, an alert delivered in time, and activity contained.",
      "From there it carries findings through their full lifecycle, with evidence lineage running from finding to raw artefacts to remediation guidance to retest to closure, and acceptance criteria attached to each cut. Blue is where the platform's offensive proof becomes a defensible, owner-assigned action list rather than a catalogue of interesting flaws.",
    ],
  },
];

export function getPlatformComponentBySlug(slug) {
  return platformComponents.find((c) => c.slug === slug);
}

export function getPlatformSiblings(slug) {
  return platformComponents.filter((c) => c.slug !== slug);
}