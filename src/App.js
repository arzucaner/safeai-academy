import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; 
import Home from "./pages/Home/Home";
import Learn from "./pages/Learn/Learn";
import Scenario from "./pages/Scenario/Scenario";
import Quiz from "./pages/Quiz/Quiz";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar /> 

      <Routes>
      <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/scenario" element={<Scenario />} />
        <Route path="/quiz" element={<Quiz />} /> 
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;


