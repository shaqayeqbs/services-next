import React, { useState } from "react";
import { Search } from "../../@core/icons";
import { useTranslation } from "next-i18next";

function SearchBox() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search functionality here
  };

  return (
    <form
      onSubmit={handleSearch}
      className="input-container !bg-transparent flex items-center w-full"
    >
      <div className="">
        <Search />
      </div>
      <input
        type="text"
        placeholder={t("Search")}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input bg-transparent w-full px-4 py-1"
      />
    </form>
  );
}

export default SearchBox;
