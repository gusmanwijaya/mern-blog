import axios from "axios";

export const setDataDetailBlog = (postId) => async (dispatch) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_HOST}/blog/post/${postId}`
  );
  if (response?.data?.status === "success")
    return dispatch({
      type: "FETCH_DETAIL_BLOG_POST",
      payload: response?.data?.data,
    });
};
