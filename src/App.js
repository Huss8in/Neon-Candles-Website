import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Items from "./components/Items";
import ItemDetail from "./components/ItemDetail"; // Import the new ItemDetail component
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/items" element={<Items />} />
            <Route path="/items/:candleId" element={<ItemDetail />} />{" "}
            {/* New route for item detail */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
