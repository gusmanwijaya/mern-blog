import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import "./createblog.scss";

const CreateBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => navigate("/")} />
      <p className="title">Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button type="button" title="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
