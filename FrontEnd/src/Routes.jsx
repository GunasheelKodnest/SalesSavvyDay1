import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
};

export default AppRoutes;