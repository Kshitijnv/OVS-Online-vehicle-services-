import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/car-service" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
