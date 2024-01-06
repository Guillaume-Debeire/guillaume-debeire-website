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
  const [selected, setSelected] = useState<number | undefined>(undefined);
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
        {designs.map((_design, key) => (
          <DesignWrapper
            onClick={() => {
              selected === key ? setSelected(undefined) : setSelected(key);
            }}
          >
            <Design
              expanded={selected === key}
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
  height: 600px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const DesignWrapper = styled.div``;
