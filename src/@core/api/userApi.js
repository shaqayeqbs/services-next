import END_POINTS, { USER_ADDRESS_END_POINTS } from "../constants/endpoints.js";
import instance from "../utils/request.js";
import APP_CONFIG from "../constants/app-config.js";
import axios from "axios";
export const uploadCurrentUserPictureApi = async (imaged) => {
  const accessToken = localStorage.getItem("token");
  const data = new FormData();
  data.append("lang", "fa");
  data.append("image", imaged);

  // const res = await instance.post(
  //   END_POINTS.upload_current_user_profile_image,
  //   data
  // );
  const res = axios({
    method: "post",
    url: APP_CONFIG.apiBaseUrl + END_POINTS.upload_current_user_profile_image,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(res);
  return res;
};
export const updateUserProfile = async ({
  birthday,
  surname,
  name,
  city_id,
  gender,
  lang = "fa",
}) => {
  try {
    const res = await instance.post(END_POINTS.upload_current_user_profile, {
      birthday,
      surname,
      name,
      city_id,
      gender,
      lang,
    });
    console.log({ res });
    return res;
  } catch (err) {
    console.log(err.status);
    if (err.response) {
      return err.response.status;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const storeNewFavoriteToUser = async ({ type = "product", id }) => {
  try {
    const res = await instance.post(
      END_POINTS.store_a_new_favorite_to_selected_user,
      {
        type,
        id,
      }
    );

    return res.status;
  } catch (err) {
    console.log(err.status);
    if (err.response) {
      return err.response.status;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const setUserAddressTospecifiedOrderAPi = async ({
  id,
  lang = "en",
  user_address_id,
}) => {
  try {
    const res = await instance.post(
      USER_ADDRESS_END_POINTS.set_user_address_to_specified_order +
        id +
        "/set-address",
      {
        user_address_id,
        lang,
        id,
      }
    );

    console.log(res);
    return res;
  } catch (err) {
    console.log(err.status);
    if (err.response) {
      return err.response.status;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const getUserAddressApi = async (userId) => {
  try {
    const res = await instance.get(
      USER_ADDRESS_END_POINTS.get_user_address + userId + "/addresses"
    );

    return res?.data;
  } catch (err) {
    console.log(err.status);
    if (err.response) {
      return err.response.status;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
export const storeNewAddressToUserApi = async ({
  userId,
  name,
  zipcode,
  address,
  lat,
  lng,
  status = 1,
  plague,
  unit,
  is_primary,
  ami_reciver,
  reciver_name,
  reciver_surname,
  reciver_phone,
}) => {
  try {
    const res = await instance.post(
      USER_ADDRESS_END_POINTS.get_user_address + userId + "/addresses",
      {
        name,
        zip_code: zipcode,
        address,
        lat,
        lng,
        plague,
        unit,
        is_primary: is_primary ? 1 : 0,
        ami_reciver: ami_reciver ? 1 : 0,
        reciver_name,
        reciver_surname,
        reciver_phone,
      }
    );

    return res?.data;
  } catch (err) {
    console.log(err.status);
    if (err.response) {
      return err.response.status;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const updateTheUserAddressApi = async ({
  id,
  addressId,
  name,
  zipcode,
  address,
  lat,
  lng,
  status = 1,
  plague,
  unit,
  is_primary,
  ami_reciver,
  reciver_name,
  reciver_surname,
  reciver_phone,
}) => {
  try {
    console.log(
      name,
      zipcode,
      address,
      lat,
      lng,
      (status = 1),
      plague,
      unit,
      is_primary ? 1 : 0,
      ami_reciver ? 1 : 0,
      reciver_name,
      reciver_surname,
      reciver_phone
    );
    const res = await instance.put(
      USER_ADDRESS_END_POINTS.get_user_address + id + "/addresses/" + addressId,
      {
        name,
        zip_code: zipcode,
        address,
        lat,
        lng,
        status: 1,
        plague,
        unit,
        is_primary: is_primary ? 1 : 0,
        ami_reciver: ami_reciver ? 1 : 0,
        reciver_name,
        reciver_surname,
        reciver_phone,
      }
    );

    return res;
  } catch (err) {
    console.log(err.status);
    if (err.response) {
      return err.response.status;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const removeTheUserAddressApi = async (userId, addressId) => {
  try {
    const id = +userId;
    const res = await instance.delete(
      USER_ADDRESS_END_POINTS.get_user_address +
        userId +
        "/addresses/" +
        addressId
    );

    return res?.status;
  } catch (err) {
    console.log(err.status);
    if (err.response) {
      return err.response.status;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
export const getCurrentUser = async () => {
  try {
    const res = await instance.get(END_POINTS.get_user);

    return res;
  } catch (err) {
    if (err?.response) {
      console.log(err.response.data, err.response.status, err);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
