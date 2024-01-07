import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { AppContext, IAppContext } from "../../context/AppContext";
import ViceCityRadioDesign from "../../../assets/img/designs/vice-city-radio2.png";
import ViceCityRadioDesignPhone from "../../../assets/img/designs/vice-city-radio-phone.png";

export interface DesignDetailsModalProps {
  setSelected: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export function DesignDetailsModal(props: DesignDetailsModalProps) {
  const context = useContext(AppContext);
  return (
    <BackgroundWrapper onClick={() => props.setSelected(undefined)}>
      <StyledMotion
        initial={{ opacity: 0, y: 600 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 600 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Container context={context}>
          <LeftPart>
            <ImgDetails src={ViceCityRadioDesign} />
            <ImgDetails src={ViceCityRadioDesignPhone} />
          </LeftPart>
          <RightPart>
            <a href="https://vice-city-radio.surge.sh/" target="_blank">
              Le site
            </a>
          </RightPart>
        </Container>
      </StyledMotion>
    </BackgroundWrapper>
  );
}

const BackgroundWrapper = styled.div`
  /* transition: all 0.2s ease-in-out; */
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  position: absolute;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div<{ context?: IAppContext }>`
  z-index: 1001;
  background: ${({ context, theme }) =>
    context?.theme === "light" ? theme.lightColor : theme.darkColor};
  border-radius: 20px;
  color: ${({ context, theme }) =>
    context?.theme === "light" ? theme.darkColor : theme.lightColor};
  display: flex;
  padding: 1rem;
  box-shadow: 1px 2px 16px 2px rgba(0, 0, 0, 0.4);
`;

const Part = styled.div`
  width: 50%;
`;

const LeftPart = styled(Part)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const RightPart = styled(Part)``;

const StyledMotion = styled(motion.div)`
  margin: auto;
  width: 80%;
  height: 80%;
`;

const ImgDetails = styled.img`
  width: 200px;
  border-radius: 5px;
`;
