import styled from "styled-components";
import "./App.css";
import { AppRouter } from "./components/router/AppRouter";
import { useState } from "react";
import { AppContext } from "./components/context/AppContext";

export function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <Wrapper theme={theme}>
        <AppRouter />
      </Wrapper>
    </AppContext.Provider>
  );
}

const Wrapper = styled.div<{ theme: "light" | "dark" }>`
  width: 100vw;
  height: 100vh;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;
