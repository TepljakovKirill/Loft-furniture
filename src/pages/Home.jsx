import React from "react";
import Slider from "../components/Slider";
import Promotion from "../components/Promotion";

function Home() {
  return (
    <div className="wrapper">
      <main>
        <Slider />
        <Promotion />
      </main>
    </div>
  );
}

export default Home;
