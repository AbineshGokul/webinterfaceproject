
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Counter");

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    console.log("Effect Happened");
  });

  return (
    <div className="container">
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>
          +1
        </button>

        <button onClick={() => setCount(count - 1)}>
          -1
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        <button onClick={() => setTitle("Counter App")}>
          Change Title
        </button>
      </div>
    </div>
  );
}

export default App;