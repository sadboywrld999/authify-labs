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
  Heart,
  Building2,
  Sprout,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Cloud,
  Database,
  Bot,
  BarChart3,
  Zap,
  Target,
  Globe,
  Briefcase
} from "lucide-react";

export default function SolutionsPage() {
  const industries = [
    {
      title: "Healthcare & Wellness",
      description: "Digital health platforms, patient management systems, and wellness applications that improve lives.",
      icon: <Heart className="h-6 w-6" />,
      solutions: [
        "Telemedicine & Remote Care Platforms",
        "Health Data Analytics & Patient Insights", 
        "Wellness Apps & Behavior Tracking",
        "HIPAA-Compliant Infrastructure"
      ],
      caseStudy: "Built a comprehensive wellness platform processing health science data for personalized insights"
    },
    {
      title: "Enterprise & B2B",
      description: "Scalable business solutions, automation platforms, and enterprise integrations.",
      icon: <Building2 className="h-6 w-6" />,
      solutions: [
        "Enterprise Resource Planning (ERP)",
        "Business Process Automation",
        "API Integrations & Middleware",
        "Legacy System Modernization"
      ],
      caseStudy: "Modernized enterprise systems for Fortune 500 companies with zero-downtime migrations"
    },
    {
      title: "AgriTech & Sustainability", 
      description: "Smart farming solutions, supply chain optimization, and sustainable technology platforms.",
      icon: <Sprout className="h-6 w-6" />,
      solutions: [
        "Smart Farming & IoT Solutions",
        "Supply Chain Optimization",
        "Marketplace & E-commerce Platforms",
        "Sustainability Analytics"
      ],
      caseStudy: "Co-founded urban gardening platform achieving first-mover advantage in D2C category"
    },
    {
      title: "FinTech & Finance",
      description: "Secure financial platforms, payment systems, and regulatory compliance solutions.",
      icon: <TrendingUp className="h-6 w-6" />,
      solutions: [
        "Payment Processing & Wallets",
        "Trading & Investment Platforms", 
        "Regulatory Compliance Systems",
        "Fraud Detection & Security"
      ],
      caseStudy: "Developed AI-powered pricing engines improving accuracy by 15% for large enterprises"
    },
    {
      title: "Government & Public Sector",
      description: "Smart city infrastructure, compliance systems, and citizen service platforms.",
      icon: <ShieldCheck className="h-6 w-6" />,
      solutions: [
        "Smart City Infrastructure",
        "Traffic & Safety Systems",
        "Citizen Service Portals",
        "Compliance & Governance Tools"
      ],
      caseStudy: "Engineered AI-powered radar systems for traffic enforcement and smart city frameworks"
    },
    {
      title: "Startups & Scale-ups",
      description: "MVP development, product-market fit solutions, and rapid scaling infrastructure.",
      icon: <Zap className="h-6 w-6" />,
      solutions: [
        "MVP Development & Prototyping",
        "Product-Market Fit Optimization", 
        "Scalable Cloud Architecture",
        "Go-to-Market Technology"
      ],
      caseStudy: "Partnered as technical co-founders helping startups scale from 0→1 to 1→N growth"
    }
  ];

  const solutionTypes = [
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps built for performance and user experience.",
      icon: <Smartphone className="h-6 w-6" />,
      technologies: ["React Native", "Flutter", "iOS/Android Native", "Progressive Web Apps"]
    },
    {
      title: "Cloud Platforms",
      description: "Scalable cloud-native architectures and infrastructure solutions.",
      icon: <Cloud className="h-6 w-6" />,
      technologies: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Docker"]
    },
    {
      title: "Data Solutions",
      description: "End-to-end data pipelines, analytics, and business intelligence platforms.",
      icon: <Database className="h-6 w-6" />,
      technologies: ["Apache Airflow", "dbt", "Snowflake", "BigQuery", "Elasticsearch"]
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent systems, automation, and AI-powered business solutions.",
      icon: <Bot className="h-6 w-6" />,
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "NLP"]
    }
  ];

  const approachHighlights = [
    {
      title: "Industry Expertise",
      description: "Deep domain knowledge across healthcare, fintech, agritech, and enterprise sectors.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Global Reach",
      description: "Serving clients across India, US, Europe, and other tech-forward markets.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Business Partnership",
      description: "We don't just build—we partner with you as technical co-founders and strategic advisors.",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Proven Results",
      description: "Track record of successful launches, scaling, and measurable business impact.",
      icon: <BarChart3 className="h-6 w-6" />
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
                Industry Solutions
              </Badge>
            </SlideUpText>

            {/* Main Headline */}
            <AnimatedText delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Tailored Solutions
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  For Every Industry
                </span>
              </h1>
            </AnimatedText>

            {/* Subtitle */}
            <AnimatedText delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                From healthcare to fintech, agritech to enterprise—we bring deep domain expertise and cutting-edge technology to solve your industry&apos;s unique challenges. Our solutions are built for scale, security, and sustainable growth.
              </p>
            </AnimatedText>

            {/* CTA Buttons */}
            <AnimatedText delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Discuss Your Industry Needs
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/case-studies">
                    View Success Stories
                  </Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Industries We Serve */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Industries We Serve
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Domain Expertise Across Sectors
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand your industry&apos;s unique challenges and opportunities.
            </p>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <AnimatedText key={industry.title} delay={idx * 0.1}>
              <Card className="group h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Key Solutions:</h4>
                    <ul className="space-y-1">
                      {industry.solutions.map((solution, solutionIdx) => (
                        <li key={solutionIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <div className="h-1 w-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground italic">
                      {industry.caseStudy}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Solution Types */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Technology Solutions
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comprehensive Technology Stack
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From mobile apps to AI platforms, we deliver complete technology solutions.
            </p>
          </AnimatedText>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionTypes.map((solution, idx) => (
            <AnimatedText key={solution.title} delay={idx * 0.1}>
              <Card className="group h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/50 text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-1">
                    {solution.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded mr-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Our Approach */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Approach
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Enterprises Choose Authify Labs
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical excellence with deep industry knowledge.
            </p>
          </AnimatedText>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachHighlights.map((highlight, idx) => (
            <AnimatedText key={highlight.title} delay={idx * 0.1}>
              <Card className="group h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/50 text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
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
                  Ready to Transform Your Industry?
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Let&apos;s discuss how our industry expertise and cutting-edge technology can solve your unique challenges and drive sustainable growth.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <Link href="/contact">
                      Schedule a Strategy Session
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
          </CardContent>
        </Card>
      </MotionSection>
    </div>
  );
}