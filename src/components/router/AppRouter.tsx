import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyPage } from "../my-page/MyPage";
import { Menu } from "../menu/Menu";

export function AppRouter() {
  const items = [
    {
      label: "Accueil",
      to: "/",
    },
  ];
  return (
    <BrowserRouter>
      <Menu items={items} />
      <Routes>
        <Route index element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
