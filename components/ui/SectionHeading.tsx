"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading = ({ title, className = "" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
    </motion.div>
  );
};

export default SectionHeading;
