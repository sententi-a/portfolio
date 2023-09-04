import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@components/SectionWrapper";
import { Project } from "@customtypes/index";
import styles from "./Project.module.css";
import githubImg from "@assets/github-mark.svg";

export default function Project({ project }: { project: Project }) {
  console.log(project);
  return (
    <SectionWrapper name="PROJECTS">
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.title}>{project.title}</div>
          <Link href={project.github} target="__blank">
            <Image src={githubImg} width={30} height={30} alt="github"></Image>
          </Link>
        </div>
        <div className={styles.description}>{project.description}</div>
        <div className={styles.role}>{project.role}</div>
        <div className={styles.images}></div>
        <div className={styles.stacks}>
          {project.stacks.map((stack) => (
            <div className={styles.stack}>{stack}</div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
