"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MotionSection } from "@/components/MotionSection";
import { AnimatedText, SlideUpText } from "@/components/AnimatedText";
import { FloatingDots, GridPattern } from "@/components/FloatingElements";
import { InteractiveCaseStudy } from "@/components/InteractiveCaseStudy";
import { caseStudies } from "@/data/caseStudies";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Target, Zap, Search, Filter, Star, TrendingUp, Users, Award } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const industries = useMemo(() => {
    const industryMap: { [key: string]: number } = {};
    caseStudies.forEach(study => {
      // Extract industries from case study content
      if (study.id.includes("wellness")) industryMap["Healthcare & Wellness"] = (industryMap["Healthcare & Wellness"] || 0) + 1;
      if (study.id.includes("gardening") || study.id.includes("agri")) industryMap["AgriTech & Sustainability"] = (industryMap["AgriTech & Sustainability"] || 0) + 1;
      if (study.id.includes("radar") || study.id.includes("smart-cities")) industryMap["Government & Public Sector"] = (industryMap["Government & Public Sector"] || 0) + 1;
      if (study.id.includes("pricing")) industryMap["FinTech & Finance"] = (industryMap["FinTech & Finance"] || 0) + 1;
      if (study.id.includes("enterprise")) industryMap["Enterprise & B2B"] = (industryMap["Enterprise & B2B"] || 0) + 1;
    });
    return Object.entries(industryMap).map(([name, count]) => ({ name, count }));
  }, []);

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           study.teaser.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           study.challenge.toLowerCase().includes(searchTerm.toLowerCase());

      if (selectedIndustry === "all") return matchesSearch;
      // Simple industry matching based on case study ID
      const industryMatch = selectedIndustry === "Healthcare & Wellness" && study.id.includes("wellness") ||
                           selectedIndustry === "AgriTech & Sustainability" && (study.id.includes("gardening") || study.id.includes("agri")) ||
                           selectedIndustry === "Government & Public Sector" && (study.id.includes("radar") || study.id.includes("smart-cities")) ||
                           selectedIndustry === "FinTech & Finance" && study.id.includes("pricing") ||
                           selectedIndustry === "Enterprise & B2B" && study.id.includes("enterprise");
      return matchesSearch && industryMatch;
    });
  }, [searchTerm, selectedIndustry]);

  const stats = [
    { label: "Projects Delivered", value: caseStudies.length, icon: <Award className="h-5 w-5" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Star className="h-5 w-5" /> },
    { label: "Industries Served", value: industries.length, icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Team Members", value: "25+", icon: <Users className="h-5 w-5" /> }
  ];

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
      <section className="relative overflow-hidden bg-background min-h-[calc(60vh-4rem)] flex items-center">
        <GridPattern />
        <FloatingDots />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16">
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

      {/* Stats Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <AnimatedText key={stat.label} delay={idx * 0.1}>
              <div className="text-center p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors duration-300">
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Case Studies Grid */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Case Studies</h2>
            <p className="text-muted-foreground">
              {filteredCaseStudies.length} of {caseStudies.length} projects showcasing our expertise across industries
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Industries</option>
                {industries.map(industry => (
                  <option key={industry.name} value={industry.name}>
                    {industry.name} ({industry.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        {filteredCaseStudies.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map((caseStudy, index) => (
              <InteractiveCaseStudy
                key={caseStudy.id}
                caseStudy={caseStudy}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">No case studies found matching your criteria.</div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedIndustry("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </MotionSection>

      <Separator className="my-8" />

      {/* Client Testimonials */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Client Success Stories
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what industry leaders say about our partnership.
            </p>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Chen",
              role: "CTO, WellnessTech",
              company: "HealthTech Solutions",
              content: "Authify Labs transformed our vision into reality. Their technical expertise and strategic thinking helped us scale from prototype to market leader in under 18 months.",
              rating: 5
            },
            {
              name: "Michael Rodriguez",
              role: "CEO, AgriTech Corp",
              company: "Sustainable Agriculture",
              content: "The team's deep understanding of both technology and business made them invaluable partners. They didn't just build software—they built our competitive advantage.",
              rating: 5
            },
            {
              name: "Priya Sharma",
              role: "Head of Engineering",
              company: "SmartCity Systems",
              content: "Working with Authify Labs was a game-changer. Their AI expertise and attention to detail delivered results beyond our expectations, on time and within budget.",
              rating: 5
            }
          ].map((testimonial, idx) => (
            <AnimatedText key={testimonial.name} delay={idx * 0.1}>
              <Card className="h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
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