import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface SlideProps {
  children: React.ReactNode;
}

export interface HoverTextProps {
  before: string;
  after: string;
}

//TODO: custom hook으로 빠질시 항목 수정
export interface HeaderProps {
  active: string | undefined | null;
  setActive: Dispatch<SetStateAction<string | null | undefined>>;
  index: MutableRefObject<number>;
}

export interface Project {
  title: string;
  description: string;
  stacks: Array<string>;
  role: string;
  github: string;
}

export type ProjectsType = null | Array<Project>;
