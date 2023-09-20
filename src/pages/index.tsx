import { db } from "@firebase/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { ProjectsType } from "@customtypes/index";
import { Header } from "@components/Header";
import { Home, About, Projects, Contact } from "@components/Sections";
import useActiveSectionOnWheel from "@hooks/useActiveSectionOnWheel";
import useFullPageScroll from "@hooks/useFullPageScroll";

export async function getStaticProps() {
  try {
    //*-- Get all project documents from firestore --*//
    const q = query(collection(db, "projects"));

    const result = await getDocs(q);
    const projects = result.docs.map((doc) => doc.data());

    return { props: { projects } };
  } catch (e) {
    console.error(e);
    const projects = null;
    return { props: { projects } };
  }
}

export default function Index({ projects }: { projects: ProjectsType }) {
  //*-- Change hash in URL on scroll && Get active section --*//
  const { activeSection, setActiveSection } = useActiveSectionOnWheel();
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
      <Projects projects={projects} />
      <Contact />
    </>
  );
}
