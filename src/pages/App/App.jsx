import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import "./App.css";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
