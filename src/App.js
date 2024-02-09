import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
