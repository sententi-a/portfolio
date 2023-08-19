import { useEffect, useState } from "react";

export default function useHashChangeOnScroll() {
  const [allowHashChange, setAllowHashChange] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | undefined | null>(
    undefined
  );

  //*-- Change hash in URL on wheel event --*//
  useEffect(() => {
    // Add wheel event
    const handleWheel = () => {
      setAllowHashChange(true);
      setTimeout(() => setAllowHashChange(false), 100);
    };

    window.addEventListener("wheel", handleWheel);

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && allowHashChange) {
          const id = entry.target.querySelector("div")?.getAttribute("id");
          // window.history.replaceState(null, "", `#${id}`);
          setActiveSection(id); // set active button in header
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    // Register sections to observer
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.observe(section);
    });

    /*
     * Clean up the observer & wheel event listener
     * when dependency changes or the component unmounts
     */
    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleWheel);
    };
  }, [allowHashChange]);

  return { activeSection, setActiveSection };
}
