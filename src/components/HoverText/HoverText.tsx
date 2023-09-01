import useHover from "@hooks/useHover";
import { HoverTextProps } from "@customtypes/index";
import styles from "./HoverText.module.css";

export default function HoverText({ before, after }: HoverTextProps) {
  const { isMouseOn, handleMouseOver, handleMouseOut } = useHover();

  return (
    <div
      id={styles.h2}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isMouseOn ? after : before}
    </div>
  );
}
