import Image from "next/image";
import Link from "next/link";
import githubImg from "@assets/github-mark.svg";
import styles from "./ProjectOverview.module.css";
import { Project } from "@customtypes/index";

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.row}>
          <div className={styles.title}>{project.title}</div>
          <Link href={project.github} target="__blank">
            <Image src={githubImg} width={30} height={30} alt="github"></Image>
          </Link>
        </div>
        <div className={styles.description}>{project.description}</div>
      </div>
      <div className={styles.role}>{project.role}</div>
      <div className={styles.stacks}>
        {project.stacks.map((stack) => (
          <div key={project.title + " " + stack} className={styles.stack}>
            {stack}
          </div>
        ))}
      </div>
    </div>
  );
}
