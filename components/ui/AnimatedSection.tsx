"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Set initial and animate values based on direction
  const getInitialAndAnimate = () => {
    switch (direction) {
      case "up":
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 }
        };
      case "down":
        return {
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 }
        };
      case "left":
        return {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 }
        };
      case "right":
        return {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 }
        };
      default:
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 }
        };
    }
  };

  const { initial, animate } = getInitialAndAnimate();

  useEffect(() => {
    if (inView) {
      controls.start(animate);
    }
  }, [controls, inView, animate]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
