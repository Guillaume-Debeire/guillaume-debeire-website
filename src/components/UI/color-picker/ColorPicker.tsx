import styled from "styled-components";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      <AnimatePresence>
        {openColorPicker && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <ColorPickerModal theme={context?.theme}>
              <Blue onClick={() => context?.setColor("rgba(7, 66, 157)")} />
              <Red onClick={() => context?.setColor("rgba(147, 0, 0, 0.8)")} />
              <Yellow
                onClick={() => context?.setColor("rgba(178, 174, 1, 0.8)")}
              />
              <Cyan onClick={() => context?.setColor("cyan")} />
              <Purple onClick={() => context?.setColor("purple")} />
              <Green
                onClick={() => context?.setColor("rgba(31, 146, 20, 1)")}
              />
            </ColorPickerModal>
          </motion.div>
        )}
      </AnimatePresence>
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
  border-radius: 50%;
  height: 24px;
  width: 24px;
  transition: all 0.2s ease-in-out;
  padding: 4px;
  cursor: pointer;
`;

const ColorPickerModal = styled.div<{ theme?: "light" | "dark" }>`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 2rem;
  z-index: 100;
  align-items: center;
  flex-wrap: wrap;
  right: 0;
  right: 0;
  border-radius: 10px;
  padding: 1rem;
  width: 150px;
  height: 100px;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 1px 1px 14px 1px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

const Blue = styled(ColorBall)`
  background-color: rgba(7, 66, 157);
`;
const Red = styled(ColorBall)`
  background-color: rgba(147, 0, 0, 0.8);
`;
const Yellow = styled(ColorBall)`
  background-color: rgba(216, 213, 12, 0.8);
`;
const Cyan = styled(ColorBall)`
  background-color: cyan;
`;
const Purple = styled(ColorBall)`
  background-color: purple;
`;
const Green = styled(ColorBall)`
  background-color: rgba(31, 146, 20);
`;
