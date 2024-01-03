import "./App.css";
import { AppContext } from "./components/context/AppContext";
import { AppRouter } from "./components/router/AppRouter";

export function App() {
  return (
    <>
      <AppContext.Provider value={null}>
        <AppRouter />
      </AppContext.Provider>
    </>
  );
}
