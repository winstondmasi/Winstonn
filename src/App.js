import React from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Credits from "./components/Credits"
import "./App.css";
import "./styles/Global.css";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
