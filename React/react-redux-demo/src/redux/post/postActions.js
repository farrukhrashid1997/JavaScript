import { POST_DATA } from "./postTypes";
import axios from "axios";

export const postData = (data) => {
  return {
    type: POST_DATA,
    payload: data,
  };
};

export const postUserData = (user) => {
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", user)
      .then((response) => {
        dispatch(postData(user))
        console.log("***************************************")
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
