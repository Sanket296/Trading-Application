import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./landing_page/home/Homepage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/Aboutpage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Notfound from "./landing_page/Notfound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Rootpage from "./landing_page/Rootpage";
import Login from "./landing_page/login/Login";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { CookiesProvider } from "react-cookie";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Rootpage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </CookiesProvider>
);
