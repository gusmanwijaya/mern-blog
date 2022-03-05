import axios from "axios";

export const setForm = (formType, formValue) => {
  return {
    type: "SET_FORM_DATA",
    formType,
    formValue,
  };
};

export const setImagePreview = (payload) => {
  return {
    type: "SET_IMAGE_PREVIEW",
    payload,
  };
};

export const postToApi = async (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);
  return await axios.post(`${process.env.REACT_APP_API_HOST}/blog/post`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

export const updateToApi = async (postId, form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);
  return await axios.put(
    `${process.env.REACT_APP_API_HOST}/blog/post/${postId}`,
    data,
    {
      headers: {
        "content-type": "multipart/form-data",
      },
    }
  );
};
