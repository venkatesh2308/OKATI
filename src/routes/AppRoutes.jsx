import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; 
import Products from "../pages/Products"; // Ensure the correct path
import Diet from "../pages/Diet";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/diet" element={<Diet />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
