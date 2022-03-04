import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [dataBlog, setDataBlog] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_HOST}/blog/posts?perPage=2`)
      .then((result) => setDataBlog(result.data.data))
      .catch((error) => console.log(error));
  }, []);

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
