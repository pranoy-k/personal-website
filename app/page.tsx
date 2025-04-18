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
import AnimatedText from "@/components/ui/AnimatedText";

export default function Home() {
  // Create placeholder images directory
  useEffect(() => {
    console.log("Portfolio website loaded");
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 bg-white text-slate-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-transparent p-2 sm:p-8 fade-in">
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-12">
              {/* Profile Image - Full width on mobile */}
              <div className="w-full flex justify-center md:w-1/3 md:justify-start mb-8 md:mb-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Pranoy Kovuri" 
                    width={260}
                    height={260}
                    className="object-cover rounded-md shadow-md"
                    priority
                  />
                </div>
              </div>
              
              {/* Text Content - Full width on mobile */}
              <div className="w-full text-center md:text-left md:w-2/3 flex flex-col">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-slate-900">
                  Hello <span className="wave-emoji">👋</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-slate-600 mb-4 sm:mb-6">
                  Problem Solver | Tech Innovator
                </p>
                
                <p className="text-sm sm:text-base text-slate-700 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
                  I&apos;m Pranoy — a <AnimatedText words={["builder", "problem solver"]} interval={3000} className="text-blue-600 font-semibold" /> at heart, endlessly curious about how technology can uplift humanity.
                  Whether it&apos;s through AI that understands us better or systems that make our planet healthier,
                  I&apos;m driven by solutions that don&apos;t just solve problems today but spark brighter possibilities for tomorrow.
                </p>
                
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-slate-800">Primary interests:</h2>
                
                <ul className="mb-6 sm:mb-8 space-y-2 text-sm sm:text-base text-slate-700 max-w-xl mx-auto md:mx-0">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Building scalable web applications with modern technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Exploring machine learning and AI applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Creating intuitive user interfaces and experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Open source contributions and community engagement</span>
                  </li>
                </ul>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-md border border-blue-100">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 text-slate-800">Education</h3>
                    <p className="text-sm sm:text-base text-slate-600">Computer Science Degree</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-md border border-blue-100">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 text-slate-800">Location</h3>
                    <p className="text-sm sm:text-base text-slate-600">Silicon Valley, CA</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                  <Link 
                    href="#contact" 
                    className="bg-blue-600 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base hover:bg-blue-700 transition"
                  >
                    Get In Touch
                  </Link>
                  <Link 
                    href="#" 
                    className="px-5 sm:px-8 py-2 sm:py-3 rounded-md border border-blue-600 text-blue-600 text-sm sm:text-base hover:bg-blue-100 transition"
                  >
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link href="#about" className="flex flex-col items-center text-slate-500 hover:text-slate-700 transition-colors">
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
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z"/>
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
            <p> 2024 Pranoy Kovuri. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <ScrollToTopButton />
    </main>
  );
}
