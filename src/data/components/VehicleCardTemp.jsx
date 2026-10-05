import { Link } from "react-router-dom";
import { useVehicles } from "../context/VehicleContext";
function VehicleCard({ vehicle }) {
  const {
    toggleFavorite,
    toggleCompare,
    isFavorite,
    isCompared
  } = useVehicles();
  return (
    <div className="vehicle-card">
      <div className="vehicle-image">
        <img src={vehicle.image} alt={vehicle.model} />
        <button
          className="favorite-btn"
          onClick={() => toggleFavorite(vehicle)}
        >
          {isFavorite(vehicle.id) ? "♥" : "♡"}
        </button>
      </div>
      <div className="vehicle-info">
        <p className="vehicle-brand">
          {vehicle.brand}
        </p>
        <h3>
          {vehicle.model}
        </h3>
        <p className="vehicle-price">
          ₹{vehicle.price.toLocaleString("en-IN")}
        </p>
        <div className="vehicle-details">
          <span>{vehicle.year}</span>
          <span>{vehicle.km.toLocaleString()} km</span>
          <span>{vehicle.fuel}</span>
        </div>
        <p className="location">
          {vehicle.location}
        </p>
        <div className="card-buttons">
          <Link
            to={`/vehicles/${vehicle.id}`}
            className="view-btn"
          >
            View Details
          </Link>
          <button
            className="compare-btn"
            onClick={() => toggleCompare(vehicle)}
          >
            {isCompared(vehicle.id)
              ? "Remove"
              : "Compare"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default VehicleCard;