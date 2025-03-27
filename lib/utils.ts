import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop - 80, // Adjust for navbar height
      behavior: "smooth",
    });
  }
}
