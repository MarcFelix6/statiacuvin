import "./App.css";

import Navs from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import WhiteWine from "./pages/whiteWine";
import RedWine from "./pages/redWine";
import RoseWine from "./pages/roseWine";
import Formular from "./components/cartForm/form";
import Cart from "./pages/cart";
import Contact from "./components/contact/contact";
import ToastMessage from "./components/toast/toast";
import { Context } from "./context/store";
import { useContext } from "react";

function App() {
  return (
    <>
      <Router>
        <Navs />
        <main>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/vinalb" element={<WhiteWine />}></Route>
            <Route path="/vinrosu" element={<RedWine />}></Route>
            <Route path="/vinroze" element={<RoseWine />}></Route>
            <Route path="/magazin" element={<Cart />}></Route>
            <Route path="/formular" element={<Formular />}></Route>
          </Routes>
          <Context.Consumer>
            {({ showToast }) => (
              <ToastMessage
                show={showToast.show}
                title={showToast.title}
                message={showToast.message}
                position={showToast.position}
                bg={showToast.bg}
              />
            )}
          </Context.Consumer>
        </main>
        <Contact />
      </Router>
    </>
  );
}

export default App;
