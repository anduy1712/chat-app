import React, { useState } from "react";
import { Row, Col } from "antd";
import SideBarLeft from "./SideBarLeft/SideBarLeft";
import SideBarRight from "./SideBarRight/SideBarRight";
import ChatWindow from "./ChatWindow/ChatWindow";
const ChatRoom = () => {
  const [closeSideBarRight, setCloseSideBarRight] = useState(false);
  const CloseSideBar = (value) => {
    setCloseSideBarRight(value);
  };
  return (
    <div>
      <Row>
        <Col span={5}>
          <SideBarLeft />
        </Col>
        <Col span={closeSideBarRight ? 19 : 14}>
          <ChatWindow />
        </Col>
        <Col span={closeSideBarRight ? 0 : 5}>
          <SideBarRight test={CloseSideBar} />
        </Col>
      </Row>
    </div>
  );
};

export default ChatRoom;
