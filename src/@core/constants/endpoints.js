const END_POINTS = {
  login: `api/v1/account/login/`,
  signup: "api/v1/account/signup/",
  user_profile: "api/v1/account/profile/",
};
export const SHOP_END_POINTS = {
  shop_categories: "api/v1/shop/categories/",
  shop_products: "api/v1/shop/products/",
  shop_new_arrival: "api/v1/shop/new-arrival/",
  shop_special_offers: "api/v1/shop/special-offers/",
  shop_orders: "api/v1/shop/orders/",
  shop_suggestions: "api/v1/shop/suggestion-for-you/",
  shop_super_discount: "api/v1/shop/super-discount/1/",
  shop_cart: "api/v1/shop/shopping-cart/",
  shipping_methods: "api/v1/shop/shipping-methods/",
  shop_category_page: "api/v1/shop/products/category/",
  shop_create_order: "api/v1/shop/create-order/",
};

export const PROFILE_END_POINTS = {
  get_addresses: `api/v1/account/addresses/`,
  create_addresse: `api/v1/account/addresses/create/`,
  profile_data: `api/v1/account/profile/`,
  profile_edit: `api/v1/account/profile/edit/`,
  profile_avatar_upload: `api/v1/account/profile/avatar/upload/`,
};
export const NOTIF_END_POINTS = {
  get_notif: `api/v1/notifications/notifications/`,
};

export default END_POINTS;
