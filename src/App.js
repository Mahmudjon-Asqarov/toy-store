import React from "react";
import { setTranslations, setDefaultLanguage } from "react-multi-lang";
import en from "./lang/en.json";
import uz from "./lang/uz.json";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { Toaster } from "react-hot-toast";
import "./App.css";
setTranslations({ uz, en });
setDefaultLanguage(localStorage.getItem("lang") || "uz");
function App() {
  return (
    <div className="app">
      <Toaster />
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
