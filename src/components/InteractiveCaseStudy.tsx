"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import Image from "next/image";

interface InteractiveCaseStudyProps {
  caseStudy: CaseStudy;
  index: number;
}

export function InteractiveCaseStudy({ caseStudy, index }: InteractiveCaseStudyProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isHovered, setIsHovered] = useState(false);
  
  const images = [
    "/wellness.png",
    "/gardening.png", 
    "/radar.png",
    "/atheryn.png"
  ];

  // Dynamic metrics based on case study
  const getMetrics = (caseStudy: CaseStudy) => {
    const baseMetrics = [
      { label: "Team Size", value: "4-8 engineers", icon: <Users className="h-4 w-4" /> },
      { label: "Impact", value: "15%+ improvement", icon: <TrendingUp className="h-4 w-4" /> },
      { label: "Status", value: "Production Ready", icon: <CheckCircle className="h-4 w-4" /> }
    ];

    // Special timeline for D2C category case study
    const timeline = caseStudy.slug === "building-and-scaling-d2c-urban-gardening" 
      ? "6 months - 1 year" 
      : "3-6 months";

    return [
      { label: "Timeline", value: timeline, icon: <Clock className="h-4 w-4" /> },
      ...baseMetrics
    ];
  };

  const metrics = getMetrics(caseStudy);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/case-studies/${caseStudy.slug}`}>
        <Card className="overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-pointer h-full">
        <div className="relative">
          {/* Image with overlay */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={images[index] || "/wellness.png"}
              alt={caseStudy.title}
              fill
              className="object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary/90 text-white border-0">
                Case Study
              </Badge>
            </div>
          </div>

          <CardContent className="p-6">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {caseStudy.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {caseStudy.teaser}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {metrics.slice(0, 2).map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className="text-primary">{metric.icon}</div>
                  <div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                    <div className="font-medium">{metric.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
                <TabsTrigger value="solution" className="text-xs">Solution</TabsTrigger>
                <TabsTrigger value="impact" className="text-xs">Impact</TabsTrigger>
              </TabsList>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4"
                >
                  <TabsContent value="overview" className="space-y-2 m-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {caseStudy.challenge.substring(0, 120)}...
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="solution" className="space-y-2 m-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {caseStudy.solution[0]?.substring(0, 120)}...
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="impact" className="space-y-2 m-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {caseStudy.impact.substring(0, 120)}...
                    </p>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>

            {/* Read More Indicator */}
            <div className="flex items-center justify-center pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-200">
                <span>Read Full Case Study</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
      </Link>

      {/* Subtle Hover Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-2 -left-2 -right-2 -bottom-2 z-0 pointer-events-none"
          >
            <div className="h-full w-full rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
