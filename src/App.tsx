import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Somar</button>

      <h1>{count}</h1>
    </div>
  );
};

export default App;
