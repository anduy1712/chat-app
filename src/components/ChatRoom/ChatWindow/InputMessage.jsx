import React, { useState, useRef } from "react";
import { Input, Form, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { auth, db } from "../../../firebase/config";
import firebase from "firebase/app";
const WrapperStyled = styled.div`
  padding: 0 20px;
  height: 10vh;
`;
const messagesRef = db.collection("messages");

const InputMessage = () => {
  const [formValue, setFormValue] = useState("");
  const dummy = useRef();

  const onSearch = async (e) => {
    const { uid, photoURL } = auth.currentUser;
    console.log(messagesRef);
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      name:auth.currentUser.displayName,
    });
    setFormValue("");
  };
  const { Search } = Input;
  return (
    <div>
      <WrapperStyled>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Send"
          size="large"
          block
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          onSearch={onSearch}
        />
      </WrapperStyled>
    </div>
  );
};

export default InputMessage;
