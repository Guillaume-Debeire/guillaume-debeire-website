import styled from "styled-components";
import profilePic from "../../../assets/profile-pic.jpg";
import { Title } from "../../UI/title/Title";
import { useContext } from "react";
import { AppContext, IAppContext } from "../../context/AppContext";
import { TemplatePage } from "../TemplatePage";

export function MyPage() {
  const context = useContext(AppContext);
  return (
    <TemplatePage>
      <ProfilePic src={profilePic} context={context} />
      <Title>
        <FirstName>Guillaume</FirstName> <LastName>DEBEIRE</LastName>
      </Title>
      <Subtitle>Front-end Web Developer</Subtitle>
      {/* <CardsWrapper>
        <Card>
          <CardTitle>Designs</CardTitle>
        </Card>
        <Card>
          <CardTitle>Designs</CardTitle>
        </Card>
      </CardsWrapper> */}
    </TemplatePage>
  );
}

const ProfilePic = styled.img<{ context?: IAppContext }>`
  width: 200px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.4);
  border: 3px solid ${({ context }) => context?.color};
  padding: 1rem;
  &:hover {
    box-shadow: 0 8px 14px 4px rgba(0, 0, 0, 0.6);
    transform: scale(1.1);
  }
`;

const CardsWrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Card = styled.div`
  background-color: red;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const CardTitle = styled.h1`
  padding: 0;
  margin: 0;
`;

const Subtitle = styled.h2``;

const Name = styled.span``;

const FirstName = styled(Name)`
  color: #979797;
`;
const LastName = styled(Name)``;
