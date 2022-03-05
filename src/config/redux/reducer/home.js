const initialState = {
  dataBlog: [],
  page: {
    currentPage: 1,
    totalPage: 1,
  },
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BLOG_POST":
      return {
        ...state,
        dataBlog: action.payload,
      };
    case "UPDATE_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default home;
