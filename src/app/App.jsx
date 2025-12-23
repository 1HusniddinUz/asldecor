import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";

// Pages (yaratib qo'yasiz)
import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import Marketplaces from "../pages/Marketplaces.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";

function App() {
  return (
    <div className="appShell">
      <Header />

      <main className="appMain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/marketplaces" element={<Marketplaces />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
