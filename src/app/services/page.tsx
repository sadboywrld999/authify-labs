import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MotionSection } from "@/components/MotionSection";
import { AnimatedText, SlideUpText } from "@/components/AnimatedText";
import { FloatingDots, GridPattern } from "@/components/FloatingElements";
import { 
  ArrowRight, 
  Code, 
  Bot, 
  Database, 
  Shield, 
  Zap, 
  Brain, 
  Users, 
  HeadphonesIcon,
  Cpu,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle
} from "lucide-react";

export default function ServicesPage() {
  const coreServices = [
    {
      title: "Product Engineering",
      icon: <Code className="h-6 w-6" />,
      services: [
        "Web & Mobile Applications (Next.js, React Native)",
        "APIs & Platform Development (Node.js, Go, GraphQL)", 
        "Design Systems & UX flows"
      ]
    },
    {
      title: "AI Solutions & Integrations",
      icon: <Bot className="h-6 w-6" />,
      services: [
        "AI Chatbots & Assistants (real-time, multilingual, context-aware)",
        "Machine Learning Pipelines (training, deployment, optimization)",
        "Vision & NLP Solutions (OCR, speech-to-text, anomaly detection)"
      ]
    },
    {
      title: "Data & Infrastructure", 
      icon: <Database className="h-6 w-6" />,
      services: [
        "Data Pipelines & Analytics (Airflow, dbt)",
        "Datastores & Caching (Postgres, Redis)",
        "Cloud & Networking (AWS, GCP, Azure)"
      ]
    },
    {
      title: "Ops & Security",
      icon: <Shield className="h-6 w-6" />,
      services: [
        "CI/CD Automation & Observability",
        "Compliance, Governance, Identity Management", 
        "Cost & Performance Optimization"
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: "Rapid Execution",
      description: "Startup speed with enterprise reliability.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Business-First Mindset", 
      description: "We engineer with strategy, not just specs.",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Domain Experience",
      description: "Proven success across wellness, fintech, infra, and AI.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Real-Time Support",
      description: "Always-on partnership, proactive monitoring.",
      icon: <HeadphonesIcon className="h-6 w-6" />
    },
    {
      title: "AI-Native by Design",
      description: "Future-proof systems built with intelligence at the core.",
      icon: <Cpu className="h-6 w-6" />
    }
  ];

  const approachSteps = [
    {
      title: "Discovery & Strategy",
      description: "Mapping tech to business goals",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Architecture & Build", 
      description: "Future-proof design + rapid execution",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Launch & Scale",
      description: "Production-ready delivery, zero downtime", 
      icon: <Rocket className="h-6 w-6" />
    },
    {
      title: "Support & Evolution",
      description: "Continuous improvements + AI integrations",
      icon: <CheckCircle className="h-6 w-6" />
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
                End-to-End Solutions
              </Badge>
            </SlideUpText>

            {/* Main Headline */}
            <AnimatedText delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  End-to-End Software & AI Solutions
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Built for Speed, Scale, and Intelligence
                </span>
              </h1>
            </AnimatedText>

            {/* Subtitle */}
            <AnimatedText delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                At Authify Labs, we engineer more than just code. We build scalable platforms, intelligent AI pipelines, and future-proof integrations that accelerate your business. With deep expertise across industries, we are your trusted partner from concept to deployment — and beyond.
              </p>
            </AnimatedText>

            {/* CTA Buttons */}
            <AnimatedText delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Schedule a Discovery Call
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/solutions">
                    Explore Our Solutions
                  </Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Core Services Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Core Services
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comprehensive Technology Solutions
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From frontend to AI, we cover every aspect of modern software development.
            </p>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {coreServices.map((service, idx) => (
            <AnimatedText key={service.title} delay={idx * 0.1}>
              <Card className="group h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {service.services.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Why Choose Us Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Why Choose Authify Labs
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Where Engineering Meets Business Foresight
            </h2>
          </AnimatedText>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => (
            <AnimatedText key={item.title} delay={idx * 0.1}>
              <Card className="group h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Our Approach Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Approach
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              From Idea to Impact — Seamlessly
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don&apos;t just ship software. We partner with you at every stage:
            </p>
          </AnimatedText>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachSteps.map((step, idx) => (
            <AnimatedText key={step.title} delay={idx * 0.1}>
              <Card className="group h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/50 text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
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
                  Ready to Engineer the Future?
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Whether you&apos;re an enterprise scaling complex infrastructure or a founder launching the next big idea, Authify Labs delivers the expertise, speed, and intelligence to take you there.
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
                    <Link href="/contact">
                      Start Your Project
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