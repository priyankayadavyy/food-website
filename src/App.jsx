import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Cart from "./pages/cart/Cart";
import Placeorder from "./pages/placeorder/Placeorder";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";
import Footer from "./components/footer/Footer";
import LoginPopup from "./components/Login popup/LoginPopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <BrowserRouter>
      <StoreContextProvider>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Placeorder />} />
          </Routes>
        </div>
        <Footer />
      </StoreContextProvider>
    </BrowserRouter>
  );
};

export default App;
