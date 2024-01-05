import styled from "styled-components";
import { Github } from "../assets/image/Github";
import { LightDarkModeButton } from "../UI/buttons/LightDarkModeButton";
import { ColorPicker } from "../UI/color-picker/ColorPicker";

export function AppHeader() {
  return (
    <StyledHeader>
      <NavContainer>
        <ColorPicker />
        <LightDarkModeButton />
        <Button href="https://github.com/Guillaume-Debeire" target="_blank">
          <StyledGithub width={30} />
        </Button>
      </NavContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100vw;
  backdrop-filter: blur(10px);
`;

const NavContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  margin: 1rem;
  gap: 1rem;
`;

const Button = styled.a`
  border: unset;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    filter: brightness(3);
  }
`;

const StyledGithub = styled(Github)``;
