import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyPage } from "../pages/my-page/MyPage";
import { Menu } from "../menu/Menu";
import { AppHeader } from "../header/AppHeader";
import { MyDesigns } from "../pages/my-designs/MyDesigns";
import { MyWordpressThemes } from "../pages/my-wordpress-themes/MyWordpressThemes";
import styled from "styled-components";
import { useState } from "react";
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
export function AppRouter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <AppHeader />
      <Menu items={items} open={isOpen} setOpen={setIsOpen} />
      <Wrapper onClick={() => setIsOpen(false)} className="route-wrapper">
        <Routes>
          <Route index element={<MyPage />} />
          <Route path="/designs" element={<MyDesigns />} />
          <Route path="/wordpress-themes" element={<MyWordpressThemes />} />
        </Routes>
      </Wrapper>

      <Footer>@Guillaume DEBEIRE</Footer>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 5px;
  width: 100%;
  margin: 0 auto;
`;
