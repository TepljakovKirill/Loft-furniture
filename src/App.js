import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
