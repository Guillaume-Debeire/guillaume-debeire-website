import { ReactNode } from "react";

export interface TitleProps {
  children: ReactNode;
}

export function Title(props: TitleProps) {
  return <h1>{props.children}</h1>;
}
