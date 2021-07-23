import React from "react";
import styled from "styled-components";
import Header from "./Header";
import InputMessage from "./InputMessage";
import { MessageContent } from "./MessageContent";
const ChatWindow = () => {
  const WrapperStyled = styled.div`
    position: relative;
    background: #f8f6fd;
    padding: 20px;
    height: 100vh;
  `;
  return (
    <div>
      <WrapperStyled>
        <Header />
        <MessageContent />
        <InputMessage />
      </WrapperStyled>
    </div>
  );
};

export default ChatWindow;
