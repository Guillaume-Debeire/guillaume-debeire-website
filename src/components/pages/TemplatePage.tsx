import { ReactNode, useContext } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { AppContext, IAppContext } from "../context/AppContext";

export interface TemplatePageProps {
  children: ReactNode | ReactNode[];
  title?: ReactNode | ReactNode[];
}
export function TemplatePage(props: TemplatePageProps) {
  const context = useContext(AppContext);
  return (
    <AnimatePresence>
      <Wrapper>
        {props.title && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <WrapperTitle>
              <Title>{props.title}</Title>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <UnderTitle context={context} />
              </motion.div>
            </WrapperTitle>
          </motion.div>
        )}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {props.children}
        </motion.div>
      </Wrapper>
    </AnimatePresence>
  );
}

const Wrapper = styled.div`
  padding-top: 6rem;
  overflow: hidden;
`;

const WrapperTitle = styled.div`
  width: fit-content;
  margin: 1rem auto;
`;

const Title = styled.h1`
  margin: 1rem auto;
  width: 100%;
  height: 100%;
  width: fit-content;
  z-index: 6;
`;

const UnderTitle = styled.div<{ context?: IAppContext }>`
  width: 100%;
  height: 5px;
  position: relative;
  bottom: 10px;
  background-color: ${({ context }) => context?.color};
  z-index: 5;
`;
