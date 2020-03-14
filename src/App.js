import React from "react";
import "./App.css";
import Navigation from "./components/navigation";
import Card from "./components/card";
import Stickers from "./components/stickers/stickers";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <Card />
        <Stickers />
      </div>
    </div>
  );
}

export default App;
