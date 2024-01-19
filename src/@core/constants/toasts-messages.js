import { toast } from "react-toastify";

const myToast = (message, id, hasError) => {
  toast.dismiss();
  hasError
    ? toast.error(message, { toastId: id })
    : toast.success(message, { toastId: id });
};

export const removeToasts = () => {
  // console.log("removed");

  toast.dismiss();
};

export const notValidPhone = () => {
  myToast(" شماره موبایل وارد شده معتبر نمی باشد", 1, true);
};
export const shortPassowrd = () => {
  myToast("رمز عبور نمی تواند کمتر از 6 کاراکتر باشد", 2, true);
};

export const wrongPassowrd = () => {
  myToast("رمز عبور وارد شده اشتباه است", 3, true);
};

export const wrongCode = () => {
  myToast("کد تایید وارد شده اشتباه می باشد", 4, true);
};

export const createUserAccount = () => {
  myToast("اکانت شما با موفقیت ایجاد شد", 5, false);
};
export const accountIsNotPublic = () => {
  myToast(
    "اکانت با این شناسه کاربری ثبت شده است یا در حالت خصوصی میباشد",
    6,
    true
  );
};

export const existedAccount = () => {
  myToast(" اکانت با این شناسه کاربری ثبت شده است", 7, true);
};
export const existedCompetitor = () => {
  myToast("کاربر در لیست رقیب های شما وجود دارد! ", 8, true);
};
export const noUserWithThisUsername = () => {
  myToast("کاربری با این شناسه وجود ندارد! ", 9, true);
};
export const competitorCreated = () => {
  myToast("رقیب با موفقیت افزوده شد", 10, false);
};
export const competitorDeleted = () => {
  myToast("رقیب با موفقیت حذف شد", 11, false);
};
export const serverError = () => {
  myToast("خطا از سمت سرور", 12, true);
};

export const reapetedPasswrodAreNotEqual = () => {
  myToast("رمز عبور وارد شده با تکرار آن مطابقت ندارد!", 13, true);
};

export const passwordUpdated = () => {
  myToast("رمز عبور با موفقیت تغییر کرد", 14, false);
};
export const wrongPhoneNumber = () => {
  myToast(" شماره موبایل وارد شده معتبر نمی باشد", 15, true);
};
export const persianKeyboard = () => {
  toast.error(" کیبورد فارسی است !", { toastId: 16 });
};

export const emptyInput = () => {
  myToast(" لطفا تمامی فیلد ها را پر کنید", 17, true);
};
export const netError = () => {
  myToast(" خطا در اتصال اینترنت لطفا دوباره امتحان کنید!   ", 18, true);
};

export const bioCodeErr = () => {
  myToast(" کد موجود در بایو با عدد زیر برار نمی باشد! ", 19, true);
};

export const storedFavortie = () => {
  myToast("محصول با موفقیت به لیست علاقه مندی ها اضافه شد", 20, false);
};

export const unAuthorized = () => {
  myToast("لطفا ابتدا وارد شوید.", 20, true);
};
export const copiedSuccessfully = () => {
  myToast("لینک با موفقیت کپی شد!", 21, false);
};
