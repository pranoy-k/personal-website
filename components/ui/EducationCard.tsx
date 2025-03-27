"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface EducationCardProps {
  institution: string;
  logo: string;
  location: string;
  degree: string;
  period: string;
  gpa: string;
  description: string;
  delay?: number;
}

const EducationCard = ({ 
  institution, 
  logo, 
  location, 
  degree, 
  period, 
  gpa, 
  description, 
  delay = 0 
}: EducationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: delay === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-slate-50 p-6 rounded-lg"
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 mr-4 relative flex-shrink-0">
          <Image 
            src={logo} 
            alt={institution} 
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">{institution}</h3>
          <p className="text-slate-600">{location}</p>
        </div>
      </div>
      <div>
        <h4 className="font-bold">{degree}</h4>
        <p className="text-slate-600 mb-2">{period} | GPA: {gpa}</p>
        <p className="text-slate-700">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationCard;
