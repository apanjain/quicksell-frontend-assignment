import { useEffect, useRef, useState } from "react";
import { getData, updateBackend } from "../../api/methods";
import CounterText from "../CounterText";
import Loader from "../Loader";
import styles from "./Counter.module.scss";

const MAX_VALUE = 1000;
const Counter = () => {
  const [count, setCount] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const refContainer = useRef(null);
  const update = (val) => {
    if (isLoading) return;
    if (!isNaN(val)) {
      const temp = parseInt(val);
      if (temp > MAX_VALUE) alert(`Value can't be greater that ${MAX_VALUE}`);
      else {
        setCount(temp);
        setIsLoading(true);
        updateBackend(temp)
          .then((data) => {
            console.log("Updated", data);
          })
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
      }
    } else {
      alert("Value must be an integer");
    }
  };
  const fetchData = () => {
    getData()
      .then((res) => {
        console.log({ res });
        if (res == null) setCount(1);
        else setCount(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.parentDiv}>
        {isLoading ? (
          <div className={styles.loadParent}>
            <Loader />
            <div className={styles.loadingText}>Saving counter value</div>
          </div>
        ) : null}
        <div>
          <div className={styles.controlDiv}>
            <div
              className={isLoading ? styles.Disabled : styles.minus}
              onClick={() => update(count - 1)}
            >
              -
            </div>
            <div
              contentEditable={true}
              ref={refContainer}
              suppressContentEditableWarning={true}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  update(e.target.innerText);
                }
              }}
              onKeyPress={(e) => {
                return e.key !== "Enter";
              }}
              className={styles.singleLine}
            >
              {count}
            </div>
            <div
              className={isLoading ? styles.plusDisabled : styles.plus}
              value={1}
              onClick={() => update(count + 1)}
            >
              +
            </div>
          </div>
        </div>
        <CounterText count={count} />
      </div>
    </>
  );
};

export default Counter;
