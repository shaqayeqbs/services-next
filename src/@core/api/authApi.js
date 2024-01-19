import END_POINTS from "../constants/endpoints.js";
import instance from "../constants/request.js";
import { toast } from "react-toastify";
export const register = async ({ username, password1, password2 }) => {
  console.log(username, password1, password2);
  try {
    const res = await instance.post(END_POINTS.signup, {
      username,
      password1,
      password2,
    });

    if (res?.status === 200) {
      console.log(res, "tooooooooooooooo");
      localStorage.setItem("token", res.data.access);
    }
    console.log(res);
    return res?.status == 200;
  } catch (err) {
    if (err?.response) {
      console.log(err.response.data, err.response.status, err);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const login = async ({ username, password }) => {
  try {
    const res = await instance.post(END_POINTS.login, { username, password });
    console.log(res);
    if (res?.status === 200) {
      localStorage.setItem("token", res?.data?.data?.access);
    }

    return res?.status == 200;
  } catch (err) {
    if (err?.response) {
      toast.error(err.response.data.response);
      console.log(err.response);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
