import styled from "styled-components";
import profilePic from "../../assets/profile-pic.jpg";

export function MyPage() {
  return (
    <>
      <ProfilePic src={profilePic} />
    </>
  );
}

const ProfilePic = styled.img`
  width: 200px;
  border-radius: 50%;
`;
