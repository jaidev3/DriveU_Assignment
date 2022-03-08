import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaymentDetails from "./pages/PaymentDetails";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import SingleShop from "./pages/SingleShop";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout/payment" element={<PaymentDetails />}></Route>
        <Route path="/:id" element={<SingleShop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
