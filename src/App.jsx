import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TIimeTracking from "./Components/TimeTracking";
import TimeTracking from "./Components/TimeTracking";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello CK</h1>
      <TimeTracking />
    </>
  );
}

export default App;
