import { SectionWrapper } from "@components/SectionWrapper";
import { Project } from "@customtypes/index";
import styles from "./Project.module.css";
import ProjectOverview from "@components/ProjectOverview/ProjectOverview";
import Slide from "@components/Slide/Slide";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Project({ project }: { project: Project }) {
  return (
    <SectionWrapper name="PROJECTS">
      <Carousel
        className={styles.carousel}
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        <Slide>
          <ProjectOverview project={project} />
        </Slide>
        <Slide>
          <div>image1</div>
        </Slide>
        <Slide>
          <div>image2</div>
        </Slide>
      </Carousel>
    </SectionWrapper>
  );
}
