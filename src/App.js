import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Checkout from "./components/Checkout/Checkout";
import CarSelectionPage from "./components/CarSelector/CarSelector";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/car-service" element={<Services />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/car-selector" element={<CarSelectionPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
