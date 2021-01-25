import { useState } from "react";
import "../Search/Search.scss";

const Search = ({ elemColor, textColor }) => {
  let [prevSearchState, newSearchState] = useState();
  const styles = {
    searchComponent: {
      width: "100%",
      marginBottom: " 30px",
    },
    inputComponent: {
      width: "100%",
      height: "35px",
      backgroundColor: `${elemColor}`,
      borderRadius: "0.5em",
      border: "none",
      padding: "0px 20px",
      color: `${textColor}`,
    },
  };
  const { searchComponent, inputComponent } = styles;
  return (
    <div className="search-component" style={searchComponent}>
      <input
        style={inputComponent}
        type="search"
        onChange={(event) => {
          newSearchState(event.target.value.trim());
        }}
        value={prevSearchState}
        placeholder="Search for a country"
      />
    </div>
  );
};

export default Search;
