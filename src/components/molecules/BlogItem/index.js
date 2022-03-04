import React from "react";
import "./blogitem.scss";
import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../../components";
import { useNavigate } from "react-router-dom";

const BlogItem = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
      <img src={RegisterBg} alt="Post" className="image-thumb" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          fugit, optio iste sit reprehenderit ducimus ab aliquam molestias
          laborum odio qui blanditiis, ipsam a aperiam modi eligendi delectus
          sequi dolore?
        </p>
        <Gap height={20} />
        <Button
          title="View Detail"
          type="button"
          onClick={() => navigate("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
