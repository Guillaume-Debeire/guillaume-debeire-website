import styled from "styled-components";
import { Sun } from "../../assets/image/Sun";
import { Moon } from "../../assets/image/Moon";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export function LightDarkModeButton() {
  const context = useContext(AppContext);

  console.log("theme", context);

  function morphButton() {
    if (context?.theme == "light" || !context) {
      context?.setTheme("dark");
    } else {
      context?.setTheme("light");
    }
  }

  return (
    <Wrapper onClick={morphButton}>
      <IconWrapper>
        {context?.theme === "light" ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.3,
            }}
          >
            <StyledMoon width={30} />
          </motion.div>
        ) : (
          <motion.div>
            <StyledSun width={30} />
          </motion.div>
        )}
      </IconWrapper>
    </Wrapper>
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
