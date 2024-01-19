import { useTranslation } from "next-i18next";

import { useState, useEffect, useRef } from "react";
const SelectInput = ({ label, options, onChange, value, onGetStarted }) => {
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
  ];

  const handleChange = (newLocale) => {
    i18n.changeLanguage(newLocale);
    setIsSelectOpen(false);
    localStorage.setItem("language", newLocale);
    onGetStarted(newLocale);
  };
  return (
    <div className="relative !m-0">
      <div className="w-full ">
        <div className="relative bg-[white] rounded-lg w-full" ref={selectRef}>
          <button
            className="p-3 py-0 border-0   text-mutedText rounded-md w-full   flex items-center justify-between focus:outline-none"
            onClick={handleSelectOpen}
          >
            <span className="text-mutedText">{i18n.language}</span>
            <svg
              className={`h-4 w-4 text-mutedText ml-4 mr-0 ${
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
              {languages.map((language) => (
                <div
                  key={language.code}
                  className="p-2 border-b-1 border-gray cursor-pointer hover:bg-primary hover:text-white"
                  onClick={() => handleChange(language.code)}
                >
                  {language.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
