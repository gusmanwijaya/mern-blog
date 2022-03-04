import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainApp, Login, Register } from "../../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<MainApp />} />
    </Routes>
  );
};

export default Router;
