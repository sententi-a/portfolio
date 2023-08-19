import styles from "@styles/index.module.css";
import { Header } from "@components/Header";
import { Home, About, Projects, Contact } from "@components/Sections";
import useHashChangeOnScroll from "@hooks/useHashChangeOnScroll";
import useFullPageScroll from "@hooks/useFullPageScroll";

export default function New() {
  //*-- Change hash in URL on scroll && Get active section --*//
  const { activeSection, setActiveSection } = useHashChangeOnScroll();
  useFullPageScroll();

  return (
    <>
      <Header active={activeSection} setActive={setActiveSection} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
