import styles from "@styles/index.module.css";
import { Header } from "@components/Header";
import { Home, About, Projects, Contact } from "@components/Sections";
import useHashChangeOnScroll from "@hooks/useHashChangeOnScroll";
import ReactFullpage, {
  fullpageApi,
  fullpageOptions,
} from "@fullpage/react-fullpage";

export default function New() {
  //*-- Change hash in URL on scroll && Get active section --*//
  const { activeSection, setActiveSection } = useHashChangeOnScroll();

  return (
    <>
      <Header active={activeSection} setActive={setActiveSection} />
      {/* TODO: Section Wrapper */}
      <div style={{ marginTop: "60px" }}>
        {/* <ReactFullpage
          // debug
          // licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
          licenseKey={"31EB1867-F27C4C2E-90C981D3-01B86BEC"}
          navigation
          credits={{ enabled: true, label: "myCustom", position: "left" }}
          render={(comp: { state: any; fullpageApi: fullpageApi }) => (
            <ReactFullpage.Wrapper>
              <Home />
              <About />
              <Projects />
              <Contact />
            </ReactFullpage.Wrapper>
          )}
        /> */}
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
