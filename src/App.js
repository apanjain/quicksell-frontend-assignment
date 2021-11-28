import Counter from "./components/Counter";
import styles from "./App.module.scss";
import githubIcon from "./assets/images/github2.png";

function App() {
  return (
    <div className="App">
      <div className={styles.counterParent}>
        <Counter />
      </div>
      <span className={styles.github}>
        <a
          href="https://github.com/apanjain/quicksell-frontend-assignment"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="github" src={githubIcon} height="20px" width="20px" />
          apanjain
        </a>
      </span>
    </div>
  );
}

export default App;
