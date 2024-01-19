import { SHOP_END_POINTS } from "../constants/endpoints.js";
import instance from "../constants/request.js";
import { handleRequestError } from "../utils/handle-req-err.js";
export const shopCategories = async ({ page }) => {
  try {
    const res = await instance.get(`${SHOP_END_POINTS.shop_categories}${page}`);

    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const shopCategoryPage = async ({ categoryId, page }) => {
  try {
    const res = await instance.get(
      `${SHOP_END_POINTS.shop_category_page}${categoryId}/page/${page}/`
    );

    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getShopProducts = async ({ page = 1 }) => {
  try {
    const res = await instance.get(`${SHOP_END_POINTS.shop_products}${page}`);
    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};
export const getShopSimilarTo = async ({ id }) => {
  console.log(id, "sssssssssss");
  try {
    const res = await instance.get(
      `${SHOP_END_POINTS.shop_products}${id}/similar_to_product/`
    );
    console.log(res);
    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const AddToShoppingCart = async ({
  product_id = 0,
  size_id = 0,
  color_id = 0,
}) => {
  try {
    const res = await instance.post(`${SHOP_END_POINTS.shop_cart}add/`, {
      product_id,
      size_id,
      color_id,
    });
    console.log(res);
    return res?.status;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const clearShoppingCart = async () => {
  try {
    const res = await instance.post(`${SHOP_END_POINTS.shop_cart}clear/`);
    console.log(res);
    return res?.status;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const removeFromoShoppingCart = async ({
  product_id = 0,
  size_id = 0,
  color_id = 0,
}) => {
  try {
    const res = await instance.post(`${SHOP_END_POINTS.shop_cart}remove/`, {
      product_id,
      size_id,
      color_id,
    });
    console.log(res);
    return res?.status;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getShippingMethods = async () => {
  try {
    const res = await instance.get(SHOP_END_POINTS.shipping_methods);
    console.log(res);
    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getShopProductDetail = async (prod_id) => {
  try {
    const res = await instance.get(
      `${SHOP_END_POINTS.shop_products}${prod_id}/detail/`
    );
    console.log(res);
    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};
export const getShopSuperDiscount = async () => {
  try {
    const res = await instance.get(`${SHOP_END_POINTS.shop_super_discount}`);

    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getShopCart = async () => {
  try {
    const res = await instance.get(SHOP_END_POINTS.shop_cart);
    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getShopOrders = async () => {
  try {
    const res = await instance.get(SHOP_END_POINTS.shop_orders);
    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getNewArrivals = async ({ page }) => {
  try {
    const res = await instance.get(
      `${SHOP_END_POINTS.shop_new_arrival}${page}`
    );
    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getSpecialOffers = async () => {
  try {
    const res = await instance.get(SHOP_END_POINTS.shop_special_offers);

    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getSuggestions = async () => {
  try {
    const res = await instance.get(SHOP_END_POINTS.shop_suggestions + "1");
    return res?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const createShopOrder = async ({ address_id }) => {
  try {
    console.log("run");
    const res = await instance.post(SHOP_END_POINTS.shop_create_order, {
      address_id,
    });
    console.log(res);
    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};
