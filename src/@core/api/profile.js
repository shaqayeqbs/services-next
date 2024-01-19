import instance from "../constants/request";
import { PROFILE_END_POINTS } from "../constants/endpoints";
import { handleRequestError } from "../utils/handle-req-err";

export const getAddresses = async () => {
  try {
    const res = await instance.get(PROFILE_END_POINTS.get_addresses);

    return res?.data?.data?.addresses;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getProfile = async () => {
  try {
    const res = await instance.get(`${PROFILE_END_POINTS.profile_data}`);

    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};
export const uploadProfilePhoto = async ({ img }) => {
  try {
    const res = await instance.post(
      `${PROFILE_END_POINTS.profile_avatar_upload}`,
      {
        img,
      }
    );
    console.log(res);
    return res?.status;
  } catch (err) {
    return handleRequestError(err);
  }
};
export const editProfile = async ({
  email,
  name,
  password,
  phoneNumber,
  addresses,
  bankAccountNumber,
  accountHolderName,
  ifscCode,
  family = ["test"],
}) => {
  console.log(
    email,
    name,
    password,
    phoneNumber,
    addresses,
    bankAccountNumber,
    accountHolderName,
    ifscCode,
    family
  );
  try {
    const res = await instance.put(`${PROFILE_END_POINTS.profile_edit}`, {
      email,
      name,
      password,
      phoneNumber,
      addresses,
      bankAccountNumber,
      accountHolderName,
      ifscCode,
      family,
    });
    console.log(res);
    return res?.status;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const addNewAddress = async (data) => {
  const { name, phoneNumber, country, city, postal_code, street, state } = data;
  try {
    console.log(city, name);
    const res = await instance.post(PROFILE_END_POINTS.create_addresse, {
      name,
      phoneNumber,
      country,
      city,
      postal_code,
      street,
      state,
    });
    console.log(res);
    return res;
  } catch (err) {
    return handleRequestError(err);
  }
};
