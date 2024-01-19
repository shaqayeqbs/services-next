import { NOTIF_END_POINTS } from "../constants/endpoints.js";
import instance from "../constants/request.js";
import { handleRequestError } from "../utils/handle-req-err.js";

export const getNotif = async ({ page = 1 }) => {
  try {
    const res = await instance.get(`${NOTIF_END_POINTS.get_notif}${page}/`);

    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};
