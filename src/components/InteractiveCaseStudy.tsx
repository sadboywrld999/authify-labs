"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, Clock, CheckCircle } from "lucide-react";
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
      <Card className="overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-pointer">
        <div className="relative">
          {/* Image with overlay */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={images[index] || "/wellness.png"}
              alt={caseStudy.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
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
          </CardContent>
        </div>
      </Card>

      {/* Hover Overlay with Detailed Information */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <Card className="h-full border-primary/50 bg-card/95 backdrop-blur-sm shadow-2xl shadow-primary/20">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {caseStudy.title}
                  </h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Detailed View
                  </Badge>
                </div>

                {/* All Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="text-primary">{metric.icon}</div>
                      <div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                        <div className="font-medium">{metric.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Detailed Content */}
                <div className="flex-1 overflow-y-auto">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger value="overview">Challenge</TabsTrigger>
                      <TabsTrigger value="solution">Solution</TabsTrigger>
                      <TabsTrigger value="impact">Impact</TabsTrigger>
                    </TabsList>
                    
                    <div className="space-y-4">
                      <TabsContent value="overview" className="m-0">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">The Challenge</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {caseStudy.challenge}
                          </p>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="solution" className="m-0">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">Our Solution</h4>
                          <ul className="space-y-2">
                            {caseStudy.solution.map((item, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="impact" className="m-0">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">The Impact</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {caseStudy.impact}
                          </p>
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </div>

                {/* Hover instruction */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground text-center">
                    Hover to explore • Click tabs to switch content
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
