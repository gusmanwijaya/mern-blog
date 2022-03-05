import axios from "axios";

export const setDataBlog = (page) => async (dispatch) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_HOST}/blog/posts?page=${page}&perPage=2`
  );
  if (response?.data?.status === "success") {
    dispatch({
      type: "FETCH_BLOG_POST",
      payload: response?.data?.data,
    });
    dispatch({
      type: "UPDATE_PAGE",
      payload: {
        currentPage: response?.data?.page,
        totalPage: Math.ceil(
          response?.data?.total_data / response?.data?.per_page
        ),
      },
    });
  }
};
