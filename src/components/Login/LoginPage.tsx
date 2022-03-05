import React, { useState } from "react";
import Login from "./Login";
import LoginSpinner from "./LoginSpinner/LoginSpinner";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const [spinner, setSpinner] = useState(false);

  return (
    <div className={styles.loginContainer}>
      <Login spinner={setSpinner} />
      {spinner && <LoginSpinner />}
    </div>
  );
};

export default LoginPage;
