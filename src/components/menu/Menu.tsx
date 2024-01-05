import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppContext, IAppContext } from "../context/AppContext";
import { BurgerMenu } from "../assets/image/BurgerMenu";
import { motion } from "framer-motion";

export interface MenuProps {
  items?: Item[];
  externalLinks?: ExternalLink[];
}

export interface Item {
  label: string;
  to: string;
}

export interface ExternalLink {
  label: string;
  to: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
}

export function Menu(props: MenuProps) {
  const context = useContext(AppContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <StyledMenu {...props} open={isOpen} context={context}>
      <MenuContainer>
        <MenuButton
          open={isOpen}
          context={context}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              X
            </motion.div>
          ) : (
            <StyledBurgerMenu width={20} color={context?.color} />
          )}
        </MenuButton>
        {(props.items || props.externalLinks) && (
          <ItemsContainer>
            {props.items?.map((item) => (
              <StyledNavLink to={item.to} key={item.label} context={context}>
                {item.label}
              </StyledNavLink>
            ))}
            {props.externalLinks?.map((item) => (
              <StyledExternallink
                href={item.to}
                key={item.label}
                context={context}
                target="_blank"
              >
                {item.label}
              </StyledExternallink>
            ))}
          </ItemsContainer>
        )}
      </MenuContainer>
    </StyledMenu>
  );
}

const StyledMenu = styled.div<{ open: boolean; context?: IAppContext }>`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-300px)")};
  height: 100vh;
  width: 300px;
  z-index: 100;
  transition: all 0.2s ease-in-out;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ context }) =>
    context?.theme === "light"
      ? "rgba(0, 0, 0, 0.3)"
      : "rgba(255, 255, 255, 0.3)"};
  backdrop-filter: blur(5px);
`;

const MenuContainer = styled.nav`
  position: relative;
  height: 100%;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const StyledNavLink = styled(NavLink)<{ context?: IAppContext }>`
  width: fit-content;
  border: unset;
  background-color: transparent;
  cursor: pointer;
  padding: 5px 9px;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  color: ${({ context, theme }) =>
    context?.theme === "light" ? theme.darkColor : theme.lightColor};
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &.active {
    color: ${({ context }) => context?.color};
  }
`;

const StyledExternallink = styled.a<{ context?: IAppContext }>`
  width: fit-content;
  border: unset;
  background-color: transparent;
  cursor: pointer;
  padding: 5px 9px;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  color: ${({ context, theme }) =>
    context?.theme === "light" ? theme.darkColor : theme.lightColor};
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &.active {
    color: ${({ context }) => context?.color};
  }
`;

const MenuButton = styled.button<{ open: boolean; context?: IAppContext }>`
  position: absolute;
  transition: all 0.2s ease-in-out;
  top: 10px;
  border: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ context }) => context?.color};
  right: ${({ open }) => (open ? "10px" : "-40px")};
  box-shadow: 1px 1px 14px 2px rgba(0, 0, 0, 0.4)
    ${({ open }) => (open ? "inset" : "")};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: white;
  &:hover {
    background-color: ${({ context }) => context?.color};
    color: white;
  }
`;

const StyledBurgerMenu = styled(BurgerMenu)``;
