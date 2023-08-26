import { ProjectsType } from "@customtypes/index";
import { SectionWrapper } from "@components/SectionWrapper";
import Project from "@components/Project/Project";

export default function Projects({ projects }: { projects: ProjectsType }) {
  return (
    <>
      <SectionWrapper name="PROJECTS">Projects</SectionWrapper>
      {projects && projects.map((project) => <Project project={project} />)}
    </>
  );
}
