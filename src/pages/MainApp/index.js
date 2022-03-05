import React from "react";
import "./mainapp.scss";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "../../components";
import { CreateBlog, DetailBlog, Home } from "../../pages";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/create-blog" element={<CreateBlog />}>
            <Route path=":id" element={<CreateBlog />} />
          </Route>
          <Route path="/detail-blog/:id" element={<DetailBlog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
