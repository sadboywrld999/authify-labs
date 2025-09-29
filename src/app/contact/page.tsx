"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MotionSection } from "@/components/MotionSection";
import { AnimatedText, SlideUpText } from "@/components/AnimatedText";
import { FloatingDots, GridPattern } from "@/components/FloatingElements";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(formData: FormData) {
    setSubmitting(true);
    setStatus(null);
    setIsSuccess(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const json: { message?: string; ok?: boolean } = await res.json();
      if (!res.ok) throw new Error(json.message || "Failed to submit");
      setStatus("Thanks! We'll get back within 1 business day.");
      setIsSuccess(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setStatus(message);
      setIsSuccess(false);
    } finally {
      setSubmitting(false);
    }
  }

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
      <section className="relative overflow-hidden bg-background min-h-[50vh] flex items-center">
        <GridPattern />
        <FloatingDots />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
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
                  <form action={onSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Work Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
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
                          name="company"
                          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        What do you want to build? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full group"
                      size="lg"
                    >
                      {submitting ? (
                        "Sending..."
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