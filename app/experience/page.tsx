"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { motion } from "framer-motion";

export default function Experience() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <SectionHeading title="Professional Experience" />
            <p className="text-slate-700 mt-4 max-w-2xl mx-auto">
              My professional journey includes various roles where I've led teams, built cutting-edge AI solutions, 
              and contributed to impactful projects across different organizations.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            <ExperienceCard 
              company="Google"
              logo="/images/google-logo.png"
              period="2019 - Present"
              positions={[
                {
                  title: "Area Tech Lead Software Engineer | Google Cloud Safety Filters (Vertex AI)",
                  period: "2024 - Present",
                  responsibilities: [
                    "Currently leading Vertex AI Safety, building AI product solutions that serve all of Google's products",
                    "Spearheading development of Vertex AI Safety, creating cutting-edge AI product solutions",
                    "Lead cross-functional teams to implement safety filters serving all Google products",
                    "Drive innovation in AI safety and ethics for Google Cloud platform"
                  ]
                },
                {
                  title: "Lead Software Engineer | AI Content Safety Team",
                  period: "2023",
                  responsibilities: [
                    "Built Generative AI agents for high quality robust translation workflows",
                    "Launched Terrorist Content Safety models to stop Israel-Hamas War propaganda",
                    "Designed and launched the Responsible AI service",
                    "Collaborated on GenAI-based Hate Speech detection model"
                  ]
                },
                {
                  title: "Critical Code Red Engineer | Bard/Gemini Initiative",
                  period: "2022",
                  responsibilities: [
                    "Spearheaded Google teams for post-Bard generative AI-based content safety initiatives",
                    "Developed and launched data sandbox platform",
                    "Created experimental content safety LLM platform"
                  ]
                },
                {
                  title: "Software Engineer | Text Content Safety Team",
                  period: "2021",
                  responsibilities: [
                    "Developed quality evaluation framework for measuring utility of modeling and algorithm developments",
                    "Created Google-wide extensible system to fight text obfuscation"
                  ]
                },
                {
                  title: "Software Developer | Canonical Protections",
                  period: "2020",
                  responsibilities: [
                    "Launched real-time communication spam detection in Google products",
                    "Trained models for abuse detection and improved spam detection performance"
                  ]
                }
              ]}
            />
            
            <ExperienceCard 
              company="Qualcomm"
              logo="/images/qualcomm-logo.png"
              period="2014 - 2017"
              delay={0.2}
              positions={[
                {
                  title: "Software Developer | Wi-Fi Embedded Systems Developer",
                  period: "2015 - 2017",
                  responsibilities: [
                    "Implemented real-time features in Wi-Fi subsystems",
                    "Solved critical customer issues for OEMs",
                    "Provided onsite software support for OEM product launches in China"
                  ]
                },
                {
                  title: "Software Intern | Senior Software Developer",
                  period: "2014",
                  responsibilities: [
                    "Enhanced and developed software solution for Samsung Group Play application"
                  ]
                }
              ]}
            />
            
            <ExperienceCard 
              company="Philips Research North America"
              logo="/images/philips-logo.png"
              period="2018"
              delay={0.4}
              positions={[
                {
                  title: "Summer Research Intern | HealthTech AI",
                  period: "Summer 2018",
                  responsibilities: [
                    "Extracted and summarized information from annotated X-ray radiology reports",
                    "Employed deep learning techniques for entity and relation extraction"
                  ]
                }
              ]}
            />
          </div>
        </div>
      </section>
      
      <ScrollToTopButton />
    </main>
  );
} 