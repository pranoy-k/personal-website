"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // Use null as initial state to avoid hydration mismatch
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const pathname = usePathname();
  
  // Client-side initialization of state
  useEffect(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume" }
  ];

  // Set active item based on pathname
  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("Home");
    } else if (pathname === "/resume") {
      setActiveItem("Resume");
    } else if (pathname === "/experience") {
      setActiveItem("Experience");
    }
  }, [pathname]);

  return (
    <nav className={`fixed w-full z-50 py-3 md:py-4 transition-all duration-300 ${scrolled ? 'bg-slate-800/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-xl md:text-2xl font-bold ${scrolled ? 'text-white' : 'text-slate-800'}`}>
            Pranoy Kovuri
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem(pathname === "/" ? "Home" : 
                                                 pathname === "/resume" ? "Resume" : null)}
              >
                <Link
                  href={item.href}
                  className={`font-medium ${scrolled ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-blue-600'} transition-colors relative py-2`}
                >
                  {item.name}
                  {activeItem === item.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                      layoutId="navbar-underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30 
                      }}
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-1 ${scrolled ? 'text-white' : 'text-slate-800'} focus:outline-none`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {/* Only render the icons on the client side after isOpen is initialized */}
            {isOpen !== null && (isOpen ? <X size={22} /> : <Menu size={22} />)}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial="closed"
          animate={isOpen === null ? "closed" : (isOpen ? "open" : "closed")}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col mt-4 space-y-2">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="relative px-2"
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`font-medium text-base ${scrolled ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-blue-600'} transition-colors relative py-2 block`}
                >
                  {item.name}
                  {activeItem === item.name && (
                    <motion.div
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-purple-500"
                      layoutId="mobile-navbar-underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30 
                      }}
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
