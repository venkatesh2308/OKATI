import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; 
import Products from "../pages/Products"; // Ensure the correct path

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
