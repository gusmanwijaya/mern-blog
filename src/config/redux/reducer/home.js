const initialState = {
  dataBlog: [],
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BLOG_POST":
      return {
        ...state,
        dataBlog: action.payload,
      };
    default:
      return state;
  }
};

export default home;
