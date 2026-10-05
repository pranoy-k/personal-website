"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "kovuripranoy@gmail.com";

const STARTERS = [
  {
    label: "Say hi 👋",
    subject: "Hello from your website 👋",
    message: "Hey Pranoy! Just stopping by to say hi. ",
  },
  {
    label: "Let's build something 🛠️",
    subject: "Let's build something together",
    message: "Hey Pranoy! I've got an idea I think you'd enjoy: ",
  },
  {
    label: "Coffee chat ☕",
    subject: "Coffee chat?",
    message: "Hey Pranoy! I'd love to pick your brain over coffee (virtual works too) about ",
  },
  {
    label: "Opportunity 🚀",
    subject: "An opportunity I'd like to discuss",
    message: "Hey Pranoy! I came across your work and wanted to reach out about ",
  },
];

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [launched, setLaunched] = useState(false);
  const [copied, setCopied] = useState(false);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const applyStarter = (starter: (typeof STARTERS)[number]) => {
    setSubject(starter.subject);
    const canReplace = !message.trim() || STARTERS.some((s) => s.message === message);
    if (canReplace) setMessage(starter.message);
    messageRef.current?.focus();
  };

  const buildDraft = () => ({
    subject: subject.trim() || "Hello from your website",
    body: `${message.trim()}\n\n- ${name.trim() || "A friendly visitor"}`,
  });

  const openEmailApp = (e: React.FormEvent) => {
    e.preventDefault();
    const { subject: s, body } = buildDraft();
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(body)}`;
    setLaunched(true);
  };

  const openGmail = (form: HTMLFormElement | null) => {
    if (form && !form.reportValidity()) return;
    const { subject: s, body } = buildDraft();
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(s)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setLaunched(true);
  };

  const copyEmail = () => {
    navigator.clipboard
      .writeText(CONTACT_EMAIL)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch(() => setCopied(false));
  };

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold mb-1">Say hello</h3>
      <p className="text-slate-300 text-sm mb-4">
        Pick a starter or write your own. I&apos;ll open your email with it ready to send.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {STARTERS.map((starter) => (
          <button
            key={starter.label}
            type="button"
            onClick={() => applyStarter(starter)}
            className={`px-3 py-1 text-sm rounded-full border transition-colors ${
              subject === starter.subject
                ? "border-blue-400 bg-blue-600/30 text-white"
                : "border-slate-600 bg-slate-700/50 text-slate-200 hover:border-blue-400 hover:bg-blue-600/20"
            }`}
          >
            {starter.label}
          </button>
        ))}
      </div>

      <form className="space-y-4" onSubmit={openEmailApp}>
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Your name <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What should I call you?"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            ref={messageRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind? A wild idea, a project, a job, or just a hello. I read every message."
            required
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Open in email app
          </button>
          <button
            type="button"
            onClick={(e) => openGmail(e.currentTarget.form)}
            className="flex-1 border border-blue-400 text-blue-300 hover:bg-blue-600/20 px-6 py-3 rounded-md font-medium transition-colors"
          >
            Open in Gmail
          </button>
        </div>

        {launched && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-green-600/20 border border-green-600 text-green-200 rounded-md text-sm"
          >
            Your email draft should be opening now. Nothing popped up? Try the other button, or{" "}
            <button
              type="button"
              onClick={copyEmail}
              className="underline hover:text-white"
            >
              {copied ? "copied!" : "copy my address"}
            </button>{" "}
            and write from anywhere.
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
