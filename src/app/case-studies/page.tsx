"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MotionSection } from "@/components/MotionSection";
import { AnimatedText, SlideUpText } from "@/components/AnimatedText";
import { FloatingDots, GridPattern } from "@/components/FloatingElements";
import { InteractiveCaseStudy } from "@/components/InteractiveCaseStudy";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight, Lightbulb, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {

  const processSteps = [
    {
      title: "Discovery & Analysis",
      description: "We dive deep into understanding your business challenges and technical requirements.",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Strategic Planning", 
      description: "Our team designs a comprehensive solution architecture tailored to your needs.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Execution & Delivery",
      description: "We build, test, and deploy production-ready solutions with measurable impact.",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background min-h-[60vh] flex items-center">
        <GridPattern />
        <FloatingDots />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <SlideUpText>
              <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                Success Stories
              </Badge>
            </SlideUpText>

            {/* Main Headline */}
            <AnimatedText delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Real Impact,
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Proven Results
                </span>
              </h1>
            </AnimatedText>

            {/* Subtitle */}
            <AnimatedText delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Explore how we&apos;ve helped enterprises and startups across industries build scalable platforms, intelligent AI systems, and future-proof solutions. From concept to deployment, these are the stories of transformation.
              </p>
            </AnimatedText>

            {/* CTA Buttons */}
            <AnimatedText delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Start Your Success Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    Explore Our Services
                  </Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Case Studies Grid */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Case Studies</h2>
          <p className="text-muted-foreground">
            {caseStudies.length} projects showcasing our expertise across industries
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy, index) => (
            <InteractiveCaseStudy
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Our Process Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Process
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How We Deliver Success
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every successful project follows our proven methodology.
            </p>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => (
            <AnimatedText key={step.title} delay={idx * 0.1}>
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* CTA Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <AnimatedText>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Create Your Success Story?
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8">
                Join the companies that have transformed their businesses with our expertise. Let&apos;s discuss how we can help you achieve similar results.
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
                  <Link href="/solutions">
                    Explore Solutions
                  </Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}