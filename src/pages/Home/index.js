import React, { useEffect } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataBlog } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(setDataBlog());
  }, [dispatch]);

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          type="button"
          title="Create Blog"
          onClick={() => navigate("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((value, index) => (
          <BlogItem
            key={index}
            id={value._id}
            image={`${process.env.REACT_APP_IMG_HOST}/${value?.image}`}
            title={value?.title}
            body={value?.body}
            author={value?.author?.name}
            date={value?.createdAt}
          />
        ))}
      </div>
      <div className="pagination">
        <Button type="button" title="Previous" />
        <Gap width={20} />
        <Button type="button" title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
