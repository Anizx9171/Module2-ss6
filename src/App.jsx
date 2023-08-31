import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/BT1/Todo";
import Input from "./components/base/input";
import Checkbox from "./components/base/checkbox";

function App() {
  return (
    <>
      <Todo />
      {/* <Checkbox /> */}
    </>
  );
}

export default App;
