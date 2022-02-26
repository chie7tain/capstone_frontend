import React, { useState } from "react";
import Login from "./Login";
import LoginSpinner from "./LoginSpinner/LoginSpinner";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const [user, setUser] = useState(false);
  return (
    <div className={styles.loginContainer}>
      <Login />
      {user && <LoginSpinner />}
    </div>
  );
};

export default LoginPage;
