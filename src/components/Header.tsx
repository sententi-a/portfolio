import HeaderButton from "@components/HeaderButton";
import Link from "next/link";
// import styles from "";

export default function Header() {
  return (
    //TODO: 1. className으로 css 적용하기 (css variable 사용) 2. emotion으로 theme provider 적용하기
    <div
      // className={styles.header}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "30px",
        border: "blue 2px solid",
      }}
    >
      {/* Home Logo */}
      <Link href="/" scroll={false}>
        <div>HYEJIYEOM</div>
      </Link>

      {/* Header Buttons */}
      <div style={{ display: "flex", gap: "2vw" }}>
        <HeaderButton name={"ABOUT"} />
        <HeaderButton name={"PROJECTS"} />
        <HeaderButton name={"CONTACT"} />
      </div>
    </div>
  );
}
