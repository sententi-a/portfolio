import styles from "./SectionWrapper.module.css";

interface ISectionProps {
  name: string;
  children?: React.ReactNode;
}

export default function SectionWrapper({ name, children }: ISectionProps) {
  return (
    <section>
      <div id={name} className={`${styles.section} section`}>
        {children}
        {name}
      </div>
    </section>
  );
}
