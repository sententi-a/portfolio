import { Dispatch, MutableRefObject, SetStateAction } from "react";

//TODO: custom hook으로 빠질시 항목 수정
export interface IHeaderProps {
  active: string | undefined | null;
  setActive: Dispatch<SetStateAction<string | null | undefined>>;
  index: MutableRefObject<number>;
}
