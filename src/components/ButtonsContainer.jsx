import styles from "./ButtonsContainer.module.css";

export default function ButtonsContainer({onButtonClick}) {
  const buttons = [
    "C",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "/",
    "0",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
        {buttons.map(button => <button onClick={() => onButtonClick(button)} className={styles.button}>{button}</button>)}
    </div>
  );
}
