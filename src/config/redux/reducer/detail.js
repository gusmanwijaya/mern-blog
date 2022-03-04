const initialState = {
  dataDetailBlog: {},
};

const detail = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DETAIL_BLOG_POST":
      return {
        ...state,
        dataDetailBlog: action.payload,
      };
    default:
      return state;
  }
};

export default detail;
