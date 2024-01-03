import styled from "styled-components";
import { Sun } from "../../assets/image/Sun";
import { useState } from "react";
import { Moon } from "../../assets/image/Moon";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";

export function LightDarkModeButton() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function morphButton() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <AppContext.Provider value={theme}>
      <Wrapper onClick={morphButton}>
        <IconWrapper>
          {theme === "light" ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 180, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <StyledSun width={30} />
            </motion.div>
          ) : (
            <motion.div>
              <StyledMoon width={30} />
            </motion.div>
          )}
        </IconWrapper>
      </Wrapper>
    </AppContext.Provider>
  );
}

const Wrapper = styled.button`
  border: unset;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    filter: brightness(3);
  }
`;

const IconWrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-content: center;
  align-self: center;
  gap: 1rem;
`;

const StyledSun = styled(Sun)``;
const StyledMoon = styled(Moon)``;
