import { useEffect, useState } from 'react';

export const useScrollSectionIntoView = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Handle URL hash navigation on page load
    if (window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }

    // Detect active section on scroll with debouncing
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const sections = ["about", "contact"];
        let currentSection = "";

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              currentSection = sectionId;
            }
          }
        }

        setActiveSection(currentSection);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.location.hash = sectionId;
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    activeSection,
    scrollToSection,
  };
}
