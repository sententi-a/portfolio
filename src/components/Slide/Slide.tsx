import styles from "./Slide.module.css";
import { SlideProps } from "@customtypes/index";

export default function Slide({ children }: SlideProps) {
  return <div className={styles.slide}>{children}</div>;
}
