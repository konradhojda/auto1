import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useData } from "./utils/hooks/useData";

function App() {
  const { data } = useData();

  console.log(data);
  return <div></div>;
}

export default App;
