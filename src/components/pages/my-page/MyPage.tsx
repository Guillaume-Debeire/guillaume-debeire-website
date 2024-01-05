import styled from "styled-components";
import profilePic from "../../../assets/profile-pic.jpg";

export function MyPage() {
  return (
    <Wrapper>
      <ProfilePic src={profilePic} />
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

const ProfilePic = styled.img`
  width: 200px;
  border-radius: 50%;
`;

const Title = styled.h1``;
const Subtitle = styled.h2``;

const Name = styled.span``;

const FirstName = styled(Name)`
  color: #979797;
`;
const LastName = styled(Name)``;
