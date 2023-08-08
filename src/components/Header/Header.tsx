import Link from "next/link";
import styles from "./Header.module.css";

interface IHeaderProps {
  active: string | undefined | null;
  setActive: any;
}

export default function Header({ active, setActive }: IHeaderProps) {
  const navs = ["ABOUT", "PROJECTS", "CONTACT"];

  return (
    <header id={styles.header}>
      {/* Home Logo */}
      <Link href="/" scroll={false}>
        <div id={styles.logo}>HYEJIYEOM</div>
      </Link>

      {/* Header Buttons */}
      <nav>
        <ul id={styles.ul}>
          {navs.map((name, i) => (
            <Link href={`#${name}`} scroll={false} key={i}>
              <li
                className={`${styles.button} ${
                  active === name ? styles.active : ""
                }`}
                onClick={() => setActive(name)}
              >
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
