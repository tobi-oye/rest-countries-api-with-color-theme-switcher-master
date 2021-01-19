import { useState } from "react";
import "../Search/Search.scss";

const Search = () => {
  let [prevSearchState, newSearchState] = useState();
  return (
    <div className="search-component">
      <input
        type="search"
        onChange={(event) => {
          newSearchState(event.target.value.trim());
        }}
        value={prevSearchState}
        placeholder=" Q Search for a country"
      />
    </div>
  );
};

export default Search;
