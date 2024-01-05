import styled from "styled-components";
import { Design } from "../../design/Design";
import ViceCityRadioDesign from "../../../assets/img/designs/vice-city-radio2.png";
import { useState } from "react";
import { TemplatePage } from "../TemplatePage";

export interface Design {
  label: string;
  src: string;
}
export function MyDesigns() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const designs: Design[] = [
    {
      label: "Vice City Radio",
      src: ViceCityRadioDesign,
    },
    {
      label: "Vice City Radio",
      src: ViceCityRadioDesign,
    },
    {
      label: "Vice City Radio",
      src: ViceCityRadioDesign,
    },
    {
      label: "Vice City Radio",
      src: ViceCityRadioDesign,
    },
  ];
  return (
    <TemplatePage title="Designs">
      <DesignContainer>
        {designs.map(() => (
          <DesignWrapper onClick={() => setExpanded(!expanded)}>
            <Design
              expanded={expanded}
              title="Vice City Radio"
              src={ViceCityRadioDesign}
            />
          </DesignWrapper>
        ))}
      </DesignContainer>
    </TemplatePage>
  );
}
const DesignContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const DesignWrapper = styled.div``;
