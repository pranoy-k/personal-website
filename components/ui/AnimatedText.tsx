"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

const AnimatedText = ({ words, interval = 3000, className = "" }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  // Calculate the width needed for the container based on the widest word
  useEffect(() => {
    const tempDiv = document.createElement("div");
    // Apply the same styling as the container will have
    tempDiv.style.position = "absolute";
    tempDiv.style.visibility = "hidden";
    tempDiv.style.whiteSpace = "nowrap";
    tempDiv.style.fontSize = "inherit";
    tempDiv.style.fontWeight = "inherit";
    
    // Append to the document temporarily to calculate width
    document.body.appendChild(tempDiv);
    
    // Find the widest text
    let maxWidth = 0;
    words.forEach(word => {
      tempDiv.textContent = word;
      const width = tempDiv.offsetWidth;
      if (width > maxWidth) {
        maxWidth = width;
      }
    });
    
    // Add a small buffer
    setContainerWidth(maxWidth + 10);
    
    // Clean up
    document.body.removeChild(tempDiv);
  }, [words]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span 
      ref={containerRef} 
      className={`inline-block ${className}`} 
      style={{ width: containerWidth ? `${containerWidth}px` : 'auto', display: 'inline-block' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="inline-block text-center"
          style={{ width: '100%', display: 'inline-block' }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default AnimatedText;
