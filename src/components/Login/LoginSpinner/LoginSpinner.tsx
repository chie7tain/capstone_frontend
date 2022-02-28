import styles from "./LoginSpinner.module.scss";

function LoginSpinner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginSpinner}>
        <div className={styles.container}>
          <h3 className={styles.spinner}>login successful ✅</h3>
          <div className={styles.loader}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSpinner;
