import Spline from "@splinetool/react-spline";
import { SectionWrapper } from "@components/SectionWrapper";
import HoverText from "@components/HoverText/HoverText";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <SectionWrapper name="HOME">
      <Spline
        id={styles.bubble}
        scene="https://prod.spline.design/vO4hp3BNgVR0sU35/scene.splinecode"
      />
      {/* //TODO: font 스타일 globals.css에 정리*/}
      <div id={styles.t3}>A front-end developer based on Seoul, Korea</div>
      <div id={styles.h1}>YeomHyeji</div>
      <br />
      <HoverText before="Wanna know about me?" after="Then just scroll down!" />
    </SectionWrapper>
  );
}
