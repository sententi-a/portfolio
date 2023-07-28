import { HeaderButton } from "@components/HeaderButton";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header id={styles.header}>
      {/* Home Logo */}
      <Link href="/" scroll={false}>
        <div id={styles.logo}>HYEJIYEOM</div>
      </Link>

      {/* Header Buttons */}
      <nav>
        <div style={{ display: "flex", gap: "2vw" }}>
          <HeaderButton name={"ABOUT"} />
          <HeaderButton name={"PROJECTS"} />
          <HeaderButton name={"CONTACT"} />
        </div>
      </nav>
    </header>
  );
}
