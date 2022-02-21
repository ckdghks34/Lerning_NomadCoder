import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time");
  // Component가 처음 rendering 될 때 실행되고 다시는 실행되지 않을 function을 넣음.
  // const iRunOnlyOnce = () => {
  //   console.log("I run only once");
  // };
  // useEffect(iRunOnlyOnce, []);

  // useEffect는 코드를 딱 한번만 실행될 수 있도록 보호해준다.
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(" I run when 'keyword' changes");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changes.");
  }, [counter, keyword]);

  return (
    <div>
      <div>
        <h1 className={styles.title}>Welcome Back!</h1>
        <Button text={"Continue"} />
      </div>
      <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      </div>
      <div>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me!</button>
      </div>
    </div>
  );
}

export default App;
