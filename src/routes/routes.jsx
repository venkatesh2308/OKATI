import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // Ensure paths are correct
import About from "../pages/dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
