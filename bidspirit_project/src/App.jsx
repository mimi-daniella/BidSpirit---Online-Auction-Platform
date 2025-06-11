import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        {/* <SearchBar /> */}
        {/* Uncomment the SearchBar component if you want to include it in the Home page */}
      </BrowserRouter>
    </>
  )
}

export default App;