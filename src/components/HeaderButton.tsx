import Link from "next/link";

// name : anchor tag
interface IHeaderButtonProps {
  name: string;
  selected?: boolean;
}

export default function HeaderButton({ name, selected }: IHeaderButtonProps) {
  return (
    // scroll false => 페이지 이동시 스크롤을 맨 위로 올리는 게 Link 컴포넌트의 기본 동작
    <Link href={`#${name}`} scroll={false}>
      <button style={{ background: "none", border: "none", cursor: "pointer" }}>
        {name}
      </button>
    </Link>
  );
}
