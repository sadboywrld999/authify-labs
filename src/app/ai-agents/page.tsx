"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MotionSection } from "@/components/MotionSection";
import { AnimatedText, SlideUpText } from "@/components/AnimatedText";
import { FloatingDots, GridPattern } from "@/components/FloatingElements";
import {
  ArrowRight,
  Bot,
  Brain,
  Zap,
  Rocket,
  Users,
  Workflow,
  Sparkles,
  MessageSquare,
  Code,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle,
  GitBranch,
  Timer,
  BarChart3,
  Eye
} from "lucide-react";

export default function AIAgentsPage() {
  const agentCapabilities = [
    {
      title: "Intelligent Code Generation",
      description: "AI agents write, debug, and optimize code faster than human developers",
      icon: <Code className="h-6 w-6" />,
      metrics: { speed: "10x faster", accuracy: "99.7%", languages: "50+" }
    },
    {
      title: "Automated Testing & QA",
      description: "Self-healing test suites that adapt to code changes and catch bugs before deployment",
      icon: <Shield className="h-6 w-6" />,
      metrics: { coverage: "95%+", bugs: "80% fewer", time: "90% faster" }
    },
    {
      title: "Smart Project Management",
      description: "AI agents track progress, predict delays, and optimize team workflows automatically",
      icon: <BarChart3 className="h-6 w-6" />,
      metrics: { prediction: "94% accurate", efficiency: "+40%", deadlines: "99% on-time" }
    },
    {
      title: "Real-time Code Reviews",
      description: "Instant feedback on code quality, security vulnerabilities, and best practices",
      icon: <Eye className="h-6 w-6" />,
      metrics: { reviews: "Instant", security: "Zero-day detection", quality: "Enterprise-grade" }
    }
  ];

  const useCases = [
    {
      title: "Rapid Prototyping",
      description: "Turn ideas into working prototypes in hours, not weeks",
      icon: <Zap className="h-6 w-6" />,
      impact: "75% faster time-to-market"
    },
    {
      title: "Legacy System Modernization",
      description: "AI agents analyze, refactor, and migrate legacy codebases safely",
      icon: <GitBranch className="h-6 w-6" />,
      impact: "50% cost reduction"
    },
    {
      title: "Continuous Integration",
      description: "Autonomous deployment pipelines with intelligent rollback capabilities",
      icon: <Workflow className="h-6 w-6" />,
      impact: "Zero-downtime deployments"
    },
    {
      title: "Performance Optimization",
      description: "AI-driven performance analysis and automatic optimization",
      icon: <TrendingUp className="h-6 w-6" />,
      impact: "30% performance improvement"
    }
  ];

  const workflowSteps = [
    {
      title: "Natural Language Input",
      description: "Simply describe what you want to build in plain English",
      icon: <MessageSquare className="h-6 w-6" />,
      step: 1
    },
    {
      title: "AI Analysis & Planning",
      description: "Agent analyzes requirements and creates detailed technical specifications",
      icon: <Brain className="h-6 w-6" />,
      step: 2
    },
    {
      title: "Autonomous Development",
      description: "AI generates, tests, and optimizes code automatically",
      icon: <Bot className="h-6 w-6" />,
      step: 3
    },
    {
      title: "Human-AI Collaboration",
      description: "Review, refine, and approve with seamless handoff",
      icon: <Users className="h-6 w-6" />,
      step: 4
    },
    {
      title: "Deployment & Monitoring",
      description: "AI handles deployment and monitors performance continuously",
      icon: <Rocket className="h-6 w-6" />,
      step: 5
    }
  ];

  const benefits = [
    {
      title: "Accelerated Development",
      description: "Ship features 5-10x faster with AI assistance",
      icon: <Timer className="h-6 w-6" />,
      color: "text-primary"
    },
    {
      title: "Enhanced Quality",
      description: "Fewer bugs, better security, and higher code quality",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "text-green-500"
    },
    {
      title: "Cost Efficiency",
      description: "Reduce development costs by 40-60%",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-primary"
    },
    {
      title: "24/7 Development",
      description: "AI agents work around the clock, never get tired",
      icon: <Clock className="h-6 w-6" />,
      color: "text-orange-500"
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background min-h-[calc(40vh-4rem)] flex items-center">
        <GridPattern />
        <FloatingDots />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-8 sm:pb-12">
          <div className="text-center max-w-5xl mx-auto">
            <SlideUpText>
              <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-primary/10 to-primary/20 text-primary border-primary/20">
                <Sparkles className="h-4 w-4 mr-2" />
                Next-Generation AI Development
              </Badge>
            </SlideUpText>

            <AnimatedText delay={0.1}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  AI Agents That
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Build Your Future
                </span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed">
                Experience the future of software development where AI agents don&apos;t just assist—they lead.
                From concept to deployment, our intelligent agents streamline every aspect of your project lifecycle,
                delivering enterprise-grade solutions at unprecedented speed.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary-hover hover:to-primary-hover/80">
                  <Link href="/contact">
                    Deploy AI Agents
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#capabilities">
                    Explore Capabilities
                  </Link>
                </Button>
              </div>
            </AnimatedText>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { value: "10x", label: "Faster Development" },
                { value: "99%", label: "Code Accuracy" },
                { value: "50+", label: "Languages Supported" },
                { value: "24/7", label: "Availability" }
              ].map((stat, idx) => (
                <AnimatedText key={stat.label} delay={0.4 + idx * 0.1}>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Core Capabilities */}
      <MotionSection id="capabilities" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Agent Capabilities
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Superhuman Development Powers
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI agents don&apos;t just code—they think, learn, and optimize like senior developers with decades of experience.
            </p>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {agentCapabilities.map((capability, idx) => (
            <AnimatedText key={capability.title} delay={idx * 0.1}>
              <Card className="group h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/50 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary/10 to-primary/20 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {capability.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {capability.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {capability.description}
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">{capability.metrics.speed}</div>
                          <div className="text-xs text-muted-foreground">Speed</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">{capability.metrics.accuracy}</div>
                          <div className="text-xs text-muted-foreground">Accuracy</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{capability.metrics.languages}</div>
                          <div className="text-xs text-muted-foreground">Languages</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Use Cases */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Real-World Applications
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              From Prototype to Production
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how AI agents transform development across different project types and industries.
            </p>
          </AnimatedText>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {useCases.map((useCase, idx) => (
            <AnimatedText key={useCase.title} delay={idx * 0.1}>
              <Card className="group h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {useCase.icon}
                    </div>
                    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      {useCase.impact}
                    </Badge>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Workflow */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              How It Works
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Future of Development Workflows
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A seamless collaboration between human creativity and artificial intelligence.
            </p>
          </AnimatedText>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-5 gap-6 relative z-10">
            {workflowSteps.map((step, idx) => (
              <AnimatedText key={step.title} delay={idx * 0.1}>
                <Card className="group h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/50 text-center hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    {idx < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-primary/80 -translate-y-1/2 z-20" />
                    )}
                  </CardContent>
                </Card>
              </AnimatedText>
            ))}
          </div>
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Benefits */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Why AI Agents?
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Measurable Business Impact
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from real projects. Here&apos;s what AI agents deliver.
            </p>
          </AnimatedText>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <AnimatedText key={benefit.title} delay={idx * 0.1}>
              <Card className="group h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gray-100 ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* Technology Stack */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <SlideUpText>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Powered By
            </Badge>
          </SlideUpText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Enterprise-Grade AI Infrastructure
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on the most advanced AI models and cloud infrastructure for unmatched reliability and performance.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "OpenAI GPT-4", category: "AI Model", logo: "/logos/openai-2.svg" },
            { name: "Anthropic Claude", category: "AI Model", logo: "/logos/openai-2.svg" },
            { name: "AWS Bedrock", category: "Cloud AI", logo: "/logos/aws-2.svg" },
            { name: "Azure OpenAI", category: "Cloud AI", logo: "/logos/aws-2.svg" },
            { name: "Google Vertex AI", category: "Cloud AI", logo: "/logos/aws-2.svg" },
            { name: "LangChain", category: "Framework", logo: "/logos/react-2.svg" },
            { name: "Vector Databases", category: "Storage", logo: "/logos/mongodb-icon-1.svg" },
            { name: "Docker", category: "Containerization", logo: "/logos/docker.svg" },
            { name: "Redis", category: "Caching", logo: "/logos/redis.svg" },
            { name: "PostgreSQL", category: "Database", logo: "/logos/postgresql.svg" },
            { name: "GitHub Actions", category: "CI/CD", logo: "/logos/next-js.svg" }
          ].map((tech, idx) => (
            <AnimatedText key={tech.name} delay={idx * 0.05}>
              <Card className="group h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/50 text-center">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-xs sm:text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                        {tech.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {tech.category}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* CTA Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-r from-primary/10 to-primary/20">
          <CardContent className="p-12 text-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <AnimatedText>
                <div className="mb-6">
                  <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Ready to Deploy Your AI Development Team?
                  </h2>
                </div>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Join forward-thinking companies already using AI agents to accelerate their development cycles.
                  From startups to enterprises, see why AI-first development is the future.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary-hover hover:to-primary-hover/80">
                    <Link href="/contact">
                      Get Started with AI Agents
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/case-studies">
                      View Case Studies
                    </Link>
                  </Button>
                </div>
              </AnimatedText>

              <AnimatedText delay={0.3}>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Accelerated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-2">$2M+</div>
                    <div className="text-sm text-muted-foreground">Cost Savings Generated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime & Reliability</div>
                  </div>
                </div>
              </AnimatedText>
            </div>
          </CardContent>
        </Card>
      </MotionSection>
    </div>
  );
}
