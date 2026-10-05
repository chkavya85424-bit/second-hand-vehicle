import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/vehicles?search=${encodeURIComponent(search)}`);
  };
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search vehicle, brand or model"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchBar;