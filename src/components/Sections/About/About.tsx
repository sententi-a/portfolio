import { SectionWrapper } from "@components/SectionWrapper";
import Link from "next/link";

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
      <div style={{ fontSize: "2rem", fontFamily: "Montserrat" }}>
        With a Particular passion for design, creativity and communication.
      </div>
      <div style={{ fontSize: "2rem", fontFamily: "Montserrat" }}>
        Particular passion for design, creativity and communication.
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "5px",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          fontSize: "1.4rem",
          fontWeight: "300",
        }}
      >
        {stacks.map((stack) => (
          <div
            style={{
              border: "1px solid gray",
              borderRadius: "50px",
              fontSize: "1.3rem",
              fontWeight: 300,
              padding: "0px 10px",
              backgroundColor: "white",
              // backgroundColor: "rgba(243, 0, 0, 0.25)",
              // color: "white",
            }}
          >
            {stack}
          </div>
        ))}
        <div>and more...</div>
      </div>
      <Link href={"https://read.cv/yeomhyeji"} target="__blank">
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "50px",
            fontSize: "2rem",
            fontWeight: 700,
            fontFamily: "Montserrat",
            margin: "20px 0px",
            padding: "0px 10px",
          }}
        >
          ↗ CV
        </div>
      </Link>
    </SectionWrapper>
  );
}
