import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sandbox from "./sandbox/Sandbox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sandbox />
    </div>
  );
}

export default App;
