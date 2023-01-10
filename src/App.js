import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Promotion from "./components/Promotion";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import "./scss/app.scss";

function App() {
  const [menuOpened, setMenuOpened] = React.useState(false);
  return (
    <div className="wrapper">
      <header>
        {menuOpened ? <Menu onCloseMenu={() => setMenuOpened(false)} /> : null}
        <Header onClickMenu={() => setMenuOpened(true)} />
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
