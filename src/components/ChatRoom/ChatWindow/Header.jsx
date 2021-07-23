import React from "react";
import styled from "styled-components";
import { Typography, Avatar, Tooltip } from "antd";
import { UserOutlined, AntDesignOutlined } from "@ant-design/icons";

const Header = () => {
  const { Title } = Typography;
  const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    padding-bottom: 10px;
    border-bottom: 1px solid #f1f1f1;
    .header__left {
      .header__title {
        font-weight: 500;
        margin-bottom: 4px;
      }
      .header__subtitle {
        font-size: 14px;
        font-weight: 400;
        color: #989393;
        margin: 0;
      }
    }
  `;
  return (
    <div>
      <HeaderStyled>
        <div className="header__left">
          <Title level={4} className="header__title">
            Introductions
          </Title>
          <Title level={5} className="header__subtitle">
            This channel is for Company WideGes
          </Title>
        </div>
        <div className="header__right">
          <Avatar.Group
            maxCount={2}
            size="large"
            maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{ backgroundColor: "#1890ff" }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        </div>
      </HeaderStyled>
    </div>
  );
};

export default Header;
