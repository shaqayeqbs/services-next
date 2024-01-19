import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const LanguageSelector = ({ onGetStarted }) => {
  const { i18n } = useTranslation();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelectOpen = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsSelectOpen(false);
    }
  };

  useEffect(() => {
    document?.addEventListener("mousedown", handleClickOutside);

    return () => {
      document?.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
    // Add more languages as needed
  ];

  const handleChange = (newLocale) => {
    i18n.changeLanguage(newLocale);
    setIsSelectOpen(false);
    localStorage.setItem("language", newLocale);
    onGetStarted(newLocale);
  };

  return (
    <div className="flex md:max-w-[500px] mx-auto  !w-full flex-col justify-between p-8 h-screen items-center">
      <div className="w-full">
        <Image
          src="/assets/welcome/4.svg"
          alt="Language Selection"
          className="!w-[80%] mx-auto max-w-[300px]"
          width={100}
          height={100}
        />
        <label
          htmlFor="language-select"
          className="block font-extrabold text-xl mt-4"
        >
          Choose Language
        </label>
        <div
          className="relative bg-[white] border-fundation rounded-lg w-full"
          ref={selectRef}
        >
          <button
            className="p-3 border-1 pr-6 border-mutedText text-mutedText rounded-md w-full  my-4 flex items-center justify-between focus:outline-none"
            onClick={handleSelectOpen}
          >
            <span>{i18n.language}</span>
            <svg
              className={`h-4 w-4 text-mutedText ${
                isSelectOpen ? "rotate-180" : ""
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {isSelectOpen && (
            <div className="absolute top-[50px] w-full bg-white border rounded-md">
              {languages?.map((language) => (
                <div
                  key={language.code}
                  className="p-2 border-b-1 border-gray cursor-pointer hover:bg-primary hover:text-white"
                  onClick={() => handleChange(language.code)}
                >
                  {language?.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full ">
        <Link
          href="/auth"
          onClick={onGetStarted}
          locale={i18n.language}
          className="button"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LanguageSelector;
