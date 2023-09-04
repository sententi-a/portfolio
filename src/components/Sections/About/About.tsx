import { SectionWrapper } from "@components/SectionWrapper";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  const stacks = [
    "JS",
    "TS",
    "React",
    "Next",
    "Styled-Components",
    "Redux",
    "React-Query",
    "Storybook",
    "Express",
    "SQL",
    "TypeORM",
  ];

  return (
    <SectionWrapper name="ABOUT">
      <div className={styles.wrapper}>
        <div className={styles.t3}>
          <div>
            With a Particular passion for design, creativity and communication.
          </div>
          <div>
            Particular passion for design, creativity and communication.
          </div>
        </div>
        <div className={styles.stacks}>
          {stacks.map((stack) => (
            <div className={styles.stack} key={"stack" + stack}>
              {stack}
            </div>
          ))}
          <span>and more...</span>
        </div>
        <Link href={"https://read.cv/yeomhyeji"} target="__blank">
          <div className={styles.cv}>↗ CV</div>
        </Link>
      </div>
    </SectionWrapper>
  );
}
