import Link from "next/link";
import styles from "./Header.module.css";
import { IHeaderProps } from "@customtypes/components";

export default function Header({ active, setActive, index }: IHeaderProps) {
  //TODO: hook으로 따로 빼기
  const navs = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

  const handleOnClick = (name: string) => {
    const targetSection = document.getElementById(name);
    window.scrollTo({ top: targetSection?.offsetTop, behavior: "smooth" });

    setActive(name);
    index.current = navs.indexOf(name);
  };

  return (
    <header id={styles.header}>
      {/* Home Logo */}
      <Link href="/" scroll={false}>
        <div id={styles.logo}>HYEJIYEOM</div>
      </Link>

      {/* Header Buttons */}
      <nav>
        <ul id={styles.ul}>
          {navs.map((name, i) => {
            // HOME은 navigation bar에서 제외
            if (name === "HOME") return;

            return (
              // <Link href={`#${name}`} scroll={false} key={i}>
              //   <li
              //     className={`${styles.button} ${
              //       active === name ? styles.active : ""
              //     }`}
              //     onClick={() => setActive(name)}
              //   >
              //     {name}
              //   </li>
              // </Link>
              <li key={`nav-${i}`}>
                <button
                  className={`${styles.button} ${
                    active === name ? styles.active : ""
                  }`}
                  onClick={() => handleOnClick(name)}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
