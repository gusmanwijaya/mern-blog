import axios from "axios";

export const setDataBlog = () => async (dispatch) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_HOST}/blog/posts?perPage=2`
  );
  if (response?.data?.status === "success")
    return dispatch({
      type: "FETCH_BLOG_POST",
      payload: response?.data?.data,
    });
};
