import { Dispatch, SetStateAction } from "react";

export interface IHeaderProps {
  active: string | undefined | null;
  setActive: Dispatch<SetStateAction<string | null | undefined>>;
}
