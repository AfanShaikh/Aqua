import "./Search.css";

import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

function Search({ value, onChange }) {
  function handleClear() {
    onChange("");
  }

  return (
    <div className="search-box">
      <FaMagnifyingGlass className="search-icon" />

      <input
        type="search"
        value={value}
        placeholder="Search products..."
        aria-label="Search products"
        onChange={(event) => onChange(event.target.value)}
      />

      {value && (
        <button
          type="button"
          className="search-clear"
          aria-label="Clear search"
          onClick={handleClear}
        >
          <FaXmark />
        </button>
      )}
    </div>
  );
}

export default Search;