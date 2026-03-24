import styles from "./Card.module.css";

function Card({ Titulo, desc, code }) {
  return (
    <div className={styles["Card-container"]}>
      <div className={styles["Apple-buttons"]}>
        <div className={styles["bnt-apple"]}></div>

        <div className={styles["bnt-apple"]}></div>

        <div className={styles["bnt-apple"]}></div>
      </div>

      <div className={styles["Titulo-div"]}>
        <h2>{Titulo}</h2>
      </div>

      <div className={styles["Div-Desc"]}>
        <p>{desc}</p>
      </div>

      <div className={styles["Div-code"]}>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
export default Card;
