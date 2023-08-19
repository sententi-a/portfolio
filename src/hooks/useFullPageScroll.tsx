// components/ScrollableContainer.js
import { useEffect } from "react";

export default function useFullPageScroll() {
  let isScrolling = false;

  useEffect(() => {
    const sections = document.querySelectorAll(
      ".section"
    ) as NodeListOf<HTMLElement>;
    const sectionCount = sections.length;
    let currentSectionIndex = 0;

    const handleScroll = (event: any) => {
      event.preventDefault();

      // fire event just once
      if (isScrolling) {
        return;
      }

      isScrolling = true;

      setTimeout(() => {
        isScrolling = false;
      }, 1300);

      // wheel down: move to next section
      if (event.wheelDelta < 0) {
        if (currentSectionIndex < sectionCount - 1) {
          currentSectionIndex++;
        } else {
          return;
        }
      }

      // wheel up: move to previous section
      else {
        if (currentSectionIndex > 0) {
          currentSectionIndex--;
        } else {
          return;
        }
      }

      const targetSection = sections[currentSectionIndex];

      if (targetSection) {
        const topPosition = targetSection.offsetTop;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
}
