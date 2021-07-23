import React from "react";
import { db } from "../../../firebase/config";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ItemMessage from "./ItemMessage";
import styled from "styled-components";
export const MessageContent = () => {
  // const dummy = useRef();
  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  console.log(messagesRef);
  const ContentStyled = styled.div`
    height: 80vh;
    overflow: scroll;
  `;
  return (
    <ContentStyled>
      {messages &&
        messages.map((msg) => <ItemMessage key={msg.id} message={msg} />)}
    </ContentStyled>
  );
};
