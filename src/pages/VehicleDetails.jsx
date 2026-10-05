import {
  Link,
  useParams
} from "react-router-dom";
import vehicles from "../data/vehicles.json";
import {
  useVehicles
} from "../context/VehicleContext.jsx";
function VehicleDetails() {
  const { id } = useParams();
  const vehicle =
    vehicles.find(
      (item) =>
        String(item.id) === String(id)
    );
  const {
    toggleFavorite,
    toggleCompare,
    isFavorite,
    isCompared
  } = useVehicles();
  if (!vehicle) {
    return (
      <section className="page-container">
        <div className="empty-box">
          <h2>
            Vehicle not found
          </h2>
          <Link
            to="/vehicles"
            className="button primary"
          >
            Back to Vehicles
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className="page-container">
      <Link
        to="/vehicles"
        className="back-link"
      >
        ← Back to Vehicles
      </Link>
      <div className="details-layout">
        <div>
          <div className="details-image-card">
            <img
              src={vehicle.image}
              alt={vehicle.model}
            />
          </div>
          <div className="details-description">
            <h2>
              Vehicle Information
            </h2>
            <div className="details-grid">
              <div>
                <small>Brand</small>
                <strong>{vehicle.brand}</strong>
              </div>
              <div>
                <small>Model</small>
                <strong>{vehicle.model}</strong>
              </div>
              <div>
                <small>Year</small>
                <strong>{vehicle.year}</strong>
              </div>
              <div>
                <small>Kilometres</small>
                <strong>{vehicle.km} km</strong>
              </div>
              <div>
                <small>Fuel</small>
                <strong>{vehicle.fuel}</strong>
              </div>
              <div>
                <small>Transmission</small>
                <strong>{vehicle.transmission}</strong>
              </div>
              <div>
                <small>Color</small>
                <strong>{vehicle.color}</strong>
              </div>
              <div>
                <small>Owners</small>
                <strong>{vehicle.owners}</strong>
              </div>
            </div>
            <h3>
              Description
            </h3>
            <p>
              {vehicle.description}
            </p>
          </div>
        </div>
        <aside className="details-panel">
          <small>
            {vehicle.brand}
          </small>
          <h1>
            {vehicle.model}
          </h1>
          <div className="details-price">
            ₹{vehicle.price.toLocaleString("en-IN")}
          </div>
          <p className="details-location">
            📍 {vehicle.location}
          </p>
          <div className="details-buttons">
            <button
              className="button primary full-width"
              onClick={() =>
                toggleFavorite(vehicle)
              }
            >
              {isFavorite(vehicle.id)
                ? "Remove Favorite"
                : "Add to Favorites"}
            </button>
            <button
              className="button secondary full-width"
              onClick={() =>
                toggleCompare(vehicle)
              }
            >
              {isCompared(vehicle.id)
                ? "Remove from Compare"
                : "Add to Compare"}
            </button>
          </div>
          <div className="seller-box">
            <h3>
              Seller Information
            </h3>
            <p>
              <strong>
                Seller:
              </strong>{" "}
              Vehicle Owner
            </p>
            <p>
              <strong>
                Location:
              </strong>{" "}
              {vehicle.location}
            </p>
            <button
              className="button primary full-width"
            >
              Contact Seller
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
export default VehicleDetails;