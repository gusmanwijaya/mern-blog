import React, { useEffect } from "react";
import "./detailblog.scss";
import { Link, Gap } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataDetailBlog } from "../../config/redux/action";

const DetailBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataDetailBlog } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(setDataDetailBlog(id));
  }, [dispatch, id]);

  return (
    <div className="detail-blog-wrapper">
      <img
        src={`${process.env.REACT_APP_IMG_HOST}/${dataDetailBlog?.image}`}
        alt="Thumbnail"
        className="img-cover"
      />
      <p className="blog-title">{dataDetailBlog?.title}</p>
      <p className="blog-author">
        {dataDetailBlog?.author?.name} - {dataDetailBlog?.createdAt}
      </p>
      <p className="blog-body">{dataDetailBlog?.body}</p>
      <Gap height={20} />
      <Link title="Kembali" onClick={() => navigate("/")} />
    </div>
  );
};

export default DetailBlog;
