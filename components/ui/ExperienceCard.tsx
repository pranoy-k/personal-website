"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceCardProps {
  company: string;
  logo: string;
  period: string;
  positions: {
    title: string;
    period: string;
    responsibilities: string[];
  }[];
  delay?: number;
}

const ExperienceCard = ({ company, logo, period, positions, delay = 0 }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-12 h-12 mr-4 relative flex-shrink-0">
            <Image 
              src={logo} 
              alt={company} 
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold">{company}</h3>
        </div>
        <span className="text-slate-500">{period}</span>
      </div>
      
      <div className="space-y-6">
        {positions.map((position, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-4">
            <h4 className="text-xl font-bold">{position.title}</h4>
            <span className="text-slate-500">{position.period}</span>
            <ul className="mt-2 space-y-2 text-slate-700">
              {position.responsibilities.map((responsibility, idx) => (
                <li key={idx}>• {responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
