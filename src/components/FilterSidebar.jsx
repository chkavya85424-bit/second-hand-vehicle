function FilterSidebar({ filters, setFilters }) {
  const updateFilter = (name, value) => {
    setFilters({
      ...filters,
      [name]: value
    });
  };
  return (
    <aside className="filter-sidebar">
      <h3>Filter Vehicles</h3>
      <label>Vehicle Type</label>
      <select
        value={filters.type}
        onChange={(e) =>
          updateFilter("type", e.target.value)
        }
      >
        <option value="">All Types</option>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
        <option value="SUV">SUV</option>
        <option value="Sedan">Sedan</option>
        <option value="Hatchback">Hatchback</option>
      </select>
      <label>Fuel</label>
      <select
        value={filters.fuel}
        onChange={(e) =>
          updateFilter("fuel", e.target.value)
        }
      >
        <option value="">All Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
      </select>
      <label>Transmission</label>
      <select
        value={filters.transmission}
        onChange={(e) =>
          updateFilter("transmission", e.target.value)
        }
      >
        <option value="">All</option>
        <option value="Manual">Manual</option>
        <option value="Automatic">Automatic</option>
      </select>
      <label>Maximum Price</label>
      <input
        type="number"
        placeholder="Example: 1000000"
        value={filters.maxPrice}
        onChange={(e) =>
          updateFilter("maxPrice", e.target.value)
        }
      />
      <button
        className="clear-btn"
        onClick={() =>
          setFilters({
            type: "",
            fuel: "",
            transmission: "",
            maxPrice: ""
          })
        }
      >
        Clear Filters
      </button>
    </aside>
  );
}
export default FilterSidebar;