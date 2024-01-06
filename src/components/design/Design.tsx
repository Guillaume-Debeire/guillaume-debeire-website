import styled from "styled-components";
import { motion } from "framer-motion";

export interface DesignProps {
  title: string;
  src: string;
  expanded: boolean;
}

export function Design(props: DesignProps) {
  return (
    <Wrapper expanded={props.expanded}>
      {props.expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ width: "100%", height: "100%", position: "absolute" }}
        >
          <Description className="description">
            <DescriptionContent>
              <Title>{props.title}</Title>
            </DescriptionContent>
          </Description>
        </motion.div>
      )}
      <ImgDesign expanded={props.expanded} src={props.src} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ expanded: boolean }>`
  /* width: ${({ expanded }) => (expanded ? "800px" : "200px")}; */
  width: 200px;
  /* height: 100%; */
  position: relative;
  margin: auto;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
  }
`;

const Description = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0.4),
    transparent,
    black
  );

  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
`;

const DescriptionContent = styled.div`
  width: 40%;
  color: white;
`;

const ImgDesign = styled.img<{ expanded: boolean }>`
  width: 100%;
  transition: all 0.2s ease-in-out;
  top: 20%;
  right: 20%;
  border-radius: 10px;
  &:hover {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
    border-radius: 0;
  }
`;

const Title = styled.h1`
  font-size: 20px;
`;
