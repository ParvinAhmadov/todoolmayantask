import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./featured/layout/header";
import BlogPage from "./pages/blog";
import DashboardPage from "./pages/dashboard";
import HomePage from "./pages/home";

const App = () => {
  return (
    // <RouterProvider router={routers} />
    <Router>
      <Header />

        <Routes>
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
