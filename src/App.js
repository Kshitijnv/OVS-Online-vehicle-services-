import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";
import Cart from "./components/CartComponent/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/car-service" element={<Services />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
