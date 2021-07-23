import React from "react";
import styled from "styled-components";
import Logout from "./Logout";
import RoomChat from "./RoomChat";
import UserInfo from "./UserInfo";

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100vh;
  background: linear-gradient(
    183deg,
    rgba(140, 70, 225, 1) 0%,
    rgba(142, 69, 225, 1) 35%,
    rgba(82, 65, 224, 1) 100%
  );
`;
const SideBarLeft = () => {
  return (
    <div>
      <WrapperStyled>
        <UserInfo />
        <RoomChat />
        <Logout />
      </WrapperStyled>
    </div>
  );
};

export default SideBarLeft;
