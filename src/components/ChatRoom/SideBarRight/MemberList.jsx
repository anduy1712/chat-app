import React from "react";
import { Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import styled from "styled-components";
export const MemberList = () => {
  const LinkStyled = styled.li`
    display: flex;
    justify-content: space-beetween;
    align-items: center;
    margin-bottom: 20px;
    .sidebar__title {
      margin: 0;
      font-weight: 400;
    }
    .sidebar__name {
      font-weight: 300;
      margin: 0;
    }
    .sidebar__avatar {
      margin-right: 8px;
    }
  `;
  const { Title, Paragraph } = Typography;
  return (
    <ul style={{ marginTop: 10 }}>
      <Title level={5}>Members</Title>
      <LinkStyled>
        <Avatar
          shape="circle"
          size={35}
          src="https://lh3.googleusercontent.com/ogw/ADea4I5sgu4mCPsb6CevnQx6C6Xzeo8J8XFBWNOJK98w=s32-c-mo"
          className="sidebar__avatar"
        />
        <Typography>
          <Title className="sidebar__title" level={5}>
            Ruby action
          </Title>
          <Paragraph className="sidebar__name">David</Paragraph>
        </Typography>
      </LinkStyled>
    </ul>
  );
};
