import React from "react";
import "./blogitem.scss";
import { Button, Gap } from "../../../components";
import { useNavigate } from "react-router-dom";

const BlogItem = ({ id, image, title, author, body, date, onDelete }) => {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
      <img src={image} alt="Post" className="image-thumb" />
      <div className="content-detail">
        <div className="title-wrapper">
          <p className="title">{title}</p>
          <div className="edit-wrapper">
            <p className="edit" onClick={() => navigate(`/create-blog/${id}`)}>
              Edit
            </p>{" "}
            |{" "}
            <p className="delete" onClick={() => onDelete(id)}>
              Delete
            </p>
          </div>
        </div>
        <p className="author">
          {author} - {date}
        </p>
        <p className="body">{body}</p>
        <Gap height={20} />
        <Button
          title="View Detail"
          type="button"
          onClick={() => navigate(`/detail-blog/${id}`)}
        />
      </div>
    </div>
  );
};

export default BlogItem;
