import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
function ErrorModal(props) {
  //   const clickHandler = () => {
  //     props.onDialogClose();
  //   };
  return (
    <>
      <div onClick={props.onDialogClose} className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.action}>
          <Button onClick={props.onDialogClose}>Okay</Button>
        </footer>
      </Card>
    </>
  );
}

export default ErrorModal;
