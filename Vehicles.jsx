import { useState } from "react";
import {
  Link,
  useSearchParams
} from "react-router-dom";
import vehicles from "../data/vehicles.json";
import {
  useVehicles
} from "../context/VehicleContext.jsx";
function Vehicles() {
  const [searchParams] =
    useSearchParams();
  const [search, setSearch] =
    useState(
      searchParams.get("search") || ""
    );
  const [type, setType] =
    useState("");
  const [fuel, setFuel] =
    useState("");
  const [transmission, setTransmission] =
    useState("");
  const [maxPrice, setMaxPrice] =
    useState("");
  const [sort, setSort] =
    useState("");
  const {
    toggleFavorite,
    toggleCompare,
    isFavorite,
    isCompared
  } = useVehicles();
  let filteredVehicles =
    vehicles.filter((vehicle) => {
      const searchText =
        search.trim().toLowerCase();
      const matchesSearch =
        !searchText ||
        vehicle.brand
          .toLowerCase()
          .includes(searchText) ||
        vehicle.model
          .toLowerCase()
          .includes(searchText) ||
        vehicle.location
          .toLowerCase()
          .includes(searchText);
      const matchesType =
        !type ||
        vehicle.type === type;
      const matchesFuel =
        !fuel ||
        vehicle.fuel === fuel;
      const matchesTransmission =
        !transmission ||
        vehicle.transmission === transmission;
      const matchesPrice =
        !maxPrice ||
        vehicle.price <= Number(maxPrice);
      return (
        matchesSearch &&
        matchesType &&
        matchesFuel &&
        matchesTransmission &&
        matchesPrice
      );
    });
  if (sort === "low") {
    filteredVehicles =
      [...filteredVehicles].sort(
        (a, b) => a.price - b.price
      );
  }
  if (sort === "high") {
    filteredVehicles =
      [...filteredVehicles].sort(
        (a, b) => b.price - a.price
      );
  }
  if (sort === "km") {
    filteredVehicles =
      [...filteredVehicles].sort(
        (a, b) => a.km - b.km
      );
  }
  function clearFilters() {
    setSearch("");
    setType("");
    setFuel("");
    setTransmission("");
    setMaxPrice("");
    setSort("");
  }
  return (
    <section className="page-container">
      <div className="page-header">
        <div>
          <h1>
            Available Vehicles
          </h1>
          <p>
            Find a used vehicle from the available listings.
          </p>
        </div>
      </div>
      <div className="listing-layout">
        <aside className="filter-panel">
          <h2>
            Filter Vehicles
          </h2>
          <label>
            Search
          </label>
          <input
            value={search}
            placeholder="Brand or model"
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
          <label>
            Vehicle Type
          </label>
          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
          >
            <option value="">
              All Types
            </option>
            <option value="Hatchback">
              Hatchback
            </option>
            <option value="Sedan">
              Sedan
            </option>
            <option value="SUV">
              SUV
            </option>
            <option value="Bike">
              Bike
            </option>
          </select>
          <label>
            Fuel
          </label>
          <select
            value={fuel}
            onChange={(e) =>
              setFuel(e.target.value)
            }
          >
            <option value="">
              All Fuel
            </option>
            <option value="Petrol">
              Petrol
            </option>
            <option value="Diesel">
              Diesel
            </option>
          </select>
          <label>
            Transmission
          </label>
          <select
            value={transmission}
            onChange={(e) =>
              setTransmission(e.target.value)
            }
          >
            <option value="">
              All
            </option>
            <option value="Manual">
              Manual
            </option>
            <option value="Automatic">
              Automatic
            </option>
          </select>
          <label>
            Maximum Price
          </label>
          <input
            type="number"
            placeholder="Example: 1000000"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value)
            }
          />
          <button
            className="button secondary full-width"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </aside>
        <main>
          <div className="results-bar">
            <span>
              {filteredVehicles.length} vehicles found
            </span>
            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >
              <option value="">
                Sort By
              </option>
              <option value="low">
                Price: Low to High
              </option>
              <option value="high">
                Price: High to Low
              </option>
              <option value="km">
                Lowest KM
              </option>
            </select>
          </div>
          {filteredVehicles.length > 0 ? (
            <div className="vehicle-grid">
              {filteredVehicles.map(
                (vehicle) => (
                  <div
                    className="vehicle-card"
                    key={vehicle.id}
                  >
                    <div className="vehicle-image">
                      <img
                        src={vehicle.image}
                        alt={vehicle.model}
                      />
                      <button
                        className="favorite-button"
                        type="button"
                        onClick={() =>
                          toggleFavorite(vehicle)
                        }
                      >
                        {isFavorite(vehicle.id)
                          ? "♥"
                          : "♡"}
                      </button>
                    </div>
                    <div className="vehicle-info">
                      <small>
                        {vehicle.brand}
                      </small>
                      <h3>
                        {vehicle.model}
                      </h3>
                      <strong className="price">
                        ₹{vehicle.price.toLocaleString("en-IN")}
                      </strong>
                      <div className="vehicle-meta">
                        <span>
                          {vehicle.year}
                        </span>
                        <span>
                          {vehicle.km} km
                        </span>
                        <span>
                          {vehicle.fuel}
                        </span>
                      </div>
                      <p className="location">
                        {vehicle.location}
                      </p>
                      <div className="vehicle-actions">
                        <Link
                          to={`/vehicles/${vehicle.id}`}
                          className="button primary"
                        >
                          View Details
                        </Link>
                        <button
                          className="button secondary"
                          type="button"
                          onClick={() =>
                            toggleCompare(vehicle)
                          }
                        >
                          {isCompared(vehicle.id)
                            ? "Remove"
                            : "Compare"}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="empty-box">
              <h2>
                No vehicles found
              </h2>
              <p>
                Try changing your search or filters.
              </p>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
export default Vehicles;