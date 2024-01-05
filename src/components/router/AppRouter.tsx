import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyPage } from "../pages/my-page/MyPage";
import { Menu } from "../menu/Menu";
import { AppHeader } from "../header/AppHeader";
import { MyDesigns } from "../pages/my-designs/MyDesigns";
import { MyWordpressThemes } from "../pages/my-wordpress-themes/MyWordpressThemes";

export function AppRouter() {
  const items = [
    {
      label: "Accueil",
      to: "/",
    },
    {
      label: "Designs",
      to: "/designs",
    },
    {
      label: "Wordpress Themes",
      to: "/wordpress-themes",
    },
  ];
  return (
    <BrowserRouter>
      <AppHeader />
      <Menu items={items} />
      <Routes>
        <Route index element={<MyPage />} />
        <Route path="/designs" element={<MyDesigns />} />
        <Route path="/wordpress-themes" element={<MyWordpressThemes />} />
      </Routes>
    </BrowserRouter>
  );
}
