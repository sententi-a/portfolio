import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { HeaderProps } from "@customtypes/index";

export default function Header({ active, setActive, index }: HeaderProps) {
  //TODO: hook으로 따로 빼기
  const navs = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

  /**
   * 파라미터에 해당하는 name을 클래스 이름으로 하는 div로 이동하고, 현재 섹션의 index를 조정
   * @param name 이동하고자 하는 div의 클래스 이름
   */
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
        <div id={styles.logoWrapper}>
          <Image
            src="/logo.svg"
            alt="YHJ Logo"
            className={styles.vercelLogo}
            width={20}
            height={20}
            priority
          />
          <div id={styles.logo}>YHJ</div>
        </div>
      </Link>

      {/* Header Buttons */}
      <nav>
        <ul id={styles.navButtons}>
          {navs.map((name, i) => {
            // HOME은 navigation bar에서 제외
            if (name === "HOME") return;

            return (
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
