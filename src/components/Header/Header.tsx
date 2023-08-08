import Link from "next/link";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

export default function Header() {
  const navs = ["ABOUT", "PROJECTS", "CONTACT"];
  const [active, setActive] = useState("");

  // TODO: 작동 안되므로 수정
  // Change list elem style based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const anchor = window.location.hash.substring(1);
      setActive(anchor);
      console.log("hash changed");
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

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
