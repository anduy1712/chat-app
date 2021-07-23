import { Collapse, Avatar, Typography } from "antd";
import React from "react";
import styled from "styled-components";
const RoomChat = () => {
  const { Paragraph, Link } = Typography;
  const { Panel } = Collapse;
  const WrapperStyled = styled.div`
    flex: 2;
  `;
  const PanelGroup = styled(Panel)`
    &&& {
      .ant-collapse-header,
      p {
        color: white;
      }
    }
  `;
  const LinkStyled = styled(Link)`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .ant-typography {
      padding-left: 20px;
      color: white;
      margin: 0;
    }
  `;
  return (
    <WrapperStyled>
      <Collapse ghost defaultActiveKey={["1"]}>
        <PanelGroup header="List Room" key="1">
          <LinkStyled>
            <Avatar
              shape="square"
              size="large"
              src="https://scr.vn/wp-content/uploads/2020/07/avt-cute.jpg"
            ></Avatar>
            <Paragraph>Angular Group</Paragraph>
          </LinkStyled>
          <LinkStyled>
            <Avatar
              shape="square"
              size="large"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZHPQeV5ThBr5I82PmSmMJ6zOi1IaJHBuYhye1waAmbL9EMNESTa0FYylN1hT5WVKM08&usqp=CAU"
            ></Avatar>
            <Paragraph>React Group</Paragraph>
          </LinkStyled>
        </PanelGroup>
      </Collapse>
    </WrapperStyled>
  );
};

export default RoomChat;
