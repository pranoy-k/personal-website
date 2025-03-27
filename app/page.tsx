"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import ContactForm from "@/components/ui/ContactForm";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBar from "@/components/ui/SkillBar";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ExperienceCard from "@/components/ui/ExperienceCard";
import ProjectCard from "@/components/ui/ProjectCard";
import EducationCard from "@/components/ui/EducationCard";

export default function Home() {
  // Create placeholder images directory
  useEffect(() => {
    console.log("Portfolio website loaded");
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-slate-900/90 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/ai-background.jpg')] bg-cover bg-center opacity-30 z-0"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Pranoy Kovuri
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
                Area Tech Lead Software Engineer at Google
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl">
                A technical/product leader with over a decade of experience in leading and developing 
                cutting-edge AI and ML solutions for content safety and health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="#about" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Learn More
                </Link>
                <Link 
                  href="#contact" 
                  className="bg-transparent hover:bg-white/10 border border-white text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Pranoy Kovuri" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link href="#about" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="animate-bounce"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="About Me" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-slate-700 mb-4">
                I&apos;m a technical/product leader with over a decade of experience in leading and developing 
                cutting-edge AI and ML solutions for various domains, such as content safety and health.
              </p>
              <p className="text-slate-700 mb-4">
                My passion is to create innovative products that leverage the power of data and algorithms 
                to solve real-world problems and improve people&apos;s lives.
              </p>
              <p className="text-slate-700 mb-4">
                Currently, I&apos;m an Area Tech Lead Software Engineer at Google, leading Vertex AI Safety and 
                building AI product solutions that serve all of Google&apos;s products, including Google Cloud.
              </p>
              <p className="text-slate-700">
                I spearhead the development of cutting-edge AI product solutions and lead cross-functional 
                teams to implement safety filters serving all Google products.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.2}>
              <h3 className="text-2xl font-bold mb-4">My Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">AI Safety & Ethics</h4>
                  <p className="text-slate-600">Driving innovation in AI safety and ethics for Google Cloud platform</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Machine Learning</h4>
                  <p className="text-slate-600">Building advanced ML models for content safety and analysis</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Natural Language Processing</h4>
                  <p className="text-slate-600">Developing NLP techniques using semi-supervised approaches</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Technical Leadership</h4>
                  <p className="text-slate-600">Leading cross-functional teams to implement AI solutions</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Professional Experience" />
          
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Skills & Expertise" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Languages</h3>
              <div className="space-y-3">
                <SkillBar skill="Python" percentage={95} />
                <SkillBar skill="C++" percentage={85} delay={0.1} />
                <SkillBar skill="Go" percentage={80} delay={0.2} />
                <SkillBar skill="Java" percentage={75} delay={0.3} />
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="bg-slate-50 p-6 rounded-lg" delay={0.2}>
              <h3 className="text-xl font-bold mb-4 text-center">Libraries & Frameworks</h3>
              <div className="space-y-3">
                <SkillBar skill="TensorFlow" percentage={90} />
                <SkillBar skill="PyTorch" percentage={85} delay={0.1} />
                <SkillBar skill="Pandas/NumPy" percentage={90} delay={0.2} />
                <SkillBar skill="Keras" percentage={80} delay={0.3} />
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="bg-slate-50 p-6 rounded-lg" delay={0.4}>
              <h3 className="text-xl font-bold mb-4 text-center">AI/ML Expertise</h3>
              <div className="space-y-3">
                <SkillBar skill="NLP" percentage={95} />
                <SkillBar skill="Deep Learning" percentage={90} delay={0.1} />
                <SkillBar skill="Reinforcement Learning" percentage={85} delay={0.2} />
                <SkillBar skill="AI Safety" percentage={95} delay={0.3} />
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="bg-slate-50 p-6 rounded-lg" delay={0.6}>
              <h3 className="text-xl font-bold mb-4 text-center">Tools & Platforms</h3>
              <div className="space-y-3">
                <SkillBar skill="Git/Version Control" percentage={90} />
                <SkillBar skill="Cloud Platforms" percentage={85} delay={0.1} />
                <SkillBar skill="VS Code/IDEs" percentage={90} delay={0.2} />
                <SkillBar skill="CI/CD" percentage={80} delay={0.3} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Featured Projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Vertex AI Safety Filters"
              description="Led the development of cutting-edge AI safety filters for Google Cloud's Vertex AI platform, ensuring responsible AI deployment across diverse applications."
              image="/images/project-ai-safety.jpg"
              tags={["AI Safety", "Vertex AI", "Google Cloud"]}
            />
            
            <ProjectCard 
              title="Bard/Gemini Content Safety"
              description="Spearheaded Google teams for post-Bard generative AI-based content safety initiatives, developing and launching data sandbox platform and experimental content safety LLM platform."
              image="/images/project-llm.jpg"
              tags={["LLM", "Bard", "Gemini"]}
              delay={0.2}
            />
            
            <ProjectCard 
              title="Text Obfuscation Detection"
              description="Created a Google-wide extensible system to fight text obfuscation for malicious intent, developing a library that unifies, extends and extrapolates existing methods."
              image="/images/project-nlp.jpg"
              tags={["NLP", "Security", "ML"]}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Education" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EducationCard 
              institution="Texas A&M University"
              logo="/images/tamu-logo.png"
              location="College Station, Texas"
              degree="Master of Science in Computer Science"
              period="Class of 2019"
              gpa="4.00"
              description="Focused on Natural Language Processing and Reinforcement Learning. Conducted research on developing novel NLU techniques using semi-supervised approaches and solving critical self-driving problems using reinforcement learning."
            />
            
            <EducationCard 
              institution="National Institute of Technology"
              logo="/images/nitw-logo.png"
              location="Warangal, India"
              degree="Bachelor of Technology in Electronics & Communication Engineering"
              period="Class of 2015"
              gpa="3.80"
              description="Completed final year project on estimating primary quantization matrix in double compressed JPEG images using Neural Networks, designing NN classifiers to estimate original quantization matrix from double compressed images."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Get In Touch" className="text-white" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 mr-3 text-blue-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-slate-300">kovuri.pranoy@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 mr-3 text-blue-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-slate-300">Santa Clara, California</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 mr-3 text-blue-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <div>
                    <h4 className="font-bold">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/pranoy-k/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      linkedin.com/in/pranoy-k
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 mr-3 text-blue-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <div>
                    <h4 className="font-bold">GitHub</h4>
                    <a 
                      href="https://github.com/pranoy-k" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      github.com/pranoy-k
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.2} className="bg-slate-800 p-6 rounded-lg">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Pranoy Kovuri</h3>
              <p className="text-slate-400">Area Tech Lead Software Engineer</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/pranoy-k/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/pranoy-k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} Pranoy Kovuri. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <ScrollToTopButton />
    </main>
  );
}
