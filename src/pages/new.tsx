import styles from "@styles/index.module.css";
import { Header } from "@components/Header";
import { Home, About, Projects, Contact } from "@components/Sections";
import useHashChangeOnScroll from "@hooks/useHashChangeOnScroll";
import useFullPageScroll from "@hooks/useFullPageScroll";
import useSections from "@hooks/useSections";

export default function New() {
  //*-- Change hash in URL on scroll && Get active section --*//
  const { activeSection, setActiveSection } = useHashChangeOnScroll();
  const { currentSectionIndex } = useFullPageScroll();

  return (
    <>
      <Header
        active={activeSection}
        setActive={setActiveSection}
        index={currentSectionIndex}
      />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
