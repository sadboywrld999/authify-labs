export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  teaser: string;
  challenge: string;
  solution: string[];
  impact: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "wellness-infra",
    slug: "smart-wellness-infrastructure",
    title: "Engineering a Smart Wellness Infrastructure",
    teaser: "Data pipelines + engagement modules turning raw health inputs into insights.",
    challenge:
      "A visionary wellness company needed to process vast health data and engage users meaningfully, merging tech, data science, and behavioral psychology.",
    solution: [
      "Scalable APIs connecting wearables, health data, and lab reports.",
      "Real‑time analytics pipelines delivering actionable insights.",
      "Engagement modules grounded in behavioral psychology to drive action.",
      "Secure cloud infrastructure balancing compliance with speed.",
    ],
    impact:
      "A data‑driven wellness ecosystem with personalized insights at scale; stronger engagement, expanded offerings, and category leadership.",
  },
  {
    id: "urban-gardening-d2c",
    slug: "building-and-scaling-d2c-urban-gardening",
    title: "Building & Scaling a New D2C Category",
    teaser: "Co‑founding partner from concept → market in urban gardening.",
    challenge:
      "A manufacturing leader envisioned a D2C urban gardening brand and needed an end‑to‑end technical and operational partner.",
    solution: [
      "Brand identity and narrative with a unified customer experience.",
      "Go‑to‑market storyboards, ICPs, and unit economics modeling.",
      "Digital infrastructure: e‑commerce, native app, inventory & OMS, logistics.",
      "Performance marketing and sales across marketplaces and in‑house channels.",
    ],
    impact:
      "First‑mover advantage within months, thousands of customers, and a strong recurring revenue base through consistent experience from tech to storytelling.",
  },
  {
    id: "radar-smart-cities",
    slug: "intelligent-systems-for-safer-cities",
    title: "Intelligent Systems for Safer Cities",
    teaser: "AI‑powered radar, real‑time tracking, automated violation detection.",
    challenge:
      "Traffic enforcement bodies required accurate, automated monitoring at scale to improve road safety and compliance.",
    solution: [
      "AI‑powered radar monitoring with precise vehicle tracking.",
      "Real‑time violation detection and automated reporting.",
      "Scalable infrastructure integrated into smart city frameworks.",
    ],
    impact:
      "Authorities gained a high‑accuracy enforcement tool, reducing manual intervention and streamlining compliance management.",
  },
  {
    id: "pricing-intelligence",
    slug: "intelligent-pricing-engines-for-enterprises",
    title: "Intelligent Pricing Engines for Enterprises",
    teaser: "AI‑driven pricing recommendations across products and markets.",
    challenge:
      "Enterprises needed to optimize complex, multi‑market pricing strategies with speed and accuracy.",
    solution: [
      "Analysis of millions of transactions and market signals in real‑time.",
      "Dynamic pricing recommendations at enterprise scale.",
      "Robust observability and governance for decision transparency.",
    ],
    impact:
      "Up to 15% improvement in pricing accuracy and stronger revenue predictability across global markets.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}


