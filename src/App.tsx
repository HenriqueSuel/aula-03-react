import { useState } from "react";
import "./App.css";
import Count from "./components/count";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [hours, setHours] = useState<string>("");

  const handleCount = () => {
    setCount(count + 1);
    setHours(new Date().toLocaleTimeString())
  };

  return (
    <div>
      <Count valor={count} hours={hours} />

      <button onClick={() => handleCount()}>Click</button>
    </div>
  );
};

export default App;
