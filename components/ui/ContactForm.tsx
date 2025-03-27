"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to a server
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Name</label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-medium">Message</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors disabled:bg-blue-800 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : "Send Message"}
        </button>
        
        {submitStatus === "success" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-green-600/20 border border-green-600 text-green-200 rounded-md text-center"
          >
            Thank you! Your message has been sent successfully.
          </motion.div>
        )}
        
        {submitStatus === "error" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-red-600/20 border border-red-600 text-red-200 rounded-md text-center"
          >
            Oops! Something went wrong. Please try again later.
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
