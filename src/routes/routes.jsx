import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // Ensure paths are correct
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";

const AppRoutes = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>

  );
};

export default AppRoutes;
