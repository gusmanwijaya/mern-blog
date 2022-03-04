import React from "react";
import "./detailblog.scss";
import { RegisterBg } from "../../assets";
import { Link, Gap } from "../../components";
import { useNavigate } from "react-router-dom";

const DetailBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="detail-blog-wrapper">
      <img src={RegisterBg} alt="Thumbnail" className="img-cover" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        corporis repellat soluta aut, ea, eum sint veniam illo corrupti
        excepturi cumque animi sed. Quos reprehenderit assumenda suscipit
        voluptates in quo.
      </p>
      <Gap height={20} />
      <Link title="Kembali" onClick={() => navigate("/")} />
    </div>
  );
};

export default DetailBlog;
