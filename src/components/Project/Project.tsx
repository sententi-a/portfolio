import { SectionWrapper } from "@components/SectionWrapper";
import { Project } from "@customtypes/index";

export default function Project({ project }: { project: Project }) {
  return (
    <SectionWrapper name="PROJECTS">
      <div>{project.title}</div>
      <div>{project.description}</div>
      <div>{project.role}</div>
      <div>{project.stacks}</div>
      <div>{project.github}</div>
    </SectionWrapper>
  );
}
