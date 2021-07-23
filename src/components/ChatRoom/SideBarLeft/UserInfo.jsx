import React from "react";
import { Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import styled from "styled-components";
const UserInfo = () => {
  const { Title, Paragraph } = Typography;

  const UserInfo = styled.div`
    display: flex;
    justify-content: space-beetween;
    align-item: center;
    .sidebar__title {
      margin: 0;
      color: white;
      font-weight: 400;
    }
    .sidebar__name {
      font-weight: 300;
      color: white;
    }
    .sidebar__avatar {
      margin-right: 8px;
    }
  `;
  return (
    <div>
      <UserInfo>
        <Avatar
          shape="square"
          size={50}
          src="https://lh3.googleusercontent.com/ogw/ADea4I5sgu4mCPsb6CevnQx6C6Xzeo8J8XFBWNOJK98w=s32-c-mo"
          className="sidebar__avatar"
        />
        <Typography>
          <Title className="sidebar__title" level={4}>
            Learn Reactjs
          </Title>
          <Paragraph className="sidebar__name">Duy An</Paragraph>
        </Typography>
      </UserInfo>
    </div>
  );
};

export default UserInfo;
