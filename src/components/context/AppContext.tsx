import { createContext } from "react";

export interface IAppContext {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);
