import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";
import Cart from "./components/CartComponent/Cart";
import Profile from "./components/Profile/Profile";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import MyCars from "./components/MyCars/MyCars";
import ManageAddress from "./components/ManageAddress/ManageAddress";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/car-service" element={<Services />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/cart" element={<Cart />} />
         <Route path="/profile" element={<Profile />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/my-cars" element={<MyCars />} />
        <Route path="/ManageAddress" element={<ManageAddress />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
