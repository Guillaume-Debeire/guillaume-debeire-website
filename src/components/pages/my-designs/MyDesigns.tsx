import styled from "styled-components";
import { Design } from "../../design/Design";
import ViceCityRadioDesign from "../../../assets/img/designs/vice-city-radio.png";
import { Title } from "../../UI/title/Title";
import { useState } from "react";
import { motion } from "framer-motion";

export interface Design {
  label: string;
  src: string;
}
export function MyDesigns() {
  const [selectedDesign, setSelectedDesign] = useState<Design | undefined>(
    undefined
  );

  const designs: Design[] = [
    {
      label: "Vice City Radio",
      src: ViceCityRadioDesign,
    },
  ];
  return (
    <Wrapper>
      <Title>My Designs</Title>
      <DesignContainer>
        {designs.map((design) => (
          <Button onClick={() => setSelectedDesign(design)}>
            <Design title="Vice City Radio" src={ViceCityRadioDesign} />
          </Button>
        ))}
        {selectedDesign && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Modal>
              <CloseModalButton onClick={() => setSelectedDesign(undefined)}>
                X
              </CloseModalButton>
              fezfez
            </Modal>
          </motion.div>
        )}
      </DesignContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-top: 6rem;
`;

const Modal = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  transition: all 0.2s ease-in-out;
  top: 0;
  left: 0;
  background-color: white;
`;

const CloseModalButton = styled.button``;

const DesignContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  border: unset;
  background: transparent;
`;
