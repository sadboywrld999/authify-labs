import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MotionSection } from "@/components/MotionSection";
import { AnimatedText, SlideUpText } from "@/components/AnimatedText";
import { FloatingDots, GridPattern } from "@/components/FloatingElements";
import {
  ArrowLeft,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  ExternalLink,
  Calendar,
  Building2
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return { title: "Case Study" };
  return { title: caseStudy.title, description: caseStudy.teaser };
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) return notFound();

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background min-h-[calc(50vh-4rem)] flex items-center">
        <GridPattern />
        <FloatingDots />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="max-w-4xl mx-auto">
            <AnimatedText>
              <div className="mb-6">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Case Studies
                </Link>
              </div>
            </AnimatedText>

            <SlideUpText>
              <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                Success Story
              </Badge>
            </SlideUpText>

            <AnimatedText delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {caseStudy.title}
                </span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8 leading-relaxed">
                {caseStudy.teaser}
              </p>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span>Healthcare & Wellness</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Enterprise Scale</span>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Main Content */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedText>
                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                        <Target className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold">The Challenge</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {caseStudy.challenge}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedText>

              <AnimatedText delay={0.1}>
                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                        <Zap className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold">Our Solution</h2>
                    </div>
                    <ul className="space-y-4">
                      {caseStudy.solution.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="p-1 rounded-full bg-primary/10 text-primary mt-0.5">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-muted-foreground leading-relaxed">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedText>

              <AnimatedText delay={0.2}>
                <Card className="border-border/50 bg-gradient-to-r from-green-500/10 to-green-500/20">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold">The Impact</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {caseStudy.impact}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-2xl font-bold text-primary mb-1">98%</div>
                        <div className="text-xs text-muted-foreground">User Engagement</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-2xl font-bold text-primary mb-1">15%</div>
                        <div className="text-xs text-muted-foreground">Cost Reduction</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-2xl font-bold text-primary mb-1">50K+</div>
                        <div className="text-xs text-muted-foreground">Active Users</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedText>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedText delay={0.3}>
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Project Details</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Industry</span>
                        <span className="font-medium">Healthcare & Wellness</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">6 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Team Size</span>
                        <span className="font-medium">8 engineers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Technology</span>
                        <span className="font-medium">Full-stack</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedText>

              <AnimatedText delay={0.4}>
                <Card className="border-border/50 bg-gradient-to-r from-primary/10 to-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Ready to Start Your Project?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Let&apos;s discuss how we can help you achieve similar results.
                    </p>
                    <Button asChild className="w-full group">
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedText>

              <AnimatedText delay={0.5}>
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Related Case Studies</h3>
                    <div className="space-y-3">
                      {[
                        { title: "AI-Powered Analytics Platform", industry: "FinTech" },
                        { title: "Smart City Traffic Systems", industry: "Government" },
                        { title: "D2C Marketplace Platform", industry: "E-commerce" }
                      ].map((study, idx) => (
                        <Link
                          key={idx}
                          href="#"
                          className="block p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                        >
                          <div className="font-medium text-sm mb-1">{study.title}</div>
                          <div className="text-xs text-muted-foreground">{study.industry}</div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedText>
            </div>
          </div>
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* CTA Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-r from-primary/10 to-primary/20">
          <CardContent className="p-12 text-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <AnimatedText>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Join the companies that have transformed their operations with our expertise. Let&apos;s discuss your vision and make it reality.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <Link href="/contact">
                      Schedule a Discovery Call
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/case-studies">
                      View All Case Studies
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedText>
            </div>
          </CardContent>
        </Card>
      </MotionSection>
    </div>
  );
}


