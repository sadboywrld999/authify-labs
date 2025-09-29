"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MotionSection } from "@/components/MotionSection";
import { AnimatedText, SlideUpText } from "@/components/AnimatedText";
import { FloatingDots, GridPattern } from "@/components/FloatingElements";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    projectType: "web-development"
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Project description is required";
    if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide more details about your project (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);
    setStatus(null);
    setIsSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json: { message?: string; ok?: boolean } = await res.json();
      if (!res.ok) throw new Error(json.message || "Failed to submit");
      setStatus("Thanks! We'll get back within 1 business day.");
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        projectType: "web-development"
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setStatus(message);
      setIsSuccess(false);
    } finally {
      setSubmitting(false);
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "admin@authify.tech",
      href: "mailto:admin@authify.tech"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9743057999",
      href: "tel:+919743057999"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "India, US, Europe",
      href: null
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Response Time",
      value: "Within 24 hours",
      href: null
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background min-h-[calc(50vh-4rem)] flex items-center">
        <GridPattern />
        <FloatingDots />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <SlideUpText>
              <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                Let&apos;s Connect
              </Badge>
            </SlideUpText>

            {/* Main Headline */}
            <AnimatedText delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Ready to Build
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Something Great?
                </span>
              </h1>
            </AnimatedText>

            {/* Subtitle */}
            <AnimatedText delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Tell us about your goals, challenges, and vision. We&apos;ll propose a strategic approach, timeline, and show you how we can accelerate your success with our engineering expertise.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Contact Form & Info Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <AnimatedText>
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className={`w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.name ? "border-red-500" : "border-border"
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Work Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={`w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.email ? "border-red-500" : "border-border"
                          }`}
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Company
                        </label>
                        <input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => handleInputChange("projectType", e.target.value)}
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="ai-ml">AI/ML Solution</option>
                        <option value="data-engineering">Data Engineering</option>
                        <option value="cloud-infrastructure">Cloud Infrastructure</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        What do you want to build? *
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={5}
                        className={`w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
                          errors.message ? "border-red-500" : "border-border"
                        }`}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                      {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                      <div className="text-xs text-muted-foreground">
                        {formData.message.length}/500 characters
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full group"
                      size="lg"
                    >
                      {submitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    {status && (
                      <div className={`flex items-center gap-2 p-3 rounded-md text-sm ${
                        isSuccess
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}>
                        {isSuccess ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <AlertCircle className="h-4 w-4" />
                        )}
                        {status}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </AnimatedText>
          </div>

          {/* Contact Information */}
          <div>
            <AnimatedText delay={0.2}>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Prefer to reach out directly? Here&apos;s how you can contact us.
              </p>
            </AnimatedText>

            <div className="space-y-4">
              {contactInfo.map((item, idx) => (
                <AnimatedText key={item.label} delay={0.3 + idx * 0.1}>
                  <Card className="border-border/50 hover:border-primary/50 transition-colors duration-300">
                    <CardContent className="p-4">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-4 hover:text-primary transition-colors duration-300"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>
                            <div className="font-medium">{item.label}</div>
                            <div className="text-sm text-muted-foreground">{item.value}</div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="text-primary">{item.icon}</div>
                          <div>
                            <div className="font-medium">{item.label}</div>
                            <div className="text-sm text-muted-foreground">{item.value}</div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedText>
              ))}
            </div>

            {/* Additional Info */}
            <AnimatedText delay={0.7}>
              <Card className="mt-6 border-primary/20 bg-gradient-to-r from-primary/10 to-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What Happens Next?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      We&apos;ll review your project requirements
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Schedule a discovery call within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Propose a strategic approach and timeline
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedText>
          </div>
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* FAQ Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SlideUpText>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Frequently Asked Questions
              </Badge>
            </SlideUpText>
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Common Questions
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground">
                Here are answers to some of the most common questions we receive.
              </p>
            </AnimatedText>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How quickly can you start on my project?",
                answer: "We typically begin new projects within 1-2 weeks, depending on our current capacity and your project requirements. We'll provide a clear timeline during our initial consultation."
              },
              {
                question: "Do you work with startups or only enterprise clients?",
                answer: "We work with both startups and enterprises! Many of our most successful projects have been with early-stage startups where we've served as technical co-founders and helped them scale from 0 to 1."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We have deep expertise across healthcare & wellness, fintech, agritech, enterprise software, and government/public sector projects. However, we're technology-agnostic and can adapt to any industry."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Absolutely! We believe in building long-term partnerships. We offer various support packages including monitoring, maintenance, feature updates, and technical consulting to ensure your solution continues to deliver value."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. MVP development typically takes 8-12 weeks, while full-scale platform development can range from 3-6 months. We'll provide detailed timelines during our discovery call."
              }
            ].map((faq, idx) => (
              <AnimatedText key={faq.question} delay={idx * 0.1}>
                <Card className="border-border/50 hover:border-primary/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                      {expandedFaq === idx ? (
                        <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === idx && (
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </AnimatedText>
            ))}
          </div>
        </div>
      </MotionSection>

      <Separator className="my-8" />

      {/* CTA Section */}
      <MotionSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <AnimatedText>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8">
                Join the companies that have transformed their businesses with our expertise. Let&apos;s discuss your vision and make it reality.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <a href="mailto:admin@authify.tech">
                    Email Us Directly
                    <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <a href="tel:+919743057999">
                    Call Us Now
                    <Phone className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}