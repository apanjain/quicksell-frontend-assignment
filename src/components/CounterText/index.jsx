import styles from "./CounterText.module.scss";
const CounterText = (props) => {
  return (
    <div className={styles.counterTextParent}>
      <div className={styles.counterText}>Counter value: {props.count}</div>
    </div>
  );
};

export default CounterText;
