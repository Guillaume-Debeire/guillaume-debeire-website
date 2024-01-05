import styled from "styled-components";

export interface DesignProps {
  title: string;
  src: string;
}

export function Design(props: DesignProps) {
  return (
    <Wrapper>
      <ImgDesign src={props.src} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ImgDesign = styled.img`
  width: 250px;
  height: 100px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    transform: scale(1.2);
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
  }
`;
