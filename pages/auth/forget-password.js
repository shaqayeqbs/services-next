import { useState } from "react";
import { useTranslation } from "next-i18next";
import { EmailIcon } from "../../src/@core/icons";
import TextInput from "../../src/@core/utils/text-input";
const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    console.log(`Reset password for email: ${email}`);
  };

  return (
    <div className="flex justify-center p-4 items-center h-screen">
      <div className="">
        <h1 className="text-left max-w-[60%] mb-10 font-extrabold text-4xl">
          {t("forgotPassword")}
        </h1>
        <form>
          <div className="input-container">
            <EmailIcon className="input-icon" />
            <TextInput
              // label="Email Or Username"
              placeholder={t("enterEmailAddress")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className=" text-center mb-20  mt-6">
            {t("resetPasswordDescription")}
          </p>
          <button
            type="button"
            className="button  my-18"
            onClick={handleResetPassword}
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
