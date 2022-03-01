import styles from "./EmptyForm.module.scss";
const EmptyFormName = () => {
    return (
      <div className={styles["form-background"]}>
        <div className={styles["form"]}>
          <p className={styles["form-text"]}>Your name can't be empty</p>

          <p className={styles["btn"]}>OK</p>
        </div>
      </div>
    );
}
export default EmptyFormName;