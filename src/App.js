import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Promotion from "./components/Promotion";
import Footer from "./components/Footer";
import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Slider />
        <Promotion />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
