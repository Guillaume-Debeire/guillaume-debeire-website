import styled from "styled-components";
import profilePic from "../../../assets/profile-pic.jpg";
import { Title } from "../../UI/title/Title";
import { useContext } from "react";
import { AppContext, IAppContext } from "../../context/AppContext";

export function MyPage() {
  const context = useContext(AppContext);
  return (
    <Wrapper>
      <ProfilePic src={profilePic} context={context} />
      <Title>
        <FirstName>Guillaume</FirstName> <LastName>DEBEIRE</LastName>
      </Title>
      <Subtitle>Front-end Web Developer</Subtitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 6rem;
`;

const ProfilePic = styled.img<{ context?: IAppContext }>`
  width: 200px;
  border-radius: 50%;
  box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.4);
  border: 2px solid ${({ context }) => context?.color};
  padding: 1rem;
`;

const Subtitle = styled.h2``;

const Name = styled.span``;

const FirstName = styled(Name)`
  color: #979797;
`;
const LastName = styled(Name)``;
