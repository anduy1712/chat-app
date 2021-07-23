import React from "react";
import { Row, Col, Button } from "antd";
import firebase, { auth } from "../../firebase/config";

const Login = () => {
  const loginWithGoogle = () => {
    const ggProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(ggProvider);
  };

  return (
    <div>
      <Row justify="center" style={{ marginTop: "50px" }}>
        <Col>
          <Button onClick={loginWithGoogle}>Login with Facebook</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
