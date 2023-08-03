import styles from "@styles/index.module.css";
import { Header } from "@components/Header";
import { Section } from "@components/Section";
import { useEffect } from "react";

export default function New() {
  //*-- Change hash in URL on scroll --*//
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.querySelector("div")?.getAttribute("id");

          window.history.replaceState(null, "", `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <Section name="ABOUT" />
      <Section name="PROJECTS" />
      <Section name="CONTACT" />
    </main>
  );
}

{
  /* <Header />
<About />
<Projects /> => projects는 projects main과 project들로 구성, SSG
<Contact /> */
}
