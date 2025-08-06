"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Resume() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <SectionHeading title="My Resume" />
            <p className="text-slate-700 mt-4 mb-8 max-w-2xl mx-auto">
              Here is my resume which outlines my educational background, work experience, and technical skills.
            </p>
            
            <Link 
              href="/documents/PranoyResume2025.pdf" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md transition-colors hover:bg-blue-700 mb-12"
            >
              <ArrowDownToLine className="mr-2" size={20} />
              Download Resume
            </Link>
          </motion.div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="aspect-[8.5/11] relative w-full">
              <iframe 
                src="/documents/PranoyResume2025.pdf" 
                className="w-full h-full"
                style={{ minHeight: "800px" }}
              />
            </div>
          </div>
        </div>
      </section>
      
      <ScrollToTopButton />
    </main>
  );
}
