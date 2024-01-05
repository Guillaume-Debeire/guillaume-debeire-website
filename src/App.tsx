import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { AppRouter } from "./components/router/AppRouter";
import { useState } from "react";
import { AppContext } from "./components/context/AppContext";
import { UITheme } from "./components/UI-theme/UITheme";

export function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [color, setColor] = useState<string>("rgba(7, 66, 157, 0.8)");

  return (
    <AppContext.Provider value={{ theme, setTheme, color, setColor }}>
      <ThemeProvider theme={UITheme}>
        <Wrapper themeMode={theme}>
          <AppRouter />
        </Wrapper>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

const Wrapper = styled.div<{ themeMode: "light" | "dark" }>`
  width: 100vw;
  height: 100vh;
  transition: all 0.2s ease-in-out;
  background-color: ${({ themeMode, theme }) =>
    themeMode === "light" ? theme.lightColor : theme.darkColor};
  color: ${({ themeMode, theme }) =>
    themeMode === "light" ? theme.darkColor : theme.lightColor};
`;
