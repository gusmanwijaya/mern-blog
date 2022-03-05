const initialState = {
  form: {
    title: "",
    body: "",
    image: "",
  },
  imagePreview: null,
};

const createBlog = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FORM_DATA":
      return {
        ...state,
        form: {
          ...state.form,
          [action.formType]: action.formValue,
        },
      };
    case "SET_IMAGE_PREVIEW":
      return {
        ...state,
        imagePreview: action.payload,
      };
    default:
      return state;
  }
};

export default createBlog;
