import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataBlog, page } = useSelector((state) => state.home);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [dispatch, counter]);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure want to delete this data?",
      closeOnClickOutside: false,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(`${process.env.REACT_APP_API_HOST}/blog/post/${id}`)
              .then((result) => {
                console.log("Success Delete: ", result.data);
                dispatch(setDataBlog(counter));
              })
              .catch((error) => console.log(error));
          },
        },
        {
          label: "No",
          onClick: () => console.log("No"),
        },
      ],
    });
  };

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
            onDelete={confirmDelete}
          />
        ))}
      </div>
      <div className="pagination">
        <Button type="button" title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button type="button" title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
