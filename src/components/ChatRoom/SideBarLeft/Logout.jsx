import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import { auth } from "../../../firebase/config";
const WrapperStyled = styled.div``;
const Logout = () => {
  const logoutWithGoogle = () => {
    auth.signOut();
  };
  return (
    <WrapperStyled>
      <Button block type="dashed" onClick={logoutWithGoogle}>
        Logout
      </Button>
    </WrapperStyled>
  );
};

export default Logout;
