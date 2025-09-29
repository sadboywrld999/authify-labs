import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/data/caseStudies";

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return (async () => {
    const { slug } = await params;
    const cs = getCaseStudyBySlug(slug);
    if (!cs) return { title: "Case Study" };
    return { title: cs.title, description: cs.teaser };
  })();
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return notFound();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold">{cs.title}</h1>
        <p className="mt-3 text-muted">{cs.teaser}</p>
        <div className="mt-8 grid gap-8">
          <section>
            <h2 className="font-semibold">Challenge</h2>
            <p className="text-sm text-muted mt-2 whitespace-pre-line">{cs.challenge}</p>
          </section>
          <section>
            <h2 className="font-semibold">Solution</h2>
            <ul className="text-sm text-muted mt-2 list-disc pl-5 space-y-1">
              {cs.solution.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-semibold">Impact</h2>
            <p className="text-sm text-muted mt-2">{cs.impact}</p>
          </section>
        </div>
      </div>
    </div>
  );
}


