import React, { Dispatch, FC, SetStateAction } from "react";

type SearchProps = {
  setSearchStr: Dispatch<SetStateAction<string>>;
};

const Search: FC<SearchProps> = ({ setSearchStr }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="search"
        onChange={(e) => setSearchStr(e.target.value)}
      />
    </div>
  );
};

export default Search;
