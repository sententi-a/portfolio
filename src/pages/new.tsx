import styles from "@styles/index.module.css";
import { Header } from "@components/Header";
import { Section } from "@components/Section";
import useHashChangeOnScroll from "@hooks/useHashChangeOnScroll";

export default function New() {
  //*-- Change hash in URL on scroll && Get active section --*//
  const [activeSection, setActiveSection] = useHashChangeOnScroll();

  return (
    <>
      <Header active={activeSection} setActive={setActiveSection} />
      {/* TODO: Section Wrapper */}
      <div style={{ marginTop: "60px" }}>
        <Section name="HOME" />
        <Section name="ABOUT" />
        <Section name="PROJECTS" />
        <Section name="CONTACT" />
      </div>
    </>
  );
}

{
  /* <Header />
<About />
<Projects /> => projects는 projects main과 project들로 구성, SSG
<Contact /> */
}
