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
        <pre>
            <code><h2>{"<"}{Titulo}{"/>"}</h2></code>
        </pre>
      </div>
      <div className={styles["Div-Desc"]}>
        
            <pre>
                <code>{"<"}{desc}{"/>"}</code>
            </pre>
      </div>

      <div className={styles["Div-code"]}>
        <p className={styles["text-Exemplo"]}>Exemplo: </p>
        <pre>
          <code>
            <p className={styles["text-code"]}>{code}</p>
          </code>
        </pre>
      </div>
    </div>
  );
}
export default Card;
