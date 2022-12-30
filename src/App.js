import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Slider />
      </main>
    </div>
  );
}

export default App;
