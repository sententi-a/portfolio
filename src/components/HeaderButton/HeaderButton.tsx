import Link from "next/link";
import styles from "./HeaderButton.module.css";

// name : anchor tag
interface IHeaderButtonProps {
  name: string;
  selected?: boolean;
}

export default function HeaderButton({ name, selected }: IHeaderButtonProps) {
  return (
    // scroll false => 페이지 이동시 스크롤을 맨 위로 올리는 게 Link 컴포넌트의 기본 동작
    <Link href={`#${name}`} scroll={false}>
      <button className={styles.button}>{name}</button>
    </Link>
  );
}
