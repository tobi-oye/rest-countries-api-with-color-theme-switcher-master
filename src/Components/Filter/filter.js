import { useState } from "react/cjs/react.development";
import "../Filter/filter.scss";

const Filter = () => {
  const [regionClass, setRegionClass] = useState("region");

  const setRegionClassHandler = () => {
    if (regionClass === "region") {
      setRegionClass("region-display");
    } else {
      setRegionClass("region");
    }
  };
  return (
    <div>
      <div className="filter-component">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
          integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
          crossorigin="anonymous"
        ></link>
        <label>Filter by Region</label>
        <i class="fas fa-caret-down" onClick={setRegionClassHandler}></i>
      </div>

      <div className={regionClass}>
        <ul>
          <li>Africa</li>
          <li>Africa</li>
          <li>Africa</li>
          <li>Africa</li>
        </ul>
      </div>
    </div>
  );
};
export default Filter;
