import { useState } from "react";

export default function useHover() {
  const [isMouseOn, setIsMouseOn] = useState<Boolean>(false);

  const handleMouseOver = () => {
    setIsMouseOn(true);
  };

  const handleMouseOut = () => {
    setIsMouseOn(false);
  };

  return { isMouseOn, handleMouseOver, handleMouseOut };
}
