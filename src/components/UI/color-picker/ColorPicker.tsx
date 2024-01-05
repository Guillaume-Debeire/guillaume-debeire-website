import styled from "styled-components";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

export interface ColorPickerProps {}

export function ColorPicker() {
  const context = useContext(AppContext);
  const [openColorPicker, setOpenColorPicker] = useState<boolean>(false);
  return (
    <Wrapper>
      <StyledColorPicker
        context={context}
        onClick={() => setOpenColorPicker(!openColorPicker)}
        openColorPicker={openColorPicker}
      ></StyledColorPicker>
      {openColorPicker && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <ColorPickerModal theme={context?.theme}>
            <Blue onClick={() => context?.setColor("blue")} />
            <Red onClick={() => context?.setColor("red")} />
            <Yellow onClick={() => context?.setColor("yellow")} />
            <Cyan onClick={() => context?.setColor("cyan")} />
            <Purple onClick={() => context?.setColor("purple")} />
            <Green onClick={() => context?.setColor("green")} />
          </ColorPickerModal>
        </motion.div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const ColorBall = styled.div`
  height: 25px;
  width: 25px;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledColorPicker = styled.div<{
  context?: any;
  openColorPicker: boolean;
}>`
  background: linear-gradient(
    ${({ context }) => context.color},
    ${({ context }) => (context.theme === "light" ? "black" : "white")}
  );
  border-radius: ${({ openColorPicker }) =>
    openColorPicker ? "50% 50% 0 0" : "50%"};
  height: 25px;
  width: 25px;
  transition: all 0.2s ease-in-out;
  padding: 4px;
  cursor: pointer;
`;

const ColorPickerModal = styled.div<{ theme?: "light" | "dark" }>`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  flex-wrap: wrap;
  /* top: 40px; */
  right: 0;
  right: 0;
  border-radius: 10px 0 10px 10px;
  width: 300px;
  height: 200px;
  background: ${({ theme }) => (theme === "light" ? "black" : "white")};
  box-shadow: 1px 1px 14px 1px
    ${({ theme }) =>
      theme === "light" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"};
`;

const Blue = styled(ColorBall)`
  background-color: blue;
`;
const Red = styled(ColorBall)`
  background-color: red;
`;
const Yellow = styled(ColorBall)`
  background-color: yellow;
`;
const Cyan = styled(ColorBall)`
  background-color: cyan;
`;
const Purple = styled(ColorBall)`
  background-color: purple;
`;
const Green = styled(ColorBall)`
  background-color: green;
`;
