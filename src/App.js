import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Toaster />
      {/* <ToastContainer position="top-center" autoClose={1000} /> */}
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
