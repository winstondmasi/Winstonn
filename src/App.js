import React from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="content">
        <About></About>
        <Portfolio></Portfolio>
      </div>
    </div>
  );
}

export default App;
