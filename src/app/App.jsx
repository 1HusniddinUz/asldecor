import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";

// i18n | MULTI LANG
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Pages (yaratib qo'yasiz)
import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import Marketplaces from "../pages/Marketplaces.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";


import translationsUz from "../locales/translationsUz";
import translationsEn from "../locales/translationsEn";
import translationsRu from "../locales/translationsRu";
import translationsFr from "../locales/translationsFr";
import translationsTr from "../locales/translationsTr";

function App() {
  i18n.use(initReactI18next).init({
    resources: {
      uz: { translation: translationsUz },
      tr: { translation: translationsTr },
      ru: { translation: translationsRu },
      fr: { translation: translationsFr },
      en: { translation: translationsEn },
    },
    lng: "uz",
    fallbackLng: "uz",
  });
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
