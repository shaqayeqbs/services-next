import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordInput from "../../@core/utils/password-input";
import { login, register } from "../../@core/api/authApi";
import Link from "next/link";
import { EyeIcon, PasswordIcon, UserIcon } from "../../@core/icons";
import TextInput from "../../@core/utils/text-input";

function AuthPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmitBtn = async () => {
    // Validation checks
    if (!email.trim() || !password.trim()) {
      toast.error(t("emailAndPasswordRequired"));
      return;
    }

    if (isSignUp && !confirmPassword.trim()) {
      toast.error(t("confirmPasswordRequired"));
      return;
    }

    // Handle API request based on login or register mode
    let res;

    if (!isSignUp) {
      res = await login({ username: email, password });
    } else {
      res = await register({
        username: email,
        password1: password,
        password2: confirmPassword,
      });
    }

    // Check the response and display appropriate toast message
    console.log(res);
    if (!res?.detail && res?.code !== 400) {
      toast.success(isSignUp ? t("accountCreated") : t("loginSuccess"));
      router.push("/");
    } else {
      console.log(res.message);
      toast.error(isSignUp || res?.message ? res?.message : t("loginFailed"));
    }
  };

  return (
    <div className="flex md:max-w-[400px] mx-auto justify-center items-center p-4 h-screen">
      <div className="w-full">
        <h1 className="text-left mb-10 font-extrabold max-w-[60%] text-4xl">
          {isSignUp ? t("createAccount") : t("welcome")}
        </h1>
        <form>
          <div className="input-container !h-min relative">
            <UserIcon />
            <TextInput
              placeholder={t("Username or Email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container relative">
            <PasswordIcon />
            <PasswordInput
              placeholder={t("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPassword={showPassword}
              onTogglePassword={togglePasswordVisibility}
            />
          </div>

          {isSignUp && (
            <div className="input-container relative">
              <PasswordIcon />

              <PasswordInput
                placeholder={t("confirmPassword")}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                showPassword={showPassword}
                onTogglePassword={togglePasswordVisibility}
              />
            </div>
          )}

          <p className="mb-5 relative text-foundation text ">
            {isSignUp ? (
              <>{t("publicOffer")} </>
            ) : (
              <Link
                href="auth/forget-password"
                onClick={toggleMode}
                className="text-right text block mt-[1rem] mb-16 text-primary underline hover:no-underline"
              >
                {t("forgotPassword")}
              </Link>
            )}
          </p>
          <button
            type="button"
            className="button mt-15"
            onClick={handleSubmitBtn}
          >
            {isSignUp ? t("createAccount") : t("login")}
          </button>
        </form>
        {/* 
        <p className="text-center"> - {t("orContinue")} - </p> */}

        {isSignUp && (
          <p className="text-center mt-4 text-foundation">
            {t("alreadyHaveAccount")}{" "}
            <button
              onClick={toggleMode}
              className="text-primary underline font-bold hover:no-underline"
            >
              {t("login")}
            </button>
          </p>
        )}
        {!isSignUp && (
          <p className="text-center mt-4 text-foundation">
            {t("createAccount")}{" "}
            <button
              onClick={toggleMode}
              className="text-primary underline font-bold hover:no-underline"
            >
              {t("signup")}
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
