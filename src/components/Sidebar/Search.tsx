import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { SearchProps } from "../../types";

const Search: FC<SearchProps> = ({ searchStr, setSearchStr }) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
  };
  return (
    <div className="search">
      <input
        value={searchStr}
        type="search"
        placeholder="search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
