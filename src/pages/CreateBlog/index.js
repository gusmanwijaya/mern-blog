import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import {
  postToApi,
  setForm,
  setImagePreview,
  updateToApi,
} from "../../config/redux/action";
import "./createblog.scss";

const CreateBlog = () => {
  const navigate = useNavigate();
  const { form, imagePreview } = useSelector((state) => state.createBlog);
  const { title, body } = form;
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsUpdate(true);
      axios
        .get(`${process.env.REACT_APP_API_HOST}/blog/post/${id}`)
        .then((result) => {
          const data = result?.data?.data;
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(
            setImagePreview(`${process.env.REACT_APP_IMG_HOST}/${data.image}`)
          );
        })
        .catch((error) => console.log(error));
    }
  }, [id, dispatch]);

  const onSubmit = () => {
    if (isUpdate) {
      console.log("Method: PUT");
      updateToApi(id, form);
    } else {
      console.log("Method: POST");
      postToApi(form);
    }
    navigate("/");
  };

  const onImageUpload = (event) => {
    const file = event.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImagePreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => navigate("/")} />
      <p className="title">{isUpdate ? "Update" : "Create New"} Blog Post</p>
      <Input
        label="Post Title"
        value={title}
        onChange={(event) => dispatch(setForm("title", event.target.value))}
      />
      <Upload onChange={(event) => onImageUpload(event)} img={imagePreview} />
      <TextArea
        value={body}
        onChange={(event) => dispatch(setForm("body", event.target.value))}
      />
      <Gap height={20} />
      <div className="button-action">
        <Button
          type="button"
          title={isUpdate ? "Update" : "Save"}
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default CreateBlog;
