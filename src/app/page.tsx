import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { CaseStudySticky } from "@/components/CaseStudySticky";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { EnhancedHero } from "@/components/EnhancedHero";
import { AnimatedText, SlideUpText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Settings, Rocket, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Quick Value Props */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Enterprise-grade engineering",
              desc: "Cloud-native platforms, microservices, data pipelines, integrations, and DevOps automation.",
              icon: <Settings className="h-6 w-6" />,
            },
            {
              title: "Founder to product-market fit",
              desc: "From 0→1 MVPs to 1→N scale-ups with robust architecture and quality.",
              icon: <Rocket className="h-6 w-6" />,
            },
            {
              title: "Outcomes over outputs",
              desc: "We align engineering with business goals and ship value on time.",
              icon: <Target className="h-6 w-6" />,
            },
          ].map((card, idx) => (
            <AnimatedText key={card.title} delay={idx * 0.1}>
              <Card className="group h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Enhanced Benefits Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-16">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Why Choose Authify Labs
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Engineering Speed. Business Foresight. Lasting Impact.
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Authify Labs, we don&apos;t just build technology — we craft intelligent ecosystems that accelerate execution, safeguard scalability, and empower businesses with clarity.
            </p>
          </AnimatedText>
        </div>
        <BenefitsGrid />
      </MotionSection>

      <Separator className="my-8" />

      {/* Enhanced Case Studies Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              <CheckCircle className="w-3 h-3 mr-1" />
              Proven Results
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Proven Impact. Real‑World Solutions.
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interactive case studies that expand into Challenge → Solution → Impact.
            </p>
          </AnimatedText>
        </div>
        <div className="mt-8">
          <CaseStudySticky />
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Enhanced CTA Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-r from-primary/10 to-primary/20">
          <CardContent className="p-12 text-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <AnimatedText>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Have a challenge? Let&apos;s ship it.
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get a senior team on your problem this week. From concept to deployment, we&apos;re your technical co-founders.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <Link href="/contact">
                      Book a 30‑min consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">
                      Explore our services
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