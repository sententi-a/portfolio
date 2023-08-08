import styles from "./Section.module.css";

interface ISectionProps {
  name: string;
  children?: React.ReactNode;
}

export default function Section({ name, children }: ISectionProps) {
  return (
    <section>
      <div id={name} className={styles.section}>
        {children}
        {name}
      </div>
    </section>
  );
}
