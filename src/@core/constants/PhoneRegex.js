import checkPassWord from "./checkPasswordLang";
import { digitsFaToEn } from "@persian-tools/persian-tools";
export default function isValidPhoneNumber(phone) {
  const isEnglis = checkPassWord(phone);

  var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  if (isEnglis) {
    return regex.test(phone);
  } else {
    const englishPhone = digitsFaToEn(+phone);

    return regex.test(englishPhone);
  }
}

export const isValidPhone = "^(\\+98|0)?9\\d{9}$";
