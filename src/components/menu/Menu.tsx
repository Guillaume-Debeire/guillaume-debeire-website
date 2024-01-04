import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

export interface MenuProps {
  items?: Item[];
}

export interface Item {
  label: string;
  to: string;
}

export function Menu(props: MenuProps) {
  const context = useContext(AppContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <StyledMenu {...props} open={isOpen}>
      <MenuContainer>
        <MenuButton
          open={isOpen}
          theme={context?.theme}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "X" : "+"}
        </MenuButton>
        {props.items && (
          <ItemsContainer>
            {props.items.map((item) => (
              <StyledNavLink to={item.to} key={item.label}>
                {item.label}
              </StyledNavLink>
            ))}
          </ItemsContainer>
        )}
      </MenuContainer>
    </StyledMenu>
  );
}

const StyledMenu = styled.div<{ open: boolean; theme?: "light" | "dark" }>`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-300px)")};
  height: 100vh;
  width: 300px;
  transition: all 0.2s ease-in-out;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
`;

const MenuContainer = styled.nav`
  position: relative;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  width: fit-content;
  border: unset;
  background-color: transparent;
  cursor: pointer;
  padding: 5px 9px;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const MenuButton = styled.button<{ open: boolean; theme?: "light" | "dark" }>`
  position: absolute;
  transition: all 0.2s ease-in-out;
  top: 10px;
  border: unset;
  color: red;
  right: ${({ open }) => (open ? "10px" : "-40px")};
  box-shadow: 1px 1px 14px 2px rgba(0, 0, 0, 0.4)
    ${({ open }) => (open ? "inset" : "")};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: white;
`;
