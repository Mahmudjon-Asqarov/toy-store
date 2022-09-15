import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { Toaster } from "react-hot-toast";
import "./App.css";
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
