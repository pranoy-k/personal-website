"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ skill, percentage, delay = 0 }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <motion.div 
          className="bg-blue-600 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
