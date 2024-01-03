import styled from "styled-components";
import "./App.css";
import { AppRouter } from "./components/router/AppRouter";
import { useContext } from "react";
import { AppContext } from "./components/context/AppContext";

export function App() {
  const theme = useContext(AppContext);
  console.log("theme : ", theme);
  return (
    // <AppContext.Provider value={theme}>
    <Wrapper style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
      <AppRouter />
    </Wrapper>
    // </AppContext.Provider>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
