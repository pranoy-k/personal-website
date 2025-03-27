"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  delay?: number;
}

const ProjectCard = ({ title, description, image, tags, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <div className="h-48 bg-slate-200 relative">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
