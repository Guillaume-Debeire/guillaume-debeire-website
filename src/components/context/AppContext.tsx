import { createContext } from "react";

export interface IAppContext {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);
