import { useEffect, useCallback, useRef } from "react";

export default function useFullPageScroll() {
  const timeoutRef = useRef<number | null>(null);
  const currentSectionIndex = useRef<number>(0);

  /**
   * 휠 방향에 따라 스크롤 up or down 해주는 함수
   * @param event eventlistener를 통해 전달되는 휠 이벤트
   */
  const fullPageScroll = useCallback((event: WheelEvent) => {
    const sections = document.querySelectorAll(
      ".section"
    ) as NodeListOf<HTMLElement>;
    const sectionCount = sections.length;

    // wheel down : page up
    if (event.deltaY < 0) {
      if (currentSectionIndex.current > 0) {
        currentSectionIndex.current--;
      } else {
        return;
      }
    }
    // wheel up : page down
    else {
      if (currentSectionIndex.current < sectionCount - 1) {
        currentSectionIndex.current++;
      } else {
        return;
      }
    }

    const targetSection = sections[currentSectionIndex.current];

    if (targetSection) {
      const topPosition = targetSection.offsetTop;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  }, []);

  /**
   * 휠 이벤트 발생시 fullPageScroll를 호출하고, 휠 이벤트에 디바운스 적용
   * @param event eventlistener를 통해 전달되는 휠 이벤트
   */
  const handleWheelEvent = (event: WheelEvent) => {
    event.preventDefault();

    if (!timeoutRef.current) {
      fullPageScroll(event);
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
      }, 1300);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheelEvent, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSectionIndex]);
}
