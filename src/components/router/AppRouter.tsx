import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyPage } from "../pages/my-page/MyPage";
import { Menu } from "../menu/Menu";
import { AppHeader } from "../header/AppHeader";
import { MyDesigns } from "../pages/my-designs/MyDesigns";
import { MyWordpressThemes } from "../pages/my-wordpress-themes/MyWordpressThemes";
import styled from "styled-components";

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
    {
      label: "Vice City Radio",
      to: "https://vice-city-radio.surge.sh/",
      target: "_blank",
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
      <Footer>@Guillaume DEBEIRE</Footer>
    </BrowserRouter>
  );
}

const Footer = styled.footer`
  position: fixed;
  bottom: 5px;
  width: 100%;
  margin: 0 auto;
`;
